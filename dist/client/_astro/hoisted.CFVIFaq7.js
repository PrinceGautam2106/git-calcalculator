import"./CalculatorLayout.astro_astro_type_script_index_1_lang.C4_BY0NR.js";import"./hoisted.dlRsZUYK.js";const z=document.getElementById("plan-unit-metric"),G=document.getElementById("plan-unit-imperial"),_=document.getElementById("plan-calc-btn"),I=document.getElementById("plan-error"),R=document.getElementById("plan-results"),v=document.getElementById("plan-age"),j=document.getElementById("plan-gender"),b=document.getElementById("plan-height-cm"),p=document.getElementById("plan-height-ft"),L=document.getElementById("plan-height-in"),u=document.getElementById("plan-weight-kg"),m=document.getElementById("plan-weight-lbs"),a=document.getElementById("plan-goal-weight"),J=document.getElementById("plan-goal-unit"),w=document.getElementById("plan-weeks"),Q=document.getElementById("plan-activity"),X=document.getElementById("plan-target-cal"),Z=document.getElementById("plan-safety-warning"),tt=document.getElementById("plan-tdee-display"),et=document.getElementById("plan-deficit-display"),nt=document.getElementById("plan-rate-display"),at=document.getElementById("plan-macro-p"),st=document.getElementById("plan-macro-c"),ot=document.getElementById("plan-macro-f"),S=document.getElementById("plan-projection-list"),lt=document.getElementById("plan-download-btn");let i=!0,x=null;function H(t){i=t,z.classList.toggle("active",t),G.classList.toggle("active",!t),document.getElementById("plan-h-metric")?.classList.toggle("hidden",!t),document.getElementById("plan-h-imperial")?.classList.toggle("hidden",t),document.getElementById("plan-w-metric")?.classList.toggle("hidden",!t),document.getElementById("plan-w-imperial")?.classList.toggle("hidden",t),J.textContent=t?"kg":"lbs",R.classList.add("hidden"),U()}z.addEventListener("click",()=>H(!0));G.addEventListener("click",()=>H(!1));function it(){U();const t=parseFloat(v.value);if(isNaN(t)||t<10||t>100){l("Please enter a valid age between 10 and 100."),v.classList.add("input-error"),v.focus();return}let n=0,e=0,s=0;if(i){if(n=parseFloat(b.value),e=parseFloat(u.value),s=parseFloat(a.value),isNaN(n)||n<50||n>280){l("Please enter a valid height."),b.classList.add("input-error"),b.focus();return}if(isNaN(e)||e<20||e>400){l("Please enter a valid weight."),u.classList.add("input-error"),u.focus();return}if(isNaN(s)||s<20||s>400){l("Please enter a valid target weight."),a.classList.add("input-error"),a.focus();return}}else{const o=parseFloat(p.value)||0,r=parseFloat(L.value)||0,g=o*12+r,c=parseFloat(m.value),f=parseFloat(a.value);if(g<20||g>110){l("Please enter a valid height."),p.classList.add("input-error"),p.focus();return}if(isNaN(c)||c<44||c>880){l("Please enter a valid weight."),m.classList.add("input-error"),m.focus();return}if(isNaN(f)||f<44||f>880){l("Please enter a valid target weight."),a.classList.add("input-error"),a.focus();return}n=g*2.54,e=c*.453592,s=f*.453592}const d=parseFloat(w.value);if(isNaN(d)||d<4||d>24){l("Please select a planning timeline between 4 and 24 weeks."),w.classList.add("input-error"),w.focus();return}if(s>=e){l("Target weight must be less than current weight to plan a calorie deficit."),a.classList.add("input-error"),a.focus();return}const k=j.value==="male",B=10*e+6.25*n-5*t,A=k?B+5:B-161,O=parseFloat(Q.value),$=Math.round(A*O),h=(e-s)/d,F=h*7700/7,C=Math.round($-F),q=C<(k?1500:1200),y=Math.max(C,1e3);Z.classList.toggle("hidden",!q);const E=Math.round(e*2),V=E*4,M=Math.round(y*.25),P=Math.round(M/9),Y=Math.max(y-V-M,0),N=Math.round(Y/4);let W="";const D=[];for(let o=1;o<=d;o++){const r=e-o*h,g=i?r:r*2.20462,c=i?"kg":"lbs";D.push(r),W+=`
      <div style="display:flex; justify-content:space-between; align-items:center; padding:9px 12px; background:var(--color-canvas); border-bottom:1px solid var(--color-hairline);">
        <span style="font-size:0.8125rem; font-weight:500; color:var(--color-ink)">Week ${o}</span>
        <span style="font-family:var(--font-mono); font-size:0.875rem; font-weight:600; color:var(--color-primary)">
          ${g.toFixed(1)} ${c}
        </span>
      </div>
    `}X.textContent=y.toLocaleString(),tt.textContent=`${$.toLocaleString()} kcal`,et.textContent=`-${Math.round(F)} kcal/day`;const T=i?`${h.toFixed(2)} kg/wk`:`${(h*2.20462).toFixed(2)} lbs/wk`;nt.textContent=T,at.textContent=`${E}g`,st.textContent=`${N}g`,ot.textContent=`${P}g`,S.innerHTML=W;const K=S.querySelector("div:last-child");K&&(K.style.borderBottom="none"),x={age:t,gender:j.value,height:i?`${Math.round(n)} cm`:`${p.value}'${L.value}"`,startWeight:i?`${u.value} kg`:`${m.value} lbs`,goalWeight:i?`${a.value} kg`:`${a.value} lbs`,timeline:`${d} weeks`,calories:y,protein:`${E}g`,carbs:`${N}g`,fat:`${P}g`,rate:T,weeksList:D.map((o,r)=>({week:r+1,weight:i?`${o.toFixed(1)} kg`:`${(o*2.20462).toFixed(1)} lbs`}))},R.classList.remove("hidden")}_.addEventListener("click",it);lt.addEventListener("click",()=>{if(!x)return;const t=x,n=window.open("","_blank");if(!n)return;const e=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My 12-Week Weight Loss Plan — CalaiFitness</title>
      <style>
        body { font-family: -apple-system, sans-serif; color: #111; padding: 40px; line-height: 1.5; }
        h1 { border-bottom: 2px solid #111; padding-bottom: 10px; font-size: 24px; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px; }
        .card { padding: 15px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9; }
        .val { font-size: 20px; font-weight: bold; color: #3b82f6; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background: #f5f5f5; }
      </style>
    </head>
    <body>
      <h1>My CalaiFitness Weight Loss & Deficit Plan</h1>
      <div class="grid">
        <div class="card">
          <h3>Target Intake</h3>
          <div class="val">${t.calories} kcal/day</div>
        </div>
        <div class="card">
          <h3>Daily Deficit Rate</h3>
          <div class="val">${t.rate}</div>
        </div>
        <div class="card">
          <h3>Macronutrients</h3>
          <p>Protein: <strong>${t.protein}</strong> | Carbs: <strong>${t.carbs}</strong> | Fats: <strong>${t.fat}</strong></p>
        </div>
        <div class="card">
          <h3>Profile Overview</h3>
          <p>Age: ${t.age} | Height: ${t.height} | Starting: ${t.startWeight} | Target: ${t.goalWeight}</p>
        </div>
      </div>

      <h2>Week-by-Week Roadmap</h2>
      <table>
        <thead>
          <tr>
            <th>Timeline Milestone</th>
            <th>Target Bodyweight</th>
          </tr>
        </thead>
        <tbody>
          ${t.weeksList.map(s=>`
            <tr>
              <td>End of Week ${s.week}</td>
              <td><strong>${s.weight}</strong></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <p style="margin-top: 40px; font-size: 11px; color: #888; text-align: center;">Generated on CalaiFitness.com — 100% private, on-device calculations.</p>
      <script>window.print();<\/script>
    </body>
    </html>
  `;n.document.write(e),n.document.close()});function l(t){I.textContent=t,I.classList.remove("hidden")}function U(){I.classList.add("hidden"),[v,b,p,L,u,m,a,w].forEach(t=>t?.classList.remove("input-error"))}
