import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_4eSzUG1x.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found - FitnessCalculator", "description": "The page you're looking for doesn't exist." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-[80vh] items-center justify-center px-4 py-16"> <div class="max-w-xl text-center"> <!-- GitHub-style illustration --> <svg class="mx-auto mb-8 w-full max-w-sm opacity-90 dark:opacity-70" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"> <!-- Dumbbell illustration --> <ellipse cx="120" cy="150" rx="30" ry="50" fill="currentColor" class="text-black/10 dark:text-white/10"></ellipse> <ellipse cx="280" cy="150" rx="30" ry="50" fill="currentColor" class="text-black/10 dark:text-white/10"></ellipse> <rect x="140" y="140" width="120" height="20" rx="10" fill="currentColor" class="text-black/20 dark:text-white/20"></rect> <!-- 404 text integrated --> <text x="200" y="180" font-size="48" font-weight="bold" fill="currentColor" class="text-[#50e3c2]" text-anchor="middle">404</text> <!-- Question mark --> <circle cx="200" cy="80" r="35" fill="currentColor" class="text-black/5 dark:text-white/5"></circle> <text x="200" y="100" font-size="40" fill="currentColor" class="text-black/30 dark:text-white/30" text-anchor="middle">?</text> </svg> <h1 class="mb-3 text-3xl font-bold text-black dark:text-white">This is not the page you are looking for.</h1> <p class="mb-8 text-base text-black/60 dark:text-white/60">
The page you're trying to reach doesn't exist or has been moved.
</p> <div class="flex flex-col gap-3 sm:flex-row sm:justify-center"> <a href="/" class="rounded-md bg-[#50e3c2] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#3dd4b3]">
Take me home
</a> <a href="/contact" class="rounded-md px-6 py-2.5 text-sm font-semibold text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
Contact support
</a> </div> </div> </div> ` })}`;
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
