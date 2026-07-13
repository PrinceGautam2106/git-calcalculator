import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Wbz6qSUX.mjs';
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Server Error - FitnessCalculator", "description": "Something went wrong on our end." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-[80vh] items-center justify-center px-4 py-16"> <div class="max-w-xl text-center"> <!-- GitHub-style illustration --> <svg class="mx-auto mb-8 w-full max-w-sm opacity-90 dark:opacity-70" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"> <!-- Broken server/scale illustration --> <rect x="150" y="100" width="100" height="120" rx="8" fill="currentColor" class="text-black/10 dark:text-white/10"></rect> <rect x="170" y="120" width="60" height="40" rx="4" fill="currentColor" class="text-black/20 dark:text-white/20"></rect> <circle cx="200" cy="180" r="15" fill="currentColor" class="text-black/15 dark:text-white/15"></circle> <!-- Lightning bolt for error --> <path d="M210 60 L195 100 L210 100 L195 140 L230 100 L215 100 L230 60 Z" fill="currentColor" class="text-red-400/60"></path> <!-- 500 text --> <text x="200" y="260" font-size="42" font-weight="bold" fill="currentColor" class="text-red-400/80" text-anchor="middle">500</text> </svg> <h1 class="mb-3 text-3xl font-bold text-black dark:text-white">Server Error</h1> <p class="mb-8 text-base text-black/60 dark:text-white/60">
Whoops, something went wrong on our servers. We're working to fix it.
</p> <div class="flex flex-col gap-3 sm:flex-row sm:justify-center"> <button onclick="location.reload()" class="rounded-md bg-[#50e3c2] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#3dd4b3]">
Try again
</button> <a href="/" class="rounded-md px-6 py-2.5 text-sm font-semibold text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
Go to home
</a> </div> </div> </div> ` })}`;
}, "/Users/princegautam/fitness/src/pages/500.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
