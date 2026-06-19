import{g as p,a as g}from"./hoisted.AiOaRuc6.js";import"./StreakBanner.astro_astro_type_script_index_0_lang.BevuivUo.js";const r=p(),x=g(7),n=document.getElementById("total-checkins");n&&(n.textContent=r.totalCheckIns.toString());const l=document.getElementById("longest-streak");l&&(l.textContent=`${r.longestStreak} days`);const s=[3,7,14,30,60,90,365],u=s.find(e=>e>r.currentStreak)||s[s.length-1],d=document.getElementById("next-goal");d&&(d.textContent=`${u} days`);if(r.currentStreak>=3){const e=document.getElementById("streak-milestone-display");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}const f=document.querySelectorAll(".dash-streak-dot");let m=0;f.forEach((e,t)=>{x[t]?(e.classList.remove("bg-black/5","dark:bg-white/5","hover:scale-105"),e.classList.add("bg-[#50e3c2]","shadow-[0_0_15px_rgba(80,227,194,0.3)]","border","border-[#50e3c2]/30"),m++):e.classList.add("hover:border-black/10","dark:hover:border-white/10")});const c=document.getElementById("streak-percent");c&&(c.textContent=`${Math.round(m/7*100)}% complete`);const i=JSON.parse(localStorage.getItem("fc_last_results")||"[]"),b=document.getElementById("recent-results");b&&i.length>0&&(b.innerHTML=i.map(e=>`
      <div class="rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-6 transition-all hover:border-black/20 dark:hover:border-white/20">
        <p class="mb-1 text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold">${e.calculator}</p>
        <p class="font-mono text-2xl font-bold text-black dark:text-white">${e.value}</p>
        <div class="mt-4 flex items-center justify-between">
          <p class="text-xs text-black/40 dark:text-white/40">${e.date}</p>
          <div class="h-1.5 w-1.5 rounded-full bg-[#50e3c2]"></div>
        </div>
      </div>
    `).join(""));const k=document.getElementById("share-streak");k&&(k.onclick=()=>{const t=`🔥 I'm on a ${r.currentStreak}-day fitness streak on FitnessCalculator! Join me and track your fitness journey. 💪`,a=window.location.origin,o=document.createElement("div");o.className="fixed inset-0 bg-black/50 flex items-end z-50",o.innerHTML=`
        <div class="w-full bg-white dark:bg-[#111] rounded-t-2xl p-4 sm:p-6 border-t border-black/10 dark:border-white/10">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Share Your Streak</h3>
          <div class="grid grid-cols-2 gap-3">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(a)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">𝕏</span>
              <span class="text-xs font-medium">Twitter</span>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(a)}&quote=${encodeURIComponent(t)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">f</span>
              <span class="text-xs font-medium">Facebook</span>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(t+" "+a)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">💬</span>
              <span class="text-xs font-medium">WhatsApp</span>
            </a>
            <button onclick="navigator.clipboard.writeText('${t} ${a}'); alert('Link copied!'); this.closest('.fixed').remove();" class="flex flex-col items-center gap-2 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">📋</span>
              <span class="text-xs font-medium">Copy Link</span>
            </button>
          </div>
          <button onclick="this.closest('.fixed').remove();" class="w-full mt-4 py-2 rounded-lg border border-black/10 dark:border-white/10 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">Close</button>
        </div>
      `,document.body.appendChild(o),o.onclick=h=>{h.target===o&&o.remove()}});
