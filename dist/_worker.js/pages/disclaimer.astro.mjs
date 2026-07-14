globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cu1oycWn.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D1ylSRex.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Medical Disclaimer \u2014 CalaiFitness", "description": "Important medical disclaimer for CalaiFitness. Our calculators are for educational purposes and do not replace professional medical advice.", "canonical": "https://www.calaifitness.com/disclaimer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20"> <div class="mb-12"> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-4">Medical Disclaimer</h1> <p class="text-sm text-black/40 dark:text-white/40">Last updated: June 19, 2026</p> </div> <div class="prose prose-lg dark:prose-invert max-w-none"> <div class="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-10"> <p class="text-black/90 dark:text-white/90 font-semibold mb-2">Notice to Users</p> <p class="text-black/70 dark:text-white/70 leading-relaxed m-0">
The information, calculators, and tools provided on CalaiFitness are for educational and informational purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment.
</p> </div> <section class="mb-10"> <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">1. Not Medical Advice</h2> <p class="text-black/70 dark:text-white/70 leading-relaxed mb-4">
The fitness calculators (including but not limited to BMI, TDEE, BMR, Body Fat, and Macro calculators) provide estimates based on general scientific formulas. These formulas do not take into account your individual health history, medical conditions, medications, or unique physiological factors.
</p> <p class="text-black/70 dark:text-white/70 leading-relaxed mb-4">
Never disregard professional medical advice or delay in seeking it because of something you have read or calculated on this website.
</p> </section> <section class="mb-10"> <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">2. Consult a Professional</h2> <p class="text-black/70 dark:text-white/70 leading-relaxed mb-4">
Always seek the advice of your physician, registered dietitian, or other qualified health provider with any questions you may have regarding a medical condition or before starting any new diet, fitness, or weight loss program.
</p> <p class="text-black/70 dark:text-white/70 leading-relaxed mb-4">
If you think you may have a medical emergency, call your doctor or emergency services immediately.
</p> </section> <section class="mb-10"> <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">3. Accuracy of Calculations</h2> <p class="text-black/70 dark:text-white/70 leading-relaxed mb-4">
While we strive to ensure our calculators use the most up-to-date and widely accepted formulas (such as Mifflin-St Jeor for BMR or the U.S. Navy method for body fat), all results are mathematical estimates.
</p> <ul class="list-disc pl-6 text-black/70 dark:text-white/70 space-y-2 mb-4"> <li><strong>BMI (Body Mass Index)</strong> does not distinguish between fat and muscle mass and may not be an accurate health indicator for athletes or elderly individuals.</li> <li><strong>TDEE (Total Daily Energy Expenditure)</strong> relies on subjective activity multipliers that may over- or under-estimate your actual calorie burn.</li> <li><strong>Body Fat percentages</strong> calculated via measurements have a standard margin of error and are not as accurate as clinical methods like DEXA scans.</li> </ul> </section> <section class="mb-10"> <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">4. Assumption of Risk</h2> <p class="text-black/70 dark:text-white/70 leading-relaxed mb-4">
Any action you take upon the information on this website is strictly at your own risk. CalaiFitness and its creators will not be liable for any losses or damages in connection with the use of our website and its tools.
</p> </section> </div> </article> ` })}`;
}, "/Users/princegautam/fitness/src/pages/disclaimer.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
