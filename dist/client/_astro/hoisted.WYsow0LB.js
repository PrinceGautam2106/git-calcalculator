import"./hoisted.dlRsZUYK.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("history-tbody"),d=document.getElementById("history-empty"),r=document.getElementById("table-wrapper"),o=document.getElementById("history-filter"),c=document.getElementById("dashboard-actions"),i=document.getElementById("filter-panel"),u=document.getElementById("history-clear-btn"),h=document.getElementById("history-export-btn");let t=[];function y(){try{t=JSON.parse(localStorage.getItem("fc_history")||"[]")}catch{t=[]}l(o.value)}function l(a){const e=a==="all"?t:t.filter(n=>n.calculator.toLowerCase()===a.toLowerCase());if(t.length===0){d.classList.remove("hidden"),r.classList.add("hidden"),c.classList.add("hidden"),i.classList.add("hidden");return}if(d.classList.add("hidden"),r.classList.remove("hidden"),c.classList.remove("hidden"),i.classList.remove("hidden"),e.length===0){s.innerHTML=`
          <tr>
            <td colspan="5" style="text-align: center; color: var(--color-mute); padding: 32px 16px;">
              No saved calculations found matching this filter.
            </td>
          </tr>
        `;return}let m="";e.forEach(n=>{m+=`
          <tr data-timestamp="${n.timestamp}">
            <td class="font-mono text-xs text-[var(--color-mute)]">${n.date}</td>
            <td class="font-semibold text-[var(--color-ink)]">${n.calculator}</td>
            <td><span class="result-badge">${n.value}</span></td>
            <td class="text-xs text-[var(--color-body)]">${n.category}</td>
            <td class="text-right">
              <button class="delete-row-btn" data-timestamp="${n.timestamp}" type="button" aria-label="Delete record">
                Delete
              </button>
            </td>
          </tr>
        `}),s.innerHTML=m,s.querySelectorAll(".delete-row-btn").forEach(n=>{n.addEventListener("click",p=>{const g=p.currentTarget,v=parseInt(g.getAttribute("data-timestamp")||"0",10);f(v)})})}function f(a){confirm("Are you sure you want to delete this calculation record?")&&(t=t.filter(e=>e.timestamp!==a),localStorage.setItem("fc_history",JSON.stringify(t)),l(o.value))}u.addEventListener("click",()=>{confirm("⚠️ WARNING: This will permanently delete all saved calculations from this device. This action cannot be undone. Proceed?")&&(localStorage.removeItem("fc_history"),localStorage.removeItem("fc_last_results"),t=[],l("all"))}),h.addEventListener("click",()=>{if(t.length===0)return;const a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),e=document.createElement("a");e.setAttribute("href",a),e.setAttribute("download",`calai_fitness_history_${new Date().toISOString().split("T")[0]}.json`),document.body.appendChild(e),e.click(),e.remove()}),o.addEventListener("change",()=>{l(o.value)}),y()});
