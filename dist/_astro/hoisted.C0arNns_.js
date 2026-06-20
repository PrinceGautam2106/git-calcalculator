import"./hoisted.BMqLdfZe.js";import"./StreakBanner.astro_astro_type_script_index_0_lang.BapxnGmX.js";const e=JSON.parse(localStorage.getItem("fc_last_results")||"[]").slice(0,3),r=document.getElementById("last-results");r&&e.length>0&&(r.innerHTML=e.map(t=>`
      <div class="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-8 transition-all hover:border-black/20 dark:hover:border-white/20">
        <div class="relative z-10">
          <p class="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-black/20 dark:text-white/20">${t.calculator}</p>
          <p class="font-mono text-3xl font-bold text-black dark:text-white tracking-tighter group-hover:text-[#50e3c2] transition-colors">${t.value}</p>
          <div class="mt-8 flex items-center justify-between">
            <div class="flex flex-col">
              <span class="text-[10px] font-bold text-black/20 dark:text-white/20 uppercase">Calculated on</span>
              <p class="text-xs font-medium text-black/40 dark:text-white/40">${t.date}</p>
            </div>
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-[#50e3c2]">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    `).join(""));
