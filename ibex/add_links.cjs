const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'blogsData.js');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  { regex: /\b(Valley of Flowers Trek|Valley of Flowers)\b(?![^\[]*\])/g, replacement: '[$1](/valley-of-flowers-trek)' },
  { regex: /\b(Kedarkantha Trek|Kedarkantha)\b(?![^\[]*\])/g, replacement: '[$1](/kedarkantha-trek)' },
  { regex: /\b(Kuari Pass Trek|Kuari Pass)\b(?![^\[]*\])/g, replacement: '[$1](/kuari-pass-trek)' },
  { regex: /\b(Brahmatal Trek|Brahmatal)\b(?![^\[]*\])/g, replacement: '[$1](/brahmatal-trek)' },
  { regex: /\b(Dayara Bugyal Trek|Dayara Bugyal)\b(?![^\[]*\])/g, replacement: '[$1](/dayara-bugyal-trek)' },
  { regex: /\b(Ali Bedni Bugyal Trek|Ali and Bedni Bugyal|Ali Bedni Bugyal)\b(?![^\[]*\])/g, replacement: '[$1](/ali-bedni-bugyal-trek)' },
  { regex: /\b(Chopta Chandrashila Trek|Chopta Chandrashila)\b(?![^\[]*\])/g, replacement: '[$1](/chopta-chandrashilla-trek)' },
  { regex: /\b(Pangarchulla Peak Trek|Pangarchulla Peak|Pangarchulla)\b(?![^\[]*\])/g, replacement: '[$1](/pangarchulla-peak-trek)' },
  { regex: /\b(Gaumukh Tapovan Trek|Gaumukh Tapovan|Gaumukh)\b(?![^\[]*\])/g, replacement: '[$1](/gaumukh-tapovan-trek)' },
  { regex: /\b(Panch Kedar Trek|Panch Kedar)\b(?![^\[]*\])/g, replacement: '[$1](/panch-kedar-trek)' },
  { regex: /\b(Chardham Yatra|Char Dham Yatra)\b(?![^\[]*\])/g, replacement: '[$1](/chardham-yatra-2026)' },
  { regex: /\b(Adi Kailash Tour|Adi Kailash)\b(?![^\[]*\])/g, replacement: '[$1](/adi-kailash-tour)' },
  { regex: /\b(River Rafting in Rishikesh|river rafting in Rishikesh|Rafting in Rishikesh|rafting in Rishikesh|River Rafting|river rafting)\b(?![^\[]*\])/g, replacement: '[$1](/river-rafting)' }
];

let updatedContent = content;

replacements.forEach(({ regex, replacement }) => {
  updatedContent = updatedContent.replace(regex, replacement);
});

// Avoid nested links if some replacements overlap, though the negative lookahead (?![^\[]*\]) prevents replacing inside existing markdown links like [text](url).

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully added internal links to blogsData.js');
