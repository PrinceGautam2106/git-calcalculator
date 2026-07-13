import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5eMsKSEU.mjs';
import { g as generateDescription, a as generateTitle, b as generateCanonical, $ as $$SchemaScript } from '../chunks/seo_CLC9k0GV.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Page Not Found");
  const DESC = generateDescription("This page got lost on its fitness journey. Search our free tools to find what you need.");
  const CANONICAL = generateCanonical("/404");
  const calculators = [
    { title: "TDEE Calculator", description: "Total Daily Energy Expenditure baseline.", icon: "\u26A1", href: "/calculator/tdee" },
    { title: "Calorie Target", description: "Set daily calories for fat loss or muscle gain.", icon: "\u{1F34E}", href: "/calculator/calories" },
    { title: "Macro Split", description: "Grams of protein, carbs, and fat daily.", icon: "\u{1F957}", href: "/calculator/macros" },
    { title: "BMI Calculator", description: "Standard height-weight health screening.", icon: "\u2696\uFE0F", href: "/calculator/bmi" },
    { title: "Body Fat %", description: "US Navy circumference body composition estimate.", icon: "\u{1F4CA}", href: "/calculator/body-fat" },
    { title: "BMR Calculator", description: "Your resting basal metabolic calorie burn.", icon: "\u{1F525}", href: "/calculator/bmr" },
    { title: "Ideal Weight", description: "Target weights using 5 clinical formulas.", icon: "\u{1F3AF}", href: "/calculator/ideal-weight" },
    { title: "Protein Intake", description: "Daily protein targets based on lean mass.", icon: "\u{1F969}", href: "/calculator/protein" }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESC,
    url: CANONICAL
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-site py-16 sm:py-24 text-center" data-astro-cid-zetdm5md> <!-- Header Section --> <header class="mb-10 sm:mb-12 max-w-xl mx-auto" data-astro-cid-zetdm5md> <div class="text-6xl mb-6" aria-hidden="true" data-astro-cid-zetdm5md>🏃‍♂️</div> <h1 class="text-display-md text-[var(--color-ink)] mb-4" data-astro-cid-zetdm5md>
This page got lost on its fitness journey
</h1> <p class="text-body-md text-[var(--color-body)] leading-relaxed" data-astro-cid-zetdm5md>
Don't worry — deviations happen. Let's get you back on track. Use the search below to find any of our tools, or browse popular choices.
</p> </header> <!-- Search box --> <div class="search-box-container mb-12" data-astro-cid-zetdm5md> <div class="search-input-wrap" data-astro-cid-zetdm5md> <svg class="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-zetdm5md></path> </svg> <input type="search" id="calc-search" class="search-input" placeholder="Search calculators... (e.g. TDEE, fat, calorie)" aria-label="Search calculators" autocomplete="off" data-astro-cid-zetdm5md> </div> </div> <!-- Calculators Grid --> <div class="grid-section max-w-4xl mx-auto" data-astro-cid-zetdm5md> <h2 class="grid-section-h2" data-astro-cid-zetdm5md>Popular Calculators</h2> <div class="calculators-grid" id="404-calculators-grid" role="list" aria-label="Calculators list" data-astro-cid-zetdm5md> ${calculators.map((calc) => renderTemplate`<a${addAttribute(calc.href, "href")} role="listitem" class="calculator-card group"${addAttribute(calc.title.toLowerCase(), "data-title")}${addAttribute(calc.description.toLowerCase(), "data-desc")}${addAttribute(`${calc.title}: ${calc.description}`, "aria-label")} data-astro-cid-zetdm5md> <div class="card-icon" aria-hidden="true" data-astro-cid-zetdm5md>${calc.icon}</div> <div class="card-content" data-astro-cid-zetdm5md> <h3 class="card-title" data-astro-cid-zetdm5md>${calc.title}</h3> <p class="card-desc" data-astro-cid-zetdm5md>${calc.description}</p> </div> <div class="card-arrow" aria-hidden="true" data-astro-cid-zetdm5md>→</div> </a>`)} </div> <!-- No results state --> <div id="no-results-msg" class="no-results hidden" role="status" data-astro-cid-zetdm5md> <p data-astro-cid-zetdm5md>No calculators matched your search.</p> </div> </div> <!-- Back Home Button --> <div class="mt-14" data-astro-cid-zetdm5md> <a href="/" class="home-btn-link" data-astro-cid-zetdm5md>
← Go Back Home
</a> </div> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-zetdm5md": true })}` })}  `;
}, "/Users/princegautam/fitness/src/pages/404.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
