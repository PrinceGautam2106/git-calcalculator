import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DzOwTzN1.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_5eMsKSEU.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, $ as $$SchemaScript } from '../../chunks/seo_CLC9k0GV.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Training Articles \u2014 Strength, Cardio & Workout Guides");
  const DESC = generateDescription("Expert training guides on strength programming, progressive overload, cardio, workout splits, and recovery. Science-backed advice for all fitness levels.");
  const CANONICAL = generateCanonical("/blog/training");
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.data.category === "training").sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calaifitness.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.calaifitness.com/blog" },
      { "@type": "ListItem", position: 3, name: "Training", item: CANONICAL }
    ]
  };
  const schema = combineSchemas(breadcrumbSchema);
  const categoryMeta = {
    emoji: "\u{1F3CB}\uFE0F",
    title: "Training",
    color: "#2563eb",
    tagline: "Build strength the smart way",
    description: "Science-backed training programs, exercise technique guides, periodization strategies, and workout design principles for beginners through advanced athletes."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-5xdlkz5d": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="category-hero"${addAttribute(`--cat-color: ${categoryMeta.color}`, "style")} data-astro-cid-5xdlkz5d> <div class="container-site" data-astro-cid-5xdlkz5d> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-5xdlkz5d> <ol data-astro-cid-5xdlkz5d> <li data-astro-cid-5xdlkz5d><a href="/" data-astro-cid-5xdlkz5d>Home</a><span aria-hidden="true" data-astro-cid-5xdlkz5d>›</span></li> <li data-astro-cid-5xdlkz5d><a href="/blog" data-astro-cid-5xdlkz5d>Blog</a><span aria-hidden="true" data-astro-cid-5xdlkz5d>›</span></li> <li data-astro-cid-5xdlkz5d><span aria-current="page" data-astro-cid-5xdlkz5d>Training</span></li> </ol> </nav> <div class="cat-header" data-astro-cid-5xdlkz5d> <div class="cat-icon" aria-hidden="true" data-astro-cid-5xdlkz5d>${categoryMeta.emoji}</div> <div data-astro-cid-5xdlkz5d> <p class="cat-label" data-astro-cid-5xdlkz5d>${categoryMeta.tagline}</p> <h1 class="cat-title" data-astro-cid-5xdlkz5d>${categoryMeta.title}</h1> <p class="cat-desc" data-astro-cid-5xdlkz5d>${categoryMeta.description}</p> </div> </div> </div> </div> <div class="container-site py-12" data-astro-cid-5xdlkz5d> ${posts.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-5xdlkz5d> <p data-astro-cid-5xdlkz5d>No articles in this category yet. Check back soon.</p> </div>` : renderTemplate`<div class="posts-grid" data-astro-cid-5xdlkz5d> ${posts.map((post) => renderTemplate`<article class="post-card group" data-astro-cid-5xdlkz5d> <div class="card-emoji" aria-hidden="true" data-astro-cid-5xdlkz5d>${post.data.heroEmoji || "\u{1F4DD}"}</div> <div class="card-meta" data-astro-cid-5xdlkz5d> <span class="badge" data-astro-cid-5xdlkz5d>${post.data.tags[0]}</span> <span aria-hidden="true" data-astro-cid-5xdlkz5d>·</span> <time${addAttribute(post.data.publishDate.toISOString(), "datetime")} data-astro-cid-5xdlkz5d> ${post.data.publishDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} </time> <span aria-hidden="true" data-astro-cid-5xdlkz5d>·</span> <span data-astro-cid-5xdlkz5d>${post.data.readTime || 5} min read</span> </div> <h2 class="card-title group-hover:text-[var(--color-primary)]" data-astro-cid-5xdlkz5d> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5xdlkz5d>${post.data.title}</a> </h2> <p class="card-desc" data-astro-cid-5xdlkz5d>${post.data.description}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-link"${addAttribute(`Read: ${post.data.title}`, "aria-label")} data-astro-cid-5xdlkz5d>
Read article →
</a> </article>`)} </div>`} <div class="related-cats" data-astro-cid-5xdlkz5d> <h2 class="related-title" data-astro-cid-5xdlkz5d>Explore Other Topics</h2> <div class="cats-grid" data-astro-cid-5xdlkz5d> <a href="/blog/nutrition" class="cat-chip" data-astro-cid-5xdlkz5d>🥗 Nutrition</a> <a href="/blog/fat-loss" class="cat-chip" data-astro-cid-5xdlkz5d>🔥 Fat Loss</a> <a href="/blog/muscle-building" class="cat-chip" data-astro-cid-5xdlkz5d>💪 Muscle Building</a> <a href="/blog" class="cat-chip" data-astro-cid-5xdlkz5d>📚 All Articles</a> </div> </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-5xdlkz5d": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/blog/training/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/blog/training/index.astro";
const $$url = "/blog/training";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
