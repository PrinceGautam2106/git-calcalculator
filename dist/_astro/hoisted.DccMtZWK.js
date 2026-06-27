import{g as w,a as y}from"./hoisted.Ba5XZUQT.js";import"./StreakBanner.astro_astro_type_script_index_0_lang.D23W9YwZ.js";const o=w(),b=document.getElementById("total-checkins");b&&(b.textContent=o.totalCheckIns.toString());const x=document.getElementById("longest-streak");x&&(x.textContent=`${o.longestStreak} days`);const l=[3,7,14,30,60,90,365],v=l.find(e=>e>o.currentStreak)||l[l.length-1],k=document.getElementById("next-goal");k&&(k.textContent=`${v} days`);if(o.currentStreak>=3){const e=document.getElementById("streak-milestone-display");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}const E=y(7),m=new Date().getDay(),c=m===0?6:m-1,C=document.querySelectorAll(".dash-streak-dot");let f=0;C.forEach((e,s)=>{const a=6-(c-s);if(s<=c&&a>=0&&a<7&&E[a]){e.classList.remove("bg-black/5","dark:bg-white/5"),e.classList.add("bg-[#50e3c2]","shadow-[0_0_15px_rgba(80,227,194,0.3)]","border","border-[#50e3c2]/30","scale-110"),f++;const t=document.createElement("div");t.className="flex items-center justify-center h-full w-full text-white text-xs sm:text-sm font-bold",t.innerHTML="✓",e.appendChild(t)}else s>c?(e.classList.add("opacity-30","cursor-not-allowed"),e.title="Future day"):e.classList.add("hover:border-black/10","dark:hover:border-white/10","hover:scale-105")});const p=document.getElementById("streak-percent");if(p){const e=Math.round(f/7*100);p.textContent=`${e}% complete this week`}const h=JSON.parse(localStorage.getItem("fc_last_results")||"[]"),g=document.getElementById("recent-results");g&&h.length>0&&(g.innerHTML=h.slice(0,4).map(e=>`
      <div class="rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-6 transition-all hover:border-[#50e3c2]/50 hover:shadow-lg group">
        <p class="mb-1 text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold">${e.calculator}</p>
        <p class="font-mono text-2xl font-bold text-black dark:text-white group-hover:text-[#50e3c2] transition-colors">${e.value}</p>
        <div class="mt-4 flex items-center justify-between">
          <p class="text-xs text-black/40 dark:text-white/40">${e.date}</p>
          <div class="h-1.5 w-1.5 rounded-full bg-[#50e3c2]"></div>
        </div>
      </div>
    `).join(""));const u=document.getElementById("share-streak");u&&u.addEventListener("click",e=>{e.preventDefault();const s=o.currentStreak,n=`🔥 I'm on a ${s}-day fitness streak on FitnessCalculator! Join me and track your fitness journey. 💪`,a=window.location.origin,t=document.createElement("div");t.className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",t.innerHTML=`
        <div class="w-full max-w-md bg-white dark:bg-[#111] rounded-2xl p-6 border border-black/10 dark:border-white/10 animate-fade-in">
          <h3 class="mb-4 text-lg font-bold text-black dark:text-white">Share Your ${s}-Day Streak 🔥</h3>
          <div class="grid grid-cols-2 gap-3">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(n)}&url=${encodeURIComponent(a)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">𝕏</span>
              <span class="text-xs font-medium text-black dark:text-white">Twitter</span>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(a)}&quote=${encodeURIComponent(n)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">f</span>
              <span class="text-xs font-medium text-black dark:text-white">Facebook</span>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(n+" "+a)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">💬</span>
              <span class="text-xs font-medium text-black dark:text-white">WhatsApp</span>
            </a>
            <button class="copy-link-btn flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">📋</span>
              <span class="text-xs font-medium text-black dark:text-white">Copy Link</span>
            </button>
          </div>
          <button class="close-modal w-full mt-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition text-black dark:text-white">Close</button>
        </div>
      `,document.body.appendChild(t);const r=t.querySelector(".copy-link-btn");r&&r.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(n+" "+a),r.innerHTML='<span class="text-2xl">✓</span><span class="text-xs font-medium text-green-500">Copied!</span>',setTimeout(()=>t.remove(),1e3)}catch{r.innerHTML='<span class="text-xs text-red-500">Failed to copy</span>'}});const d=t.querySelector(".close-modal");d&&d.addEventListener("click",()=>t.remove()),t.addEventListener("click",i=>{i.target===t&&t.remove()})});
