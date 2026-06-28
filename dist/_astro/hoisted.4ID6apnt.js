import{r as E}from"./hoisted.Da4MVGFc.js";function F(e){const a=e.weight/Math.pow(e.height/100,2),o=Math.round(a*10)/10;let t="",r="",i="";return a<18.5?(t="Underweight",r="#0070f3",i="Consider consulting a nutritionist to reach a healthy weight"):a<25?(t="Normal",r="#50e3c2",i="Great! Maintain your current lifestyle"):a<30?(t="Overweight",r="#f5a623",i="Consider a balanced diet and regular exercise"):(t="Obese",r="#ff6b6b",i="Consult a healthcare professional for a personalized plan"),{value:o.toString(),unit:"BMI",category:t,color:r,advice:i}}function S(e){const{weight:a,height:o,age:t,gender:r}=e;let i=10*a+6.25*o-5*t;return i+=r==="male"?5:-161,{value:Math.round(i).toString(),unit:"kcal/day",advice:"This is your baseline calorie burn at complete rest"}}function C(e){const a=S(e),o=parseInt(a.value),t={sedentary:1.2,light:1.375,moderate:1.55,very:1.725,athlete:1.9};return{value:Math.round(o*t[e.activity]).toString(),unit:"kcal/day",advice:"Your total daily calorie burn including activity",breakdown:{bmr:a.value,multiplier:t[e.activity]}}}function L(e){const{gender:a,height:o,waist:t,neck:r,hip:i}=e;let s;if(a==="male"){const c=Math.log10(t-r),b=Math.log10(o);s=495/(1.0324-.19077*c+.15456*b)-450}else{const c=Math.log10(t+i-r),b=Math.log10(o);s=495/(1.29579-.35004*c+.221*b)-450}const d=Math.round(s*10)/10;let n="",l="";return a==="male"?s<6?(n="Essential",l="#0070f3"):s<14?(n="Athletes",l="#50e3c2"):s<18?(n="Fitness",l="#50e3c2"):s<25?(n="Average",l="#f5a623"):(n="Obese",l="#ff6b6b"):s<14?(n="Essential",l="#0070f3"):s<21?(n="Athletes",l="#50e3c2"):s<25?(n="Fitness",l="#50e3c2"):s<32?(n="Average",l="#f5a623"):(n="Obese",l="#ff6b6b"),{value:d.toString(),unit:"%",category:n,color:l}}function P(e){const{gender:a,height:o}=e,r=o/2.54-60,i=a==="male"?52+1.9*r:49+1.7*r,s=a==="male"?56.2+1.41*r:53.1+1.36*r,d=a==="male"?48+2.7*r:45.5+2.2*r,n=a==="male"?50+2.3*r:45.5+2.3*r,l=22*Math.pow(o/100,2),c=[i,s,d,n,l],b=Math.round(Math.min(...c)),m=Math.round(Math.max(...c));return{value:`${b}–${m}`,unit:"kg",advice:"Range based on 5 medical formulas"}}function T(e){const a=C(e),o=parseInt(a.value),t={lose:-500,maintain:0,build:300},r=o+t[e.goal],i={lose:"0.5kg loss/week",maintain:"maintain weight",build:"0.25kg gain/week"};return{value:r.toString(),unit:"kcal/day",advice:i[e.goal],breakdown:{tdee:o.toString(),adjustment:t[e.goal]}}}function A(e){const a=T(e),o=parseInt(a.value),t=Math.round(e.weight*2),r=t*4,i=Math.round(o*.25),s=Math.round(i/9),d=o-r-i,n=Math.round(d/4);return{value:`${t}g / ${s}g / ${n}g`,unit:"P / F / C",breakdown:{protein:t,fat:s,carbs:n,calories:o}}}function j(e){const a=e.weight*35,o=(e.exerciseMin||0)/30*350,t=Math.round((a+o)/1e3*10)/10;return{value:t.toString(),unit:"L/day",advice:`${Math.round(t*4)} cups per day`,breakdown:{base:Math.round(a),exercise:Math.round(o)}}}function z(e){const a=220-e.age,o=e.restHR||70,t=a-o,r=`${Math.round(o+t*.5)}–${Math.round(o+t*.6)}`,i=`${Math.round(o+t*.6)}–${Math.round(o+t*.7)}`,s=`${Math.round(o+t*.7)}–${Math.round(o+t*.85)}`;return{value:s,unit:"bpm",advice:"Target for cardio training",breakdown:{warmup:r,fatburn:i,cardio:s,max:a}}}function N(e){const{gender:a,weight:o,height:t}=e;let r;a==="male"?r=.407*o+.267*t-19.2:r=.252*o+.473*t-48.3;const i=o-r,s=i/o*100;return{value:Math.round(r).toString(),unit:"kg",advice:`Fat mass: ${Math.round(i)}kg (${Math.round(s)}%)`,breakdown:{lbm:Math.round(r),fat:Math.round(i)}}}function O(e){const a=e.weight||60,o=e.reps||5,t=e.lift||"Lift",r=a*(1+o/30),i=Math.round(r*10)/10;let s="";return o<=3?s="Highly accurate":o<=6?s="Good accuracy":s="Moderate accuracy",{value:i.toString(),unit:"kg",category:t,breakdown:{"90%":Math.round(i*.9),"80%":Math.round(i*.8),"70%":Math.round(i*.7),"60%":Math.round(i*.6)},advice:s,color:o<=3?"#50e3c2":o<=6?"#f5a623":"#0070f3"}}function k(e){const a=Math.floor(e/3600),o=Math.floor(e%3600/60),t=Math.round(e%60);return a>0?`${a}:${o.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`:`${o}:${t.toString().padStart(2,"0")}`}function H(e){const a=e.distance||10;let o=0,t=0,r=0;e.duration&&typeof e.duration=="object"?(o=e.duration.hours??0,t=e.duration.minutes??0,r=e.duration.seconds??0):(o=e.hours??0,t=e.minutes??45,r=e.seconds??0);const i=o*3600+t*60+r,s=i/a;let d=Math.floor(s/60),n=Math.round(s%60);n===60&&(n=0,d+=1);const l=`${d}:${n.toString().padStart(2,"0")}/km`;let c="Intermediate";s<240?c="Elite":s<300?c="Competitive":s<360?c="Strong":s<420?c="Intermediate":c="Beginner";const b=[],m=Math.min(Math.ceil(a),50);for(let p=1;p<=m;p++){const h=Math.min(p*s,i),u=p===Math.ceil(a)&&a%1!==0?a%1*s:s;b.push({km:p,splitTime:k(u),cumulativeTime:k(h)})}const g=[{name:"5K",dist:5},{name:"10K",dist:10},{name:"Half Marathon",dist:21.0975},{name:"Marathon",dist:42.195}].map(p=>{const h=i*Math.pow(p.dist/a,1.06),u=h/p.dist;let $=Math.floor(u/60),v=Math.round(u%60);return v===60&&(v=0,$+=1),{name:p.name,time:k(h),pace:`${$}:${v.toString().padStart(2,"0")}/km`}});return{value:l,unit:"pace",category:c,breakdown:{pace:l,distance:a.toFixed(2),duration:k(i),splits:b,predictions:g}}}function Y(e){const a=e.weight||70,o=e.height||170,t=e.age||30,r=e.gender||"male",i=e.activity||"moderate",s=e.deficitAmount||500;let d=10*a+6.25*o-5*t;d+=r==="male"?5:-161;const l=Math.round(d*{sedentary:1.2,light:1.375,moderate:1.55,very:1.725,athlete:1.9}[i]),c=r==="male"?1500:1200,b=Math.max(l-s,c),m=s*7/7700,g=m*4.33;return{value:b.toString(),unit:"kcal/day",breakdown:{tdee:l,deficit:s,weeklyLoss:m.toFixed(2),monthlyLoss:g.toFixed(2),minSafe:c}}}function W(e){const a=e.sleepMode==="bedtime"?e.wakeTime:e.sleepTime,o=e.sleepMode||"bedtime";if(!a)return{value:"06:30",unit:"time",advice:"Enter a time to calculate"};const t=[2,3,4,5,6],r=14,i=90;let s=0,d=0;if(typeof a=="object"&&a!==null)s=a.hours??7,d=a.minutes??0;else if(typeof a=="string"&&a.includes(":")){const b=a.split(":").map(Number);s=b[0]??7,d=b[1]??0}else s=7,d=0;const n=s*60+d,l={};let c="";return t.forEach(b=>{const m=b*i+r;let g=o==="bedtime"?n-m:n+m;for(;g<0;)g+=1440;for(;g>=1440;)g-=1440;const p=Math.floor(g/60),h=Math.round(g%60),u=`${String(p).padStart(2,"0")}:${String(h).padStart(2,"0")}`;l[`${b}cycles`]=u,b===5&&(c=u)}),{value:c,unit:"time",breakdown:l,advice:"5 cycles = 7.5 hours (optimal)"}}function K(e){const a=e.weight||70,o=e.bodyFat||20,t=e.proteinGoal||"maintain",r=a*(1-o/100),i={maintain:{min:1.2,max:1.6},loss:{min:1.8,max:2.4},gain:{min:1.6,max:2.2},recomp:{min:2,max:2.6},athlete:{min:1.7,max:2.5}},s=i[t]||i.maintain,d=Math.round(r*s.min),n=Math.round(r*s.max),l=Math.round((d+n)/2);return{value:`${d}–${n}`,unit:"g/day",breakdown:{floor:d,target:l,ceiling:n,perKg:s.min.toFixed(1),calories:l*4}}}function U(e){const{gender:a,height:o,neck:t,waist:r,hip:i,age:s}=e;let d;a==="male"?d=86.01*Math.log10(r-t)-70.041*Math.log10(o)+36.76:d=163.205*Math.log10(r+i-t)-97.684*Math.log10(o)-78.387;const n={male:{"17-20":20,"21-27":22,"28-39":24,"40+":26},female:{"17-20":30,"21-27":32,"28-39":34,"40+":36}};let l="40+";s<=20?l="17-20":s<=27?l="21-27":s<=39&&(l="28-39");const c=n[a][l],b=d<=c;return{value:(Math.round(d*10)/10).toString(),unit:"%",category:b?"✓ PASS":"✗ FAIL",color:b?"#50e3c2":"#ff6b6b",breakdown:{standard:c,ageGroup:l,difference:Math.round((d-c)*10)/10}}}const M={bmi:{label:"BMI Calculator",description:"Body Mass Index",metaDescription:"Free BMI calculator — enter your height and weight to instantly find your Body Mass Index, understand your result, and see what it means for your health.",icon:"⚖️",fields:["age","gender","height","weight"],fn:F},bmr:{label:"BMR Calculator",description:"Basal Metabolic Rate",metaDescription:"Calculate your Basal Metabolic Rate (BMR) free — find the exact calories your body burns at rest using the science-backed Mifflin-St Jeor equation.",icon:"🔥",fields:["age","gender","height","weight"],fn:S},tdee:{label:"TDEE Calculator",description:"Total Daily Energy Expenditure",metaDescription:"Free TDEE calculator — find your Total Daily Energy Expenditure based on your activity level. Know exactly how many calories you burn each day.",icon:"⚡",fields:["age","gender","height","weight","activity"],fn:C},bodyfat:{label:"Body Fat %",description:"US Navy Method",metaDescription:"Estimate your body fat percentage free — uses the Navy method and BMI formula. Understand your result with healthy range charts and next steps.",icon:"📊",fields:["gender","height","waist","neck","hip"],fn:L},idealweight:{label:"Ideal Weight",description:"Based on 5 formulas",metaDescription:"Find your ideal weight free — calculated using 5 medical formulas (Devine, Robinson, Miller, Hamwi, BMI method) so you get a realistic healthy range.",icon:"🎯",fields:["gender","height"],fn:P},calories:{label:"Calorie Target",description:"Daily calorie goal",metaDescription:"Free daily calorie intake calculator — set your weight goal and get your exact calorie target for weight loss, maintenance, or muscle gain.",icon:"🍎",fields:["age","gender","height","weight","activity","goal"],fn:T},macros:{label:"Macro Split",description:"Protein, carbs, fat breakdown",metaDescription:"Free macro calculator — get your personalised protein, carbohydrate, and fat targets based on your TDEE and fitness goal.",icon:"🥗",fields:["age","gender","height","weight","activity","goal"],fn:A},water:{label:"Water Intake",description:"Daily hydration goal",metaDescription:"Calculate your daily water intake free — get a hydration goal based on your weight, activity level, and climate.",icon:"💧",fields:["weight","exerciseMin"],fn:j},heartrate:{label:"Target Heart Rate",description:"Training zones",metaDescription:"Free target heart rate calculator — find your fat-burn, cardio, and peak training zones based on your age and resting heart rate.",icon:"❤️",fields:["age","restHR"],fn:z},leanmass:{label:"Lean Body Mass",description:"Muscle vs fat mass",metaDescription:"Calculate your lean body mass free — estimate your muscle mass vs fat mass using the Boer and James formulas.",icon:"💪",fields:["gender","height","weight"],fn:N},onerep:{label:"1-Rep Max Calculator",description:"Find your maximum strength",metaDescription:"Free 1-rep max calculator — enter the weight you lifted and reps completed to instantly estimate your 1RM and get training weights for strength, hypertrophy, and endurance.",icon:"🏋️",fields:["lift","weight","reps"],fn:O},pace:{label:"Running Pace Calculator",description:"Calculate pace and finish time",metaDescription:"Free running pace calculator — find your pace per km, predicted finish time, or total distance. Supports 5K, 10K, half marathon, and full marathon with per-km split table.",icon:"🏃",fields:["distance","duration"],fn:H},deficit:{label:"Calorie Deficit Calculator",description:"Find your weight loss target",metaDescription:"Free calorie deficit calculator — enter your stats and goal to find your exact daily calorie target, weekly fat loss projection, and safe minimum intake. Based on Mifflin-St Jeor.",icon:"🎯",fields:["gender","age","height","weight","activity","deficitAmount"],fn:Y},sleep:{label:"Sleep Calculator",description:"Find ideal sleep times",metaDescription:"Free sleep calculator — enter your wake-up time or bedtime to find the optimal sleep and wake times aligned with 90-minute sleep cycles so you wake up refreshed, not groggy.",icon:"😴",fields:["sleepMode","wakeTime","sleepTime"],fn:W},protein:{label:"Protein Intake Calculator",description:"Your daily protein target",metaDescription:"Free protein intake calculator — get your personalised daily protein target in grams based on your body weight, goal (muscle gain, weight loss, recomp), and training frequency.",icon:"🥩",fields:["weight","bodyFat","proteinGoal"],fn:K},armybf:{label:"Army Body Fat Calculator",description:"Official military standard",metaDescription:"Free Army body fat calculator — uses the official US Army circumference formula to estimate body fat percentage and check your result against Army standards for your age and sex.",icon:"🪖",fields:["gender","age","height","neck","waist","hip"],fn:U}},f=window.location.pathname.split("/")[2],B=M[f],D=JSON.parse(localStorage.getItem(`fc_calc_${f}`)||"{}"),y=B.fn(D),w=E();w.milestone&&w.message&&setTimeout(()=>{window.confetti&&confetti({particleCount:100,spread:70,origin:{y:.6}}),window.showNotification(w.message,"milestone")},500);J(y,f,D);window.addEventListener("themeChanged",()=>{I(y,f)});G();function G(){const e=JSON.parse(localStorage.getItem("fc_history")||"[]"),a={calculator:B.label,slug:f,value:y.value,unit:y.unit,date:new Date().toLocaleDateString(),timestamp:Date.now()};if(!(e.length>0&&e[0].slug===f&&e[0].value===y.value&&e[0].date===a.date)){e.unshift(a),localStorage.setItem("fc_history",JSON.stringify(e.slice(0,50)));const t=e.slice(0,3).map(r=>({calculator:r.calculator,value:`${r.value} ${r.unit}`,date:r.date}));localStorage.setItem("fc_last_results",JSON.stringify(t))}}document.getElementById("save-result").onclick=()=>{window.showNotification("Result is automatically saved to your history")};function J(e,a,o){const t=document.getElementById("dashboard-root");t.innerHTML=`
      <div class="space-y-8">
        <!-- SECTION 1: Hero Metric -->
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 text-center dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4">
            <span id="hero-number" class="font-mono text-6xl font-bold" data-target="${e.value}">0</span>
            <span class="ml-2 text-2xl text-black/60 dark:text-white/60">${e.unit}</span>
          </div>
          ${e.category?`
            <div class="mb-4">
              <span class="inline-block rounded-full px-4 py-1.5 text-sm font-medium" style="background: ${e.color}20; color: ${e.color}">
                ${e.category}
              </span>
            </div>
          `:""}
          ${e.advice?`<p class="text-lg text-black/80 dark:text-white/80">${e.advice}</p>`:""}
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
    `,_(),I(e,a),V(e,a,o),Z(e,a,o),Q(e,a,o),X(a),ae(a)}function _(){const e=document.getElementById("hero-number"),a=e.dataset.target;if(!(a.includes("–")||a.includes("/"))&&!isNaN(parseFloat(a))){const t=parseFloat(a),r=600,i=30,s=t/i;let d=0;const n=setInterval(()=>{d+=s,d>=t?(e.textContent=a,clearInterval(n)):e.textContent=(Math.round(d*10)/10).toString()},r/i)}else e.textContent=a}async function I(e,a){const o=document.getElementById("chart-container");if(a==="sleep"||a==="pace"){o&&(o.style.display="none");return}else o&&(o.style.display="block");if(!window.Chart){const l=document.createElement("script");l.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js",document.head.appendChild(l),await new Promise(c=>l.onload=c)}const t=document.getElementById("result-chart").getContext("2d"),r=document.documentElement.classList.contains("dark"),i=r?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)",s=r?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",d=r?"#333":"#eee";let n={options:{responsive:!0,plugins:{legend:{labels:{color:i}}},scales:{x:{ticks:{color:i},grid:{color:s}},y:{ticks:{color:i},grid:{color:s}}}}};if(a==="bmi"){const l=parseFloat(e.value);Object.assign(n,{type:"bar",data:{labels:["Underweight","Normal","Overweight","Obese"],datasets:[{label:"Your BMI",data:[l<18.5?l:0,l>=18.5&&l<25?l:0,l>=25&&l<30?l:0,l>=30?l:0],backgroundColor:["#0070f3","#50e3c2","#f5a623","#ff6b6b"]}]},options:{...n.options,indexAxis:"y",scales:{x:{...n.options.scales.x,max:40},y:n.options.scales.y},plugins:{...n.options.plugins,legend:{display:!1}}}})}else if(a==="bodyfat"){const l=parseFloat(e.value);Object.assign(n,{type:"doughnut",data:{labels:["Body Fat","Lean Mass"],datasets:[{data:[l,100-l],backgroundColor:[e.color,d],borderWidth:0}]},options:{...n.options,cutout:"70%",scales:{}}})}else if(a==="macros"&&e.breakdown)Object.assign(n,{type:"bar",data:{labels:["Macros"],datasets:[{label:"Protein",data:[e.breakdown.protein],backgroundColor:"#50e3c2"},{label:"Fat",data:[e.breakdown.fat],backgroundColor:"#f5a623"},{label:"Carbs",data:[e.breakdown.carbs],backgroundColor:"#0070f3"}]},options:{...n.options,indexAxis:"y",scales:{x:{...n.options.scales.x,stacked:!0},y:{...n.options.scales.y,stacked:!0}}}});else if(e.breakdown){const l=Object.keys(e.breakdown),c=Object.values(e.breakdown).map(b=>parseFloat(b)||0);Object.assign(n,{type:"bar",data:{labels:l.map(b=>b.replace(/([A-Z])/g," $1").trim()),datasets:[{label:"Breakdown",data:c,backgroundColor:"#50e3c2"}]},options:{...n.options,plugins:{...n.options.plugins,legend:{display:!1}}}})}n.type&&new Chart(t,n)}function V(e,a,o){const t=document.getElementById("breakdown-details-container"),r=q(a,e,o);r&&(t.innerHTML=r)}function q(e,a,o){if(e==="bmr"){const t=parseInt(a.value),i=o.gender==="male"?1500:1200;return`
        <div id="bmr-visual-breakdown" style="margin-top: 1.5rem;">
          <!-- 3 context cards -->
          <p style="font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 10px;">What your BMR means in real terms</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 1.25rem;">
            <div style="background: var(--surface-1); border: 0.5px solid var(--border); border-radius: 10px; padding: 12px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 4px;">😴</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Asleep all day</div>
              <div style="font-size: 17px; font-weight: 500; color: var(--text-primary);">${Math.round(t*.95).toLocaleString()}</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">cal burned</div>
            </div>

            <div style="background: var(--surface-1); border: 0.5px solid var(--border-strong); border-radius: 10px; padding: 12px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 4px;">🫀</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Your BMR</div>
              <div style="font-size: 17px; font-weight: 500; color: var(--text-primary);">${t.toLocaleString()}</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">complete rest</div>
            </div>

            <div style="background: var(--surface-1); border: 0.5px solid var(--border); border-radius: 10px; padding: 12px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 4px;">🚶</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Light day</div>
              <div style="font-size: 17px; font-weight: 500; color: var(--text-primary);">${Math.round(t*1.375).toLocaleString()}</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">cal (BMR × 1.375)</div>
            </div>
          </div>

          <!-- Breakdown rows -->
          <div style="border-top: 0.5px solid var(--border); padding-top: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 0.5px solid var(--border); font-size: 13px;">
              <span style="color: var(--text-secondary);">Calories burned per hour at rest</span>
              <span style="font-weight: 500; color: var(--text-primary);">${Math.round(t/24)} cal/hr</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 0.5px solid var(--border); font-size: 13px;">
              <span style="color: var(--text-secondary);">Calories burned during 8 hrs sleep</span>
              <span style="font-weight: 500; color: var(--text-primary);">${Math.round(t/24*8)} cal</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 0.5px solid var(--border); font-size: 13px;">
              <span style="color: var(--text-secondary);">Never eat below (safe floor)</span>
              <span style="font-weight: 500; color: var(--text-primary);">${i.toLocaleString()} cal</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; font-size: 13px;">
              <span style="color: var(--text-secondary);">Formula used</span>
              <span style="font-weight: 500; color: var(--text-primary);">Mifflin-St Jeor</span>
            </div>
          </div>

          <!-- Dynamic interpretation -->
          <div style="background: var(--surface-1); border: 0.5px solid var(--border); border-radius: 8px; padding: 10px 14px; margin-top: 1rem; font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
            ${t<1400?`Your BMR of ${t.toLocaleString()} cal is on the lower end. This is completely normal for a smaller body frame or lighter weight. The most important rule: never eat below your BMR — doing so forces your body to burn muscle tissue for fuel.`:t<1800?`Your BMR of ${t.toLocaleString()} cal is in the average range for adults. Your actual daily needs are higher once activity is factored in — calculate your TDEE next to find the real number to use for any calorie goal.`:t<2200?`Your BMR of ${t.toLocaleString()} cal is above average. Your body burns a significant amount of energy just to exist. This gives you more flexibility when setting calorie targets for weight loss or muscle gain.`:`Your BMR of ${t.toLocaleString()} cal is high — your body is a significant calorie burner at rest. This is typical for taller, heavier, or younger individuals. Use your TDEE to get the full daily burn number including your activity.`}
          </div>

          <!-- Next calculator links -->
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 1rem; padding-top: 1rem; border-top: 0.5px solid var(--border);">
            <span style="font-size: 12px; color: var(--text-muted);">Calculate next →</span>
            <a href="/calculator/tdee" style="font-size: 13px; padding: 5px 12px; border-radius: 99px; border: 0.5px solid var(--border); color: var(--text-secondary); text-decoration: none; background: var(--surface-1);">⚡ TDEE</a>
            <a href="/calculator/calories" style="font-size: 13px; padding: 5px 12px; border-radius: 99px; border: 0.5px solid var(--border); color: var(--text-secondary); text-decoration: none; background: var(--surface-1);">🍎 Calories</a>
          </div>
        </div>
      `}else if(e==="water"){const t=parseFloat(a.value),r=Math.round(t*4.227);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Daily water intake</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${t}L</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Approximately</p>
              <p class="text-2xl font-bold">${r} cups</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">${a.advice}</p>
        </div>
      `}else if(e==="leanmass"){const t=parseInt(a.value),r=o.weight-t,i=(r/o.weight*100).toFixed(1);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Body Composition Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Lean Body Mass</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${t}kg</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Fat Mass</p>
              <p class="text-2xl font-bold text-[#f5a623]">${Math.round(r)}kg</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Body Fat %</p>
              <p class="text-2xl font-bold">${i}%</p>
            </div>
          </div>
        </div>
      `}else if(e==="calories"){const t=parseInt(a.value),r=(t-2500)*7/7700;return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Calorie Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Daily target</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${t} kcal/day</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Weekly change</p>
              <p class="text-2xl font-bold">${r>0?"+":""}${r.toFixed(2)}kg</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">This is your personalized target based on your stats and goal.</p>
        </div>
      `}else{if(e==="idealweight")return a.value.split("–"),`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Ideal Weight Range</h3>
          <div class="rounded-lg border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-[#0a0a0a]">
            <p class="text-sm text-black/60 dark:text-white/60 mb-2">Your healthy weight range</p>
            <p class="text-3xl font-bold text-[#50e3c2]">${a.value} ${a.unit}</p>
            <p class="mt-3 text-xs text-black/40 dark:text-white/40">Based on 5 medical formulas (Devine, Robinson, Miller, Hamwi, BMI method)</p>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">Your ideal weight depends on your muscle mass and bone density. Aim for somewhere within this range.</p>
        </div>
      `;if(e==="sleep"){const t=a.breakdown||{},r=o.sleepMode==="bedtime",i=r?"Bedtimes (When to sleep)":"Wake Times (When to wake up)";let s="";r&&o.wakeTime?s=x(typeof o.wakeTime=="object"?`${String(o.wakeTime.hours).padStart(2,"0")}:${String(o.wakeTime.minutes).padStart(2,"0")}`:o.wakeTime):!r&&o.sleepTime&&(s=x(typeof o.sleepTime=="object"?`${String(o.sleepTime.hours).padStart(2,"0")}:${String(o.sleepTime.minutes).padStart(2,"0")}`:o.sleepTime));const d=[{cycles:6,time:t["6cycles"],label:"Excellent",duration:"9.0 hours",color:"#50e3c2",desc:"Wake up feeling fully rested and energized."},{cycles:5,time:t["5cycles"],label:"Optimal",duration:"7.5 hours",color:"#0070f3",desc:"The recommended standard for healthy adults.",isRecommended:!0},{cycles:4,time:t["4cycles"],label:"Sufficient",duration:"6.0 hours",color:"#f5a623",desc:"Enough sleep to function, but slightly below ideal."},{cycles:3,time:t["3cycles"],label:"Light",duration:"4.5 hours",color:"#ff6b6b",desc:"May leave you feeling groggy. Use sparingly."}];let n=`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-black dark:text-white">Recommended ${i}</h3>
            <p class="text-sm text-black/60 dark:text-white/60 mt-1">
              Based on your target ${r?"wake-up time":"bedtime"} of <strong class="text-black dark:text-white">${s||"07:00 AM"}</strong>.
            </p>
          </div>
          
          <div class="space-y-4">
      `;return d.forEach(l=>{const c=x(l.time),b=l.isRecommended?"border-[#0070f3] dark:border-[#0070f3] shadow-md bg-[#0070f3]/5":"border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20",m=`background-color: ${l.color}20; color: ${l.color}; border: 1px solid ${l.color}40;`;n+=`
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border ${b} transition-all">
            <div class="flex items-center gap-4">
              <div class="text-3xl font-mono font-bold text-black dark:text-white">${c}</div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm font-semibold text-black/80 dark:text-white/80">${l.duration}</span>
                  <span class="text-xs px-2 py-0.5 rounded-full font-medium" style="${m}">${l.label}</span>
                </div>
                <p class="text-xs text-black/50 dark:text-white/50 mt-1">${l.desc}</p>
              </div>
            </div>
            ${l.isRecommended?`
              <div class="text-xs font-bold uppercase tracking-wider text-[#0070f3] bg-[#0070f3]/10 px-3 py-1 rounded-md self-start sm:self-auto">
                ★ Recommended
              </div>
            `:""}
          </div>
        `}),n+=`
          </div>
          
          <div class="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-sm text-black/85 dark:text-white/85 flex items-start gap-3">
            <span class="text-xl">💡</span>
            <div>
              <strong class="font-semibold block text-yellow-600 dark:text-yellow-400">Did you know?</strong>
              People take an average of 14 minutes to fall asleep (sleep latency). The times calculated above have this 14-minute buffer built-in, so you should aim to be in bed and turning off the lights by then!
            </div>
          </div>
        </div>
      `,n}else if(e==="pace"){const t=a.breakdown||{},r=t.predictions||[],i=t.splits||[];let s="";r.forEach(n=>{s+=`
          <tr class="border-b border-black/5 dark:border-white/5">
            <td class="p-3 font-medium text-black dark:text-white">${n.name}</td>
            <td class="p-3 font-bold text-black dark:text-white">${n.time}</td>
            <td class="p-3 text-black/60 dark:text-white/60">${n.pace}</td>
          </tr>
        `});let d="";return i.forEach(n=>{d+=`
          <tr class="border-b border-black/5 dark:border-white/5">
            <td class="p-3 font-semibold text-black dark:text-white">${n.km}</td>
            <td class="p-3 text-black/80 dark:text-white/80">${n.splitTime}</td>
            <td class="p-3 font-bold text-black dark:text-white">${n.cumulativeTime}</td>
          </tr>
        `}),`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">Running Stats & Predictions</h3>
          
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Distance</span>
              <span class="text-lg font-bold text-black dark:text-white">${t.distance} km</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Duration</span>
              <span class="text-lg font-bold text-black dark:text-white">${t.duration}</span>
            </div>
            <div class="rounded-lg border border-black/5 bg-white p-3 text-center dark:border-white/5 dark:bg-[#0a0a0a]">
              <span class="text-xs text-black/50 dark:text-white/50 block">Avg Pace</span>
              <span class="text-lg font-bold text-[#50e3c2]">${t.pace}</span>
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
                    ${s}
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
                    ${d}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `}}return""}function Z(e,a,o){const t=ee(a,e,o),r=document.getElementById("insights-grid");r.innerHTML=t.map((i,s)=>`
      <div class="insight-card rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]" style="animation-delay: ${s*100}ms">
        <div class="mb-3 text-3xl">${i.icon}</div>
        <h4 class="mb-2 font-semibold">${i.label}</h4>
        <p class="text-sm text-black/60 dark:text-white/60">${i.text}</p>
      </div>
    `).join("")}function Q(e,a,o){const t=te(a,e,o),r=document.getElementById("action-plan");r.innerHTML=t.map((i,s)=>`
      <div class="action-card flex gap-4 rounded-lg border border-black/10 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#111]" style="animation-delay: ${s*100}ms">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 font-semibold dark:bg-white/10">${s+1}</div>
        <div>
          <h4 class="mb-1 font-semibold">${i.icon} ${i.title}</h4>
          <p class="text-sm text-black/60 dark:text-white/60">${i.description}</p>
        </div>
      </div>
    `).join("")}function X(e){const a=R(e),o=document.getElementById("related-calcs");o.innerHTML=a.map(t=>{const r=M[t];return`
        <a href="/calculator/${t}" class="block rounded-lg border border-black/10 bg-gray-50 p-6 transition-colors hover:border-[#0070f3] dark:border-white/10 dark:bg-[#111]">
          <div class="mb-3 text-3xl">${r.icon}</div>
          <h4 class="mb-1 font-semibold">${r.label}</h4>
          <p class="text-sm text-black/60 dark:text-white/60">${r.description}</p>
        </a>
      `}).join("")}function ee(e,a,o){if(e==="bmi"){const t=Math.round(10*o.weight+6.25*o.height-5*o.age+(o.gender==="male"?5:-161)),r=22*Math.pow(o.height/100,2),i=Math.abs(o.weight-r);return[{icon:"⚡",label:"Metabolism",text:`Your BMR suggests you burn ${t} calories at rest daily`},{icon:"🎯",label:"Your goal",text:`To reach ideal weight, adjust by ${Math.round(i)}kg over 12–16 weeks`},{icon:"💧",label:"Daily target",text:`Drink ${Math.round(o.weight*.035)}L of water. Stay hydrated for optimal metabolism`}]}else if(e==="tdee"){const t=Math.round(o.weight*2);return[{icon:"🔥",label:"Daily burn",text:`You burn ${a.value} calories per day with your activity level`},{icon:"🥩",label:"Protein target",text:`Aim for ${t}g protein daily to support your activity`},{icon:"📊",label:"Adjustment",text:"Subtract 500 for weight loss, add 300 for muscle gain"}]}else{if(e==="calories")return[{icon:"🎯",label:"Your target",text:`${a.value} calories per day to reach your goal`},{icon:"⏱",label:"Timeline",text:"Expect ~0.5kg change per week at this rate"},{icon:"🍽",label:"Meal planning",text:"Split into 3–4 meals of 400–600 calories each"}];if(e==="macros")return[{icon:"🥩",label:"Protein",text:`${a.breakdown.protein}g daily — 4 calories per gram`},{icon:"🥑",label:"Fat",text:`${a.breakdown.fat}g daily — essential for hormones`},{icon:"🍚",label:"Carbs",text:`${a.breakdown.carbs}g daily — fuel for workouts`}];if(e==="sleep"){const t=o.sleepMode==="bedtime",r=a.value,i=x(r);return[{icon:"⏰",label:"Optimal Time",text:`Aim to ${t?"sleep":"wake up"} at ${i} to complete 5 full sleep cycles`},{icon:"🌀",label:"Sleep Cycle",text:"Each cycle is ~90 minutes. Waking up mid-cycle causes that groggy feeling"},{icon:"💤",label:"Wind Down",text:"Start your bedtime routine 30–45 minutes before sleep time to lower heart rate"}]}else if(e==="pace"){const t=a.value,r=a.category;return[{icon:"🏃‍♂️",label:"Runner Level",text:`Your pace of ${t} ranks you as an ${r} level runner.`},{icon:"📈",label:"Race Ready",text:"Use Riegel's predicted times as your starting goal targets for races."},{icon:"🫁",label:"Aerobic Base",text:"To improve your pace, run 80% of your miles at a slower, conversational effort."}]}}return[{icon:"📊",label:"Your result",text:a.advice||"See breakdown above"},{icon:"🎯",label:"Next steps",text:"Track this metric weekly to monitor progress"},{icon:"💪",label:"Stay consistent",text:"Small daily actions compound into big results"}]}function te(e,a,o){if(e==="bmi"||e==="calories"){const t=e==="calories"?a.value:Math.round(10*o.weight+6.25*o.height-5*o.age)*1.5-500,r=Math.round(o.weight*2),i=Math.round(o.weight*.035*10)/10;return[{icon:"🍽",title:`Eat ${t} calories/day`,description:"A moderate deficit is safe and sustainable"},{icon:"🥩",title:`Hit ${r}g protein`,description:"Preserves muscle while losing fat"},{icon:"🚶",title:"Walk 8,000 steps",description:"Burns ~300 extra calories, lowest injury risk"},{icon:"💧",title:`Drink ${i}L water`,description:"Boosts metabolism by up to 30% for 1 hour"},{icon:"😴",title:"Sleep 7–9 hours",description:"Poor sleep raises cortisol, causes fat storage"}]}else if(e==="sleep"){const t=o.sleepMode==="bedtime",r=x(a.value);return[{icon:"🔔",title:`${t?"Bedtime alarm":"Wake up target"} at ${r}`,description:`Set a reminder to ${t?"wind down and prepare for sleep":"wake up"} at this exact time`},{icon:"📱",title:"No screens 1 hour before",description:"Blue light suppresses melatonin, delaying your sleep latency"},{icon:"☕",title:"Cut caffeine by 2 PM",description:"Caffeine has a half-life of 6 hours, disrupting deep sleep phases"},{icon:"🌡️",title:"Cool bedroom (18°C / 65°F)",description:"A cooler room temperature mimics the body's natural temperature drop during sleep"},{icon:"🧘",title:"14-min sleep buffer",description:"Go to bed 15 minutes before your target sleep time to allow your mind to settle"}]}else{if(e==="pace")return[{icon:"🚦",title:"80/20 Rule training",description:"Keep 80% of weekly runs easy (conversational pace) and only 20% hard (tempo/intervals) to build endurance."},{icon:"⏱️",title:"Practice pacing consistency",description:"Focus on running even splits (same pace for every km) rather than starting too fast and burning out."},{icon:"👟",title:"Add a long run weekly",description:"Gradually increase your longest run distance by 10% each week to build metabolic efficiency."},{icon:"💪",title:"Strength train twice a week",description:"Focus on squats, lunges, and calf raises to build running economy and prevent injuries."},{icon:"💤",title:"Prioritize recovery",description:"Your muscles grow stronger during rest. Ensure you get 7-9 hours of sleep and adequate protein."}];if(e==="macros")return[{icon:"🥩",title:`${a.breakdown.protein}g protein`,description:"Spread across 4 meals for optimal absorption"},{icon:"🥑",title:`${a.breakdown.fat}g fat`,description:"Prioritize unsaturated fats from nuts, fish, olive oil"},{icon:"🍚",title:`${a.breakdown.carbs}g carbs`,description:"Time around workouts for best performance"},{icon:"📱",title:"Track in MyFitnessPal",description:"Log food for 2 weeks to build awareness"},{icon:"⚖️",title:"Weigh weekly",description:"Same time, same conditions — track trends not daily fluctuations"}];if(e==="water")return[{icon:"💧",title:`Drink ${a.value}L daily`,description:"About 8–10 cups spread throughout the day"},{icon:"🏃",title:"Add 500ml per workout",description:"Replace fluids lost through sweat"},{icon:"⏰",title:"Drink on a schedule",description:"Set hourly reminders until it becomes habit"},{icon:"🥤",title:"Start meals with water",description:"Helps with portion control and digestion"},{icon:"🚰",title:"Carry a bottle",description:"Visual reminder and easy access encourages consistency"}]}return[{icon:"📊",title:"Track this metric",description:"Measure weekly to monitor progress"},{icon:"🎯",title:"Set a goal",description:"Use this baseline to set realistic targets"},{icon:"💪",title:"Stay consistent",description:"Small daily actions compound into big results"}]}function R(e){return{bmi:["bodyfat","calories","idealweight"],bmr:["tdee","calories","macros"],tdee:["calories","macros","water"],bodyfat:["bmi","leanmass","idealweight"],calories:["macros","tdee","water"],macros:["calories","tdee","water"],water:["tdee","macros","heartrate"],heartrate:["tdee","water","bmr"],leanmass:["bodyfat","bmi","macros"],idealweight:["bmi","bodyfat","calories"]}[e]||["bmi","tdee","calories"]}function ae(e){const a=R(e).slice(0,2),o=document.getElementById("next-steps");o.innerHTML=a.map(t=>{const r=M[t];return`
        <a href="/calculator/${t}" class="flex-1 rounded-lg border border-black/10 bg-white py-4 px-4 text-center transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div class="mb-2 text-2xl">${r.icon}</div>
          <div class="text-sm font-semibold">→ ${r.label}</div>
        </a>
      `}).join("")}function x(e){if(!e)return"";const[a,o]=e.split(":");let t=parseInt(a);const r=parseInt(o),i=t>=12?"PM":"AM";t=t%12,t=t||12;const s=r.toString().padStart(2,"0");return`${t}:${s} ${i}`}
