const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'constants', 'blogsData.js');

const articles = [
  {
    title: 'Best Treks in Uttarakhand 2026',
    slug: 'best-treks-in-uttarakhand-2026',
    date: 'Jun 17, 2026',
    readTime: '8 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\3673853e-0625-4906-b44d-8b109cf89a12\\scratch\\best-treks-in-uttarakhand-2026.md'
  },
  {
    title: 'Valley of Flowers Trek Complete Guide',
    slug: 'valley-of-flowers-trek-complete-guide',
    date: 'Jun 18, 2026',
    readTime: '10 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\4d5b6d85-c8a9-4779-9a4c-345b37c4d9d0\\scratch\\valley-of-flowers-trek-complete-guide.md'
  },
  {
    title: 'Kedarkantha Trek Cost Breakdown',
    slug: 'kedarkantha-trek-cost-breakdown',
    date: 'Jun 25, 2026',
    readTime: '7 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\00622414-aaad-45d3-af29-87b0247b9348\\scratch\\kedarkantha-trek-cost-breakdown.md'
  },
  {
    title: 'What to Pack for Himalayan Treks',
    slug: 'what-to-pack-for-himalayan-treks',
    date: 'Jul 2, 2026',
    readTime: '6 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\adc1057a-b2ab-4e22-b84e-ea39371119d6\\scratch\\what-to-pack-for-himalayan-treks.md'
  },
  {
    title: 'Chopta Chandrashila Trek for Beginners',
    slug: 'chopta-chandrashila-trek-for-beginners',
    date: 'Jul 9, 2026',
    readTime: '8 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\d3c283ff-f78f-42c7-8842-250dd3ace313\\scratch\\chopta-chandrashila-trek-for-beginners.md'
  },
  {
    title: 'Top 10 Treks Near Rishikesh',
    slug: 'top-10-treks-near-rishikesh',
    date: 'Jul 16, 2026',
    readTime: '9 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\870b3b31-2476-4a3f-b577-528d674e053e\\scratch\\top-10-treks-near-rishikesh.md'
  },
  {
    title: 'Best Time to Visit Valley of Flowers',
    slug: 'best-time-to-visit-valley-of-flowers',
    date: 'Jul 23, 2026',
    readTime: '5 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\f2d9c1d6-5491-452d-a23c-331242fe4d7f\\scratch\\best-time-to-visit-valley-of-flowers.md'
  },
  {
    title: 'Chardham Yatra Guide 2026',
    slug: 'chardham-yatra-guide-2026',
    date: 'Jul 30, 2026',
    readTime: '12 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\c78304f6-3cf1-4018-ba01-5a25ee086d91\\scratch\\chardham-yatra-guide-2026.md'
  },
  {
    title: 'Trekking in Uttarakhand in Winter: A Complete Guide',
    slug: 'trekking-in-uttarakhand-in-winter',
    date: 'Aug 5, 2026',
    readTime: '9 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\6ca2703a-f191-4b7d-936a-329fe4bcb829\\scratch\\trekking-in-uttarakhand-in-winter.md'
  },
  {
    title: 'Brahmatal Trek: Why It is the Perfect Winter Trek',
    slug: 'brahmatal-trek-perfect-winter-trek',
    date: 'Aug 12, 2026',
    readTime: '7 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\0eca700e-577a-4435-bcde-24aa9a7748bd\\scratch\\brahmatal-trek-perfect-winter-trek.md'
  },
  {
    title: 'Roopkund Trek vs. Ali Bedni Bugyal: Which One to Choose?',
    slug: 'roopkund-vs-ali-bedni-bugyal',
    date: 'Aug 19, 2026',
    readTime: '8 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\071475e0-1fd5-4a92-8d28-623e052396cf\\scratch\\roopkund-vs-ali-bedni-bugyal.md'
  },
  {
    title: 'How to Prepare Physically for a Himalayan Trek',
    slug: 'how-to-prepare-physically-for-himalayan-trek',
    date: 'Aug 26, 2026',
    readTime: '11 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\6a788a03-c5dc-4cbe-a0b9-033fc6e0dcd2\\scratch\\how-to-prepare-physically-for-himalayan-trek.md'
  },
  {
    title: 'The Ultimate Guide to River Rafting in Rishikesh',
    slug: 'river-rafting-in-rishikesh-guide',
    date: 'Sep 2, 2026',
    readTime: '6 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\2937e693-cd7d-4ac4-9f11-626e642da5ab\\scratch\\river-rafting-in-rishikesh-guide.md'
  },
  {
    title: 'Panch Kedar Trek Itinerary and Travel Tips',
    slug: 'panch-kedar-trek-itinerary-tips',
    date: 'Sep 9, 2026',
    readTime: '10 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\0c19ae95-772b-4435-a98c-6fb8489ac9c5\\scratch\\panch-kedar-trek-itinerary-tips.md'
  },
  {
    title: 'Kuari Pass Trek: A Journey Through the Curzon Trail',
    slug: 'kuari-pass-trek-curzon-trail',
    date: 'Sep 16, 2026',
    readTime: '8 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\f6f29cca-2130-4082-ac17-f3091aba4b4e\\scratch\\kuari-pass-trek-curzon-trail.md'
  },
  {
    title: 'Solo Trekking in the Himalayas: Safety Tips and Best Routes',
    slug: 'solo-trekking-in-himalayas-safety',
    date: 'Sep 23, 2026',
    readTime: '12 min read',
    path: 'C:\\Users\\acer aspire 3\\.gemini\\antigravity\\brain\\be63de60-3364-4a1b-a8d0-1f7567459c13\\scratch\\solo-trekking-in-himalayas-safety.md'
  }
];

let blogsCode = 'export const BLOGS = [\n';

for (const article of articles) {
  let content = '';
  let excerpt = 'A comprehensive guide to trekking in the Himalayas. Discover everything you need to know about this amazing journey.';
  try {
    if (fs.existsSync(article.path)) {
      content = fs.readFileSync(article.path, 'utf8');
      // Extract first paragraph for excerpt
      const paragraphs = content.split('\\n\\n').filter(p => p.trim() && !p.startsWith('#'));
      if (paragraphs.length > 0) {
        excerpt = paragraphs[0].replace(/[*_]/g, '').substring(0, 150) + '...';
      }
    } else {
      content = '# ' + article.title + '\\n\\nContent generation in progress...';
    }
  } catch(e) {
    console.error(e);
  }

  blogsCode += `  {
    slug: "${article.slug}",
    title: "${article.title}",
    date: "${article.date}",
    readTime: "${article.readTime}",
    excerpt: ${JSON.stringify(excerpt)},
    content: ${JSON.stringify(content)}
  },\n`;
}

blogsCode += '];\n';

fs.writeFileSync(targetFile, blogsCode);
console.log('blogsData.js generated successfully with 16 articles.');
