import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DzOwTzN1.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_5eMsKSEU.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, $ as $$SchemaScript } from '../../chunks/seo_CLC9k0GV.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Nutrition Articles \u2014 Science-Backed Eating Guides");
  const DESC = generateDescription("Expert nutrition guides covering protein intake, TDEE, calorie counting, macros, and evidence-based dietary strategies for fat loss and muscle building.");
  const CANONICAL = generateCanonical("/blog/nutrition");
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.data.category === "nutrition").sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calaifitness.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.calaifitness.com/blog" },
      { "@type": "ListItem", position: 3, name: "Nutrition", item: CANONICAL }
    ]
  };
  const schema = combineSchemas(breadcrumbSchema);
  const categoryMeta = {
    emoji: "\u{1F957}",
    title: "Nutrition",
    color: "#16a34a",
    tagline: "Science-backed eating strategies",
    description: "Evidence-based guides on macronutrients, calorie counting, meal timing, and dietary strategies that actually work \u2014 backed by peer-reviewed research."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-3yqcpp77": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="category-hero"${addAttribute(`--cat-color: ${categoryMeta.color}`, "style")} data-astro-cid-3yqcpp77> <div class="container-site" data-astro-cid-3yqcpp77> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-3yqcpp77> <ol data-astro-cid-3yqcpp77> <li data-astro-cid-3yqcpp77><a href="/" data-astro-cid-3yqcpp77>Home</a><span aria-hidden="true" data-astro-cid-3yqcpp77>›</span></li> <li data-astro-cid-3yqcpp77><a href="/blog" data-astro-cid-3yqcpp77>Blog</a><span aria-hidden="true" data-astro-cid-3yqcpp77>›</span></li> <li data-astro-cid-3yqcpp77><span aria-current="page" data-astro-cid-3yqcpp77>Nutrition</span></li> </ol> </nav> <div class="cat-header" data-astro-cid-3yqcpp77> <div class="cat-icon" aria-hidden="true" data-astro-cid-3yqcpp77>${categoryMeta.emoji}</div> <div data-astro-cid-3yqcpp77> <p class="cat-label" data-astro-cid-3yqcpp77>${categoryMeta.tagline}</p> <h1 class="cat-title" data-astro-cid-3yqcpp77>${categoryMeta.title}</h1> <p class="cat-desc" data-astro-cid-3yqcpp77>${categoryMeta.description}</p> </div> </div> </div> </div> <div class="container-site py-12" data-astro-cid-3yqcpp77> ${posts.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-3yqcpp77> <p data-astro-cid-3yqcpp77>No articles in this category yet. Check back soon.</p> </div>` : renderTemplate`<div class="posts-grid" data-astro-cid-3yqcpp77> ${posts.map((post) => renderTemplate`<article class="post-card group" data-astro-cid-3yqcpp77> <div class="card-emoji" aria-hidden="true" data-astro-cid-3yqcpp77>${post.data.heroEmoji || "\u{1F4DD}"}</div> <div class="card-meta" data-astro-cid-3yqcpp77> <span class="badge" data-astro-cid-3yqcpp77>${post.data.tags[0]}</span> <span aria-hidden="true" data-astro-cid-3yqcpp77>·</span> <time${addAttribute(post.data.publishDate.toISOString(), "datetime")} data-astro-cid-3yqcpp77> ${post.data.publishDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} </time> <span aria-hidden="true" data-astro-cid-3yqcpp77>·</span> <span data-astro-cid-3yqcpp77>${post.data.readTime || 5} min read</span> </div> <h2 class="card-title group-hover:text-[var(--color-primary)]" data-astro-cid-3yqcpp77> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-3yqcpp77>${post.data.title}</a> </h2> <p class="card-desc" data-astro-cid-3yqcpp77>${post.data.description}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-link"${addAttribute(`Read: ${post.data.title}`, "aria-label")} data-astro-cid-3yqcpp77>
Read article →
</a> </article>`)} </div>`} <!-- Related Categories --> <div class="related-cats" data-astro-cid-3yqcpp77> <h2 class="related-title" data-astro-cid-3yqcpp77>Explore Other Topics</h2> <div class="cats-grid" data-astro-cid-3yqcpp77> <a href="/blog/training" class="cat-chip" data-astro-cid-3yqcpp77>🏋️ Training</a> <a href="/blog/fat-loss" class="cat-chip" data-astro-cid-3yqcpp77>🔥 Fat Loss</a> <a href="/blog/muscle-building" class="cat-chip" data-astro-cid-3yqcpp77>💪 Muscle Building</a> <a href="/blog" class="cat-chip" data-astro-cid-3yqcpp77>📚 All Articles</a> </div> </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-3yqcpp77": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/blog/nutrition/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/blog/nutrition/index.astro";
const $$url = "/blog/nutrition";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
