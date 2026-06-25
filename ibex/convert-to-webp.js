import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = 'c:/Users/acer aspire 3/Desktop/ibex/ibex/src/assets';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const promises = [];

walkDir(directoryPath, (filePath) => {
    if (filePath.endsWith('.jpeg') || filePath.endsWith('.jpg') || filePath.endsWith('.png')) {
        const dir = path.dirname(filePath);
        const fileNameWithoutExt = path.parse(filePath).name;
        const newFilePath = path.join(dir, `${fileNameWithoutExt}.webp`);
        
        const p = sharp(filePath)
            .webp({ quality: 80 })
            .resize({ width: 800, withoutEnlargement: true })
            .toFile(newFilePath)
            .then(info => {
                console.log(`Converted ${path.basename(filePath)} to WebP`);
                fs.unlinkSync(filePath); // Delete original
            })
            .catch(err => {
                console.error(`Error converting ${filePath}:`, err);
            });
        promises.push(p);
    }
});

Promise.all(promises).then(() => {
    console.log("All trek images converted and originals deleted.");
});
