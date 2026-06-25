import fs from 'fs';
import path from 'path';

const srcDir = 'c:/Users/acer aspire 3/Desktop/ibex/ibex/src';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(srcDir, (filePath) => {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Only replace if there's a match to save writes
        if (content.includes('.jpeg') || content.includes('.jpg') || content.includes('.png')) {
            // regex to match .jpeg, .jpg, .png at the end of a string or before a quote
            content = content.replace(/\.jpeg/g, '.webp');
            content = content.replace(/\.jpg/g, '.webp');
            content = content.replace(/\.png/g, '.webp');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated imports in ${path.basename(filePath)}`);
        }
    }
});

console.log("All imports updated.");
