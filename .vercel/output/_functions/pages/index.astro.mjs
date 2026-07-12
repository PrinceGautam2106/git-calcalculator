import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_4eSzUG1x.mjs';
import { $ as $$StreakBanner } from '../chunks/StreakBanner_BXHd62lS.mjs';
import { $ as $$CalculatorCard } from '../chunks/CalculatorCard_C_WRbhF5.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const calculators = [
    { title: "BMI Calculator", description: "Body Mass Index", icon: "\u2696\uFE0F", slug: "bmi" },
    { title: "BMR Calculator", description: "Basal Metabolic Rate", icon: "\u{1F525}", slug: "bmr" },
    { title: "TDEE Calculator", description: "Total Daily Energy Expenditure", icon: "\u26A1", slug: "tdee" },
    { title: "Body Fat %", description: "Estimate body fat percentage", icon: "\u{1F4CA}", slug: "bodyfat" },
    { title: "Ideal Weight", description: "Based on 5 medical formulas", icon: "\u{1F3AF}", slug: "idealweight" },
    { title: "Calorie Tracker", description: "Daily calorie intake", icon: "\u{1F34E}", slug: "calories" },
    { title: "Macro Split", description: "Protein, carbs, fat breakdown", icon: "\u{1F957}", slug: "macros" },
    { title: "Water Intake", description: "Daily hydration goal", icon: "\u{1F4A7}", slug: "water" },
    { title: "Target Heart Rate", description: "Exercise intensity zones", icon: "\u2764\uFE0F", slug: "heartrate" },
    { title: "Lean Body Mass", description: "Muscle vs fat mass", icon: "\u{1F4AA}", slug: "leanmass" }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebApplication",\n  "name": "FitnessCalculator",\n  "description": "Free fitness calculators including BMI calculator, calorie calculator, TDEE calculator, body fat calculator, macro calculator, and more.",\n  "url": "https://calaifitness.com",\n  "applicationCategory": "HealthApplication",\n  "offers": {\n    "@type": "Offer",\n    "price": "0",\n    "priceCurrency": "USD"\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.8",\n    "ratingCount": "500"\n  }\n}\n<\/script> '])), renderComponent($$result, "Layout", $$Layout, { "title": "FitnessCalculator \u2014 All Fitness & Health Calculators", "description": "Free fitness calculators for BMI, TDEE, calories, body fat %, macros, and more. Science-backed formulas. Track progress daily. 100% private on-device storage." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StreakBanner", $$StreakBanner, {})} ${maybeRenderHead()}<section class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-24"> <div class="mb-12 sm:mb-16 text-center sm:text-left"> <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white leading-tight">Precision Fitness <span class="text-black/20 dark:text-white/20 block sm:inline">Metrics.</span></h1> <p class="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-black/40 dark:text-white/40 sm:mx-0">Choose a science-backed calculator to start tracking your journey. All data stays private on your device.</p> </div> <div class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> ${calculators.map((calc) => renderTemplate`${renderComponent($$result2, "CalculatorCard", $$CalculatorCard, { ...calc })}`)} </div> </section> <section class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 pb-16 sm:pb-32"> <div class="mb-8 sm:mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"> <div> <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">Recent Activity</h2> <p class="mt-1 text-sm sm:text-base text-black/40 dark:text-white/40">Your latest calculations and progress.</p> </div> <a href="/history" class="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#50e3c2] transition-colors hover:text-black dark:hover:text-white">
View Full History <span class="transition-transform group-hover:translate-x-1">→</span> </a> </div> <div id="last-results" class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> <div class="col-span-full flex flex-col items-center justify-center rounded-2xl sm:rounded-[2.5rem] border border-dashed border-black/10 dark:border-white/10 py-12 sm:py-20 text-center px-4"> <div class="mb-4 text-3xl sm:text-4xl opacity-20">📊</div> <p class="text-base sm:text-lg font-medium text-black/40 dark:text-white/40">No calculations yet.</p> <p class="text-xs sm:text-sm text-black/20 dark:text-white/20">Start your journey using the calculators above.</p> </div> </div> </section> ` }));
}, "/Users/princegautam/fitness/src/pages/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
