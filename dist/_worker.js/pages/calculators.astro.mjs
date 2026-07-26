globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Cu1oycWn.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, $ as $$BaseLayout } from '../chunks/BaseLayout_ido6pgsy.mjs';
import { $ as $$SchemaScript } from '../chunks/SchemaScript_CW75kOFE.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Calculators = createComponent(($$result, $$props, $$slots) => {
  const TITLE = generateTitle("All Fitness Calculators");
  const DESC = generateDescription("Browse our collection of 14 free, science-backed fitness calculators. Private by design, completely on-device, and free of ads.");
  const CANONICAL = generateCanonical("/calculators");
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calaifitness.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: CANONICAL }
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
  const calculators = [
    { title: "TDEE Calculator", description: "Calculate your Total Daily Energy Expenditure. The most critical baseline metric for calorie planning.", icon: "\u26A1", href: "/calculator/tdee" },
    { title: "Calorie Target", description: "Find your exact daily calorie budget to lose fat, build muscle, or maintain weight.", icon: "\u{1F34E}", href: "/calculator/calories" },
    { title: "Macro Split", description: "Split your daily calories into custom protein, carbohydrate, and fat gram targets.", icon: "\u{1F957}", href: "/calculator/macros" },
    { title: "BMI Calculator", description: "Standard Body Mass Index calculation. Instant weight-to-height screening results.", icon: "\u2696\uFE0F", href: "/calculator/bmi" },
    { title: "Body Fat %", description: "Estimate your body fat percentage using the US Navy method. More accurate than BMI alone.", icon: "\u{1F4CA}", href: "/calculator/body-fat" },
    { title: "1 Rep Max", description: "Estimate your one rep max (1RM) using Epley, Brzycki, Lander, and Lombardi formulas.", icon: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", href: "/calculator/one-rep-max" },
    { title: "Sleep Cycles", description: "Calculate your sleep cycles, ideal bedtimes, and wake-up times to avoid grogginess.", icon: "\u{1F634}", href: "/calculator/sleep" },
    { title: "Sleep Debt", description: "Calculate your accumulated sleep deficit and get a progressive recovery plan.", icon: "\u23F0", href: "/calculator/sleep-debt" },
    { title: "BMR Calculator", description: "Find your Basal Metabolic Rate \u2014 the calories your body burns to survive at complete rest.", icon: "\u{1F525}", href: "/calculator/bmr" },
    { title: "Ideal Weight", description: "Establish your healthy weight target based on 5 different medical and clinical formulas.", icon: "\u{1F3AF}", href: "/calculator/ideal-weight" },
    { title: "Protein Intake", description: "Calculate daily protein targets in grams based on activity and lean body mass.", icon: "\u{1F969}", href: "/calculator/protein" },
    { title: "Water Intake", description: "Calculate baseline water needs adjusted for exercise duration to maintain optimal hydration.", icon: "\u{1F4A7}", href: "/calculator/water" },
    { title: "Heart Rate Zones", description: "Identify target warm-up, fat-burn, aerobic, threshold, and peak cardio training zones.", icon: "\u2764\uFE0F", href: "/calculator/heart-rate" },
    { title: "Lean Body Mass", description: "Determine your metabolically active mass (organs, bones, muscles) relative to fat.", icon: "\u{1F4AA}", href: "/calculator/lean-mass" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-e4muyxre": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-site py-16 sm:py-20" data-astro-cid-e4muyxre> <!-- Breadcrumbs --> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-e4muyxre> <ol role="list" data-astro-cid-e4muyxre> <li data-astro-cid-e4muyxre> <a href="/" class="breadcrumb-link" data-astro-cid-e4muyxre>Home</a> <span class="breadcrumb-sep" aria-hidden="true" data-astro-cid-e4muyxre>›</span> </li> <li data-astro-cid-e4muyxre> <span class="breadcrumb-current" aria-current="page" data-astro-cid-e4muyxre>Calculators</span> </li> </ol> </nav> <!-- Page Header --> <header class="mb-10 sm:mb-12" data-astro-cid-e4muyxre> <h1 class="text-display-md text-[var(--color-ink)] mb-4" data-astro-cid-e4muyxre>
Science-Backed Fitness Calculators
</h1> <p class="text-body-md text-[var(--color-body)] max-w-2xl leading-relaxed" data-astro-cid-e4muyxre>
Our collection of free health and composition calculators runs 100% on your device.
        No tracking cookies, no accounts, no server logging. Just clean utilities backed by peer-reviewed research.
</p> </header> <!-- Grid --> <div class="calculators-grid" role="list" aria-label="Fitness calculators list" data-astro-cid-e4muyxre> ${calculators.map((calc) => renderTemplate`<a${addAttribute(calc.href, "href")} role="listitem" class="calculator-index-card group"${addAttribute(`${calc.title}: ${calc.description}`, "aria-label")} data-astro-cid-e4muyxre> <div class="card-icon" aria-hidden="true" data-astro-cid-e4muyxre>${calc.icon}</div> <div class="card-content" data-astro-cid-e4muyxre> <h2 class="card-title" data-astro-cid-e4muyxre>${calc.title}</h2> <p class="card-desc" data-astro-cid-e4muyxre>${calc.description}</p> </div> <div class="card-arrow" aria-hidden="true" data-astro-cid-e4muyxre> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-e4muyxre> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-e4muyxre></path> </svg> </div> </a>`)} </div> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-e4muyxre": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/calculators.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/calculators.astro";
const $$url = "/calculators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculators,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
