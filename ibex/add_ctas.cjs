const fs = require('fs');

let content = fs.readFileSync('src/constants/blogsData.js', 'utf8');

const ctas = [
  { slug: 'valley-of-flowers-trek-complete-guide', link: '[Book the Valley of Flowers Trek](/valley-of-flowers-trek)' },
  { slug: 'kedarkantha-trek-cost-breakdown', link: '[Book the Kedarkantha Trek](/kedarkantha-trek)' },
  { slug: 'chopta-chandrashila-trek-for-beginners', link: '[Book the Chopta Chandrashila Trek](/chopta-chandrashilla-trek)' },
  { slug: 'best-time-to-visit-valley-of-flowers', link: '[Book the Valley of Flowers Trek](/valley-of-flowers-trek)' },
  { slug: 'chardham-yatra-guide-2026', link: '[Book the Char Dham Yatra Tour](/chardham-yatra-2026)' },
  { slug: 'brahmatal-trek-perfect-winter-trek', link: '[Book the Brahmatal Trek](/brahmatal-trek)' },
  { slug: 'river-rafting-in-rishikesh-guide', link: '[Book River Rafting in Rishikesh](/river-rafting)' },
  { slug: 'panch-kedar-trek-itinerary-tips', link: '[Book the Panch Kedar Trek](/panch-kedar-trek)' },
  { slug: 'kuari-pass-trek-curzon-trail', link: '[Book the Kuari Pass Trek](/kuari-pass-trek)' }
];

let changed = false;

ctas.forEach(cta => {
  // Regex to match the content of a specific blog by its slug
  const regex = new RegExp('(slug:\\s*[\'"`]' + cta.slug + '[\'"`][\\s\\S]*?content:\\s*[\'"`])([\\s\\S]*?)([\'"`])');
  content = content.replace(regex, (match, p1, p2, p3) => {
    if (!p2.includes('**Ready for this adventure?')) {
      changed = true;
      return p1 + p2.trim() + '\\n\\n---\\n\\n**Ready for this adventure? ' + cta.link + ' today!**\\n' + p3;
    }
    return match;
  });
});

const generalReplacements = [
  { regex: /\b(trekking in Uttarakhand)\b(?![^\[]*\])/gi, replacement: '[$1](/trekking)' },
  { regex: /\b(White Water Rafting)\b(?![^\[]*\])/gi, replacement: '[$1](/river-rafting)' },
  { regex: /\b(Adventure Tours)\b(?![^\[]*\])/gi, replacement: '[$1](/tours)' }
];

generalReplacements.forEach(({ regex, replacement }) => {
  if (regex.test(content)) {
      changed = true;
  }
  content = content.replace(regex, replacement);
});

if (changed) {
  fs.writeFileSync('src/constants/blogsData.js', content, 'utf8');
  console.log('Successfully added CTAs and category links');
} else {
  console.log('No changes made');
}
