import{g as h,a as p}from"./hoisted.AiOaRuc6.js";import"./StreakBanner.astro_astro_type_script_index_0_lang.BevuivUo.js";const n=h(),r=document.getElementById("total-checkins");r&&(r.textContent=n.totalCheckIns.toString());const l=document.getElementById("longest-streak");l&&(l.textContent=`${n.longestStreak} days`);const o=[3,7,14,30,60,90,365],g=o.find(e=>e>n.currentStreak)||o[o.length-1],c=document.getElementById("next-goal");c&&(c.textContent=`${g} days`);if(n.currentStreak>=3){const e=document.getElementById("streak-milestone-display");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}const u=p(7),f=document.querySelectorAll(".dash-streak-dot");let k=0;f.forEach((e,a)=>{if(u[a]){e.classList.remove("bg-black/5","dark:bg-white/5"),e.classList.add("bg-[#50e3c2]","shadow-[0_0_15px_rgba(80,227,194,0.3)]","border","border-[#50e3c2]/30","scale-110"),k++;const t=document.createElement("div");t.className="flex items-center justify-center h-full w-full text-white text-xs sm:text-sm font-bold",t.innerHTML="✓",e.appendChild(t)}else e.classList.add("hover:border-black/10","dark:hover:border-white/10","hover:scale-105")});const d=document.getElementById("streak-percent");if(d){const e=Math.round(k/7*100);d.textContent=`${e}% complete this week`}const i=JSON.parse(localStorage.getItem("fc_last_results")||"[]"),b=document.getElementById("recent-results");b&&i.length>0&&(b.innerHTML=i.slice(0,4).map(e=>`
      <div class="rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-6 transition-all hover:border-[#50e3c2]/50 hover:shadow-lg group">
        <p class="mb-1 text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold">${e.calculator}</p>
        <p class="font-mono text-2xl font-bold text-black dark:text-white group-hover:text-[#50e3c2] transition-colors">${e.value}</p>
        <div class="mt-4 flex items-center justify-between">
          <p class="text-xs text-black/40 dark:text-white/40">${e.date}</p>
          <div class="h-1.5 w-1.5 rounded-full bg-[#50e3c2]"></div>
        </div>
      </div>
    `).join(""));const x=document.getElementById("share-streak");x&&(x.onclick=()=>{const e=n.currentStreak,a=`🔥 I'm on a ${e}-day fitness streak on FitnessCalculator! Join me and track your fitness journey. 💪`,t=window.location.origin,s=document.createElement("div");s.className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",s.innerHTML=`
        <div class="w-full max-w-md bg-white dark:bg-[#111] rounded-2xl p-6 border border-black/10 dark:border-white/10 animate-fade-in">
          <h3 class="mb-4 text-lg font-bold text-black dark:text-white">Share Your ${e}-Day Streak 🔥</h3>
          <div class="grid grid-cols-2 gap-3">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(a)}&url=${encodeURIComponent(t)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">𝕏</span>
              <span class="text-xs font-medium text-black dark:text-white">Twitter</span>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}&quote=${encodeURIComponent(a)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">f</span>
              <span class="text-xs font-medium text-black dark:text-white">Facebook</span>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(a+" "+t)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">💬</span>
              <span class="text-xs font-medium text-black dark:text-white">WhatsApp</span>
            </a>
            <button onclick="navigator.clipboard.writeText('${a} ${t}'); const btn = this; btn.innerHTML = '<span class=\\"text-2xl\\">✓</span><span class=\\"text-xs font-medium text-green-500\\">Copied!</span>'; setTimeout(() => btn.closest('.fixed').remove(), 1000);" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">📋</span>
              <span class="text-xs font-medium text-black dark:text-white">Copy Link</span>
            </button>
          </div>
          <button onclick="this.closest('.fixed').remove();" class="w-full mt-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition text-black dark:text-white">Close</button>
        </div>
      `,document.body.appendChild(s),s.onclick=m=>{m.target===s&&s.remove()}});
