import{r as D}from"./localStorage.BoBS4qrI.js";import"./hoisted.dlRsZUYK.js";function F(t){const a=t.weight/Math.pow(t.height/100,2),r=Math.round(a*10)/10;let e="",o="",s="";return a<18.5?(e="Underweight",o="#0070f3",s="Consider consulting a nutritionist to reach a healthy weight"):a<25?(e="Normal",o="#50e3c2",s="Great! Maintain your current lifestyle"):a<30?(e="Overweight",o="#f5a623",s="Consider a balanced diet and regular exercise"):(e="Obese",o="#ff6b6b",s="Consult a healthcare professional for a personalized plan"),{value:r.toString(),unit:"BMI",category:e,color:o,advice:s}}function S(t){const{weight:a,height:r,age:e,gender:o}=t;let s=10*a+6.25*r-5*e;return s+=o==="male"?5:-161,{value:Math.round(s).toString(),unit:"kcal/day",advice:"This is your baseline calorie burn at complete rest"}}function C(t){const a=S(t),r=parseInt(a.value),e={sedentary:1.2,light:1.375,moderate:1.55,very:1.725,athlete:1.9};return{value:Math.round(r*e[t.activity]).toString(),unit:"kcal/day",advice:"Your total daily calorie burn including activity",breakdown:{bmr:a.value,multiplier:e[t.activity]}}}function L(t){const{gender:a,height:r,waist:e,neck:o,hip:s}=t;let i;if(a==="male"){const d=Math.log10(e-o),b=Math.log10(r);i=495/(1.0324-.19077*d+.15456*b)-450}else{const d=Math.log10(e+s-o),b=Math.log10(r);i=495/(1.29579-.35004*d+.221*b)-450}const c=Math.round(i*10)/10;let l="",n="";return a==="male"?i<6?(l="Essential",n="#0070f3"):i<14?(l="Athletes",n="#50e3c2"):i<18?(l="Fitness",n="#50e3c2"):i<25?(l="Average",n="#f5a623"):(l="Obese",n="#ff6b6b"):i<14?(l="Essential",n="#0070f3"):i<21?(l="Athletes",n="#50e3c2"):i<25?(l="Fitness",n="#50e3c2"):i<32?(l="Average",n="#f5a623"):(l="Obese",n="#ff6b6b"),{value:c.toString(),unit:"%",category:l,color:n}}function P(t){const{gender:a,height:r}=t,o=r/2.54-60,s=a==="male"?52+1.9*o:49+1.7*o,i=a==="male"?56.2+1.41*o:53.1+1.36*o,c=a==="male"?48+2.7*o:45.5+2.2*o,l=a==="male"?50+2.3*o:45.5+2.3*o,n=22*Math.pow(r/100,2),d=[s,i,c,l,n],b=Math.round(Math.min(...d)),p=Math.round(Math.max(...d));return{value:`${b}–${p}`,unit:"kg",advice:"Range based on 5 medical formulas"}}function T(t){const a=C(t),r=parseInt(a.value),e={lose:-500,maintain:0,build:300},o=r+e[t.goal],s={lose:"0.5kg loss/week",maintain:"maintain weight",build:"0.25kg gain/week"};return{value:o.toString(),unit:"kcal/day",advice:s[t.goal],breakdown:{tdee:r.toString(),adjustment:e[t.goal]}}}function A(t){const a=T(t),r=parseInt(a.value),e=Math.round(t.weight*2),o=e*4,s=Math.round(r*.25),i=Math.round(s/9),c=r-o-s,l=Math.round(c/4);return{value:`${e}g / ${i}g / ${l}g`,unit:"P / F / C",breakdown:{protein:e,fat:i,carbs:l,calories:r}}}function z(t){const a=t.weight*35,r=(t.exerciseMin||0)/30*350,e=Math.round((a+r)/1e3*10)/10;return{value:e.toString(),unit:"L/day",advice:`${Math.round(e*4)} cups per day`,breakdown:{base:Math.round(a),exercise:Math.round(r)}}}function j(t){const a=220-t.age,r=t.restHR||70,e=a-r,o=`${Math.round(r+e*.5)}–${Math.round(r+e*.6)}`,s=`${Math.round(r+e*.6)}–${Math.round(r+e*.7)}`,i=`${Math.round(r+e*.7)}–${Math.round(r+e*.85)}`;return{value:i,unit:"bpm",advice:"Target for cardio training",breakdown:{warmup:o,fatburn:s,cardio:i,max:a}}}function H(t){const{gender:a,weight:r,height:e}=t;let o;a==="male"?o=.407*r+.267*e-19.2:o=.252*r+.473*e-48.3;const s=r-o,i=s/r*100;return{value:Math.round(o).toString(),unit:"kg",advice:`Fat mass: ${Math.round(s)}kg (${Math.round(i)}%)`,breakdown:{lbm:Math.round(o),fat:Math.round(s)}}}function N(t){const a=t.weight||60,r=t.reps||5,e=t.lift||"Lift",o=a*(1+r/30),s=Math.round(o*10)/10;let i="";return r<=3?i="Highly accurate":r<=6?i="Good accuracy":i="Moderate accuracy",{value:s.toString(),unit:"kg",category:e,breakdown:{"90%":Math.round(s*.9),"80%":Math.round(s*.8),"70%":Math.round(s*.7),"60%":Math.round(s*.6)},advice:i,color:r<=3?"#50e3c2":r<=6?"#f5a623":"#0070f3"}}function w(t){const a=Math.floor(t/3600),r=Math.floor(t%3600/60),e=Math.round(t%60);return a>0?`${a}:${r.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`:`${r}:${e.toString().padStart(2,"0")}`}function O(t){const a=t.distance||10;let r=0,e=0,o=0;t.duration&&typeof t.duration=="object"?(r=t.duration.hours??0,e=t.duration.minutes??0,o=t.duration.seconds??0):(r=t.hours??0,e=t.minutes??45,o=t.seconds??0);const s=r*3600+e*60+o,i=s/a;let c=Math.floor(i/60),l=Math.round(i%60);l===60&&(l=0,c+=1);const n=`${c}:${l.toString().padStart(2,"0")}/km`;let d="Intermediate";i<240?d="Elite":i<300?d="Competitive":i<360?d="Strong":i<420?d="Intermediate":d="Beginner";const b=[],p=Math.min(Math.ceil(a),50);for(let g=1;g<=p;g++){const u=Math.min(g*i,s),h=g===Math.ceil(a)&&a%1!==0?a%1*i:i;b.push({km:g,splitTime:w(h),cumulativeTime:w(u)})}const m=[{name:"5K",dist:5},{name:"10K",dist:10},{name:"Half Marathon",dist:21.0975},{name:"Marathon",dist:42.195}].map(g=>{const u=s*Math.pow(g.dist/a,1.06),h=u/g.dist;let $=Math.floor(h/60),y=Math.round(h%60);return y===60&&(y=0,$+=1),{name:g.name,time:w(u),pace:`${$}:${y.toString().padStart(2,"0")}/km`}});return{value:n,unit:"pace",category:d,breakdown:{pace:n,distance:a.toFixed(2),duration:w(s),splits:b,predictions:m}}}function W(t){const a=t.weight||70,r=t.height||170,e=t.age||30,o=t.gender||"male",s=t.activity||"moderate",i=t.deficitAmount||500;let c=10*a+6.25*r-5*e;c+=o==="male"?5:-161;const n=Math.round(c*{sedentary:1.2,light:1.375,moderate:1.55,very:1.725,athlete:1.9}[s]),d=o==="male"?1500:1200,b=Math.max(n-i,d),p=i*7/7700,m=p*4.33;return{value:b.toString(),unit:"kcal/day",breakdown:{tdee:n,deficit:i,weeklyLoss:p.toFixed(2),monthlyLoss:m.toFixed(2),minSafe:d}}}function Y(t){const a=t.sleepMode==="bedtime"?t.wakeTime:t.sleepTime,r=t.sleepMode||"bedtime";if(!a)return{value:"06:30",unit:"time",advice:"Enter a time to calculate"};const e=[2,3,4,5,6],o=14,s=90;let i=0,c=0;if(typeof a=="object"&&a!==null)i=a.hours??7,c=a.minutes??0;else if(typeof a=="string"&&a.includes(":")){const b=a.split(":").map(Number);i=b[0]??7,c=b[1]??0}else i=7,c=0;const l=i*60+c,n={};let d="";return e.forEach(b=>{const p=b*s+o;let m=r==="bedtime"?l-p:l+p;for(;m<0;)m+=1440;for(;m>=1440;)m-=1440;const g=Math.floor(m/60),u=Math.round(m%60),h=`${String(g).padStart(2,"0")}:${String(u).padStart(2,"0")}`;n[`${b}cycles`]=h,b===5&&(d=h)}),{value:d,unit:"time",breakdown:n,advice:"5 cycles = 7.5 hours (optimal)"}}function U(t){const a=t.weight||70,r=t.bodyFat||20,e=t.proteinGoal||"maintain",o=a*(1-r/100),s={maintain:{min:1.2,max:1.6},loss:{min:1.8,max:2.4},gain:{min:1.6,max:2.2},recomp:{min:2,max:2.6},athlete:{min:1.7,max:2.5}},i=s[e]||s.maintain,c=Math.round(o*i.min),l=Math.round(o*i.max),n=Math.round((c+l)/2);return{value:`${c}–${l}`,unit:"g/day",breakdown:{floor:c,target:n,ceiling:l,perKg:i.min.toFixed(1),calories:n*4}}}function G(t){const{gender:a,height:r,neck:e,waist:o,hip:s,age:i}=t;let c;a==="male"?c=86.01*Math.log10(o-e)-70.041*Math.log10(r)+36.76:c=163.205*Math.log10(o+s-e)-97.684*Math.log10(r)-78.387;const l={male:{"17-20":20,"21-27":22,"28-39":24,"40+":26},female:{"17-20":30,"21-27":32,"28-39":34,"40+":36}};let n="40+";i<=20?n="17-20":i<=27?n="21-27":i<=39&&(n="28-39");const d=l[a][n],b=c<=d;return{value:(Math.round(c*10)/10).toString(),unit:"%",category:b?"✓ PASS":"✗ FAIL",color:b?"#50e3c2":"#ff6b6b",breakdown:{standard:d,ageGroup:n,difference:Math.round((c-d)*10)/10}}}const M={bmi:{label:"BMI Calculator",description:"Body Mass Index",metaDescription:"Calculate your BMI instantly with our free body mass index calculator. Supports metric & imperial units (kg/lbs, cm/ft). Includes BMI chart and WHO categories.",icon:"⚖️",fields:["age","gender","height","weight"],fn:F},bmr:{label:"BMR Calculator",description:"Basal Metabolic Rate",metaDescription:"Calculate your Basal Metabolic Rate with our free BMR calculator. Uses science-backed Mifflin-St Jeor equation. Supports metric and imperial units for accuracy.",icon:"🔥",fields:["age","gender","height","weight"],fn:S},tdee:{label:"TDEE Calculator",description:"Total Daily Energy Expenditure",metaDescription:"Find your Total Daily Energy Expenditure free. Accurate TDEE calculator using Mifflin-St Jeor formula. Perfect for weight loss or bulking. Metric & imperial.",icon:"⚡",fields:["age","gender","height","weight","activity"],fn:C},bodyfat:{label:"Body Fat %",description:"US Navy Method",metaDescription:"Estimate your body fat percentage free with our calculator. Uses validated US Navy circumference method. Includes healthy range charts for men and women.",icon:"📊",fields:["gender","height","waist","neck","hip"],fn:L},idealweight:{label:"Ideal Weight",description:"Based on 5 formulas",metaDescription:"Find your ideal weight free using 5 medical formulas — Devine, Robinson, Miller, Hamwi, and BMI. Get a personalized healthy weight range for your height.",icon:"🎯",fields:["gender","height"],fn:P},calories:{label:"Calorie Target",description:"Daily calorie goal",metaDescription:"Calculate your daily calorie target free. Set your goal (lose weight, maintain, or build muscle) and get a science-based calorie number from your TDEE.",icon:"🍎",fields:["age","gender","height","weight","activity","goal"],fn:T},macros:{label:"Macro Split",description:"Protein, carbs, fat breakdown",metaDescription:"Calculate your macros free — get personalized protein, carb, and fat targets in grams. Based on your TDEE and fitness goal. Supports all diet types.",icon:"🥗",fields:["age","gender","height","weight","activity","goal"],fn:A},water:{label:"Water Intake",description:"Daily hydration goal",metaDescription:"Calculate your daily water intake free. Get a personalized hydration goal based on your body weight and activity level. Supports metric and imperial units.",icon:"💧",fields:["weight","exerciseMin"],fn:z},heartrate:{label:"Target Heart Rate",description:"Training zones",metaDescription:"Find your target heart rate zones free. Calculate fat-burn, cardio, and peak zones based on your age and resting HR. Uses accurate Karvonen method.",icon:"❤️",fields:["age","restHR"],fn:j},leanmass:{label:"Lean Body Mass",description:"Muscle vs fat mass",metaDescription:"Calculate your lean body mass free. Estimate muscle mass versus fat mass using validated Boer and James formulas. Supports both metric and imperial units.",icon:"💪",fields:["gender","height","weight"],fn:H},onerep:{label:"1-Rep Max Calculator",description:"Find your maximum strength",metaDescription:"Calculate your one-rep max free with our 1RM calculator. Uses the Epley formula. Get training percentages for strength, hypertrophy, and endurance.",icon:"🏋️",fields:["lift","weight","reps"],fn:N},pace:{label:"Running Pace Calculator",description:"Calculate pace and finish time",metaDescription:"Calculate your running pace free. Find pace per km, predicted finish times for 5K to marathon, and per-km splits. Uses the Riegel prediction formula.",icon:"🏃",fields:["distance","duration"],fn:O},deficit:{label:"Calorie Deficit Calculator",description:"Find your weight loss target",metaDescription:"Calculate your calorie deficit free. Get your daily target, weekly fat-loss projection, and safe minimum intake. Uses the Mifflin-St Jeor equation.",icon:"🎯",fields:["gender","age","height","weight","activity","deficitAmount"],fn:W},sleep:{label:"Sleep Calculator",description:"Find ideal sleep times",metaDescription:"Calculate your ideal sleep and wake times free. Aligns with 90-minute sleep cycles so you wake refreshed. Enter your bedtime or desired wake-up time.",icon:"😴",fields:["sleepMode","wakeTime","sleepTime"],fn:Y},protein:{label:"Protein Intake Calculator",description:"Your daily protein target",metaDescription:"Calculate your daily protein intake free. Get a personalised target in grams based on body weight and goal — muscle gain, fat loss, or recomp.",icon:"🥩",fields:["weight","bodyFat","proteinGoal"],fn:U},armybf:{label:"Army Body Fat Calculator",description:"Official military standard",metaDescription:"Estimate your body fat using the official US Army circumference method free. Check your result against military standards for your age group and sex.",icon:"🪖",fields:["gender","age","height","neck","waist","hip"],fn:G}},x=window.location.pathname.split("/")[2],B=M[x],E=JSON.parse(localStorage.getItem(`fc_calc_${x}`)||"{}"),f=B.fn(E),v=D();v.milestone&&v.message&&setTimeout(()=>{window.confetti&&confetti({particleCount:100,spread:70,origin:{y:.6}}),window.showNotification(v.message,"milestone")},500);K(f,x,E);window.addEventListener("themeChanged",()=>{R(f,x)});J();function J(){const t=JSON.parse(localStorage.getItem("fc_history")||"[]"),a={calculator:B.label,slug:x,value:f.value,unit:f.unit,date:new Date().toLocaleDateString(),timestamp:Date.now()};if(!(t.length>0&&t[0].slug===x&&t[0].value===f.value&&t[0].date===a.date)){t.unshift(a),localStorage.setItem("fc_history",JSON.stringify(t.slice(0,50)));const e=t.slice(0,3).map(o=>({calculator:o.calculator,value:`${o.value} ${o.unit}`,date:o.date}));localStorage.setItem("fc_last_results",JSON.stringify(e))}}document.getElementById("save-result").onclick=()=>{window.showNotification("Result is automatically saved to your history")};function K(t,a,r){const e=document.getElementById("dashboard-root");e.innerHTML=`
      <div class="space-y-8">
        <!-- SECTION 1: Hero Metric -->
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 text-center dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4">
            <span id="hero-number" class="font-mono text-6xl font-bold" data-target="${t.value}">0</span>
            <span class="ml-2 text-2xl text-black/60 dark:text-white/60">${t.unit}</span>
          </div>
          ${t.category?`
            <div class="mb-4">
              <span class="inline-block rounded-full px-4 py-1.5 text-sm font-medium" style="background: ${t.color}20; color: ${t.color}">
                ${t.category}
              </span>
            </div>
          `:""}
          ${t.advice?`<p class="text-lg text-black/80 dark:text-white/80">${t.advice}</p>`:""}
        </div>

        <!-- SECTION 1.5: Result Breakdown Details -->
        <div id="breakdown-details-container"></div>

        <!-- SECTION 2: Visual Chart -->
        <div id="chart-container" class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-6 text-xl font-semibold">Visual breakdown</h3>
          <div class="mx-auto max-w-2xl">
            <canvas id="result-chart"></canvas>
          </div>
        </div>

        <!-- SECTION 3: Insights -->
        <div>
          <h3 class="mb-4 text-xl font-semibold">What this means for you</h3>
          <div id="insights-grid" class="grid gap-4 md:grid-cols-3"></div>
        </div>

        <!-- SECTION 4: Action Plan -->
        <div>
          <h3 class="mb-4 text-xl font-semibold">Your personalized action plan</h3>
          <div id="action-plan" class="space-y-3"></div>
        </div>

        <!-- SECTION 5: Related Calculators -->
        <div>
          <h3 class="mb-4 text-xl font-semibold">You might also want to check...</h3>
          <div id="related-calcs" class="grid gap-4 md:grid-cols-3"></div>
        </div>

        <!-- SECTION 6: Next Steps -->
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-xl font-semibold">What to calculate next</h3>
          <div id="next-steps" class="flex flex-col gap-3 sm:flex-row sm:gap-4"></div>
        </div>
      </div>
    `,_(),R(t,a),q(t,a,r),Z(t,a,r),Q(t,a,r),X(a),ae(a)}function _(){const t=document.getElementById("hero-number"),a=t.dataset.target;if(!(a.includes("–")||a.includes("/"))&&!isNaN(parseFloat(a))){const e=parseFloat(a),o=600,s=30,i=e/s;let c=0;const l=setInterval(()=>{c+=i,c>=e?(t.textContent=a,clearInterval(l)):t.textContent=(Math.round(c*10)/10).toString()},o/s)}else t.textContent=a}async function R(t,a){const r=document.getElementById("chart-container");if(["sleep","pace","deficit","heartrate","armybf","protein"].includes(a)){r&&(r.style.display="none");return}else r&&(r.style.display="block");if(!window.Chart){const d=document.createElement("script");d.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js",document.head.appendChild(d),await new Promise(b=>d.onload=b)}const o=document.getElementById("result-chart").getContext("2d"),s=document.documentElement.classList.contains("dark"),i=s?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)",c=s?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",l=s?"#333":"#eee";let n={options:{responsive:!0,plugins:{legend:{labels:{color:i}}},scales:{x:{ticks:{color:i},grid:{color:c}},y:{ticks:{color:i},grid:{color:c}}}}};if(a==="bmi"){const d=parseFloat(t.value);Object.assign(n,{type:"bar",data:{labels:["Underweight","Normal","Overweight","Obese"],datasets:[{label:"Your BMI",data:[d<18.5?d:0,d>=18.5&&d<25?d:0,d>=25&&d<30?d:0,d>=30?d:0],backgroundColor:["#0070f3","#50e3c2","#f5a623","#ff6b6b"]}]},options:{...n.options,indexAxis:"y",scales:{x:{...n.options.scales.x,max:40},y:n.options.scales.y},plugins:{...n.options.plugins,legend:{display:!1}}}})}else if(a==="bodyfat"){const d=parseFloat(t.value);Object.assign(n,{type:"doughnut",data:{labels:["Body Fat","Lean Mass"],datasets:[{data:[d,100-d],backgroundColor:[t.color,l],borderWidth:0}]},options:{...n.options,cutout:"70%",scales:{}}})}else if(a==="macros"&&t.breakdown)Object.assign(n,{type:"bar",data:{labels:["Macros"],datasets:[{label:"Protein",data:[t.breakdown.protein],backgroundColor:"#50e3c2"},{label:"Fat",data:[t.breakdown.fat],backgroundColor:"#f5a623"},{label:"Carbs",data:[t.breakdown.carbs],backgroundColor:"#0070f3"}]},options:{...n.options,indexAxis:"y",scales:{x:{...n.options.scales.x,stacked:!0},y:{...n.options.scales.y,stacked:!0}}}});else if(t.breakdown){const d=Object.keys(t.breakdown),b=Object.values(t.breakdown).map(p=>parseFloat(p)||0);Object.assign(n,{type:"bar",data:{labels:d.map(p=>p.replace(/([A-Z])/g," $1").trim()),datasets:[{label:"Breakdown",data:b,backgroundColor:"#50e3c2"}]},options:{...n.options,plugins:{...n.options.plugins,legend:{display:!1}}}})}n.type&&new Chart(o,n)}function q(t,a,r){const e=document.getElementById("breakdown-details-container"),o=V(a,t,r);o&&(e.innerHTML=o)}function V(t,a,r){if(t==="bmr"){const e=parseInt(a.value),s=r.gender==="male"?1500:1200;return`
        <div id="bmr-visual-breakdown" style="margin-top: 1.5rem;">
          <!-- 3 context cards -->
          <p style="font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 10px;">What your BMR means in real terms</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 1.25rem;">
            <div style="background: var(--surface-1); border: 0.5px solid var(--border); border-radius: 10px; padding: 12px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 4px;">😴</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Asleep all day</div>
              <div style="font-size: 17px; font-weight: 500; color: var(--text-primary);">${Math.round(e*.95).toLocaleString()}</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">cal burned</div>
            </div>

            <div style="background: var(--surface-1); border: 0.5px solid var(--border-strong); border-radius: 10px; padding: 12px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 4px;">🫀</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Your BMR</div>
              <div style="font-size: 17px; font-weight: 500; color: var(--text-primary);">${e.toLocaleString()}</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">complete rest</div>
            </div>

            <div style="background: var(--surface-1); border: 0.5px solid var(--border); border-radius: 10px; padding: 12px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 4px;">🚶</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Light day</div>
              <div style="font-size: 17px; font-weight: 500; color: var(--text-primary);">${Math.round(e*1.375).toLocaleString()}</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">cal (BMR × 1.375)</div>
            </div>
          </div>

          <!-- Breakdown rows -->
          <div style="border-top: 0.5px solid var(--border); padding-top: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 0.5px solid var(--border); font-size: 13px;">
              <span style="color: var(--text-secondary);">Calories burned per hour at rest</span>
              <span style="font-weight: 500; color: var(--text-primary);">${Math.round(e/24)} cal/hr</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 0.5px solid var(--border); font-size: 13px;">
              <span style="color: var(--text-secondary);">Calories burned during 8 hrs sleep</span>
              <span style="font-weight: 500; color: var(--text-primary);">${Math.round(e/24*8)} cal</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 0.5px solid var(--border); font-size: 13px;">
              <span style="color: var(--text-secondary);">Never eat below (safe floor)</span>
              <span style="font-weight: 500; color: var(--text-primary);">${s.toLocaleString()} cal</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; font-size: 13px;">
              <span style="color: var(--text-secondary);">Formula used</span>
              <span style="font-weight: 500; color: var(--text-primary);">Mifflin-St Jeor</span>
            </div>
          </div>

          <!-- Dynamic interpretation -->
          <div style="background: var(--surface-1); border: 0.5px solid var(--border); border-radius: 8px; padding: 10px 14px; margin-top: 1rem; font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
            ${e<1400?`Your BMR of ${e.toLocaleString()} cal is on the lower end. This is completely normal for a smaller body frame or lighter weight. The most important rule: never eat below your BMR — doing so forces your body to burn muscle tissue for fuel.`:e<1800?`Your BMR of ${e.toLocaleString()} cal is in the average range for adults. Your actual daily needs are higher once activity is factored in — calculate your TDEE next to find the real number to use for any calorie goal.`:e<2200?`Your BMR of ${e.toLocaleString()} cal is above average. Your body burns a significant amount of energy just to exist. This gives you more flexibility when setting calorie targets for weight loss or muscle gain.`:`Your BMR of ${e.toLocaleString()} cal is high — your body is a significant calorie burner at rest. This is typical for taller, heavier, or younger individuals. Use your TDEE to get the full daily burn number including your activity.`}
          </div>

          <!-- Next calculator links -->
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 1rem; padding-top: 1rem; border-top: 0.5px solid var(--border);">
            <span style="font-size: 12px; color: var(--text-muted);">Calculate next →</span>
            <a href="/calculator/tdee" style="font-size: 13px; padding: 5px 12px; border-radius: 99px; border: 0.5px solid var(--border); color: var(--text-secondary); text-decoration: none; background: var(--surface-1);">⚡ TDEE</a>
            <a href="/calculator/calories" style="font-size: 13px; padding: 5px 12px; border-radius: 99px; border: 0.5px solid var(--border); color: var(--text-secondary); text-decoration: none; background: var(--surface-1);">🍎 Calories</a>
          </div>
        </div>
      `}else if(t==="water"){const e=parseFloat(a.value),o=Math.round(e*4.227);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Daily water intake</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${e}L</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Approximately</p>
              <p class="text-2xl font-bold">${o} cups</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">${a.advice}</p>
        </div>
      `}else if(t==="leanmass"){const e=parseInt(a.value),o=r.weight-e,s=(o/r.weight*100).toFixed(1);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Body Composition Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Lean Body Mass</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${e}kg</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Fat Mass</p>
              <p class="text-2xl font-bold text-[#f5a623]">${Math.round(o)}kg</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Body Fat %</p>
              <p class="text-2xl font-bold">${s}%</p>
            </div>
          </div>
        </div>
      `}else if(t==="calories"){const e=parseInt(a.value),o=(e-2500)*7/7700;return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Calorie Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Daily target</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${e} kcal/day</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Weekly change</p>
              <p class="text-2xl font-bold">${o>0?"+":""}${o.toFixed(2)}kg</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">This is your personalized target based on your stats and goal.</p>
        </div>
      `}else{if(t==="idealweight")return a.value.split("–"),`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Ideal Weight Range</h3>
          <div class="rounded-lg border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-[#0a0a0a]">
            <p class="text-sm text-black/60 dark:text-white/60 mb-2">Your healthy weight range</p>
            <p class="text-3xl font-bold text-[#50e3c2]">${a.value} ${a.unit}</p>
            <p class="mt-3 text-xs text-black/40 dark:text-white/40">Based on 5 medical formulas (Devine, Robinson, Miller, Hamwi, BMI method)</p>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">Your ideal weight depends on your muscle mass and bone density. Aim for somewhere within this range.</p>
        </div>
      `;if(t==="sleep"){const e=a.breakdown||{},o=r.sleepMode==="bedtime",s=o?"Bedtimes (When to sleep)":"Wake Times (When to wake up)";let i="";o&&r.wakeTime?i=k(typeof r.wakeTime=="object"?`${String(r.wakeTime.hours).padStart(2,"0")}:${String(r.wakeTime.minutes).padStart(2,"0")}`:r.wakeTime):!o&&r.sleepTime&&(i=k(typeof r.sleepTime=="object"?`${String(r.sleepTime.hours).padStart(2,"0")}:${String(r.sleepTime.minutes).padStart(2,"0")}`:r.sleepTime));const c=[{cycles:6,time:e["6cycles"],label:"Excellent",duration:"9.0 hours",color:"#50e3c2",desc:"Wake up feeling fully rested and energized."},{cycles:5,time:e["5cycles"],label:"Optimal",duration:"7.5 hours",color:"#0070f3",desc:"The recommended standard for healthy adults.",isRecommended:!0},{cycles:4,time:e["4cycles"],label:"Sufficient",duration:"6.0 hours",color:"#f5a623",desc:"Enough sleep to function, but slightly below ideal."},{cycles:3,time:e["3cycles"],label:"Light",duration:"4.5 hours",color:"#ff6b6b",desc:"May leave you feeling groggy. Use sparingly."}];let l=`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-black dark:text-white">Recommended ${s}</h3>
            <p class="text-sm text-black/60 dark:text-white/60 mt-1">
              Based on your target ${o?"wake-up time":"bedtime"} of <strong class="text-black dark:text-white">${i||"07:00 AM"}</strong>.
            </p>
          </div>
          
          <div class="space-y-4">
      `;return c.forEach(n=>{const d=k(n.time),b=n.isRecommended?"border-[#0070f3] dark:border-[#0070f3] shadow-md bg-[#0070f3]/5":"border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20",p=`background-color: ${n.color}20; color: ${n.color}; border: 1px solid ${n.color}40;`;l+=`
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border ${b} transition-all">
            <div class="flex items-center gap-4">
              <div class="text-3xl font-mono font-bold text-black dark:text-white">${d}</div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm font-semibold text-black/80 dark:text-white/80">${n.duration}</span>
                  <span class="text-xs px-2 py-0.5 rounded-full font-medium" style="${p}">${n.label}</span>
                </div>
                <p class="text-xs text-black/50 dark:text-white/50 mt-1">${n.desc}</p>
              </div>
            </div>
            ${n.isRecommended?`
              <div class="text-xs font-bold uppercase tracking-wider text-[#0070f3] bg-[#0070f3]/10 px-3 py-1 rounded-md self-start sm:self-auto">
                ★ Recommended
              </div>
            `:""}
          </div>
        `}),l+=`
          </div>
          
          <div class="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-sm text-black/85 dark:text-white/85 flex items-start gap-3">
            <span class="text-xl">💡</span>
            <div>
              <strong class="font-semibold block text-yellow-600 dark:text-yellow-400">Did you know?</strong>
              People take an average of 14 minutes to fall asleep (sleep latency). The times calculated above have this 14-minute buffer built-in, so you should aim to be in bed and turning off the lights by then!
            </div>
          </div>
        </div>
      `,l}else if(t==="pace"){const e=a.breakdown||{},o=e.predictions||[],s=e.splits||[];let i="";o.forEach(l=>{i+=`
          <tr class="border-b border-black/5 dark:border-white/5">
            <td class="p-3 font-medium text-black dark:text-white">${l.name}</td>
            <td class="p-3 font-bold text-black dark:text-white">${l.time}</td>
            <td class="p-3 text-black/60 dark:text-white/60">${l.pace}</td>
          </tr>
        `});let c="";return s.forEach(l=>{c+=`
          <tr class="border-b border-black/5 dark:border-white/5">
            <td class="p-3 font-semibold text-black dark:text-white">${l.km}</td>
            <td class="p-3 text-black/80 dark:text-white/80">${l.splitTime}</td>
            <td class="p-3 font-bold text-black dark:text-white">${l.cumulativeTime}</td>
          </tr>
        `}),`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Running Stats & Predictions</h3>
          
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Distance</span>
              <span class="text-lg font-bold text-black dark:text-white">${e.distance} km</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Duration</span>
              <span class="text-lg font-bold text-black dark:text-white">${e.duration}</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Avg Pace</span>
              <span class="text-lg font-bold text-[#50e3c2]">${e.pace}</span>
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-black/60 dark:text-white/60 mb-3">Predicted Race Times</h4>
              <div class="overflow-hidden rounded-lg border border-black/5 bg-white dark:border-white/5 dark:bg-[#0a0a0a]">
                <table class="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr class="border-b border-black/5 bg-black/5 dark:border-white/5 dark:bg-white/5">
                      <th class="p-3 font-semibold text-black dark:text-white">Event</th>
                      <th class="p-3 font-semibold text-black dark:text-white">Time</th>
                      <th class="p-3 font-semibold text-black dark:text-white">Pace</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black/5 dark:divide-white/5">
                    ${i}
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-black/40 dark:text-white/40 mt-2">Predictions are calculated using Riegel's formula, assuming proper training for the target distance.</p>
            </div>

            <div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-black/60 dark:text-white/60 mb-3">Kilometer Splits</h4>
              <div class="max-h-[260px] overflow-y-auto rounded-lg border border-black/5 bg-white dark:border-white/5 dark:bg-[#0a0a0a]">
                <table class="w-full border-collapse text-left text-sm">
                  <thead class="sticky top-0 bg-gray-100 dark:bg-[#151515]">
                    <tr class="border-b border-black/5 dark:border-white/5">
                      <th class="p-3 font-semibold text-black dark:text-white">Km</th>
                      <th class="p-3 font-semibold text-black dark:text-white">Split Time</th>
                      <th class="p-3 font-semibold text-black dark:text-white">Total Time</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black/5 dark:divide-white/5">
                    ${c}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `}else if(t==="deficit"){const e=a.breakdown||{},o=parseInt(a.value);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Calorie Deficit Plan</h3>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Maintenance (TDEE)</span>
              <span class="text-base font-bold text-black dark:text-white">${e.tdee} kcal</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Daily Deficit</span>
              <span class="text-base font-bold text-orange-500">-${e.deficit} kcal</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Target Intake</span>
              <span class="text-base font-bold text-[#50e3c2]">${o} kcal</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Safe Limit Floor</span>
              <span class="text-base font-bold text-red-400">${e.minSafe} kcal</span>
            </div>
          </div>

          <div class="bg-white border border-black/5 dark:border-white/5 dark:bg-[#0a0a0a] rounded-xl p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-black/60 dark:text-white/60 mb-3">Weight Loss Projections</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-3 border-r border-black/5 dark:border-white/5 text-center">
                <span class="text-xs text-black/50 dark:text-white/50 block">Weekly Loss</span>
                <span class="text-xl font-bold text-[#50e3c2]">${e.weeklyLoss} kg</span>
                <span class="text-[10px] text-black/40 dark:text-white/40 block mt-0.5">~${(e.weeklyLoss*2.2).toFixed(2)} lbs</span>
              </div>
              <div class="p-3 text-center">
                <span class="text-xs text-black/50 dark:text-white/50 block">Monthly Loss</span>
                <span class="text-xl font-bold text-[#50e3c2]">${e.monthlyLoss} kg</span>
                <span class="text-[10px] text-black/40 dark:text-white/40 block mt-0.5">~${(e.monthlyLoss*2.2).toFixed(2)} lbs</span>
              </div>
            </div>
          </div>
        </div>
      `}else if(t==="heartrate"){const e=a.breakdown||{};return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Heart Rate Training Zones</h3>
          <p class="text-sm text-black/60 dark:text-white/60 mb-6">
            Structure your workouts based on these personalized heart rate zones. Your calculated Max HR is <strong class="text-black dark:text-white">${e.max} bpm</strong>.
          </p>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 rounded-xl border border-black/5 bg-white dark:border-white/5 dark:bg-[#0a0a0a]">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-black/40 dark:text-white/40">Zone 1</span>
                <h4 class="font-semibold text-sm text-black dark:text-white">Active Recovery (50-60%)</h4>
                <p class="text-xs text-black/50 dark:text-white/50">Ideal for warm-ups, cool-downs, and recovery days.</p>
              </div>
              <div class="text-lg font-mono font-bold text-blue-400">${e.warmup} <span class="text-xs font-normal text-black/40 dark:text-white/40">bpm</span></div>
            </div>
            
            <div class="flex items-center justify-between p-3 rounded-xl border border-emerald-500/25 bg-emerald-500/5">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Zone 2 ★ Recommended</span>
                <h4 class="font-semibold text-sm text-emerald-700 dark:text-emerald-300">Fat Burn / Aerobic Base (60-70%)</h4>
                <p class="text-xs text-emerald-600/70 dark:text-emerald-400/70">Maximizes fat oxidation and builds cardiovascular endurance.</p>
              </div>
              <div class="text-lg font-mono font-bold text-emerald-500">${e.fatburn} <span class="text-xs font-normal text-emerald-600/50 dark:text-emerald-400/50">bpm</span></div>
            </div>
            
            <div class="flex items-center justify-between p-3 rounded-xl border border-black/5 bg-white dark:border-white/5 dark:bg-[#0a0a0a]">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-black/40 dark:text-white/40">Zone 3</span>
                <h4 class="font-semibold text-sm text-black dark:text-white">Target Cardio (70-85%)</h4>
                <p class="text-xs text-black/50 dark:text-white/50">Improves aerobic fitness and performance capacity.</p>
              </div>
              <div class="text-lg font-mono font-bold text-orange-400">${e.cardio} <span class="text-xs font-normal text-black/40 dark:text-white/40">bpm</span></div>
            </div>
          </div>
        </div>
      `}else if(t==="onerep"){a.breakdown;const e=parseFloat(a.value),o=[{pct:100,reps:1,val:e},{pct:95,reps:2,val:e*.95},{pct:90,reps:4,val:e*.9},{pct:85,reps:6,val:e*.85},{pct:80,reps:8,val:e*.8},{pct:75,reps:10,val:e*.75},{pct:70,reps:12,val:e*.7},{pct:65,reps:15,val:e*.65},{pct:60,reps:20,val:e*.6}];let s="";return o.forEach(i=>{s+=`
          <tr class="border-b border-black/5 dark:border-white/5">
            <td class="p-3 font-semibold text-black dark:text-white">${i.pct}%</td>
            <td class="p-3 font-bold text-black dark:text-white">${Math.round(i.val)} kg</td>
            <td class="p-3 text-black/60 dark:text-white/60">${i.reps} rep${i.reps>1?"s":""}</td>
          </tr>
        `}),`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Estimated Weight Chart</h3>
          <p class="text-sm text-black/60 dark:text-white/60 mb-6">
            Use this table to set your working weights based on percentages of your 1-Rep Max of <strong class="text-[#50e3c2]">${e} kg</strong>.
          </p>
          
          <div class="overflow-hidden rounded-lg border border-black/5 bg-white dark:border-white/5 dark:bg-[#0a0a0a]">
            <table class="w-full border-collapse text-left text-sm">
              <thead>
                <tr class="border-b border-black/5 bg-black/5 dark:border-white/5 dark:bg-white/5">
                  <th class="p-3 font-semibold text-black dark:text-white">% of 1RM</th>
                  <th class="p-3 font-semibold text-black dark:text-white">Weight</th>
                  <th class="p-3 font-semibold text-black dark:text-white">Est. Reps</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-black/5 dark:divide-white/5">
                ${s}
              </tbody>
            </table>
          </div>
        </div>
      `}else if(t==="armybf"){const e=a.breakdown||{},o=parseFloat(a.value),i=a.category==="✓ PASS"?"#50e3c2":"#ff6b6b",c=e.difference>0?`<span class="text-red-400 font-semibold">${e.difference}% above standard</span>`:`<span class="text-[#50e3c2] font-semibold">${Math.abs(e.difference)}% below standard (Passing)</span>`;return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">US Army Standard Evaluation</h3>
          
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Your Body Fat</span>
              <span class="text-lg font-bold text-black dark:text-white">${o}%</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Army Limit (${e.ageGroup} yrs)</span>
              <span class="text-lg font-bold text-black dark:text-white">${e.standard}%</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]" style="border-color: ${i}40; background-color: ${i}10;">
              <span class="text-xs text-black/50 dark:text-white/50 block">Evaluation</span>
              <span class="text-lg font-bold" style="color: ${i}">${a.category}</span>
            </div>
          </div>

          <div class="p-4 rounded-xl border border-black/5 bg-white dark:border-white/5 dark:bg-[#0a0a0a] text-sm text-black/80 dark:text-white/80">
            <strong class="font-semibold block mb-1">Standard Comparison:</strong>
            Based on your age group of <strong class="text-black dark:text-white">${e.ageGroup}</strong>, your body fat is ${c}. You must meet this standard to qualify for enlistment and maintain compliance under the Army Body Composition Program (ABCP).
          </div>
        </div>
      `}else if(t==="protein"){const e=a.breakdown||{};return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Protein Intake Targets</h3>
          
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Minimum Intake</span>
              <span class="text-base font-bold text-black dark:text-white">${e.floor} g/day</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Target Goal</span>
              <span class="text-base font-bold text-[#50e3c2]">${e.target} g/day</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Maximum Target</span>
              <span class="text-base font-bold text-black dark:text-white">${e.ceiling} g/day</span>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="p-4 rounded-xl bg-white border border-black/5 dark:border-white/5 dark:bg-[#0a0a0a] text-center">
              <span class="text-xs text-black/50 dark:text-white/50 block">Calories Contribution</span>
              <span class="text-2xl font-bold text-black dark:text-white">${e.calories} kcal</span>
              <span class="text-[10px] text-black/40 dark:text-white/40 block mt-0.5">at 4 kcal per gram of protein</span>
            </div>
            <div class="p-4 rounded-xl bg-white border border-black/5 dark:border-white/5 dark:bg-[#0a0a0a] text-center">
              <span class="text-xs text-black/50 dark:text-white/50 block">Target per Meal (4 Meals)</span>
              <span class="text-2xl font-bold text-[#50e3c2]">${Math.round(e.target/4)} g</span>
              <span class="text-[10px] text-black/40 dark:text-white/40 block mt-0.5">Spread protein intake for optimal synthesis</span>
            </div>
          </div>
        </div>
      `}}return""}function Z(t,a,r){const e=ee(a,t,r),o=document.getElementById("insights-grid");o.innerHTML=e.map((s,i)=>`
      <div class="insight-card rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]" style="animation-delay: ${i*100}ms">
        <div class="mb-3 text-3xl">${s.icon}</div>
        <h4 class="mb-2 font-semibold">${s.label}</h4>
        <p class="text-sm text-black/60 dark:text-white/60">${s.text}</p>
      </div>
    `).join("")}function Q(t,a,r){const e=te(a,t,r),o=document.getElementById("action-plan");o.innerHTML=e.map((s,i)=>`
      <div class="action-card flex gap-4 rounded-lg border border-black/10 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#111]" style="animation-delay: ${i*100}ms">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 font-semibold dark:bg-white/10">${i+1}</div>
        <div>
          <h4 class="mb-1 font-semibold">${s.icon} ${s.title}</h4>
          <p class="text-sm text-black/60 dark:text-white/60">${s.description}</p>
        </div>
      </div>
    `).join("")}function X(t){const a=I(t),r=document.getElementById("related-calcs");r.innerHTML=a.map(e=>{const o=M[e];return`
        <a href="/calculator/${e}" class="block rounded-lg border border-black/10 bg-gray-50 p-6 transition-colors hover:border-[#0070f3] dark:border-white/10 dark:bg-[#111]">
          <div class="mb-3 text-3xl">${o.icon}</div>
          <h4 class="mb-1 font-semibold">${o.label}</h4>
          <p class="text-sm text-black/60 dark:text-white/60">${o.description}</p>
        </a>
      `}).join("")}function ee(t,a,r){if(t==="bmi"){const e=Math.round(10*r.weight+6.25*r.height-5*r.age+(r.gender==="male"?5:-161)),o=22*Math.pow(r.height/100,2),s=Math.abs(r.weight-o);return[{icon:"⚡",label:"Metabolism",text:`Your BMR suggests you burn ${e} calories at rest daily`},{icon:"🎯",label:"Your goal",text:`To reach ideal weight, adjust by ${Math.round(s)}kg over 12–16 weeks`},{icon:"💧",label:"Daily target",text:`Drink ${Math.round(r.weight*.035)}L of water. Stay hydrated for optimal metabolism`}]}else if(t==="tdee"){const e=Math.round(r.weight*2);return[{icon:"🔥",label:"Daily burn",text:`You burn ${a.value} calories per day with your activity level`},{icon:"🥩",label:"Protein target",text:`Aim for ${e}g protein daily to support your activity`},{icon:"📊",label:"Adjustment",text:"Subtract 500 for weight loss, add 300 for muscle gain"}]}else{if(t==="calories")return[{icon:"🎯",label:"Your target",text:`${a.value} calories per day to reach your goal`},{icon:"⏱",label:"Timeline",text:"Expect ~0.5kg change per week at this rate"},{icon:"🍽",label:"Meal planning",text:"Split into 3–4 meals of 400–600 calories each"}];if(t==="macros")return[{icon:"🥩",label:"Protein",text:`${a.breakdown.protein}g daily — 4 calories per gram`},{icon:"🥑",label:"Fat",text:`${a.breakdown.fat}g daily — essential for hormones`},{icon:"🍚",label:"Carbs",text:`${a.breakdown.carbs}g daily — fuel for workouts`}];if(t==="sleep"){const e=r.sleepMode==="bedtime",o=a.value,s=k(o);return[{icon:"⏰",label:"Optimal Time",text:`Aim to ${e?"sleep":"wake up"} at ${s} to complete 5 full sleep cycles`},{icon:"🌀",label:"Sleep Cycle",text:"Each cycle is ~90 minutes. Waking up mid-cycle causes that groggy feeling"},{icon:"💤",label:"Wind Down",text:"Start your bedtime routine 30–45 minutes before sleep time to lower heart rate"}]}else if(t==="pace"){const e=a.value,o=a.category;return[{icon:"🏃‍♂️",label:"Runner Level",text:`Your pace of ${e} ranks you as an ${o} level runner.`},{icon:"📈",label:"Race Ready",text:"Use Riegel's predicted times as your starting goal targets for races."},{icon:"🫁",label:"Aerobic Base",text:"To improve your pace, run 80% of your miles at a slower, conversational effort."}]}}return[{icon:"📊",label:"Your result",text:a.advice||"See breakdown above"},{icon:"🎯",label:"Next steps",text:"Track this metric weekly to monitor progress"},{icon:"💪",label:"Stay consistent",text:"Small daily actions compound into big results"}]}function te(t,a,r){if(t==="bmi"||t==="calories"){const e=t==="calories"?a.value:Math.round(10*r.weight+6.25*r.height-5*r.age)*1.5-500,o=Math.round(r.weight*2),s=Math.round(r.weight*.035*10)/10;return[{icon:"🍽",title:`Eat ${e} calories/day`,description:"A moderate deficit is safe and sustainable"},{icon:"🥩",title:`Hit ${o}g protein`,description:"Preserves muscle while losing fat"},{icon:"🚶",title:"Walk 8,000 steps",description:"Burns ~300 extra calories, lowest injury risk"},{icon:"💧",title:`Drink ${s}L water`,description:"Boosts metabolism by up to 30% for 1 hour"},{icon:"😴",title:"Sleep 7–9 hours",description:"Poor sleep raises cortisol, causes fat storage"}]}else if(t==="sleep"){const e=r.sleepMode==="bedtime",o=k(a.value);return[{icon:"🔔",title:`${e?"Bedtime alarm":"Wake up target"} at ${o}`,description:`Set a reminder to ${e?"wind down and prepare for sleep":"wake up"} at this exact time`},{icon:"📱",title:"No screens 1 hour before",description:"Blue light suppresses melatonin, delaying your sleep latency"},{icon:"☕",title:"Cut caffeine by 2 PM",description:"Caffeine has a half-life of 6 hours, disrupting deep sleep phases"},{icon:"🌡️",title:"Cool bedroom (18°C / 65°F)",description:"A cooler room temperature mimics the body's natural temperature drop during sleep"},{icon:"🧘",title:"14-min sleep buffer",description:"Go to bed 15 minutes before your target sleep time to allow your mind to settle"}]}else{if(t==="pace")return[{icon:"🚦",title:"80/20 Rule training",description:"Keep 80% of weekly runs easy (conversational pace) and only 20% hard (tempo/intervals) to build endurance."},{icon:"⏱️",title:"Practice pacing consistency",description:"Focus on running even splits (same pace for every km) rather than starting too fast and burning out."},{icon:"👟",title:"Add a long run weekly",description:"Gradually increase your longest run distance by 10% each week to build metabolic efficiency."},{icon:"💪",title:"Strength train twice a week",description:"Focus on squats, lunges, and calf raises to build running economy and prevent injuries."},{icon:"💤",title:"Prioritize recovery",description:"Your muscles grow stronger during rest. Ensure you get 7-9 hours of sleep and adequate protein."}];if(t==="macros")return[{icon:"🥩",title:`${a.breakdown.protein}g protein`,description:"Spread across 4 meals for optimal absorption"},{icon:"🥑",title:`${a.breakdown.fat}g fat`,description:"Prioritize unsaturated fats from nuts, fish, olive oil"},{icon:"🍚",title:`${a.breakdown.carbs}g carbs`,description:"Time around workouts for best performance"},{icon:"📱",title:"Track in MyFitnessPal",description:"Log food for 2 weeks to build awareness"},{icon:"⚖️",title:"Weigh weekly",description:"Same time, same conditions — track trends not daily fluctuations"}];if(t==="water")return[{icon:"💧",title:`Drink ${a.value}L daily`,description:"About 8–10 cups spread throughout the day"},{icon:"🏃",title:"Add 500ml per workout",description:"Replace fluids lost through sweat"},{icon:"⏰",title:"Drink on a schedule",description:"Set hourly reminders until it becomes habit"},{icon:"🥤",title:"Start meals with water",description:"Helps with portion control and digestion"},{icon:"🚰",title:"Carry a bottle",description:"Visual reminder and easy access encourages consistency"}]}return[{icon:"📊",title:"Track this metric",description:"Measure weekly to monitor progress"},{icon:"🎯",title:"Set a goal",description:"Use this baseline to set realistic targets"},{icon:"💪",title:"Stay consistent",description:"Small daily actions compound into big results"}]}function I(t){return{bmi:["bodyfat","calories","idealweight"],bmr:["tdee","calories","macros"],tdee:["calories","macros","water"],bodyfat:["bmi","leanmass","idealweight"],calories:["macros","tdee","water"],macros:["calories","tdee","water"],water:["tdee","macros","heartrate"],heartrate:["tdee","water","bmr"],leanmass:["bodyfat","bmi","macros"],idealweight:["bmi","bodyfat","calories"]}[t]||["bmi","tdee","calories"]}function ae(t){const a=I(t).slice(0,2),r=document.getElementById("next-steps");r.innerHTML=a.map(e=>{const o=M[e];return`
        <a href="/calculator/${e}" class="flex-1 rounded-lg border border-black/10 bg-white py-4 px-4 text-center transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div class="mb-2 text-2xl">${o.icon}</div>
          <div class="text-sm font-semibold">→ ${o.label}</div>
        </a>
      `}).join("")}function k(t){if(!t)return"";const[a,r]=t.split(":");let e=parseInt(a);const o=parseInt(r),s=e>=12?"PM":"AM";e=e%12,e=e||12;const i=o.toString().padStart(2,"0");return`${e}:${i} ${s}`}
