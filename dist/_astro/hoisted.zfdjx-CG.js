import{g as d,a as u}from"./hoisted.Dqqu-HiK.js";const o=JSON.parse(localStorage.getItem("fc_last_results")||"[]").slice(0,3),r=document.getElementById("last-results");r&&o.length>0&&(r.innerHTML=o.map(t=>`
      <div class="rounded-lg border border-white/10 bg-[#111] p-4">
        <p class="mb-2 text-xs text-white/40">${t.calculator}</p>
        <p class="font-mono text-2xl font-bold">${t.value}</p>
        <p class="mt-1 text-xs text-white/60">${t.date}</p>
      </div>
    `).join(""));try{const e=d().currentStreak,n=u(7),s=document.getElementById("streak-message"),c=document.querySelectorAll(".streak-dot"),l={3:"You're building a habit! 🌱",7:"One week strong! 🏆",14:"Two weeks! Incredible! 💪",30:"You're unstoppable! 🔥"};s&&(s.textContent=l[e]||(e>0?`Day ${e} of your fitness check-in streak 🔥`:"Start your streak — check in today")),c.forEach((a,i)=>{n[i]&&(a.classList.remove("bg-white/20"),a.classList.add("bg-[#50e3c2]"))})}catch(t){console.error("Streak banner error:",t)}
