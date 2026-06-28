const baseUrl = 'https://calaifitness.com';

const calculatorSlugs = [
  'bmi', 'bmr', 'tdee', 'bodyfat', 'idealweight', 
  'calories', 'macros', 'water', 'heartrate', 'leanmass'
];

const staticPages = [
  { url: '', priority: 1.0, changefreq: 'daily' as const },
  { url: '/about', priority: 0.8, changefreq: 'monthly' as const },
  { url: '/calculators', priority: 0.9, changefreq: 'weekly' as const },
  { url: '/faq', priority: 0.7, changefreq: 'monthly' as const },
  { url: '/contact', priority: 0.6, changefreq: 'monthly' as const },
  { url: '/dashboard', priority: 0.8, changefreq: 'daily' as const },
  { url: '/history', priority: 0.7, changefreq: 'daily' as const },
  { url: '/privacy', priority: 0.5, changefreq: 'yearly' as const },
  { url: '/terms', priority: 0.5, changefreq: 'yearly' as const },
];

const lastmod = new Date().toISOString().split('T')[0];

export const GET = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  staticPages.forEach(page => {
    const url = page.url ? page.url : '/';
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  calculatorSlugs.forEach(slug => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/calculator/${slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.85</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += '</urlset>';
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
