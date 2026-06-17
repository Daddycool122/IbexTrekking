const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const mappingFile = path.join(__dirname, 'image_mapping.json');

if (!fs.existsSync(mappingFile)) {
    console.error('mapping file not found!');
    process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));

// Convert mapping to be easier to search
// Key: basename of old file, Value: { oldPath, newPath, newBasename }
const replacements = [];
for (const [oldP, newP] of Object.entries(mapping)) {
    const oldBase = path.basename(oldP);
    const newBase = path.basename(newP);
    replacements.push({
        oldBase,
        newBase,
        oldP,
        newP,
        // create a phrase for alt text from newBase (e.g. valley-of-flowers-trek-1.webp -> Valley of flowers trek)
        altText: newBase.replace(/-?\d*\.\w+$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Update Imports
    // E.g. import img1 from '../../assets/Trek/Valley_of_flower/img1.jpg'
    // We'll just replace the basenames in the file if the preceding directory matches the oldP roughly.
    for (const r of replacements) {
        // e.g., if old file is `img1.jpg`, we look for `img1.jpg` in the content
        if (content.includes(r.oldBase)) {
            // Replace exact matches of oldBase only if it's part of a path string
            // Let's do a simple global replace of the path part
            // oldP is like "assets/Trek/Valley_of_flower/img1.jpg"
            // We can replace the last two segments: "Valley_of_flower/img1.jpg"
            const parts = r.oldP.split('/');
            if (parts.length >= 2) {
                const searchStr = `${parts[parts.length - 2]}/${r.oldBase}`;
                const replaceStr = `${parts[parts.length - 2]}/${r.newBase}`;
                // Regex replace to handle different quote styles and path separators
                const regex = new RegExp(searchStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                content = content.replace(regex, replaceStr);
            } else {
                const searchStr = r.oldBase;
                const replaceStr = r.newBase;
                const regex = new RegExp(searchStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                content = content.replace(regex, replaceStr);
            }
        }
    }

    // 2. Extract Import Variable Map
    // import imgVar from './.../valley-of-flowers-trek-1.webp'
    const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    const varToAlt = {};
    while ((match = importRegex.exec(content)) !== null) {
        const varName = match[1];
        const importPath = match[2];
        const base = path.basename(importPath);
        // Find matching alt text
        const found = replacements.find(r => r.newBase === base || r.oldBase === base);
        if (found) {
            varToAlt[varName] = found.altText;
        } else {
            varToAlt[varName] = base.replace(/-?\d*\.\w+$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
    }

    // 3. Update alt attributes in <img> tags
    // Find all <img ... /> tags
    // We'll replace the alt attribute or add one if it's missing or empty
    const imgRegex = /<img\s([^>]+)>/g;
    content = content.replace(imgRegex, (imgTag, attrs) => {
        let altText = "Ibex Trekking"; // default fallback

        // Find src={varName}
        const srcMatch = attrs.match(/src=\{([a-zA-Z0-9_]+)\}/);
        if (srcMatch && varToAlt[srcMatch[1]]) {
            altText = varToAlt[srcMatch[1]];
        } else {
            // Find src="path"
            const srcStrMatch = attrs.match(/src=['"]([^'"]+)['"]/);
            if (srcStrMatch) {
                const base = path.basename(srcStrMatch[1]);
                altText = base.replace(/-?\d*\.\w+$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            }
        }

        // Clean up alt text slightly
        altText = altText.trim() || "Ibex Trekking";

        // Check if alt exists
        if (/alt=/.test(attrs)) {
            // Replace existing alt="" or alt={...} or alt="anything"
            attrs = attrs.replace(/alt=(['"])[^'"]*\1/, `alt="${altText}"`);
            attrs = attrs.replace(/alt=\{[^}]+\}/, `alt="${altText}"`); // handle alt={""}
        } else {
            // Add alt attribute
            // if tag ends with /> we insert before it, otherwise at end of attrs
            if (attrs.endsWith('/')) {
                attrs = attrs.substring(0, attrs.length - 1) + ` alt="${altText}" /`;
            } else {
                attrs += ` alt="${altText}"`;
            }
        }

        return `<img ${attrs}>`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

console.log('Updating React components...');
processDirectory(srcDir);
console.log('Update complete.');
