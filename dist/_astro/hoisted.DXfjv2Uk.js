import"./hoisted.AiOaRuc6.js";function s(){const e=JSON.parse(localStorage.getItem("fc_history")||"[]"),r=document.getElementById("history-list");if(r){if(e.length===0){r.innerHTML=`
        <div class="rounded-lg border border-dashed border-black/10 dark:border-white/10 p-12 text-center">
          <p class="text-black/40 dark:text-white/40">No history found yet. Try using one of our calculators!</p>
          <a href="/" class="mt-4 inline-block text-[#0070f3] hover:underline">View all calculators</a>
        </div>
      `;return}r.innerHTML=e.map(t=>`
      <div class="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-4 sm:p-6 transition-colors hover:border-black/20 dark:hover:border-white/20">
        <div class="flex items-center gap-3 sm:gap-4 min-w-0">
          <div class="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-xl sm:text-2xl flex-shrink-0">
            ${o(t.slug)}
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="font-semibold text-sm sm:text-base text-black dark:text-white truncate">${t.calculator}</h3>
            <p class="text-xs sm:text-sm text-black/40 dark:text-white/40">${t.date}</p>
          </div>
        </div>
        <div class="sm:text-right">
          <div class="font-mono text-lg sm:text-2xl font-bold text-black dark:text-white break-words"><span>${t.value}</span> <span class="text-xs sm:text-sm font-normal text-black/40 dark:text-white/40">${t.unit}</span></div>
          <a href="/calculator/${t.slug}" class="text-xs text-[#0070f3] opacity-0 transition-opacity group-hover:opacity-100">Recalculate →</a>
        </div>
      </div>
    `).join("")}}function o(e){return{bmi:"⚖️",bmr:"🔥",tdee:"⚡",bodyfat:"📊",idealweight:"🎯",calories:"🍎",macros:"🥗",water:"💧",heartrate:"❤️",leanmass:"💪"}[e]||"📊"}const a=document.getElementById("clear-history");a&&(a.onclick=()=>{confirm("Are you sure you want to clear all history?")&&(localStorage.removeItem("fc_history"),localStorage.removeItem("fc_last_results"),s())});s();
