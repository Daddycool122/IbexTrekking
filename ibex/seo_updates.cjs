const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/acer aspire 3/Desktop/ibex/ibex/src';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(directory);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replacePatterns = [
    { from: /alt="Img"/g, to: 'alt="Himalayan Adventure"' },
    { from: /alt="Team Member"/g, to: 'alt="Ibex Ice Axe Team Expert"' }
  ];

  replacePatterns.forEach(pattern => {
    if (content.match(pattern.from)) {
      content = content.replace(pattern.from, pattern.to);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
