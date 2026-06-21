const fs = require('fs');
const path = require('path');

const homePath = 'c:/Users/acer aspire 3/Desktop/ibex/ibex/src/Home.jsx';
let content = fs.readFileSync(homePath, 'utf8');

// Replace standard images with dimensions
// Example: <img loading="lazy" src={trekking} className={styles.trr_img} alt="Trekking" />
// We inject width="600" height="400" before className

content = content.replace(/(<img[^>]*?)(className={styles\.(?:trr_img|ad_cd_img|main_img)}[^>]*?>)/g, '$1 width="600" height="400" $2');

fs.writeFileSync(homePath, content, 'utf8');
console.log('Fixed CLS in Home.jsx');
