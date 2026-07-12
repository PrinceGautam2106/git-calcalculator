import"./hoisted.DvdN1osc.js";function u(){const t=JSON.parse(localStorage.getItem("fc_history")||"[]"),e=document.getElementById("total-count");e&&(e.textContent=t.length.toString());const o=new Date;o.setDate(o.getDate()-7);const a=t.filter(r=>new Date(r.timestamp||0)>o).length,s=document.getElementById("week-count");s&&(s.textContent=a.toString());const n={};t.forEach(r=>{n[r.calculator]=(n[r.calculator]||0)+1});const l=Object.entries(n).sort((r,g)=>g[1]-r[1])[0],i=document.getElementById("most-used");i&&(i.textContent=l?l[0]:"-");const d=document.getElementById("last-used");d&&t.length>0&&(d.textContent=t[0].calculator)}function x(){const t=JSON.parse(localStorage.getItem("fc_history")||"[]"),e=document.getElementById("history-list");if(e){if(t.length===0){e.innerHTML=`
        <div class="rounded-2xl border border-dashed border-black/10 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 p-12 text-center">
          <div class="text-4xl mb-4">📊</div>
          <p class="text-lg font-medium text-black/60 dark:text-white/60 mb-2">No calculation history yet</p>
          <p class="text-sm text-black/40 dark:text-white/40 mb-6">Start using calculators to track your fitness journey</p>
          <a href="/calculators" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#50e3c2] text-black font-medium hover:bg-[#50e3c2]/90 transition">
            View Calculators →
          </a>
        </div>
      `;return}e.innerHTML=t.map(o=>`
      <div class="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-4 sm:p-6 transition-all hover:border-[#50e3c2]/50 hover:shadow-lg">
        <div class="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <div class="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-xl sm:text-2xl flex-shrink-0 group-hover:bg-[#50e3c2]/10 transition-colors">
            ${h(o.slug)}
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="font-semibold text-sm sm:text-base text-black dark:text-white truncate">${o.calculator}</h3>
            <p class="text-xs sm:text-sm text-black/40 dark:text-white/40">${o.date}</p>
          </div>
        </div>
        <div class="flex items-center justify-between sm:justify-end gap-4">
          <div class="sm:text-right">
            <div class="font-mono text-lg sm:text-2xl font-bold text-black dark:text-white"><span>${o.value}</span> <span class="text-xs sm:text-sm font-normal text-black/40 dark:text-white/40">${o.unit||""}</span></div>
          </div>
          <a href="/calculator/${o.slug}" class="flex-shrink-0 text-xs text-[#50e3c2] hover:text-black dark:hover:text-white transition font-medium">
            Recalculate →
          </a>
        </div>
      </div>
    `).join("")}}function h(t){return{bmi:"⚖️",bmr:"🔥",tdee:"⚡",bodyfat:"📊",idealweight:"🎯",calories:"🍎",macros:"🥗",water:"💧",heartrate:"❤️",leanmass:"💪"}[t]||"📊"}const c=document.getElementById("export-history");c&&c.addEventListener("click",()=>{const t=JSON.parse(localStorage.getItem("fc_history")||"[]");if(t.length===0){alert("No history to export");return}const e=JSON.stringify(t,null,2),o=new Blob([e],{type:"application/json"}),a=URL.createObjectURL(o),s=document.createElement("a");s.href=a,s.download=`fitness-history-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a);const n=c,l=n.innerHTML;n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Exported!',n.classList.add("bg-[#50e3c2]","text-black"),setTimeout(()=>{n.innerHTML=l,n.classList.remove("bg-[#50e3c2]","text-black")},2e3)});const m=document.getElementById("clear-history");m&&m.addEventListener("click",()=>{const t=JSON.parse(localStorage.getItem("fc_history")||"[]");if(t.length===0){alert("No history to clear");return}if(confirm(`⚠️ Are you sure you want to delete ${t.length} calculation${t.length>1?"s":""}?

This action cannot be undone.`)){localStorage.removeItem("fc_history"),localStorage.removeItem("fc_last_results"),u(),x();const e=document.createElement("div");e.className="fixed bottom-4 right-4 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium shadow-lg z-50 animate-fade-in",e.textContent="✓ History cleared",document.body.appendChild(e),setTimeout(()=>e.remove(),2e3)}});u();x();
