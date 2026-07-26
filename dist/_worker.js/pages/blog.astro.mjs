globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Cu1oycWn.mjs';
import { g as getCollection } from '../chunks/_astro_content_BhH2jReu.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, $ as $$BaseLayout } from '../chunks/BaseLayout_ido6pgsy.mjs';
import { $ as $$SchemaScript } from '../chunks/SchemaScript_CW75kOFE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Fitness Blog \u2014 Science-Backed Health & Nutrition Articles");
  const DESC = generateDescription("Read science-backed articles on nutrition, training, fat loss, muscle building, and recovery. Practical guides written for real people with real goals.");
  const CANONICAL = generateCanonical("/blog");
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const featuredPost = sortedPosts.find((p) => p.data.featured) || sortedPosts[0];
  const regularPosts = sortedPosts.filter((p) => p.slug !== featuredPost?.slug);
  const tags = [
    { label: "All", value: "all" },
    { label: "Nutrition", value: "nutrition" },
    { label: "Training", value: "training" },
    { label: "Fat Loss", value: "fat-loss" },
    { label: "Muscle Building", value: "muscle-building" }
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calaifitness.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: CANONICAL }
    ]
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESC,
    url: CANONICAL
  };
  const schema = combineSchemas(breadcrumbSchema, webPageSchema);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-site py-16 sm:py-20" data-astro-cid-5tznm7mj> <!-- Breadcrumb --> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-5tznm7mj> <ol role="list" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj> <a href="/" class="breadcrumb-link" data-astro-cid-5tznm7mj>Home</a> <span class="breadcrumb-sep" aria-hidden="true" data-astro-cid-5tznm7mj>›</span> </li> <li data-astro-cid-5tznm7mj> <span class="breadcrumb-current" aria-current="page" data-astro-cid-5tznm7mj>Blog</span> </li> </ol> </nav> <!-- Header --> <header class="mb-10 sm:mb-12" data-astro-cid-5tznm7mj> <p class="text-label text-[var(--color-mute)] mb-2" data-astro-cid-5tznm7mj>Science-Based Insights</p> <h1 class="text-display-md text-[var(--color-ink)] mb-4" data-astro-cid-5tznm7mj>
Evidence-Based Fitness Insights
</h1> <p class="text-body-md text-[var(--color-body)] max-w-2xl leading-relaxed" data-astro-cid-5tznm7mj>
No fitness fads, no sponsor-backed claims, and no pseudoscience. Just clear, peer-reviewed explanations
        of how the body operates, written by trainers and nutrition scientists.
</p> </header> <!-- Interactive Tags Filter Bar --> <div class="filter-bar-wrap mb-10" data-astro-cid-5tznm7mj> <div class="filter-bar" role="tablist" aria-label="Filter blog posts by category" data-astro-cid-5tznm7mj> ${tags.map((tag, idx) => renderTemplate`<button type="button" role="tab"${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(`filter-btn ${idx === 0 ? "active" : ""}`, "class")}${addAttribute(tag.value, "data-filter")} data-astro-cid-5tznm7mj> ${tag.label} </button>`)} </div> </div> <!-- Featured Post (Pinned at top, large layout) --> ${featuredPost && renderTemplate`<div class="featured-post-container mb-12"${addAttribute(featuredPost.data.category, "data-category")} data-astro-cid-5tznm7mj> <article class="featured-card group" data-astro-cid-5tznm7mj> <div class="featured-emoji" aria-hidden="true" data-astro-cid-5tznm7mj> ${featuredPost.data.heroEmoji} </div> <div class="featured-content" data-astro-cid-5tznm7mj> <div class="meta-row" data-astro-cid-5tznm7mj> <span class="category-badge" data-astro-cid-5tznm7mj>${featuredPost.data.tags[0]}</span> <span class="meta-sep" aria-hidden="true" data-astro-cid-5tznm7mj>·</span> <time${addAttribute(featuredPost.data.publishDate.toISOString(), "datetime")} data-astro-cid-5tznm7mj> ${featuredPost.data.publishDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </time> <span class="meta-sep" aria-hidden="true" data-astro-cid-5tznm7mj>·</span> <span data-astro-cid-5tznm7mj>${featuredPost.data.readTime || 5} min read</span> <span class="featured-badge" data-astro-cid-5tznm7mj>Featured</span> </div> <h2 class="featured-title group-hover:text-[var(--color-primary)]" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${featuredPost.slug}`, "href")} data-astro-cid-5tznm7mj> ${featuredPost.data.title} </a> </h2> <p class="featured-desc" data-astro-cid-5tznm7mj> ${featuredPost.data.description} </p> <a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="read-link"${addAttribute(`Read featured post: ${featuredPost.data.title}`, "aria-label")} data-astro-cid-5tznm7mj>
Read article →
</a> </div> </article> </div>`} <!-- Regular Posts Grid --> <div class="blog-grid" id="blog-posts-grid" role="list" aria-label="Blog posts list" data-astro-cid-5tznm7mj> ${regularPosts.map((post) => renderTemplate`<article class="blog-card-item group" role="listitem"${addAttribute(post.data.category, "data-category")} data-astro-cid-5tznm7mj> <div class="card-emoji" aria-hidden="true" data-astro-cid-5tznm7mj> ${post.data.heroEmoji || "\u{1F4DD}"} </div> <div class="card-meta" data-astro-cid-5tznm7mj> <span class="category-badge" data-astro-cid-5tznm7mj>${post.data.tags[0]}</span> <span class="meta-sep" aria-hidden="true" data-astro-cid-5tznm7mj>·</span> <time${addAttribute(post.data.publishDate.toISOString(), "datetime")} data-astro-cid-5tznm7mj> ${post.data.publishDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </time> <span class="meta-sep" aria-hidden="true" data-astro-cid-5tznm7mj>·</span> <span data-astro-cid-5tznm7mj>${post.data.readTime || 5}m read</span> </div> <h3 class="card-title group-hover:text-[var(--color-primary)]" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj> ${post.data.title} </a> </h3> <p class="card-desc" data-astro-cid-5tznm7mj> ${post.data.description} </p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-link"${addAttribute(`Read: ${post.data.title}`, "aria-label")} data-astro-cid-5tznm7mj>
Read article →
</a> </article>`)} </div> <!-- Empty State --> <div id="empty-state" class="empty-state hidden" role="status" data-astro-cid-5tznm7mj> <p class="empty-state-text" data-astro-cid-5tznm7mj>No articles found in this category.</p> </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-5tznm7mj": true })}` })}  `;
}, "/Users/princegautam/fitness/src/pages/blog/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
