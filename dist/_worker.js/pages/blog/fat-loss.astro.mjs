globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_Cu1oycWn.mjs';
import { g as getCollection } from '../../chunks/_astro_content_xylRBmyj.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BKVFlStK.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, $ as $$SchemaScript } from '../../chunks/seo_D7cr84Vw.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Fat Loss Articles \u2014 Calorie Deficit, Cardio & Diet Science");
  const DESC = generateDescription("Science-backed fat loss guides covering caloric deficits, cardio strategies, protein intake for cutting, metabolic adaptation, and sustainable weight loss approaches.");
  const CANONICAL = generateCanonical("/blog/fat-loss");
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.data.category === "fat-loss").sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calaifitness.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.calaifitness.com/blog" },
      { "@type": "ListItem", position: 3, name: "Fat Loss", item: CANONICAL }
    ]
  };
  const schema = combineSchemas(breadcrumbSchema);
  const categoryMeta = {
    emoji: "\u{1F525}",
    title: "Fat Loss",
    color: "#ea580c",
    tagline: "Burn fat, keep your muscle",
    description: "Evidence-based fat loss guides built on energy balance science, protein strategy, and sustainable behavior change \u2014 not fad diets or supplement gimmicks."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-px3vjjjj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="category-hero"${addAttribute(`--cat-color: ${categoryMeta.color}`, "style")} data-astro-cid-px3vjjjj> <div class="container-site" data-astro-cid-px3vjjjj> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-px3vjjjj> <ol data-astro-cid-px3vjjjj> <li data-astro-cid-px3vjjjj><a href="/" data-astro-cid-px3vjjjj>Home</a><span aria-hidden="true" data-astro-cid-px3vjjjj>›</span></li> <li data-astro-cid-px3vjjjj><a href="/blog" data-astro-cid-px3vjjjj>Blog</a><span aria-hidden="true" data-astro-cid-px3vjjjj>›</span></li> <li data-astro-cid-px3vjjjj><span aria-current="page" data-astro-cid-px3vjjjj>Fat Loss</span></li> </ol> </nav> <div class="cat-header" data-astro-cid-px3vjjjj> <div class="cat-icon" aria-hidden="true" data-astro-cid-px3vjjjj>${categoryMeta.emoji}</div> <div data-astro-cid-px3vjjjj> <p class="cat-label" data-astro-cid-px3vjjjj>${categoryMeta.tagline}</p> <h1 class="cat-title" data-astro-cid-px3vjjjj>${categoryMeta.title}</h1> <p class="cat-desc" data-astro-cid-px3vjjjj>${categoryMeta.description}</p> </div> </div> </div> </div> <div class="container-site py-12" data-astro-cid-px3vjjjj> ${posts.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-px3vjjjj> <p data-astro-cid-px3vjjjj>No articles in this category yet. Check back soon.</p> </div>` : renderTemplate`<div class="posts-grid" data-astro-cid-px3vjjjj> ${posts.map((post) => renderTemplate`<article class="post-card group" data-astro-cid-px3vjjjj> <div class="card-emoji" aria-hidden="true" data-astro-cid-px3vjjjj>${post.data.heroEmoji || "\u{1F4DD}"}</div> <div class="card-meta" data-astro-cid-px3vjjjj> <span class="badge" data-astro-cid-px3vjjjj>${post.data.tags[0]}</span> <span aria-hidden="true" data-astro-cid-px3vjjjj>·</span> <time${addAttribute(post.data.publishDate.toISOString(), "datetime")} data-astro-cid-px3vjjjj> ${post.data.publishDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} </time> <span aria-hidden="true" data-astro-cid-px3vjjjj>·</span> <span data-astro-cid-px3vjjjj>${post.data.readTime || 5} min read</span> </div> <h2 class="card-title group-hover:text-[var(--color-primary)]" data-astro-cid-px3vjjjj> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-px3vjjjj>${post.data.title}</a> </h2> <p class="card-desc" data-astro-cid-px3vjjjj>${post.data.description}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-link"${addAttribute(`Read: ${post.data.title}`, "aria-label")} data-astro-cid-px3vjjjj>
Read article →
</a> </article>`)} </div>`} <div class="related-cats" data-astro-cid-px3vjjjj> <h2 class="related-title" data-astro-cid-px3vjjjj>Explore Other Topics</h2> <div class="cats-grid" data-astro-cid-px3vjjjj> <a href="/blog/nutrition" class="cat-chip" data-astro-cid-px3vjjjj>🥗 Nutrition</a> <a href="/blog/training" class="cat-chip" data-astro-cid-px3vjjjj>🏋️ Training</a> <a href="/blog/muscle-building" class="cat-chip" data-astro-cid-px3vjjjj>💪 Muscle Building</a> <a href="/blog" class="cat-chip" data-astro-cid-px3vjjjj>📚 All Articles</a> </div> </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-px3vjjjj": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/blog/fat-loss/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/blog/fat-loss/index.astro";
const $$url = "/blog/fat-loss";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
