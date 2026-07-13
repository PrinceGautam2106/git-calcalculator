import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5eMsKSEU.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, $ as $$SchemaScript } from '../chunks/seo_CLC9k0GV.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const TITLE = generateTitle("About CalaiFitness");
  const DESC = generateDescription("Learn the story behind CalaiFitness. A 100% private, ad-free platform offering science-backed calculators and body composition planners.");
  const CANONICAL = generateCanonical("/about");
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: TITLE,
    description: DESC,
    url: CANONICAL
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-site py-16 sm:py-24 max-w-3xl" data-astro-cid-kh7btl4r> <!-- Header --> <header class="mb-12" data-astro-cid-kh7btl4r> <p class="text-label text-[var(--color-primary)] mb-3" data-astro-cid-kh7btl4r>Our Philosophy</p> <h1 class="text-display-md text-[var(--color-ink)] mb-4" data-astro-cid-kh7btl4r>
Built for people who want answers, not ads.
</h1> <p class="text-body-md text-[var(--color-body)] leading-relaxed" data-astro-cid-kh7btl4r>
CalaiFitness was founded on a simple premise: checking your daily calorie targets, sleep cycles, or biological metrics shouldn't require trading your privacy or navigating a maze of flashing advertising banners.
</p> </header> <!-- Main Content --> <main class="about-content" data-astro-cid-kh7btl4r> <section class="story-section mb-12" data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>The Story</h2> <p class="text-body-sm text-[var(--color-body)] leading-relaxed mb-4" data-astro-cid-kh7btl4r>
Like many people on a health journey, we were frustrated by the state of online fitness tools. If you search for a basic tool like a "TDEE calculator" or "BMI calculator," you are usually presented with pages built in the early 2000s, covered in pop-up ads, tracking cookies, and complex input forms designed to capture your personal email address.
</p> <p class="text-body-sm text-[var(--color-body)] leading-relaxed" data-astro-cid-kh7btl4r>
We realized that fitness calculations are mathematically simple. There is no biological or technical reason that calculating your daily energy needs should require sending your age, height, and weight to a remote server. So, we decided to rebuild these utilities from scratch with a focus on modern user experience and data privacy.
</p> </section> <section class="mission-section mb-12" data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Our Mission</h2> <p class="text-body-sm text-[var(--color-body)] leading-relaxed mb-4" data-astro-cid-kh7btl4r>
Our mission is to make evidence-based fitness math accessible, simple, and private. We operate under three core principles:
</p> <ul class="principles-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>🔒 100% Privacy by Design:</strong> Every calculation runs entirely in your local browser using client-side JavaScript. No details about your weight, health habits, or age are ever uploaded, logged, or saved to a server.
</li> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>🚫 Zero Ads & Tracking:</strong> We do not host display ads or work with data brokers. The site remains clean, fast, and free from intrusive tracking cookies.
</li> <li data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>🧬 Science-Backed Formulas:</strong> We do not invent proprietary scores. We use validated clinical formulas (such as Mifflin-St Jeor, the Karvonen method, and NTNU regression models) and cite the underlying scientific papers on every page.
</li> </ul> </section> <section class="how-it-works-section mb-12" data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>How It Works (On-Device Calculation)</h2> <p class="text-body-sm text-[var(--color-body)] leading-relaxed mb-4" data-astro-cid-kh7btl4r>
When you enter your metrics and click "Calculate," your browser executes local scripts directly on your computer or smartphone.
</p> <div class="tech-box" data-astro-cid-kh7btl4r> <p class="font-mono text-xs text-[var(--color-mute)] mb-2" data-astro-cid-kh7btl4r>CLIENT-SIDE PROCESSING (YOUR BROWSER)</p> <p class="font-mono text-sm text-[var(--color-ink)] mb-0" data-astro-cid-kh7btl4r>
Inputs → JavaScript Calculations → Render UI (Time: &lt; 5ms · Server calls: 0)
</p> </div> <p class="text-body-sm text-[var(--color-body)] leading-relaxed" data-astro-cid-kh7btl4r>
If you choose to use the "Save to History" feature, the record is saved strictly inside your browser's local storage (\`localStorage\`). This data is never synchronized with any database, meaning only you have access to it, and you can clear it at any time with a single click.
</p> </section> <section class="contact-section" data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Contact Us</h2> <p class="text-body-sm text-[var(--color-body)] leading-relaxed mb-4" data-astro-cid-kh7btl4r>
Have feedback, found a bug, or want to suggest a new tool? We are always looking to improve our calculations.
</p> <a href="mailto:hello@calaifitness.com" class="contact-link" data-astro-cid-kh7btl4r>
hello@calaifitness.com
</a> </section> </main> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-kh7btl4r": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/about.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
