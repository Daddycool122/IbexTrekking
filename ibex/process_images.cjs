const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, 'src');
const sizeThreshold = 200 * 1024; // 200KB
const mappingFile = path.join(__dirname, 'image_mapping.json');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

let imageCount = 0;
let mapping = {};

function toDescriptiveName(originalPath, ext) {
    const parsed = path.parse(originalPath);
    const parts = originalPath.split(path.sep);
    const parentDir = parts[parts.length - 2];
    
    let baseName = parsed.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    let prefix = '';
    
    if (parts.includes('Trek')) {
        const trekFolder = parts[parts.indexOf('Trek') + 1].toLowerCase().replace(/_/g, '-');
        const match = baseName.match(/\d+/);
        const num = match ? match[0] : ++imageCount;
        return `${trekFolder}-trek-${num}${ext}`;
    }
    
    if (baseName.startsWith('team')) {
        const match = baseName.match(/\d+/);
        const num = match ? match[0] : ++imageCount;
        return `team-member-${num}${ext}`;
    }
    
    return `${baseName}${ext}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (imageExtensions.includes(ext)) {
                const isLarge = stat.size > sizeThreshold;
                let newExt = isLarge && ext !== '.webp' && ext !== '.gif' ? '.webp' : ext;
                
                const newName = toDescriptiveName(fullPath, newExt);
                const newFullPath = path.join(path.dirname(fullPath), newName);
                
                if (fullPath !== newFullPath) {
                    if (isLarge && newExt === '.webp') {
                        console.log(`Converting and renaming: ${fullPath} -> ${newFullPath}`);
                        await sharp(fullPath).webp({ quality: 80 }).toFile(newFullPath);
                        fs.unlinkSync(fullPath); // remove old file
                    } else {
                        console.log(`Renaming: ${fullPath} -> ${newFullPath}`);
                        fs.renameSync(fullPath, newFullPath);
                    }
                    
                    const relOld = path.relative(srcDir, fullPath).replace(/\\/g, '/');
                    const relNew = path.relative(srcDir, newFullPath).replace(/\\/g, '/');
                    mapping[relOld] = relNew;
                }
            }
        }
    }
}

async function main() {
    console.log('Starting image processing...');
    await processDirectory(srcDir);
    fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
    console.log(`Done processing images. Mapping saved to ${mappingFile}`);
}

main().catch(console.error);
