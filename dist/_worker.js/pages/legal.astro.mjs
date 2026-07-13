globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cu1oycWn.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKVFlStK.mjs';
export { renderers } from '../renderers.mjs';

const $$Legal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Legal Hub \u2014 CalaiFitness", "description": "Legal information, privacy policies, terms of service, and medical disclaimers for CalaiFitness.", "canonical": "https://www.calaifitness.com/legal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20"> <div class="mb-12 text-center"> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-4">Legal Hub</h1> <p class="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
Transparency and privacy are at the core of our values. Review our legal policies below.
</p> </div> <div class="grid gap-6 md:grid-cols-3"> <!-- Privacy Policy --> <a href="/privacy" class="group flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 transition-all hover:border-[#50e3c2] hover:bg-black/5 dark:hover:bg-white/10"> <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#50e3c2]/10 text-[#50e3c2] transition-transform group-hover:scale-110"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h2 class="mb-2 text-xl font-bold text-black dark:text-white">Privacy Policy</h2> <p class="mb-4 flex-1 text-sm text-black/60 dark:text-white/60">
Learn how we protect your data. All calculations are 100% private and stored locally on your device.
</p> <span class="text-sm font-medium text-[#50e3c2] group-hover:underline">Read Policy &rarr;</span> </a> <!-- Terms of Service --> <a href="/terms" class="group flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 transition-all hover:border-[#50e3c2] hover:bg-black/5 dark:hover:bg-white/10"> <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#50e3c2]/10 text-[#50e3c2] transition-transform group-hover:scale-110"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <h2 class="mb-2 text-xl font-bold text-black dark:text-white">Terms of Service</h2> <p class="mb-4 flex-1 text-sm text-black/60 dark:text-white/60">
Our rules and guidelines. Read the terms of use that govern your access to CalaiFitness.
</p> <span class="text-sm font-medium text-[#50e3c2] group-hover:underline">Read Terms &rarr;</span> </a> <!-- Medical Disclaimer --> <a href="/disclaimer" class="group flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 transition-all hover:border-[#50e3c2] hover:bg-black/5 dark:hover:bg-white/10"> <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> <h2 class="mb-2 text-xl font-bold text-black dark:text-white">Medical Disclaimer</h2> <p class="mb-4 flex-1 text-sm text-black/60 dark:text-white/60">
Important information about the educational nature of our tools and the need for professional medical advice.
</p> <span class="text-sm font-medium text-amber-500 group-hover:underline">Read Disclaimer &rarr;</span> </a> </div> </article> ` })}`;
}, "/Users/princegautam/fitness/src/pages/legal.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/legal.astro";
const $$url = "/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Legal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
