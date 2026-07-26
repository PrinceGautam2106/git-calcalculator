globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cu1oycWn.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ido6pgsy.mjs';
export { renderers } from '../renderers.mjs';

const $$Error = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Something Went Wrong \u2014 CalaiFitness", "description": "An unexpected error occurred.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-[80vh] items-center justify-center px-4 py-16"> <div class="max-w-xl text-center"> <!-- GitHub-style illustration --> <svg class="mx-auto mb-8 w-full max-w-sm opacity-90 dark:opacity-70" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"> <!-- Heart rate monitor flat line --> <path d="M50 150 L100 150 L120 150 L135 120 L150 180 L165 150 L350 150" stroke="currentColor" stroke-width="3" class="text-black/20 dark:text-white/20" fill="none"></path> <!-- Monitor screen --> <rect x="120" y="60" width="160" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="2" class="text-black/15 dark:text-white/15"></rect> <!-- Exclamation mark --> <circle cx="200" cy="220" r="40" fill="currentColor" class="text-black/5 dark:text-white/5"></circle> <text x="200" y="240" font-size="50" font-weight="bold" fill="currentColor" class="text-black/30 dark:text-white/30" text-anchor="middle">!</text> </svg> <h1 class="mb-3 text-3xl font-bold text-black dark:text-white">Unexpected error</h1> <p class="mb-8 text-base text-black/60 dark:text-white/60">
We encountered an unexpected error. Please try again or contact support if the problem persists.
</p> <div class="flex flex-col gap-3 sm:flex-row sm:justify-center"> <button onclick="history.back()" class="rounded-md bg-[#50e3c2] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#3dd4b3]">
Go back
</button> <a href="/" class="rounded-md px-6 py-2.5 text-sm font-semibold text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
Go to home
</a> </div> <p class="mt-8 text-sm text-black/40 dark:text-white/40"> <a href="/contact" class="underline hover:text-[#50e3c2]">Contact support</a> </p> </div> </div> ` })}`;
}, "/Users/princegautam/fitness/src/pages/error.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/error.astro";
const $$url = "/error";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
