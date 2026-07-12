import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://calaifitness.com");
const $$CalculatorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CalculatorCard;
  const { title, description, icon, slug, lastResult } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/calculator/${slug}`, "href")} class="group block rounded-lg sm:rounded-xl border border-black/10 bg-gray-50 p-4 sm:p-6 transition-colors hover:border-[#0070f3] dark:border-white/10 dark:bg-[#111]"> <div class="mb-3 sm:mb-4 text-2xl sm:text-3xl">${icon}</div> <h3 class="mb-1 sm:mb-2 text-base sm:text-lg font-semibold truncate">${title}</h3> <p class="mb-3 sm:mb-4 text-xs sm:text-sm text-black/60 dark:text-white/60 line-clamp-2">${description}</p> ${lastResult && renderTemplate`<div class="mt-3 sm:mt-4 border-t border-black/10 pt-3 sm:pt-4 dark:border-white/10"> <p class="font-mono text-xs text-black/40 dark:text-white/40 uppercase tracking-wider">Last result</p> <p class="mt-1 font-mono text-xs sm:text-sm text-[#50e3c2] break-all">${lastResult}</p> </div>`} </a>`;
}, "/Users/princegautam/fitness/src/components/CalculatorCard.astro", void 0);

export { $$CalculatorCard as $ };
