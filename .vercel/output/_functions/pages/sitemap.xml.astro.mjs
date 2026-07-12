export { renderers } from '../renderers.mjs';

const baseUrl = "https://calaifitness.com";
const calculatorSlugs = [
  "bmi",
  "bmr",
  "tdee",
  "bodyfat",
  "idealweight",
  "calories",
  "macros",
  "water",
  "heartrate",
  "leanmass",
  "onerep",
  "pace",
  "deficit",
  "sleep",
  "protein",
  "armybf"
];
const staticPages = [
  { url: "", priority: 1, changefreq: "daily" },
  { url: "/about", priority: 0.8, changefreq: "monthly" },
  { url: "/calculators", priority: 0.9, changefreq: "weekly" },
  { url: "/faq", priority: 0.7, changefreq: "monthly" },
  { url: "/contact", priority: 0.6, changefreq: "monthly" },
  { url: "/dashboard", priority: 0.8, changefreq: "daily" },
  { url: "/history", priority: 0.7, changefreq: "daily" },
  { url: "/privacy", priority: 0.5, changefreq: "yearly" },
  { url: "/terms", priority: 0.5, changefreq: "yearly" }
];
const lastmod = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
const GET = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  staticPages.forEach((page) => {
    const url = page.url ? page.url : "/";
    xml += `  <url>
`;
    xml += `    <loc>${baseUrl}${url}</loc>
`;
    xml += `    <lastmod>${lastmod}</lastmod>
`;
    xml += `    <changefreq>${page.changefreq}</changefreq>
`;
    xml += `    <priority>${page.priority}</priority>
`;
    xml += `  </url>
`;
  });
  calculatorSlugs.forEach((slug) => {
    xml += `  <url>
`;
    xml += `    <loc>${baseUrl}/calculator/${slug}</loc>
`;
    xml += `    <lastmod>${lastmod}</lastmod>
`;
    xml += `    <changefreq>weekly</changefreq>
`;
    xml += `    <priority>0.85</priority>
`;
    xml += `  </url>
`;
  });
  xml += "</urlset>";
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
