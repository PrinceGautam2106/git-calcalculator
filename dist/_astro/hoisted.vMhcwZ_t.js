import{r as D}from"./hoisted.Da4MVGFc.js";function F(e){const t=e.weight/Math.pow(e.height/100,2),o=Math.round(t*10)/10;let a="",i="",r="";return t<18.5?(a="Underweight",i="#0070f3",r="Consider consulting a nutritionist to reach a healthy weight"):t<25?(a="Normal",i="#50e3c2",r="Great! Maintain your current lifestyle"):t<30?(a="Overweight",i="#f5a623",r="Consider a balanced diet and regular exercise"):(a="Obese",i="#ff6b6b",r="Consult a healthcare professional for a personalized plan"),{value:o.toString(),unit:"BMI",category:a,color:i,advice:r}}function k(e){const{weight:t,height:o,age:a,gender:i}=e;let r=10*t+6.25*o-5*a;return r+=i==="male"?5:-161,{value:Math.round(r).toString(),unit:"kcal/day",advice:"This is your baseline calorie burn at complete rest"}}function x(e){const t=k(e),o=parseInt(t.value),a={sedentary:1.2,light:1.375,moderate:1.55,very:1.725,athlete:1.9};return{value:Math.round(o*a[e.activity]).toString(),unit:"kcal/day",advice:"Your total daily calorie burn including activity",breakdown:{bmr:t.value,multiplier:a[e.activity]}}}function E(e){const{gender:t,height:o,waist:a,neck:i,hip:r}=e;let n;if(t==="male"){const d=Math.log10(a-i),g=Math.log10(o);n=495/(1.0324-.19077*d+.15456*g)-450}else{const d=Math.log10(a+r-i),g=Math.log10(o);n=495/(1.29579-.35004*d+.221*g)-450}const l=Math.round(n*10)/10;let s="",c="";return t==="male"?n<6?(s="Essential",c="#0070f3"):n<14?(s="Athletes",c="#50e3c2"):n<18?(s="Fitness",c="#50e3c2"):n<25?(s="Average",c="#f5a623"):(s="Obese",c="#ff6b6b"):n<14?(s="Essential",c="#0070f3"):n<21?(s="Athletes",c="#50e3c2"):n<25?(s="Fitness",c="#50e3c2"):n<32?(s="Average",c="#f5a623"):(s="Obese",c="#ff6b6b"),{value:l.toString(),unit:"%",category:s,color:c}}function T(e){const{gender:t,height:o}=e,i=o/2.54-60,r=t==="male"?52+1.9*i:49+1.7*i,n=t==="male"?56.2+1.41*i:53.1+1.36*i,l=t==="male"?48+2.7*i:45.5+2.2*i,s=t==="male"?50+2.3*i:45.5+2.3*i,c=22*Math.pow(o/100,2),d=[r,n,l,s,c],g=Math.round(Math.min(...d)),u=Math.round(Math.max(...d));return{value:`${g}–${u}`,unit:"kg",advice:"Range based on 5 medical formulas"}}function v(e){const t=x(e),o=parseInt(t.value),a={lose:-500,maintain:0,build:300},i=o+a[e.goal],r={lose:"0.5kg loss/week",maintain:"maintain weight",build:"0.25kg gain/week"};return{value:i.toString(),unit:"kcal/day",advice:r[e.goal],breakdown:{tdee:o.toString(),adjustment:a[e.goal]}}}function R(e){const t=v(e),o=parseInt(t.value),a=Math.round(e.weight*2),i=a*4,r=Math.round(o*.25),n=Math.round(r/9),l=o-i-r,s=Math.round(l/4);return{value:`${a}g / ${n}g / ${s}g`,unit:"P / F / C",breakdown:{protein:a,fat:n,carbs:s,calories:o}}}function A(e){const t=e.weight*35,o=(e.exerciseMin||0)/30*350,a=Math.round((t+o)/1e3*10)/10;return{value:a.toString(),unit:"L/day",advice:`${Math.round(a*4)} cups per day`,breakdown:{base:Math.round(t),exercise:Math.round(o)}}}function L(e){const t=220-e.age,o=e.restHR||70,a=t-o,i=`${Math.round(o+a*.5)}–${Math.round(o+a*.6)}`,r=`${Math.round(o+a*.6)}–${Math.round(o+a*.7)}`,n=`${Math.round(o+a*.7)}–${Math.round(o+a*.85)}`;return{value:n,unit:"bpm",advice:"Target for cardio training",breakdown:{warmup:i,fatburn:r,cardio:n,max:t}}}function N(e){const{gender:t,weight:o,height:a}=e;let i;t==="male"?i=.407*o+.267*a-19.2:i=.252*o+.473*a-48.3;const r=o-i,n=r/o*100;return{value:Math.round(i).toString(),unit:"kg",advice:`Fat mass: ${Math.round(r)}kg (${Math.round(n)}%)`,breakdown:{lbm:Math.round(i),fat:Math.round(r)}}}function O(e){const t=e.weight||60,o=e.reps||5,a=e.lift||"Lift",i=t*(1+o/30),r=Math.round(i*10)/10;let n="";return o<=3?n="Highly accurate":o<=6?n="Good accuracy":n="Moderate accuracy",{value:r.toString(),unit:"kg",category:a,breakdown:{"90%":Math.round(r*.9),"80%":Math.round(r*.8),"70%":Math.round(r*.7),"60%":Math.round(r*.6)},advice:n,color:o<=3?"#50e3c2":o<=6?"#f5a623":"#0070f3"}}function P(e){const t=e.distance||10,o=e.hours||1,a=e.minutes||0,i=e.seconds||0,r=o*3600+a*60+i,n=r/t,l=Math.floor(n/60),s=Math.round(n%60),c=`${l}:${s.toString().padStart(2,"0")}/km`,d=r/3600,g=Math.floor(d),u=Math.round((d-g)*60);let b="";return n<240?b="Elite":n<300?b="Competitive":n<360?b="Strong":n<420?b="Intermediate":b="Beginner",{value:c,unit:"pace",category:b,breakdown:{pace:c,distance:t.toFixed(2),finishTime:`${g}:${u.toString().padStart(2,"0")}`}}}function H(e){const t=e.weight||70,o=e.height||170,a=e.age||30,i=e.gender||"male",r=e.activity||"moderate",n=e.deficitAmount||500;let l=10*t+6.25*o-5*a;l+=i==="male"?5:-161;const c=Math.round(l*{sedentary:1.2,light:1.375,moderate:1.55,very:1.725,athlete:1.9}[r]),d=i==="male"?1500:1200,g=Math.max(c-n,d),u=n*7/7700,b=u*4.33;return{value:g.toString(),unit:"kcal/day",breakdown:{tdee:c,deficit:n,weeklyLoss:u.toFixed(2),monthlyLoss:b.toFixed(2),minSafe:d}}}function j(e){const t=e.sleepMode==="bedtime"?e.wakeTime:e.sleepTime,o=e.sleepMode;if(!t)return{value:"06:30",unit:"time",advice:"Enter a time to calculate"};const a=[2,3,4,5,6],i=14,r=90,[n,l]=t.split(":").map(Number),s=n*60+l,c={};let d="";return a.forEach((g,u)=>{const b=g*r+i;let h=o==="bedtime"?s-b:s+b;for(;h<0;)h+=1440;for(;h>=1440;)h-=1440;const I=Math.floor(h/60),B=Math.round(h%60),w=`${String(I).padStart(2,"0")}:${String(B).padStart(2,"0")}`;c[`${g}cycles`]=w,g===5&&(d=w)}),{value:d,unit:"time",breakdown:c,advice:"5 cycles = 7.5 hours (optimal)"}}function Y(e){const t=e.weight||70,o=e.bodyFat||20,a=e.proteinGoal||"maintain",i=t*(1-o/100),r={maintain:{min:1.2,max:1.6},loss:{min:1.8,max:2.4},gain:{min:1.6,max:2.2},recomp:{min:2,max:2.6},athlete:{min:1.7,max:2.5}},n=r[a]||r.maintain,l=Math.round(i*n.min),s=Math.round(i*n.max),c=Math.round((l+s)/2);return{value:`${l}–${s}`,unit:"g/day",breakdown:{floor:l,target:c,ceiling:s,perKg:n.min.toFixed(1),calories:c*4}}}function W(e){const{gender:t,height:o,neck:a,waist:i,hip:r,age:n}=e;let l;t==="male"?l=86.01*Math.log10(i-a)-70.041*Math.log10(o)+36.76:l=163.205*Math.log10(i+r-a)-97.684*Math.log10(o)-78.387;const s={male:{"17-20":20,"21-27":22,"28-39":24,"40+":26},female:{"17-20":30,"21-27":32,"28-39":34,"40+":36}};let c="40+";n<=20?c="17-20":n<=27?c="21-27":n<=39&&(c="28-39");const d=s[t][c],g=l<=d;return{value:(Math.round(l*10)/10).toString(),unit:"%",category:g?"✓ PASS":"✗ FAIL",color:g?"#50e3c2":"#ff6b6b",breakdown:{standard:d,ageGroup:c,difference:Math.round((l-d)*10)/10}}}const y={bmi:{label:"BMI Calculator",description:"Body Mass Index",metaDescription:"Free BMI calculator — enter your height and weight to instantly find your Body Mass Index, understand your result, and see what it means for your health.",icon:"⚖️",fields:["age","gender","height","weight"],fn:F},bmr:{label:"BMR Calculator",description:"Basal Metabolic Rate",metaDescription:"Calculate your Basal Metabolic Rate (BMR) free — find the exact calories your body burns at rest using the science-backed Mifflin-St Jeor equation.",icon:"🔥",fields:["age","gender","height","weight"],fn:k},tdee:{label:"TDEE Calculator",description:"Total Daily Energy Expenditure",metaDescription:"Free TDEE calculator — find your Total Daily Energy Expenditure based on your activity level. Know exactly how many calories you burn each day.",icon:"⚡",fields:["age","gender","height","weight","activity"],fn:x},bodyfat:{label:"Body Fat %",description:"US Navy Method",metaDescription:"Estimate your body fat percentage free — uses the Navy method and BMI formula. Understand your result with healthy range charts and next steps.",icon:"📊",fields:["gender","height","waist","neck","hip"],fn:E},idealweight:{label:"Ideal Weight",description:"Based on 5 formulas",metaDescription:"Find your ideal weight free — calculated using 5 medical formulas (Devine, Robinson, Miller, Hamwi, BMI method) so you get a realistic healthy range.",icon:"🎯",fields:["gender","height"],fn:T},calories:{label:"Calorie Target",description:"Daily calorie goal",metaDescription:"Free daily calorie intake calculator — set your weight goal and get your exact calorie target for weight loss, maintenance, or muscle gain.",icon:"🍎",fields:["age","gender","height","weight","activity","goal"],fn:v},macros:{label:"Macro Split",description:"Protein, carbs, fat breakdown",metaDescription:"Free macro calculator — get your personalised protein, carbohydrate, and fat targets based on your TDEE and fitness goal.",icon:"🥗",fields:["age","gender","height","weight","activity","goal"],fn:R},water:{label:"Water Intake",description:"Daily hydration goal",metaDescription:"Calculate your daily water intake free — get a hydration goal based on your weight, activity level, and climate.",icon:"💧",fields:["weight","exerciseMin"],fn:A},heartrate:{label:"Target Heart Rate",description:"Training zones",metaDescription:"Free target heart rate calculator — find your fat-burn, cardio, and peak training zones based on your age and resting heart rate.",icon:"❤️",fields:["age","restHR"],fn:L},leanmass:{label:"Lean Body Mass",description:"Muscle vs fat mass",metaDescription:"Calculate your lean body mass free — estimate your muscle mass vs fat mass using the Boer and James formulas.",icon:"💪",fields:["gender","height","weight"],fn:N},onerep:{label:"1-Rep Max Calculator",description:"Find your maximum strength",metaDescription:"Free 1-rep max calculator — enter the weight you lifted and reps completed to instantly estimate your 1RM and get training weights for strength, hypertrophy, and endurance.",icon:"🏋️",fields:["lift","weight","reps"],fn:O},pace:{label:"Running Pace Calculator",description:"Calculate pace and finish time",metaDescription:"Free running pace calculator — find your pace per km, predicted finish time, or total distance. Supports 5K, 10K, half marathon, and full marathon with per-km split table.",icon:"🏃",fields:["distance","hours","minutes","seconds"],fn:P},deficit:{label:"Calorie Deficit Calculator",description:"Find your weight loss target",metaDescription:"Free calorie deficit calculator — enter your stats and goal to find your exact daily calorie target, weekly fat loss projection, and safe minimum intake. Based on Mifflin-St Jeor.",icon:"🎯",fields:["gender","age","height","weight","activity","deficitAmount"],fn:H},sleep:{label:"Sleep Calculator",description:"Find ideal sleep times",metaDescription:"Free sleep calculator — enter your wake-up time or bedtime to find the optimal sleep and wake times aligned with 90-minute sleep cycles so you wake up refreshed, not groggy.",icon:"😴",fields:["sleepMode","wakeTime","sleepTime"],fn:j},protein:{label:"Protein Intake Calculator",description:"Your daily protein target",metaDescription:"Free protein intake calculator — get your personalised daily protein target in grams based on your body weight, goal (muscle gain, weight loss, recomp), and training frequency.",icon:"🥩",fields:["weight","bodyFat","proteinGoal"],fn:Y},armybf:{label:"Army Body Fat Calculator",description:"Official military standard",metaDescription:"Free Army body fat calculator — uses the official US Army circumference formula to estimate body fat percentage and check your result against Army standards for your age and sex.",icon:"🪖",fields:["gender","age","height","neck","waist","hip"],fn:W}},m=window.location.pathname.split("/")[2],M=y[m],$=JSON.parse(localStorage.getItem(`fc_calc_${m}`)||"{}"),p=M.fn($),f=D();f.milestone&&f.message&&setTimeout(()=>{window.confetti&&confetti({particleCount:100,spread:70,origin:{y:.6}}),window.showNotification(f.message,"milestone")},500);z(p,m,$);window.addEventListener("themeChanged",()=>{C(p,m)});J();function J(){const e=JSON.parse(localStorage.getItem("fc_history")||"[]"),t={calculator:M.label,slug:m,value:p.value,unit:p.unit,date:new Date().toLocaleDateString(),timestamp:Date.now()};if(!(e.length>0&&e[0].slug===m&&e[0].value===p.value&&e[0].date===t.date)){e.unshift(t),localStorage.setItem("fc_history",JSON.stringify(e.slice(0,50)));const a=e.slice(0,3).map(i=>({calculator:i.calculator,value:`${i.value} ${i.unit}`,date:i.date}));localStorage.setItem("fc_last_results",JSON.stringify(a))}}document.getElementById("save-result").onclick=()=>{window.showNotification("Result is automatically saved to your history")};function z(e,t,o){const a=document.getElementById("dashboard-root");a.innerHTML=`
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
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
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
    `,G(),C(e,t),U(e,t,o),K(e,t,o),V(e,t,o),q(t),X(t)}function G(){const e=document.getElementById("hero-number"),t=e.dataset.target;if(!(t.includes("–")||t.includes("/"))&&!isNaN(parseFloat(t))){const a=parseFloat(t),i=600,r=30,n=a/r;let l=0;const s=setInterval(()=>{l+=n,l>=a?(e.textContent=t,clearInterval(s)):e.textContent=(Math.round(l*10)/10).toString()},i/r)}else e.textContent=t}async function C(e,t){if(!window.Chart){const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js",document.head.appendChild(s),await new Promise(c=>s.onload=c)}const o=document.getElementById("result-chart").getContext("2d"),a=document.documentElement.classList.contains("dark"),i=a?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)",r=a?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",n=a?"#333":"#eee";let l={options:{responsive:!0,plugins:{legend:{labels:{color:i}}},scales:{x:{ticks:{color:i},grid:{color:r}},y:{ticks:{color:i},grid:{color:r}}}}};if(t==="bmi"){const s=parseFloat(e.value);Object.assign(l,{type:"bar",data:{labels:["Underweight","Normal","Overweight","Obese"],datasets:[{label:"Your BMI",data:[s<18.5?s:0,s>=18.5&&s<25?s:0,s>=25&&s<30?s:0,s>=30?s:0],backgroundColor:["#0070f3","#50e3c2","#f5a623","#ff6b6b"]}]},options:{...l.options,indexAxis:"y",scales:{x:{...l.options.scales.x,max:40},y:l.options.scales.y},plugins:{...l.options.plugins,legend:{display:!1}}}})}else if(t==="bodyfat"){const s=parseFloat(e.value);Object.assign(l,{type:"doughnut",data:{labels:["Body Fat","Lean Mass"],datasets:[{data:[s,100-s],backgroundColor:[e.color,n],borderWidth:0}]},options:{...l.options,cutout:"70%",scales:{}}})}else if(t==="macros"&&e.breakdown)Object.assign(l,{type:"bar",data:{labels:["Macros"],datasets:[{label:"Protein",data:[e.breakdown.protein],backgroundColor:"#50e3c2"},{label:"Fat",data:[e.breakdown.fat],backgroundColor:"#f5a623"},{label:"Carbs",data:[e.breakdown.carbs],backgroundColor:"#0070f3"}]},options:{...l.options,indexAxis:"y",scales:{x:{...l.options.scales.x,stacked:!0},y:{...l.options.scales.y,stacked:!0}}}});else if(e.breakdown){const s=Object.keys(e.breakdown),c=Object.values(e.breakdown).map(d=>parseFloat(d)||0);Object.assign(l,{type:"bar",data:{labels:s.map(d=>d.replace(/([A-Z])/g," $1").trim()),datasets:[{label:"Breakdown",data:c,backgroundColor:"#50e3c2"}]},options:{...l.options,plugins:{...l.options.plugins,legend:{display:!1}}}})}l.type&&new Chart(o,l)}function U(e,t,o){const a=document.getElementById("breakdown-details-container"),i=_(t,e,o);i&&(a.innerHTML=i)}function _(e,t,o){if(e==="bmr"){const a=parseInt(t.value),i=Math.round(a*1.55);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Your BMR (at rest)</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${a} kcal/day</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Estimated TDEE (moderate)</p>
              <p class="text-2xl font-bold">${i} kcal/day</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">Your BMR is what you burn just existing. Multiply by your activity level (1.2-1.9) to get your true TDEE.</p>
        </div>
      `}else if(e==="water"){const a=parseFloat(t.value),i=Math.round(a*4.227);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Daily water intake</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${a}L</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Approximately</p>
              <p class="text-2xl font-bold">${i} cups</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">${t.advice}</p>
        </div>
      `}else if(e==="leanmass"){const a=parseInt(t.value),i=o.weight-a,r=(i/o.weight*100).toFixed(1);return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Body Composition Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Lean Body Mass</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${a}kg</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Fat Mass</p>
              <p class="text-2xl font-bold text-[#f5a623]">${Math.round(i)}kg</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Body Fat %</p>
              <p class="text-2xl font-bold">${r}%</p>
            </div>
          </div>
        </div>
      `}else if(e==="calories"){const a=parseInt(t.value),i=(a-2500)*7/7700;return`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Calorie Breakdown</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Daily target</p>
              <p class="text-2xl font-bold text-[#50e3c2]">${a} kcal/day</p>
            </div>
            <div class="rounded-lg border border-black/5 p-4 dark:border-white/5">
              <p class="text-sm text-black/60 dark:text-white/60">Weekly change</p>
              <p class="text-2xl font-bold">${i>0?"+":""}${i.toFixed(2)}kg</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">This is your personalized target based on your stats and goal.</p>
        </div>
      `}else if(e==="idealweight")return t.value.split("–"),`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]">
          <h3 class="mb-4 text-lg font-semibold">Ideal Weight Range</h3>
          <div class="rounded-lg border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-[#0a0a0a]">
            <p class="text-sm text-black/60 dark:text-white/60 mb-2">Your healthy weight range</p>
            <p class="text-3xl font-bold text-[#50e3c2]">${t.value} ${t.unit}</p>
            <p class="mt-3 text-xs text-black/40 dark:text-white/40">Based on 5 medical formulas (Devine, Robinson, Miller, Hamwi, BMI method)</p>
          </div>
          <p class="mt-4 text-sm text-black/60 dark:text-white/60">Your ideal weight depends on your muscle mass and bone density. Aim for somewhere within this range.</p>
        </div>
      `;return""}function K(e,t,o){const a=Z(t,e,o),i=document.getElementById("insights-grid");i.innerHTML=a.map((r,n)=>`
      <div class="insight-card rounded-lg border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-[#111]" style="animation-delay: ${n*100}ms">
        <div class="mb-3 text-3xl">${r.icon}</div>
        <h4 class="mb-2 font-semibold">${r.label}</h4>
        <p class="text-sm text-black/60 dark:text-white/60">${r.text}</p>
      </div>
    `).join("")}function V(e,t,o){const a=Q(t,e,o),i=document.getElementById("action-plan");i.innerHTML=a.map((r,n)=>`
      <div class="action-card flex gap-4 rounded-lg border border-black/10 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#111]" style="animation-delay: ${n*100}ms">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 font-semibold dark:bg-white/10">${n+1}</div>
        <div>
          <h4 class="mb-1 font-semibold">${r.icon} ${r.title}</h4>
          <p class="text-sm text-black/60 dark:text-white/60">${r.description}</p>
        </div>
      </div>
    `).join("")}function q(e){const t=S(e),o=document.getElementById("related-calcs");o.innerHTML=t.map(a=>{const i=y[a];return`
        <a href="/calculator/${a}" class="block rounded-lg border border-black/10 bg-gray-50 p-6 transition-colors hover:border-[#0070f3] dark:border-white/10 dark:bg-[#111]">
          <div class="mb-3 text-3xl">${i.icon}</div>
          <h4 class="mb-1 font-semibold">${i.label}</h4>
          <p class="text-sm text-black/60 dark:text-white/60">${i.description}</p>
        </a>
      `}).join("")}function Z(e,t,o){if(e==="bmi"){const a=Math.round(10*o.weight+6.25*o.height-5*o.age+(o.gender==="male"?5:-161)),i=22*Math.pow(o.height/100,2),r=Math.abs(o.weight-i);return[{icon:"⚡",label:"Metabolism",text:`Your BMR suggests you burn ${a} calories at rest daily`},{icon:"🎯",label:"Your goal",text:`To reach ideal weight, adjust by ${Math.round(r)}kg over 12–16 weeks`},{icon:"💧",label:"Daily target",text:`Drink ${Math.round(o.weight*.035)}L of water. Stay hydrated for optimal metabolism`}]}else if(e==="tdee"){const a=Math.round(o.weight*2);return[{icon:"🔥",label:"Daily burn",text:`You burn ${t.value} calories per day with your activity level`},{icon:"🥩",label:"Protein target",text:`Aim for ${a}g protein daily to support your activity`},{icon:"📊",label:"Adjustment",text:"Subtract 500 for weight loss, add 300 for muscle gain"}]}else{if(e==="calories")return[{icon:"🎯",label:"Your target",text:`${t.value} calories per day to reach your goal`},{icon:"⏱",label:"Timeline",text:"Expect ~0.5kg change per week at this rate"},{icon:"🍽",label:"Meal planning",text:"Split into 3–4 meals of 400–600 calories each"}];if(e==="macros")return[{icon:"🥩",label:"Protein",text:`${t.breakdown.protein}g daily — 4 calories per gram`},{icon:"🥑",label:"Fat",text:`${t.breakdown.fat}g daily — essential for hormones`},{icon:"🍚",label:"Carbs",text:`${t.breakdown.carbs}g daily — fuel for workouts`}]}return[{icon:"📊",label:"Your result",text:t.advice||"See breakdown above"},{icon:"🎯",label:"Next steps",text:"Track this metric weekly to monitor progress"},{icon:"💪",label:"Stay consistent",text:"Small daily actions compound into big results"}]}function Q(e,t,o){if(e==="bmi"||e==="calories"){const a=e==="calories"?t.value:Math.round(10*o.weight+6.25*o.height-5*o.age)*1.5-500,i=Math.round(o.weight*2),r=Math.round(o.weight*.035*10)/10;return[{icon:"🍽",title:`Eat ${a} calories/day`,description:"A moderate deficit is safe and sustainable"},{icon:"🥩",title:`Hit ${i}g protein`,description:"Preserves muscle while losing fat"},{icon:"🚶",title:"Walk 8,000 steps",description:"Burns ~300 extra calories, lowest injury risk"},{icon:"💧",title:`Drink ${r}L water`,description:"Boosts metabolism by up to 30% for 1 hour"},{icon:"😴",title:"Sleep 7–9 hours",description:"Poor sleep raises cortisol, causes fat storage"}]}else{if(e==="macros")return[{icon:"🥩",title:`${t.breakdown.protein}g protein`,description:"Spread across 4 meals for optimal absorption"},{icon:"🥑",title:`${t.breakdown.fat}g fat`,description:"Prioritize unsaturated fats from nuts, fish, olive oil"},{icon:"🍚",title:`${t.breakdown.carbs}g carbs`,description:"Time around workouts for best performance"},{icon:"📱",title:"Track in MyFitnessPal",description:"Log food for 2 weeks to build awareness"},{icon:"⚖️",title:"Weigh weekly",description:"Same time, same conditions — track trends not daily fluctuations"}];if(e==="water")return[{icon:"💧",title:`Drink ${t.value}L daily`,description:"About 8–10 cups spread throughout the day"},{icon:"🏃",title:"Add 500ml per workout",description:"Replace fluids lost through sweat"},{icon:"⏰",title:"Drink on a schedule",description:"Set hourly reminders until it becomes habit"},{icon:"🥤",title:"Start meals with water",description:"Helps with portion control and digestion"},{icon:"🚰",title:"Carry a bottle",description:"Visual reminder and easy access encourages consistency"}]}return[{icon:"📊",title:"Track this metric",description:"Measure weekly to monitor progress"},{icon:"🎯",title:"Set a goal",description:"Use this baseline to set realistic targets"},{icon:"💪",title:"Stay consistent",description:"Small daily actions compound into big results"}]}function S(e){return{bmi:["bodyfat","calories","idealweight"],bmr:["tdee","calories","macros"],tdee:["calories","macros","water"],bodyfat:["bmi","leanmass","idealweight"],calories:["macros","tdee","water"],macros:["calories","tdee","water"],water:["tdee","macros","heartrate"],heartrate:["tdee","water","bmr"],leanmass:["bodyfat","bmi","macros"],idealweight:["bmi","bodyfat","calories"]}[e]||["bmi","tdee","calories"]}function X(e){const t=S(e).slice(0,2),o=document.getElementById("next-steps");o.innerHTML=t.map(a=>{const i=y[a];return`
        <a href="/calculator/${a}" class="flex-1 rounded-lg border border-black/10 bg-white py-4 px-4 text-center transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div class="mb-2 text-2xl">${i.icon}</div>
          <div class="text-sm font-semibold">→ ${i.label}</div>
        </a>
      `}).join("")}
