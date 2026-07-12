import { a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$StreakBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="streak-banner" class="group relative overflow-hidden border-b border-black/10 bg-gray-50 py-2.5 dark:border-white/10 dark:bg-[#111]" data-astro-cid-vzx366xh> <div class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6" data-astro-cid-vzx366xh> <div class="flex items-center justify-between gap-3" data-astro-cid-vzx366xh> <!-- Left side: Fire Icon & Text Message --> <div class="flex items-center gap-1.5 sm:gap-2.5 overflow-hidden min-w-0 flex-1" data-astro-cid-vzx366xh> <div id="streak-banner-fire" class="text-base sm:text-xl transition-transform group-hover:scale-110 flex-shrink-0" data-astro-cid-vzx366xh>🔥</div> <p id="streak-banner-text" class="text-xs sm:text-sm font-semibold tracking-tight text-black/90 dark:text-white/90 truncate" data-astro-cid-vzx366xh></p> </div> <!-- Right side: Compact Weekdays tracker --> <div class="flex items-center gap-1 sm:gap-1.5 flex-shrink-0" data-astro-cid-vzx366xh> ${[...Array(7)].map((_, i) => renderTemplate`<div class="flex flex-col items-center gap-0.5 sm:gap-1" data-astro-cid-vzx366xh> <span class="text-[8px] sm:text-[9px] font-bold uppercase text-black/45 dark:text-white/45" data-astro-cid-vzx366xh> ${["M", "T", "W", "T", "F", "S", "S"][i]} </span> <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-xs font-bold transition-all streak-dot bg-black/5 dark:bg-white/5 text-black/30 dark:text-white/30"${addAttribute(i, "data-day")} data-astro-cid-vzx366xh>
•
</div> </div>`)} </div> </div> </div> </div>  `;
}, "/Users/princegautam/fitness/src/components/StreakBanner.astro", void 0);

export { $$StreakBanner as $ };
