import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Dax_WWIl.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B7YyOz1_.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, $ as $$SchemaScript } from '../../chunks/seo_CLC9k0GV.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Muscle Building Articles \u2014 Hypertrophy, Bulking & Strength");
  const DESC = generateDescription("Science-backed muscle building guides covering hypertrophy mechanisms, bulking nutrition, training volume, progressive overload, and optimal recovery protocols.");
  const CANONICAL = generateCanonical("/blog/muscle-building");
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.data.category === "muscle-building").sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calaifitness.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.calaifitness.com/blog" },
      { "@type": "ListItem", position: 3, name: "Muscle Building", item: CANONICAL }
    ]
  };
  const schema = combineSchemas(breadcrumbSchema);
  const categoryMeta = {
    emoji: "\u{1F4AA}",
    title: "Muscle Building",
    color: "#7c3aed",
    tagline: "Evidence-based hypertrophy science",
    description: "Deep-dive guides on hypertrophy mechanisms, progressive overload, training volume, bulking nutrition, and recovery protocols \u2014 grounded in sports science research."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-zadoxnhu": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="category-hero"${addAttribute(`--cat-color: ${categoryMeta.color}`, "style")} data-astro-cid-zadoxnhu> <div class="container-site" data-astro-cid-zadoxnhu> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-zadoxnhu> <ol data-astro-cid-zadoxnhu> <li data-astro-cid-zadoxnhu><a href="/" data-astro-cid-zadoxnhu>Home</a><span aria-hidden="true" data-astro-cid-zadoxnhu>›</span></li> <li data-astro-cid-zadoxnhu><a href="/blog" data-astro-cid-zadoxnhu>Blog</a><span aria-hidden="true" data-astro-cid-zadoxnhu>›</span></li> <li data-astro-cid-zadoxnhu><span aria-current="page" data-astro-cid-zadoxnhu>Muscle Building</span></li> </ol> </nav> <div class="cat-header" data-astro-cid-zadoxnhu> <div class="cat-icon" aria-hidden="true" data-astro-cid-zadoxnhu>${categoryMeta.emoji}</div> <div data-astro-cid-zadoxnhu> <p class="cat-label" data-astro-cid-zadoxnhu>${categoryMeta.tagline}</p> <h1 class="cat-title" data-astro-cid-zadoxnhu>${categoryMeta.title}</h1> <p class="cat-desc" data-astro-cid-zadoxnhu>${categoryMeta.description}</p> </div> </div> </div> </div> <div class="container-site py-12" data-astro-cid-zadoxnhu> ${posts.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-zadoxnhu> <p data-astro-cid-zadoxnhu>No articles in this category yet. Check back soon.</p> </div>` : renderTemplate`<div class="posts-grid" data-astro-cid-zadoxnhu> ${posts.map((post) => renderTemplate`<article class="post-card group" data-astro-cid-zadoxnhu> <div class="card-emoji" aria-hidden="true" data-astro-cid-zadoxnhu>${post.data.heroEmoji || "\u{1F4DD}"}</div> <div class="card-meta" data-astro-cid-zadoxnhu> <span class="badge" data-astro-cid-zadoxnhu>${post.data.tags[0]}</span> <span aria-hidden="true" data-astro-cid-zadoxnhu>·</span> <time${addAttribute(post.data.publishDate.toISOString(), "datetime")} data-astro-cid-zadoxnhu> ${post.data.publishDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} </time> <span aria-hidden="true" data-astro-cid-zadoxnhu>·</span> <span data-astro-cid-zadoxnhu>${post.data.readTime || 5} min read</span> </div> <h2 class="card-title group-hover:text-[var(--color-primary)]" data-astro-cid-zadoxnhu> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-zadoxnhu>${post.data.title}</a> </h2> <p class="card-desc" data-astro-cid-zadoxnhu>${post.data.description}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-link"${addAttribute(`Read: ${post.data.title}`, "aria-label")} data-astro-cid-zadoxnhu>
Read article →
</a> </article>`)} </div>`} <div class="related-cats" data-astro-cid-zadoxnhu> <h2 class="related-title" data-astro-cid-zadoxnhu>Explore Other Topics</h2> <div class="cats-grid" data-astro-cid-zadoxnhu> <a href="/blog/nutrition" class="cat-chip" data-astro-cid-zadoxnhu>🥗 Nutrition</a> <a href="/blog/training" class="cat-chip" data-astro-cid-zadoxnhu>🏋️ Training</a> <a href="/blog/fat-loss" class="cat-chip" data-astro-cid-zadoxnhu>🔥 Fat Loss</a> <a href="/blog" class="cat-chip" data-astro-cid-zadoxnhu>📚 All Articles</a> </div> </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-zadoxnhu": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/blog/muscle-building/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/blog/muscle-building/index.astro";
const $$url = "/blog/muscle-building";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
