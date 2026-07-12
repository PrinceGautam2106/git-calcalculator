import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_4eSzUG1x.mjs';
import { c as calculatorRegistry } from '../../../chunks/calculators_CcL_xXy4.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://calaifitness.com");
function getStaticPaths() {
  return Object.keys(calculatorRegistry).map((slug) => ({
    params: { slug }
  }));
}
const $$Result = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Result;
  const { slug } = Astro2.params;
  if (!slug || !(slug in calculatorRegistry)) {
    return Astro2.redirect("/404");
  }
  const calc = calculatorRegistry[slug];
  return renderTemplate(_a || (_a = __template(["", ' <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js" defer><\/script>   '])), renderComponent($$result, "Layout", $$Layout, { "title": `Result \u2014 ${calc.label}`, "data-astro-cid-a6pp4d3i": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-5xl px-6 py-12" data-astro-cid-a6pp4d3i> <a${addAttribute(`/calculator/${slug}`, "href")} class="mb-6 inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white" data-astro-cid-a6pp4d3i>
← Recalculate
</a> <div class="mb-8 flex items-center gap-4" data-astro-cid-a6pp4d3i> <div class="text-6xl" data-astro-cid-a6pp4d3i>${calc.icon}</div> <div data-astro-cid-a6pp4d3i> <h1 class="text-3xl font-bold" data-astro-cid-a6pp4d3i>${calc.label}</h1> <p class="text-black/60 dark:text-white/60" data-astro-cid-a6pp4d3i>Your personalized results</p> </div> </div> <div id="dashboard-root" data-astro-cid-a6pp4d3i></div> <div class="mt-8 flex gap-4" data-astro-cid-a6pp4d3i> <button id="save-result" class="flex-1 rounded-lg border border-black/10 bg-black py-3 font-semibold text-white transition-all hover:opacity-90 dark:border-white/10 dark:bg-white dark:text-black" data-astro-cid-a6pp4d3i>
💾 Save to history
</button> <a href="/" class="flex-1 rounded-lg border border-black/10 py-3 text-center font-semibold transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5" data-astro-cid-a6pp4d3i>
← Back to home
</a> </div> </div> ` }));
}, "/Users/princegautam/fitness/src/pages/calculator/[slug]/result.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/calculator/[slug]/result.astro";
const $$url = "/calculator/[slug]/result";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Result,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
