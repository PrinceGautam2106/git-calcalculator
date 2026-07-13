globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cu1oycWn.mjs';
import { $ as $$Layout } from '../chunks/Layout_t5h2kijN.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | FitnessCalculator", "description": "Built for people who want answers, not ads. Learn about our privacy-first fitness calculators." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12 sm:py-20"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-black mb-6">Built for people who want answers, not ads.</h1> <p class="text-xl text-black/60 dark:text-white/60">Fast, accurate, and 100% private fitness math.</p> </div> <div class="prose prose-lg dark:prose-invert max-w-none"> <section class="mb-12 bg-gray-50 dark:bg-white/[0.02] p-8 rounded-3xl border border-black/5 dark:border-white/5"> <h2 class="text-2xl font-bold mb-4">Our Story</h2> <p>
We were frustrated. Every time we needed to calculate our TDEE or check our macros, we had to navigate through pages cluttered with pop-up ads, autoplaying videos, and slow-loading scripts. Worse, many of these sites were tracking our health data and selling it to third parties.
</p> <p>
We decided there had to be a better way. FitnessCalculator was built to be the antidote to the modern web: a blazing-fast, privacy-first platform that gives you the answers you need without the bloat you don't.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-4">Our Mission</h2> <p>
Our mission is simple: <strong>make fitness math accessible, accurate, and completely private.</strong> Whether you're a professional athlete, a personal trainer, or just starting your health journey, you deserve tools that respect your time and your data.
</p> </section> <section class="mb-12 bg-[#50e3c2]/5 p-8 rounded-3xl border border-[#50e3c2]/20"> <h2 class="text-2xl font-bold mb-4 text-[#50e3c2]">How Our Calculators Work</h2> <p>
Unlike most fitness websites, our calculators run entirely <strong>on your device</strong>. When you enter your weight, height, or body fat percentage, that data never leaves your browser.
</p> <ul class="list-disc pl-6 mt-4 space-y-2"> <li><strong>No Server Calls:</strong> We don't send your data to our servers to calculate the result. It all happens instantly in your browser.</li> <li><strong>No Tracking:</strong> We don't store your personal health metrics in a database.</li> <li><strong>Scientific Formulas:</strong> We use the most up-to-date and scientifically validated formulas (like the Mifflin-St Jeor equation).</li> </ul> </section> <section> <h2 class="text-2xl font-bold mb-4">Get In Touch</h2> <p>
Have a suggestion for a new calculator? Found a bug? Just want to say hi? We'd love to hear from you.
</p> <p class="mt-4"> <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#50e3c2] text-black font-bold hover:bg-[#50e3c2]/80 transition-colors">
Contact Us
</a> </p> </section> </div> </div> ` })}`;
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
