import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { BLOGS } from './src/constants/blogsData.js';

const ctas = {
  'valley-of-flowers-trek-complete-guide': '[Book the Valley of Flowers Trek](/valley-of-flowers-trek)',
  'kedarkantha-trek-cost-breakdown': '[Book the Kedarkantha Trek](/kedarkantha-trek)',
  'chopta-chandrashila-trek-for-beginners': '[Book the Chopta Chandrashila Trek](/chopta-chandrashilla-trek)',
  'best-time-to-visit-valley-of-flowers': '[Book the Valley of Flowers Trek](/valley-of-flowers-trek)',
  'chardham-yatra-guide-2026': '[Book the Char Dham Yatra Tour](/chardham-yatra-2026)',
  'brahmatal-trek-perfect-winter-trek': '[Book the Brahmatal Trek](/brahmatal-trek)',
  'river-rafting-in-rishikesh-guide': '[Book River Rafting in Rishikesh](/river-rafting)',
  'panch-kedar-trek-itinerary-tips': '[Book the Panch Kedar Trek](/panch-kedar-trek)',
  'kuari-pass-trek-curzon-trail': '[Book the Kuari Pass Trek](/kuari-pass-trek)'
};

const linkReplacements = [
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
  { regex: /\b(River Rafting in Rishikesh|river rafting in Rishikesh|Rafting in Rishikesh|rafting in Rishikesh|River Rafting|river rafting)\b(?![^\[]*\])/g, replacement: '[$1](/river-rafting)' },
  { regex: /\b(trekking in Uttarakhand)\b(?![^\[]*\])/gi, replacement: '[$1](/trekking)' },
  { regex: /\b(White Water Rafting)\b(?![^\[]*\])/gi, replacement: '[$1](/river-rafting)' },
  { regex: /\b(Adventure Tours)\b(?![^\[]*\])/gi, replacement: '[$1](/tours)' }
];

const updatedBlogs = BLOGS.map(blog => {
  let newContent = blog.content;

  // Apply general links
  linkReplacements.forEach(({ regex, replacement }) => {
    newContent = newContent.replace(regex, replacement);
  });

  // Apply CTA at the end of the post if mapped
  if (ctas[blog.slug] && !newContent.includes('**Ready for this adventure?')) {
    newContent += `\n\n---\n\n**Ready for this adventure? ${ctas[blog.slug]} today!**\n`;
  }

  return { ...blog, content: newContent };
});

const output = `export const BLOGS = ${JSON.stringify(updatedBlogs, null, 2)};\n`;
fs.writeFileSync(join(__dirname, 'src', 'constants', 'blogsData.js'), output, 'utf8');

console.log('Successfully updated blogsData.js with reliable object parsing!');
