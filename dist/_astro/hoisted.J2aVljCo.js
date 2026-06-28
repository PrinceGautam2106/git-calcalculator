import{g as y}from"./hoisted.DHugXsqa.js";import"./StreakBanner.astro_astro_type_script_index_0_lang.CDIUBkvS.js";const o=y(),x=document.getElementById("total-checkins");x&&(x.textContent=o.totalCheckIns.toString());const k=document.getElementById("longest-streak");k&&(k.textContent=`${o.longestStreak} days`);const d=[3,7,14,30,60,90,365],v=d.find(e=>e>o.currentStreak)||d[d.length-1],m=document.getElementById("next-goal");m&&(m.textContent=`${v} days`);if(o.currentStreak>=3){const e=document.getElementById("streak-milestone-display");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}const r=new Date,p=r.getUTCDay(),T=p===0?6:p-1,i=new Date(r);i.setUTCDate(r.getUTCDate()-T);const C=r.toISOString().split("T")[0],S=o.history||[],L=document.querySelectorAll(".dash-streak-dot");let w=0;L.forEach((e,l)=>{const a=new Date(i);a.setUTCDate(i.getUTCDate()+l);const s=a.toISOString().split("T")[0],t=S.includes(s),n=s===C,c=a.getTime()>r.getTime()&&a.getUTCDate()!==r.getUTCDate();e.className="dash-streak-dot w-full aspect-square rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold transition-all hover:scale-105 cursor-default",e.innerHTML="",e.title=`${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][l]} (${s})`,t?(e.classList.remove("bg-black/5","dark:bg-white/5"),e.classList.add("bg-[#50e3c2]","text-black","shadow-[0_0_15px_rgba(80,227,194,0.3)]","border","border-[#50e3c2]/30","scale-110"),e.innerHTML="✓",w++):n?(e.classList.add("border-2","border-dashed","border-[#50e3c2]","text-[#50e3c2]","animate-pulse"),e.innerHTML="•"):c?(e.classList.add("bg-black/5","dark:bg-white/5","opacity-30","cursor-not-allowed"),e.title="Future day"):(e.classList.add("bg-black/5","dark:bg-white/5","text-black/35","dark:text-white/35","border","border-black/10","dark:border-white/10"),e.innerHTML="×")});const u=document.getElementById("streak-percent");if(u){const e=Math.round(w/7*100);u.textContent=`${e}% complete this week`}const g=JSON.parse(localStorage.getItem("fc_last_results")||"[]"),h=document.getElementById("recent-results");h&&g.length>0&&(h.innerHTML=g.slice(0,4).map(e=>`
      <div class="rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-6 transition-all hover:border-[#50e3c2]/50 hover:shadow-lg group">
        <p class="mb-1 text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold">${e.calculator}</p>
        <p class="font-mono text-2xl font-bold text-black dark:text-white group-hover:text-[#50e3c2] transition-colors">${e.value}</p>
        <div class="mt-4 flex items-center justify-between">
          <p class="text-xs text-black/40 dark:text-white/40">${e.date}</p>
          <div class="h-1.5 w-1.5 rounded-full bg-[#50e3c2]"></div>
        </div>
      </div>
    `).join(""));const f=document.getElementById("share-streak");f&&f.addEventListener("click",e=>{e.preventDefault();const l=o.currentStreak,a=`🔥 I'm on a ${l}-day fitness streak on FitnessCalculator! Join me and track your fitness journey. 💪`,s=window.location.origin,t=document.createElement("div");t.className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",t.innerHTML=`
        <div class="w-full max-w-md bg-white dark:bg-[#111] rounded-2xl p-6 border border-black/10 dark:border-white/10 animate-fade-in">
          <h3 class="mb-4 text-lg font-bold text-black dark:text-white">Share Your ${l}-Day Streak 🔥</h3>
          <div class="grid grid-cols-2 gap-3">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(a)}&url=${encodeURIComponent(s)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">𝕏</span>
              <span class="text-xs font-medium text-black dark:text-white">Twitter</span>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(s)}&quote=${encodeURIComponent(a)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span class="text-2xl">f</span>
              <span class="text-xs font-medium text-black dark:text-white">Facebook</span>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(a+" "+s)}" target="_blank" class="flex flex-col items-center gap-2 p-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
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
      `,document.body.appendChild(t);const n=t.querySelector(".copy-link-btn");n&&n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a+" "+s),n.innerHTML='<span class="text-2xl">✓</span><span class="text-xs font-medium text-green-500">Copied!</span>',setTimeout(()=>t.remove(),1e3)}catch{n.innerHTML='<span class="text-xs text-red-500">Failed to copy</span>'}});const c=t.querySelector(".close-modal");c&&c.addEventListener("click",()=>t.remove()),t.addEventListener("click",b=>{b.target===t&&t.remove()})});
