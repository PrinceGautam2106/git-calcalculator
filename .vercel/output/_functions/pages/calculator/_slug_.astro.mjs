import { c as createAstro, a as createComponent, r as renderTemplate, e as defineScriptVars, m as maybeRenderHead, d as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_4eSzUG1x.mjs';
import 'clsx';
/* empty css                                     */
import { c as calculatorRegistry } from '../../chunks/calculators_CcL_xXy4.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://calaifitness.com");
const $$InputFlow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InputFlow;
  const { calculatorSlug, requiredFields } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="input-flow" class="mx-auto max-w-2xl px-3 sm:px-4 md:px-6 py-8 sm:py-12" data-astro-cid-gy7pbaoz> <div class="mb-8 flex items-center justify-between" data-astro-cid-gy7pbaoz> <div class="text-sm text-black/40 dark:text-white/40" data-astro-cid-gy7pbaoz> <span class="hidden sm:inline" data-astro-cid-gy7pbaoz>Measurement System</span> <span class="sm:hidden" data-astro-cid-gy7pbaoz>Units</span> </div> <div class="inline-flex rounded-lg border border-black/10 bg-white shadow-sm p-0.5 dark:border-white/10 dark:bg-[#0a0a0a]" data-astro-cid-gy7pbaoz> <button id="global-unit-metric" class="rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200" data-astro-cid-gy7pbaoz>Metric</button> <button id="global-unit-imperial" class="rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200" data-astro-cid-gy7pbaoz>Imperial</button> </div> </div> <div class="mb-8" data-astro-cid-gy7pbaoz> <p class="mb-2 text-xs sm:text-sm text-black/40 dark:text-white/40" id="progress-text" data-astro-cid-gy7pbaoz>Step 1 of ', '</p> <div class="h-1 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10" data-astro-cid-gy7pbaoz> <div id="progress-bar" class="h-full bg-[#50e3c2] transition-all duration-300" style="width: 0%" data-astro-cid-gy7pbaoz></div> </div> </div> <div id="steps-container" class="relative overflow-hidden min-h-[280px] sm:min-h-[320px]" data-astro-cid-gy7pbaoz> <!-- Steps will be injected here --> </div> <button id="calculate-btn" class="hidden w-full rounded-xl bg-[#50e3c2] py-4 text-center font-bold text-black text-base transition-all hover:bg-black hover:text-white dark:hover:bg-white mt-6 sticky bottom-4 shadow-lg" data-astro-cid-gy7pbaoz>\nCalculate Results \u2192\n</button> </div> <script>(function(){', `
  const fieldConfigs = {
    age: {
      question: "How old are you?",
      type: "slider",
      min: 10,
      max: 90,
      default: 30,
      unit: "years"
    },
    gender: {
      question: "What's your biological sex?",
      note: "for biological measurement only",
      type: "cards",
      options: [
        { value: "male", label: "Male", icon: "\u{1F468}" },
        { value: "female", label: "Female", icon: "\u{1F469}" }
      ]
    },
    height: {
      question: "How tall are you?",
      type: "height",
      min: 100,
      max: 250,
      default: 170,
      unit: "cm"
    },
    weight: {
      question: "What's your current weight?",
      type: "slider",
      min: 30,
      max: 200,
      default: 70,
      unit: "kg"
    },
    waist: {
      question: "What's your waist circumference?",
      type: "slider",
      min: 40,
      max: 200,
      default: 80,
      unit: "cm"
    },
    neck: {
      question: "What's your neck circumference?",
      type: "slider",
      min: 20,
      max: 60,
      default: 35,
      unit: "cm"
    },
    hip: {
      question: "What's your hip circumference?",
      type: "slider",
      min: 60,
      max: 180,
      default: 95,
      unit: "cm"
    },
    restHR: {
      question: "What's your resting heart rate?",
      type: "slider",
      min: 40,
      max: 100,
      default: 70,
      unit: "bpm"
    },
    exerciseMin: {
      question: "How many minutes do you exercise daily?",
      type: "slider",
      min: 0,
      max: 180,
      default: 30,
      unit: "min"
    },
    lift: {
      question: "Which lift are you calculating?",
      type: "cards",
      options: [
        { value: "bench", label: "Bench Press", icon: "\u{1F3CB}\uFE0F" },
        { value: "squat", label: "Squat", icon: "\u{1F9B5}" },
        { value: "deadlift", label: "Deadlift", icon: "\u2B06\uFE0F" },
        { value: "ohp", label: "Overhead Press", icon: "\u{1F4AA}" },
        { value: "row", label: "Barbell Row", icon: "\u{1F6A3}" },
        { value: "other", label: "Other", icon: "\u2753" }
      ]
    },
    reps: {
      question: "How many reps did you lift?",
      type: "slider",
      min: 1,
      max: 20,
      default: 5,
      unit: "reps"
    },
    distance: {
      question: "What distance did you run?",
      type: "slider",
      min: 1,
      max: 50,
      default: 10,
      unit: "km"
    },
    hours: {
      question: "How long did it take?",
      note: "Enter hours and minutes separately",
      type: "time",
      default: { hours: 1, minutes: 0 }
    },
    duration: {
      question: "How long did your run take?",
      note: "Enter hours, minutes, and seconds",
      type: "duration",
      default: { hours: 0, minutes: 45, seconds: 0 }
    },
    sleepMode: {
      question: "What do you want to calculate?",
      type: "cards",
      options: [
        { value: "bedtime", label: "Find bedtime", desc: "I know my wake time" },
        { value: "waketime", label: "Find wake time", desc: "I know my bedtime" }
      ]
    },
    wakeTime: {
      question: "What time do you wake up?",
      type: "time",
      default: "07:00"
    },
    sleepTime: {
      question: "What time do you sleep?",
      type: "time",
      default: "23:00"
    },
    deficitAmount: {
      question: "What deficit do you want?",
      type: "cards",
      options: [
        { value: 250, label: "Slow", desc: "0.25 kg/week" },
        { value: 500, label: "Moderate", desc: "0.5 kg/week" },
        { value: 750, label: "Fast", desc: "0.75 kg/week" },
        { value: 1000, label: "Very Fast", desc: "1 kg/week" }
      ]
    },
    bodyFat: {
      question: "What's your body fat %? (optional)",
      type: "slider",
      min: 5,
      max: 50,
      default: 20,
      unit: "%"
    },
    proteinGoal: {
      question: "What's your primary goal?",
      type: "cards",
      options: [
        { value: "maintain", label: "Maintain", icon: "\u2696\uFE0F" },
        { value: "loss", label: "Lose weight", icon: "\u{1F4C9}" },
        { value: "gain", label: "Build muscle", icon: "\u{1F4AA}" },
        { value: "recomp", label: "Recomposition", icon: "\u{1F504}" },
        { value: "athlete", label: "Athletic", icon: "\u{1F3C3}" }
      ]
    },
    activity: {
      question: "How active are you?",
      type: "activity",
      options: [
        { value: "sedentary", icon: "\u{1FA91}", label: "Sedentary", desc: "Mostly sitting, desk job" },
        { value: "light", icon: "\u{1F6B6}", label: "Lightly active", desc: "Walk 1\u20133 days/week" },
        { value: "moderate", icon: "\u{1F3C3}", label: "Moderately active", desc: "Exercise 3\u20135 days/week" },
        { value: "very", icon: "\u{1F4AA}", label: "Very active", desc: "Hard training 6\u20137 days" },
        { value: "athlete", icon: "\u{1F3CB}\uFE0F", label: "Athlete", desc: "Twice daily or physical job" }
      ]
    },
    goal: {
      question: "What's your goal?",
      type: "cards",
      options: [
        { value: "lose", label: "Lose weight", icon: "\u{1F4C9}" },
        { value: "maintain", label: "Maintain", icon: "\u2696\uFE0F" },
        { value: "build", label: "Build muscle", icon: "\u{1F4AA}" }
      ]
    }
  };

  let currentStep = 0;
  const answers = {};
  const sessionKey = \`fc_calc_\${calculatorSlug}\`;
  let systemUnit = localStorage.getItem('fc_system_unit') || 'metric';

  function updateGlobalUnitUI() {
    const m = document.getElementById('global-unit-metric');
    const i = document.getElementById('global-unit-imperial');
    if(m && i) {
      if(systemUnit === 'metric') {
        m.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 bg-black text-white dark:bg-white dark:text-black';
        i.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 text-black/50 hover:text-black/80 dark:text-white/50 dark:hover:text-white/80';
      } else {
        i.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 bg-black text-white dark:bg-white dark:text-black';
        m.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 text-black/50 hover:text-black/80 dark:text-white/50 dark:hover:text-white/80';
      }
    }
  }
  
  function handleGlobalUnitChange(newUnit) {
    if(systemUnit !== newUnit) {
      systemUnit = newUnit;
      localStorage.setItem('fc_system_unit', newUnit);
      updateGlobalUnitUI();
      // Adjust answers when switching so sliders don't jump weirdly, but since we convert strictly from answers, we just re-render
      renderStep();
      attachEvents();
    }
  }

  const unitPrefs = JSON.parse(localStorage.getItem('fc_units') || '{"weight":"kg","height":"cm"}');

  // Auto-restore saved data (silently)
  const savedData = localStorage.getItem(sessionKey);
  if (savedData) {
    try {
      Object.assign(answers, JSON.parse(savedData));
    } catch (e) {
      // If data is corrupted, just start fresh
      localStorage.removeItem(sessionKey);
    }
  }

  function getActiveFields() {
    return requiredFields.filter(field => {
      if (calculatorSlug === 'sleep') {
        if (field === 'wakeTime' && answers.sleepMode === 'waketime') return false;
        if (field === 'sleepTime' && answers.sleepMode === 'bedtime') return false;
      }
      return true;
    });
  }

  function updateProgress() {
    const activeFields = getActiveFields();
    const percent = ((currentStep + 1) / activeFields.length) * 100;
    document.getElementById('progress-bar').style.width = \`\${percent}%\`;
    document.getElementById('progress-text').textContent = \`Step \${currentStep + 1} of \${activeFields.length}\`;
  }

  function saveToSession() {
    localStorage.setItem(sessionKey, JSON.stringify(answers));
  }

  function renderStep() {
    const activeFields = getActiveFields();
    const container = document.getElementById('steps-container');
    const field = activeFields[currentStep];
    const config = fieldConfigs[field];

    let html = \`
      <div class="animate-slide-in">
        <h2 class="mb-2 text-3xl font-bold">\${config.question}</h2>
        \${config.note ? \`<p class="mb-6 text-sm text-black/40 dark:text-white/40">\${config.note}</p>\` : '<div class="mb-6"></div>'}
    \`;

    if (config.type === 'height') {
      const heightUnit = unitPrefs.height || 'cm';
      const valueCm = answers[field] || config.default;
      const isFeet = heightUnit === 'ft';
      const feet = isFeet ? Math.floor(valueCm / 30.48) : Math.floor(valueCm / 30.48);
      const inches = isFeet ? Math.round((valueCm / 2.54) % 12) : 0;
      
      html += \`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 flex gap-2">
            <button id="unit-cm" class="flex-1 rounded py-2 font-medium transition \${heightUnit === 'cm' ? 'bg-[#50e3c2] text-black' : 'bg-black/5 dark:bg-white/5'}">cm</button>
            <button id="unit-ft" class="flex-1 rounded py-2 font-medium transition \${heightUnit === 'ft' ? 'bg-[#50e3c2] text-black' : 'bg-black/5 dark:bg-white/5'}">ft / in</button>
          </div>
          
          <div id="height-cm" class="\${heightUnit === 'ft' ? 'hidden' : ''}">
            <div class="mb-4 flex items-center justify-between">
              <input type="number" id="input-cm" value="\${valueCm}" 
                class="w-24 rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="100" max="250">
              <span class="text-black/60 dark:text-white/60">cm</span>
            </div>
            <input type="range" id="slider-cm" value="\${valueCm}" 
              min="100" max="250" class="w-full accent-[#50e3c2]">
          </div>
          
          <div id="height-ft" class="\${heightUnit === 'cm' ? 'hidden' : ''}">
            <div class="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label class="mb-1 block text-sm text-black/60 dark:text-white/60">Feet</label>
                <input type="number" id="input-ft" value="\${feet}" 
                  class="w-full rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                  min="3" max="8">
              </div>
              <div>
                <label class="mb-1 block text-sm text-black/60 dark:text-white/60">Inches</label>
                <input type="number" id="input-in" value="\${inches}" 
                  class="w-full rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                  min="0" max="11">
              </div>
            </div>
          </div>
          
          <div id="validation-\${field}" class="mt-4 text-sm"></div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      \`;
    } else if (config.type === 'slider') {
      const baseValue = answers[field] || config.default;
      let displayVal = baseValue;
      let displayMin = config.min;
      let displayMax = config.max;
      let displayUnit = config.unit || unitPrefs[field] || '';
      
      const isImp = systemUnit === 'imperial' && (displayUnit === 'kg' || displayUnit === 'cm');
      if (isImp) {
        if (displayUnit === 'kg') {
          displayVal = Math.round(baseValue * 2.20462);
          displayMin = Math.round(config.min * 2.20462);
          displayMax = Math.round(config.max * 2.20462);
          displayUnit = 'lbs';
        } else if (displayUnit === 'cm') {
          displayVal = Math.round(baseValue / 2.54);
          displayMin = Math.round(config.min / 2.54);
          displayMax = Math.round(config.max / 2.54);
          displayUnit = 'in';
        }
      }

      html += \`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]" data-is-imp="\${isImp}" data-base-unit="\${config.unit}">
          <div class="mb-4 flex items-center justify-between">
            <input type="number" id="input-\${field}" value="\${displayVal}" 
              class="w-24 rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
              min="\${displayMin}" max="\${displayMax}">
            <span class="text-black/60 dark:text-white/60">\${displayUnit}</span>
          </div>
          <input type="range" id="slider-\${field}" value="\${displayVal}" 
            min="\${displayMin}" max="\${displayMax}" 
            class="w-full accent-[#50e3c2]">
          <div id="validation-\${field}" class="mt-4 text-sm"></div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      \`;
    } else if (config.type === 'cards') {
      html += \`<div class="grid gap-4 \${config.options.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}">\`;
      config.options.forEach(opt => {
        const selected = answers[field] === opt.value;
        html += \`
          <button data-value="\${opt.value}" class="card-option rounded-lg border p-6 text-left transition-all \${
            selected ? 'border-[#0070f3] bg-[#0070f3]/10' : 'border-black/10 bg-gray-50 hover:border-black/30 dark:border-white/10 dark:bg-[#111] dark:hover:border-white/30'
          }">
            \${opt.icon ? \`<div class="mb-2 text-3xl">\${opt.icon}</div>\` : ''}
            <div class="font-semibold text-black dark:text-white">\${opt.label}</div>
            \${opt.desc ? \`<div class="text-xs text-black/60 dark:text-white/60 mt-1">\${opt.desc}</div>\` : ''}
          </button>
        \`;
      });
      html += '</div>';
    } else if (config.type === 'activity') {
      html += '<div class="space-y-3">';
      config.options.forEach(opt => {
        const selected = answers[field] === opt.value;
        html += \`
          <button data-value="\${opt.value}" class="card-option flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all \${
            selected ? 'border-[#0070f3] bg-[#0070f3]/10' : 'border-black/10 bg-gray-50 hover:border-black/30 dark:border-white/10 dark:bg-[#111] dark:hover:border-white/30'
          }">
            <div class="text-3xl">\${opt.icon}</div>
            <div>
              <div class="font-semibold">\${opt.label}</div>
              <div class="text-sm text-black/60 dark:text-white/60">\${opt.desc}</div>
            </div>
            \${selected ? '<div class="ml-auto text-[#50e3c2]">\u2713</div>' : ''}
          </button>
        \`;
      });
      html += '</div>';
    }

    html += '</div>';
    container.innerHTML = html;

    // Attach event listeners
    if (config.type === 'height') {
      const cmDiv = document.getElementById('height-cm');
      const ftDiv = document.getElementById('height-ft');
      const unitCmBtn = document.getElementById('unit-cm');
      const unitFtBtn = document.getElementById('unit-ft');
      const inputCm = document.getElementById('input-cm');
      const sliderCm = document.getElementById('slider-cm');
      const inputFt = document.getElementById('input-ft');
      const inputIn = document.getElementById('input-in');
      const validation = document.getElementById(\`validation-\${field}\`);
      const nextBtn = document.getElementById('next-btn');
      
      let currentUnit = unitPrefs.height || 'cm';
      
      const updateCmFromFt = () => {
        const ft = parseInt(inputFt.value) || 0;
        const inch = parseInt(inputIn.value) || 0;
        const cm = Math.round((ft * 30.48) + (inch * 2.54));
        inputCm.value = cm;
        sliderCm.value = cm;
        return cm;
      };
      
      const updateFtFromCm = () => {
        const cm = parseInt(inputCm.value);
        const totalInches = cm / 2.54;
        const ft = Math.floor(totalInches / 12);
        const inch = Math.round(totalInches % 12);
        inputFt.value = ft;
        inputIn.value = inch;
      };
      
      const validate = (val) => {
        if (val >= 100 && val <= 250) {
          validation.innerHTML = '<span class="text-[#50e3c2]">\u2713 Looks good</span>';
          answers[field] = parseInt(val);
          saveToSession();
          return true;
        } else {
          validation.innerHTML = '<span class="text-red-400">Please enter a value between 100\u2013250 cm</span>';
          return false;
        }
      };
      
      unitCmBtn.onclick = () => {
        if (currentUnit === 'ft') {
          updateCmFromFt();
          currentUnit = 'cm';
          unitPrefs.height = 'cm';
          localStorage.setItem('fc_units', JSON.stringify(unitPrefs));
          cmDiv.classList.remove('hidden');
          ftDiv.classList.add('hidden');
          unitCmBtn.className = 'flex-1 rounded py-2 font-medium transition bg-[#50e3c2] text-black';
          unitFtBtn.className = 'flex-1 rounded py-2 font-medium transition bg-black/5 dark:bg-white/5';
        }
      };
      
      unitFtBtn.onclick = () => {
        if (currentUnit === 'cm') {
          updateFtFromCm();
          currentUnit = 'ft';
          unitPrefs.height = 'ft';
          localStorage.setItem('fc_units', JSON.stringify(unitPrefs));
          ftDiv.classList.remove('hidden');
          cmDiv.classList.add('hidden');
          unitFtBtn.className = 'flex-1 rounded py-2 font-medium transition bg-[#50e3c2] text-black';
          unitCmBtn.className = 'flex-1 rounded py-2 font-medium transition bg-black/5 dark:bg-white/5';
        }
      };
      
      sliderCm.oninput = () => {
        inputCm.value = sliderCm.value;
        updateFtFromCm();
        validate(sliderCm.value);
      };
      
      inputCm.onchange = () => {
        sliderCm.value = inputCm.value;
        updateFtFromCm();
        validate(inputCm.value);
      };
      
      inputFt.onchange = () => {
        const cm = updateCmFromFt();
        validate(cm);
      };
      
      inputIn.onchange = () => {
        const cm = updateCmFromFt();
        validate(cm);
      };
      
      nextBtn.onclick = () => {
        let cm = currentUnit === 'cm' ? parseInt(inputCm.value) : updateCmFromFt();
        if (validate(cm)) nextStep();
      };
      
      validate(inputCm.value);
    } else if (config.type === 'slider') {
      const input = document.getElementById(\`input-\${field}\`);
      const slider = document.getElementById(\`slider-\${field}\`);
      const validation = document.getElementById(\`validation-\${field}\`);
      const nextBtn = document.getElementById('next-btn');

      const validate = (val, autoAdvance = false) => {
        let actVal = parseInt(val);
        const container = document.querySelector(\`[data-base-unit]\`);
        let isImp = container && container.getAttribute('data-is-imp') === 'true';
        let baseUnit = container ? container.getAttribute('data-base-unit') : config.unit;
        
        let displayMin = config.min;
        let displayMax = config.max;
        if (isImp) {
          if (baseUnit === 'kg') {
            displayMin = Math.round(config.min * 2.20462);
            displayMax = Math.round(config.max * 2.20462);
          } else if (baseUnit === 'cm') {
            displayMin = Math.round(config.min / 2.54);
            displayMax = Math.round(config.max / 2.54);
          }
        }
        
        if (actVal >= displayMin && actVal <= displayMax) {
          validation.innerHTML = '<span class="text-[#50e3c2]">\u2713 Looks good</span>';
          
          if (isImp) {
             if (baseUnit === 'kg') answers[field] = actVal / 2.20462;
             else if (baseUnit === 'cm') answers[field] = actVal * 2.54;
          } else {
             answers[field] = actVal;
          }
          
          saveToSession();
          if (autoAdvance) setTimeout(() => nextStep(), 400);
        } else {
          validation.innerHTML = \`<span class="text-red-400">Please enter a value between \${displayMin}\u2013\${displayMax}</span>\`;
        }
      };

      slider.oninput = () => {
        input.value = slider.value;
        validate(slider.value, false);
      };
      input.onchange = () => {
        slider.value = input.value;
        validate(input.value, false);
      };
      nextBtn.onclick = () => {
        if (answers[field]) nextStep();
        else validate(input.value, false);
      };
    } else if (config.type === 'time') {
      let defaultHours = 0;
      let defaultMinutes = 0;
      if (typeof config.default === 'string' && config.default.includes(':')) {
        const [h, m] = config.default.split(':').map(Number);
        defaultHours = h;
        defaultMinutes = m;
      } else if (config.default && typeof config.default === 'object') {
        defaultHours = config.default.hours || 0;
        defaultMinutes = config.default.minutes || 0;
      }
      
      html = \`<div class="animate-slide-in">
        <h2 class="mb-2 text-3xl font-bold">\${config.question}</h2>
        \${config.note ? \`<p class="mb-6 text-sm text-black/40 dark:text-white/40">\${config.note}</p>\` : '<div class="mb-6"></div>'}
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label class="mb-2 block text-sm font-medium">Hours</label>
              <input type="number" id="time-hours" value="\${answers[field]?.hours ?? defaultHours}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="23">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Minutes</label>
              <input type="number" id="time-minutes" value="\${answers[field]?.minutes ?? defaultMinutes}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="59">
            </div>
          </div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      </div>\`;
      
      document.getElementById('steps-container').innerHTML = html;
      const hoursInput = document.getElementById('time-hours');
      const minutesInput = document.getElementById('time-minutes');
      const nextBtn = document.getElementById('next-btn');
      
      const validate = () => {
        const h = parseInt(hoursInput.value) || 0;
        const m = parseInt(minutesInput.value) || 0;
        if (h >= 0 && h < 24 && m >= 0 && m < 60) {
          answers[field] = { hours: h, minutes: m };
          saveToSession();
          return true;
        }
        return false;
      };
      
      nextBtn.onclick = () => {
        if (validate()) nextStep();
      };
      updateProgress();
      return;
    } else if (config.type === 'duration') {
      const defaultVal = answers[field] || config.default || { hours: 0, minutes: 45, seconds: 0 };
      html = \`<div class="animate-slide-in">
        <h2 class="mb-2 text-3xl font-bold">\${config.question}</h2>
        \${config.note ? \`<p class="mb-6 text-sm text-black/40 dark:text-white/40">\${config.note}</p>\` : '<div class="mb-6"></div>'}
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 grid grid-cols-3 gap-4">
            <div>
              <label class="mb-2 block text-sm font-medium">Hours</label>
              <input type="number" id="duration-hours" value="\${defaultVal.hours ?? 0}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="23">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Minutes</label>
              <input type="number" id="duration-minutes" value="\${defaultVal.minutes ?? 45}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="59">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Seconds</label>
              <input type="number" id="duration-seconds" value="\${defaultVal.seconds ?? 0}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="59">
            </div>
          </div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      </div>\`;
      
      document.getElementById('steps-container').innerHTML = html;
      const hoursInput = document.getElementById('duration-hours');
      const minutesInput = document.getElementById('duration-minutes');
      const secondsInput = document.getElementById('duration-seconds');
      const nextBtn = document.getElementById('next-btn');
      
      const validate = () => {
        const h = parseInt(hoursInput.value) || 0;
        const m = parseInt(minutesInput.value) || 0;
        const s = parseInt(secondsInput.value) || 0;
        if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) {
          answers[field] = { hours: h, minutes: m, seconds: s };
          saveToSession();
          return true;
        }
        return false;
      };
      
      nextBtn.onclick = () => {
        if (validate()) nextStep();
      };
      updateProgress();
      return;
    } else if (config.type === 'cards' || config.type === 'activity') {
      document.querySelectorAll('.card-option').forEach(btn => {
        btn.onclick = () => {
          const value = btn.dataset.value;
          // Handle numeric values for card options
          answers[field] = isNaN(value) ? value : parseInt(value);
          saveToSession();
          setTimeout(() => nextStep(), 200);
        };
      });
    }

    updateProgress();
  }

  function nextStep() {
    currentStep++;
    const activeFields = getActiveFields();
    if (currentStep >= activeFields.length) {
      showCalculateButton();
    } else {
      renderStep();
    }
  }

  function showCalculateButton() {
    const container = document.getElementById('steps-container');
    container.innerHTML = \`
      <div class="text-center py-8">
        <div class="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#50e3c2]/10 text-5xl">\u2713</div>
        <h2 class="mb-3 text-3xl font-bold text-black dark:text-white">All Set!</h2>
        <p class="text-lg text-black/60 dark:text-white/60 mb-2">We've got all your information</p>
        <p class="text-sm text-black/40 dark:text-white/40">Click below to see your personalized results</p>
      </div>
    \`;
    
    const calcBtn = document.getElementById('calculate-btn');
    calcBtn.classList.remove('hidden');
    document.getElementById('progress-bar').style.width = '100%';
    
    // Scroll button into view smoothly
    setTimeout(() => {
      calcBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  document.getElementById('calculate-btn').onclick = () => {
    localStorage.setItem(\`fc_calc_\${calculatorSlug}\`, JSON.stringify(answers));
    window.location.href = \`/calculator/\${calculatorSlug}/result\`;
  };

  // Attach global unit toggle handlers
  const metricBtn = document.getElementById('global-unit-metric');
  const imperialBtn = document.getElementById('global-unit-imperial');
  if (metricBtn && imperialBtn) {
    metricBtn.onclick = () => handleGlobalUnitChange('metric');
    imperialBtn.onclick = () => handleGlobalUnitChange('imperial');
  }

  updateGlobalUnitUI();
  renderStep();
})();<\/script> `], ["", '<div id="input-flow" class="mx-auto max-w-2xl px-3 sm:px-4 md:px-6 py-8 sm:py-12" data-astro-cid-gy7pbaoz> <div class="mb-8 flex items-center justify-between" data-astro-cid-gy7pbaoz> <div class="text-sm text-black/40 dark:text-white/40" data-astro-cid-gy7pbaoz> <span class="hidden sm:inline" data-astro-cid-gy7pbaoz>Measurement System</span> <span class="sm:hidden" data-astro-cid-gy7pbaoz>Units</span> </div> <div class="inline-flex rounded-lg border border-black/10 bg-white shadow-sm p-0.5 dark:border-white/10 dark:bg-[#0a0a0a]" data-astro-cid-gy7pbaoz> <button id="global-unit-metric" class="rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200" data-astro-cid-gy7pbaoz>Metric</button> <button id="global-unit-imperial" class="rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200" data-astro-cid-gy7pbaoz>Imperial</button> </div> </div> <div class="mb-8" data-astro-cid-gy7pbaoz> <p class="mb-2 text-xs sm:text-sm text-black/40 dark:text-white/40" id="progress-text" data-astro-cid-gy7pbaoz>Step 1 of ', '</p> <div class="h-1 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10" data-astro-cid-gy7pbaoz> <div id="progress-bar" class="h-full bg-[#50e3c2] transition-all duration-300" style="width: 0%" data-astro-cid-gy7pbaoz></div> </div> </div> <div id="steps-container" class="relative overflow-hidden min-h-[280px] sm:min-h-[320px]" data-astro-cid-gy7pbaoz> <!-- Steps will be injected here --> </div> <button id="calculate-btn" class="hidden w-full rounded-xl bg-[#50e3c2] py-4 text-center font-bold text-black text-base transition-all hover:bg-black hover:text-white dark:hover:bg-white mt-6 sticky bottom-4 shadow-lg" data-astro-cid-gy7pbaoz>\nCalculate Results \u2192\n</button> </div> <script>(function(){', `
  const fieldConfigs = {
    age: {
      question: "How old are you?",
      type: "slider",
      min: 10,
      max: 90,
      default: 30,
      unit: "years"
    },
    gender: {
      question: "What's your biological sex?",
      note: "for biological measurement only",
      type: "cards",
      options: [
        { value: "male", label: "Male", icon: "\u{1F468}" },
        { value: "female", label: "Female", icon: "\u{1F469}" }
      ]
    },
    height: {
      question: "How tall are you?",
      type: "height",
      min: 100,
      max: 250,
      default: 170,
      unit: "cm"
    },
    weight: {
      question: "What's your current weight?",
      type: "slider",
      min: 30,
      max: 200,
      default: 70,
      unit: "kg"
    },
    waist: {
      question: "What's your waist circumference?",
      type: "slider",
      min: 40,
      max: 200,
      default: 80,
      unit: "cm"
    },
    neck: {
      question: "What's your neck circumference?",
      type: "slider",
      min: 20,
      max: 60,
      default: 35,
      unit: "cm"
    },
    hip: {
      question: "What's your hip circumference?",
      type: "slider",
      min: 60,
      max: 180,
      default: 95,
      unit: "cm"
    },
    restHR: {
      question: "What's your resting heart rate?",
      type: "slider",
      min: 40,
      max: 100,
      default: 70,
      unit: "bpm"
    },
    exerciseMin: {
      question: "How many minutes do you exercise daily?",
      type: "slider",
      min: 0,
      max: 180,
      default: 30,
      unit: "min"
    },
    lift: {
      question: "Which lift are you calculating?",
      type: "cards",
      options: [
        { value: "bench", label: "Bench Press", icon: "\u{1F3CB}\uFE0F" },
        { value: "squat", label: "Squat", icon: "\u{1F9B5}" },
        { value: "deadlift", label: "Deadlift", icon: "\u2B06\uFE0F" },
        { value: "ohp", label: "Overhead Press", icon: "\u{1F4AA}" },
        { value: "row", label: "Barbell Row", icon: "\u{1F6A3}" },
        { value: "other", label: "Other", icon: "\u2753" }
      ]
    },
    reps: {
      question: "How many reps did you lift?",
      type: "slider",
      min: 1,
      max: 20,
      default: 5,
      unit: "reps"
    },
    distance: {
      question: "What distance did you run?",
      type: "slider",
      min: 1,
      max: 50,
      default: 10,
      unit: "km"
    },
    hours: {
      question: "How long did it take?",
      note: "Enter hours and minutes separately",
      type: "time",
      default: { hours: 1, minutes: 0 }
    },
    duration: {
      question: "How long did your run take?",
      note: "Enter hours, minutes, and seconds",
      type: "duration",
      default: { hours: 0, minutes: 45, seconds: 0 }
    },
    sleepMode: {
      question: "What do you want to calculate?",
      type: "cards",
      options: [
        { value: "bedtime", label: "Find bedtime", desc: "I know my wake time" },
        { value: "waketime", label: "Find wake time", desc: "I know my bedtime" }
      ]
    },
    wakeTime: {
      question: "What time do you wake up?",
      type: "time",
      default: "07:00"
    },
    sleepTime: {
      question: "What time do you sleep?",
      type: "time",
      default: "23:00"
    },
    deficitAmount: {
      question: "What deficit do you want?",
      type: "cards",
      options: [
        { value: 250, label: "Slow", desc: "0.25 kg/week" },
        { value: 500, label: "Moderate", desc: "0.5 kg/week" },
        { value: 750, label: "Fast", desc: "0.75 kg/week" },
        { value: 1000, label: "Very Fast", desc: "1 kg/week" }
      ]
    },
    bodyFat: {
      question: "What's your body fat %? (optional)",
      type: "slider",
      min: 5,
      max: 50,
      default: 20,
      unit: "%"
    },
    proteinGoal: {
      question: "What's your primary goal?",
      type: "cards",
      options: [
        { value: "maintain", label: "Maintain", icon: "\u2696\uFE0F" },
        { value: "loss", label: "Lose weight", icon: "\u{1F4C9}" },
        { value: "gain", label: "Build muscle", icon: "\u{1F4AA}" },
        { value: "recomp", label: "Recomposition", icon: "\u{1F504}" },
        { value: "athlete", label: "Athletic", icon: "\u{1F3C3}" }
      ]
    },
    activity: {
      question: "How active are you?",
      type: "activity",
      options: [
        { value: "sedentary", icon: "\u{1FA91}", label: "Sedentary", desc: "Mostly sitting, desk job" },
        { value: "light", icon: "\u{1F6B6}", label: "Lightly active", desc: "Walk 1\u20133 days/week" },
        { value: "moderate", icon: "\u{1F3C3}", label: "Moderately active", desc: "Exercise 3\u20135 days/week" },
        { value: "very", icon: "\u{1F4AA}", label: "Very active", desc: "Hard training 6\u20137 days" },
        { value: "athlete", icon: "\u{1F3CB}\uFE0F", label: "Athlete", desc: "Twice daily or physical job" }
      ]
    },
    goal: {
      question: "What's your goal?",
      type: "cards",
      options: [
        { value: "lose", label: "Lose weight", icon: "\u{1F4C9}" },
        { value: "maintain", label: "Maintain", icon: "\u2696\uFE0F" },
        { value: "build", label: "Build muscle", icon: "\u{1F4AA}" }
      ]
    }
  };

  let currentStep = 0;
  const answers = {};
  const sessionKey = \\\`fc_calc_\\\${calculatorSlug}\\\`;
  let systemUnit = localStorage.getItem('fc_system_unit') || 'metric';

  function updateGlobalUnitUI() {
    const m = document.getElementById('global-unit-metric');
    const i = document.getElementById('global-unit-imperial');
    if(m && i) {
      if(systemUnit === 'metric') {
        m.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 bg-black text-white dark:bg-white dark:text-black';
        i.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 text-black/50 hover:text-black/80 dark:text-white/50 dark:hover:text-white/80';
      } else {
        i.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 bg-black text-white dark:bg-white dark:text-black';
        m.className = 'rounded-md px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 text-black/50 hover:text-black/80 dark:text-white/50 dark:hover:text-white/80';
      }
    }
  }
  
  function handleGlobalUnitChange(newUnit) {
    if(systemUnit !== newUnit) {
      systemUnit = newUnit;
      localStorage.setItem('fc_system_unit', newUnit);
      updateGlobalUnitUI();
      // Adjust answers when switching so sliders don't jump weirdly, but since we convert strictly from answers, we just re-render
      renderStep();
      attachEvents();
    }
  }

  const unitPrefs = JSON.parse(localStorage.getItem('fc_units') || '{"weight":"kg","height":"cm"}');

  // Auto-restore saved data (silently)
  const savedData = localStorage.getItem(sessionKey);
  if (savedData) {
    try {
      Object.assign(answers, JSON.parse(savedData));
    } catch (e) {
      // If data is corrupted, just start fresh
      localStorage.removeItem(sessionKey);
    }
  }

  function getActiveFields() {
    return requiredFields.filter(field => {
      if (calculatorSlug === 'sleep') {
        if (field === 'wakeTime' && answers.sleepMode === 'waketime') return false;
        if (field === 'sleepTime' && answers.sleepMode === 'bedtime') return false;
      }
      return true;
    });
  }

  function updateProgress() {
    const activeFields = getActiveFields();
    const percent = ((currentStep + 1) / activeFields.length) * 100;
    document.getElementById('progress-bar').style.width = \\\`\\\${percent}%\\\`;
    document.getElementById('progress-text').textContent = \\\`Step \\\${currentStep + 1} of \\\${activeFields.length}\\\`;
  }

  function saveToSession() {
    localStorage.setItem(sessionKey, JSON.stringify(answers));
  }

  function renderStep() {
    const activeFields = getActiveFields();
    const container = document.getElementById('steps-container');
    const field = activeFields[currentStep];
    const config = fieldConfigs[field];

    let html = \\\`
      <div class="animate-slide-in">
        <h2 class="mb-2 text-3xl font-bold">\\\${config.question}</h2>
        \\\${config.note ? \\\`<p class="mb-6 text-sm text-black/40 dark:text-white/40">\\\${config.note}</p>\\\` : '<div class="mb-6"></div>'}
    \\\`;

    if (config.type === 'height') {
      const heightUnit = unitPrefs.height || 'cm';
      const valueCm = answers[field] || config.default;
      const isFeet = heightUnit === 'ft';
      const feet = isFeet ? Math.floor(valueCm / 30.48) : Math.floor(valueCm / 30.48);
      const inches = isFeet ? Math.round((valueCm / 2.54) % 12) : 0;
      
      html += \\\`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 flex gap-2">
            <button id="unit-cm" class="flex-1 rounded py-2 font-medium transition \\\${heightUnit === 'cm' ? 'bg-[#50e3c2] text-black' : 'bg-black/5 dark:bg-white/5'}">cm</button>
            <button id="unit-ft" class="flex-1 rounded py-2 font-medium transition \\\${heightUnit === 'ft' ? 'bg-[#50e3c2] text-black' : 'bg-black/5 dark:bg-white/5'}">ft / in</button>
          </div>
          
          <div id="height-cm" class="\\\${heightUnit === 'ft' ? 'hidden' : ''}">
            <div class="mb-4 flex items-center justify-between">
              <input type="number" id="input-cm" value="\\\${valueCm}" 
                class="w-24 rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="100" max="250">
              <span class="text-black/60 dark:text-white/60">cm</span>
            </div>
            <input type="range" id="slider-cm" value="\\\${valueCm}" 
              min="100" max="250" class="w-full accent-[#50e3c2]">
          </div>
          
          <div id="height-ft" class="\\\${heightUnit === 'cm' ? 'hidden' : ''}">
            <div class="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label class="mb-1 block text-sm text-black/60 dark:text-white/60">Feet</label>
                <input type="number" id="input-ft" value="\\\${feet}" 
                  class="w-full rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                  min="3" max="8">
              </div>
              <div>
                <label class="mb-1 block text-sm text-black/60 dark:text-white/60">Inches</label>
                <input type="number" id="input-in" value="\\\${inches}" 
                  class="w-full rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                  min="0" max="11">
              </div>
            </div>
          </div>
          
          <div id="validation-\\\${field}" class="mt-4 text-sm"></div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      \\\`;
    } else if (config.type === 'slider') {
      const baseValue = answers[field] || config.default;
      let displayVal = baseValue;
      let displayMin = config.min;
      let displayMax = config.max;
      let displayUnit = config.unit || unitPrefs[field] || '';
      
      const isImp = systemUnit === 'imperial' && (displayUnit === 'kg' || displayUnit === 'cm');
      if (isImp) {
        if (displayUnit === 'kg') {
          displayVal = Math.round(baseValue * 2.20462);
          displayMin = Math.round(config.min * 2.20462);
          displayMax = Math.round(config.max * 2.20462);
          displayUnit = 'lbs';
        } else if (displayUnit === 'cm') {
          displayVal = Math.round(baseValue / 2.54);
          displayMin = Math.round(config.min / 2.54);
          displayMax = Math.round(config.max / 2.54);
          displayUnit = 'in';
        }
      }

      html += \\\`
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]" data-is-imp="\\\${isImp}" data-base-unit="\\\${config.unit}">
          <div class="mb-4 flex items-center justify-between">
            <input type="number" id="input-\\\${field}" value="\\\${displayVal}" 
              class="w-24 rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
              min="\\\${displayMin}" max="\\\${displayMax}">
            <span class="text-black/60 dark:text-white/60">\\\${displayUnit}</span>
          </div>
          <input type="range" id="slider-\\\${field}" value="\\\${displayVal}" 
            min="\\\${displayMin}" max="\\\${displayMax}" 
            class="w-full accent-[#50e3c2]">
          <div id="validation-\\\${field}" class="mt-4 text-sm"></div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      \\\`;
    } else if (config.type === 'cards') {
      html += \\\`<div class="grid gap-4 \\\${config.options.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}">\\\`;
      config.options.forEach(opt => {
        const selected = answers[field] === opt.value;
        html += \\\`
          <button data-value="\\\${opt.value}" class="card-option rounded-lg border p-6 text-left transition-all \\\${
            selected ? 'border-[#0070f3] bg-[#0070f3]/10' : 'border-black/10 bg-gray-50 hover:border-black/30 dark:border-white/10 dark:bg-[#111] dark:hover:border-white/30'
          }">
            \\\${opt.icon ? \\\`<div class="mb-2 text-3xl">\\\${opt.icon}</div>\\\` : ''}
            <div class="font-semibold text-black dark:text-white">\\\${opt.label}</div>
            \\\${opt.desc ? \\\`<div class="text-xs text-black/60 dark:text-white/60 mt-1">\\\${opt.desc}</div>\\\` : ''}
          </button>
        \\\`;
      });
      html += '</div>';
    } else if (config.type === 'activity') {
      html += '<div class="space-y-3">';
      config.options.forEach(opt => {
        const selected = answers[field] === opt.value;
        html += \\\`
          <button data-value="\\\${opt.value}" class="card-option flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all \\\${
            selected ? 'border-[#0070f3] bg-[#0070f3]/10' : 'border-black/10 bg-gray-50 hover:border-black/30 dark:border-white/10 dark:bg-[#111] dark:hover:border-white/30'
          }">
            <div class="text-3xl">\\\${opt.icon}</div>
            <div>
              <div class="font-semibold">\\\${opt.label}</div>
              <div class="text-sm text-black/60 dark:text-white/60">\\\${opt.desc}</div>
            </div>
            \\\${selected ? '<div class="ml-auto text-[#50e3c2]">\u2713</div>' : ''}
          </button>
        \\\`;
      });
      html += '</div>';
    }

    html += '</div>';
    container.innerHTML = html;

    // Attach event listeners
    if (config.type === 'height') {
      const cmDiv = document.getElementById('height-cm');
      const ftDiv = document.getElementById('height-ft');
      const unitCmBtn = document.getElementById('unit-cm');
      const unitFtBtn = document.getElementById('unit-ft');
      const inputCm = document.getElementById('input-cm');
      const sliderCm = document.getElementById('slider-cm');
      const inputFt = document.getElementById('input-ft');
      const inputIn = document.getElementById('input-in');
      const validation = document.getElementById(\\\`validation-\\\${field}\\\`);
      const nextBtn = document.getElementById('next-btn');
      
      let currentUnit = unitPrefs.height || 'cm';
      
      const updateCmFromFt = () => {
        const ft = parseInt(inputFt.value) || 0;
        const inch = parseInt(inputIn.value) || 0;
        const cm = Math.round((ft * 30.48) + (inch * 2.54));
        inputCm.value = cm;
        sliderCm.value = cm;
        return cm;
      };
      
      const updateFtFromCm = () => {
        const cm = parseInt(inputCm.value);
        const totalInches = cm / 2.54;
        const ft = Math.floor(totalInches / 12);
        const inch = Math.round(totalInches % 12);
        inputFt.value = ft;
        inputIn.value = inch;
      };
      
      const validate = (val) => {
        if (val >= 100 && val <= 250) {
          validation.innerHTML = '<span class="text-[#50e3c2]">\u2713 Looks good</span>';
          answers[field] = parseInt(val);
          saveToSession();
          return true;
        } else {
          validation.innerHTML = '<span class="text-red-400">Please enter a value between 100\u2013250 cm</span>';
          return false;
        }
      };
      
      unitCmBtn.onclick = () => {
        if (currentUnit === 'ft') {
          updateCmFromFt();
          currentUnit = 'cm';
          unitPrefs.height = 'cm';
          localStorage.setItem('fc_units', JSON.stringify(unitPrefs));
          cmDiv.classList.remove('hidden');
          ftDiv.classList.add('hidden');
          unitCmBtn.className = 'flex-1 rounded py-2 font-medium transition bg-[#50e3c2] text-black';
          unitFtBtn.className = 'flex-1 rounded py-2 font-medium transition bg-black/5 dark:bg-white/5';
        }
      };
      
      unitFtBtn.onclick = () => {
        if (currentUnit === 'cm') {
          updateFtFromCm();
          currentUnit = 'ft';
          unitPrefs.height = 'ft';
          localStorage.setItem('fc_units', JSON.stringify(unitPrefs));
          ftDiv.classList.remove('hidden');
          cmDiv.classList.add('hidden');
          unitFtBtn.className = 'flex-1 rounded py-2 font-medium transition bg-[#50e3c2] text-black';
          unitCmBtn.className = 'flex-1 rounded py-2 font-medium transition bg-black/5 dark:bg-white/5';
        }
      };
      
      sliderCm.oninput = () => {
        inputCm.value = sliderCm.value;
        updateFtFromCm();
        validate(sliderCm.value);
      };
      
      inputCm.onchange = () => {
        sliderCm.value = inputCm.value;
        updateFtFromCm();
        validate(inputCm.value);
      };
      
      inputFt.onchange = () => {
        const cm = updateCmFromFt();
        validate(cm);
      };
      
      inputIn.onchange = () => {
        const cm = updateCmFromFt();
        validate(cm);
      };
      
      nextBtn.onclick = () => {
        let cm = currentUnit === 'cm' ? parseInt(inputCm.value) : updateCmFromFt();
        if (validate(cm)) nextStep();
      };
      
      validate(inputCm.value);
    } else if (config.type === 'slider') {
      const input = document.getElementById(\\\`input-\\\${field}\\\`);
      const slider = document.getElementById(\\\`slider-\\\${field}\\\`);
      const validation = document.getElementById(\\\`validation-\\\${field}\\\`);
      const nextBtn = document.getElementById('next-btn');

      const validate = (val, autoAdvance = false) => {
        let actVal = parseInt(val);
        const container = document.querySelector(\\\`[data-base-unit]\\\`);
        let isImp = container && container.getAttribute('data-is-imp') === 'true';
        let baseUnit = container ? container.getAttribute('data-base-unit') : config.unit;
        
        let displayMin = config.min;
        let displayMax = config.max;
        if (isImp) {
          if (baseUnit === 'kg') {
            displayMin = Math.round(config.min * 2.20462);
            displayMax = Math.round(config.max * 2.20462);
          } else if (baseUnit === 'cm') {
            displayMin = Math.round(config.min / 2.54);
            displayMax = Math.round(config.max / 2.54);
          }
        }
        
        if (actVal >= displayMin && actVal <= displayMax) {
          validation.innerHTML = '<span class="text-[#50e3c2]">\u2713 Looks good</span>';
          
          if (isImp) {
             if (baseUnit === 'kg') answers[field] = actVal / 2.20462;
             else if (baseUnit === 'cm') answers[field] = actVal * 2.54;
          } else {
             answers[field] = actVal;
          }
          
          saveToSession();
          if (autoAdvance) setTimeout(() => nextStep(), 400);
        } else {
          validation.innerHTML = \\\`<span class="text-red-400">Please enter a value between \\\${displayMin}\u2013\\\${displayMax}</span>\\\`;
        }
      };

      slider.oninput = () => {
        input.value = slider.value;
        validate(slider.value, false);
      };
      input.onchange = () => {
        slider.value = input.value;
        validate(input.value, false);
      };
      nextBtn.onclick = () => {
        if (answers[field]) nextStep();
        else validate(input.value, false);
      };
    } else if (config.type === 'time') {
      let defaultHours = 0;
      let defaultMinutes = 0;
      if (typeof config.default === 'string' && config.default.includes(':')) {
        const [h, m] = config.default.split(':').map(Number);
        defaultHours = h;
        defaultMinutes = m;
      } else if (config.default && typeof config.default === 'object') {
        defaultHours = config.default.hours || 0;
        defaultMinutes = config.default.minutes || 0;
      }
      
      html = \\\`<div class="animate-slide-in">
        <h2 class="mb-2 text-3xl font-bold">\\\${config.question}</h2>
        \\\${config.note ? \\\`<p class="mb-6 text-sm text-black/40 dark:text-white/40">\\\${config.note}</p>\\\` : '<div class="mb-6"></div>'}
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label class="mb-2 block text-sm font-medium">Hours</label>
              <input type="number" id="time-hours" value="\\\${answers[field]?.hours ?? defaultHours}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="23">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Minutes</label>
              <input type="number" id="time-minutes" value="\\\${answers[field]?.minutes ?? defaultMinutes}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="59">
            </div>
          </div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      </div>\\\`;
      
      document.getElementById('steps-container').innerHTML = html;
      const hoursInput = document.getElementById('time-hours');
      const minutesInput = document.getElementById('time-minutes');
      const nextBtn = document.getElementById('next-btn');
      
      const validate = () => {
        const h = parseInt(hoursInput.value) || 0;
        const m = parseInt(minutesInput.value) || 0;
        if (h >= 0 && h < 24 && m >= 0 && m < 60) {
          answers[field] = { hours: h, minutes: m };
          saveToSession();
          return true;
        }
        return false;
      };
      
      nextBtn.onclick = () => {
        if (validate()) nextStep();
      };
      updateProgress();
      return;
    } else if (config.type === 'duration') {
      const defaultVal = answers[field] || config.default || { hours: 0, minutes: 45, seconds: 0 };
      html = \\\`<div class="animate-slide-in">
        <h2 class="mb-2 text-3xl font-bold">\\\${config.question}</h2>
        \\\${config.note ? \\\`<p class="mb-6 text-sm text-black/40 dark:text-white/40">\\\${config.note}</p>\\\` : '<div class="mb-6"></div>'}
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 grid grid-cols-3 gap-4">
            <div>
              <label class="mb-2 block text-sm font-medium">Hours</label>
              <input type="number" id="duration-hours" value="\\\${defaultVal.hours ?? 0}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="23">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Minutes</label>
              <input type="number" id="duration-minutes" value="\\\${defaultVal.minutes ?? 45}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="59">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Seconds</label>
              <input type="number" id="duration-seconds" value="\\\${defaultVal.seconds ?? 0}" 
                class="w-full rounded border border-black/10 bg-white px-4 py-3 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
                min="0" max="59">
            </div>
          </div>
          <button id="next-btn" class="mt-6 w-full rounded-lg bg-black/5 py-3 font-semibold transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20">
            Next \u2192
          </button>
        </div>
      </div>\\\`;
      
      document.getElementById('steps-container').innerHTML = html;
      const hoursInput = document.getElementById('duration-hours');
      const minutesInput = document.getElementById('duration-minutes');
      const secondsInput = document.getElementById('duration-seconds');
      const nextBtn = document.getElementById('next-btn');
      
      const validate = () => {
        const h = parseInt(hoursInput.value) || 0;
        const m = parseInt(minutesInput.value) || 0;
        const s = parseInt(secondsInput.value) || 0;
        if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) {
          answers[field] = { hours: h, minutes: m, seconds: s };
          saveToSession();
          return true;
        }
        return false;
      };
      
      nextBtn.onclick = () => {
        if (validate()) nextStep();
      };
      updateProgress();
      return;
    } else if (config.type === 'cards' || config.type === 'activity') {
      document.querySelectorAll('.card-option').forEach(btn => {
        btn.onclick = () => {
          const value = btn.dataset.value;
          // Handle numeric values for card options
          answers[field] = isNaN(value) ? value : parseInt(value);
          saveToSession();
          setTimeout(() => nextStep(), 200);
        };
      });
    }

    updateProgress();
  }

  function nextStep() {
    currentStep++;
    const activeFields = getActiveFields();
    if (currentStep >= activeFields.length) {
      showCalculateButton();
    } else {
      renderStep();
    }
  }

  function showCalculateButton() {
    const container = document.getElementById('steps-container');
    container.innerHTML = \\\`
      <div class="text-center py-8">
        <div class="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#50e3c2]/10 text-5xl">\u2713</div>
        <h2 class="mb-3 text-3xl font-bold text-black dark:text-white">All Set!</h2>
        <p class="text-lg text-black/60 dark:text-white/60 mb-2">We've got all your information</p>
        <p class="text-sm text-black/40 dark:text-white/40">Click below to see your personalized results</p>
      </div>
    \\\`;
    
    const calcBtn = document.getElementById('calculate-btn');
    calcBtn.classList.remove('hidden');
    document.getElementById('progress-bar').style.width = '100%';
    
    // Scroll button into view smoothly
    setTimeout(() => {
      calcBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  document.getElementById('calculate-btn').onclick = () => {
    localStorage.setItem(\\\`fc_calc_\\\${calculatorSlug}\\\`, JSON.stringify(answers));
    window.location.href = \\\`/calculator/\\\${calculatorSlug}/result\\\`;
  };

  // Attach global unit toggle handlers
  const metricBtn = document.getElementById('global-unit-metric');
  const imperialBtn = document.getElementById('global-unit-imperial');
  if (metricBtn && imperialBtn) {
    metricBtn.onclick = () => handleGlobalUnitChange('metric');
    imperialBtn.onclick = () => handleGlobalUnitChange('imperial');
  }

  updateGlobalUnitUI();
  renderStep();
})();<\/script> `])), maybeRenderHead(), requiredFields.length, defineScriptVars({ calculatorSlug, requiredFields }));
}, "/Users/princegautam/fitness/src/components/calculators/InputFlow.astro", void 0);

const contentData = {
  "bmi": {
    "whatIs": "Body Mass Index (BMI) is a number calculated from your height and weight. It is a widely used screening tool to identify whether a person is underweight, at a healthy weight, overweight, or obese. BMI does not directly measure body fat, but research shows it correlates with more direct measurements of body fat.",
    "howToUse": [
      "Select your preferred measurement system (Metric or Imperial).",
      "Enter your age, gender, height, and weight accurately.",
      "Click calculate to see your BMI score and health category."
    ],
    "howCalculate": "We use the standard WHO formula. For metric: weight (kg) ÷ height (m)². For imperial: 703 × weight (lb) ÷ height (in)².",
    "faqs": [
      {
        "q": "Is BMI accurate for athletes?",
        "a": "No. BMI does not account for muscle mass. Athletes with high muscle mass may be classified as overweight or obese despite having low body fat."
      },
      {
        "q": "What is a healthy BMI?",
        "a": "A healthy BMI typically falls between 18.5 and 24.9 for most adults."
      },
      {
        "q": "Does age affect BMI?",
        "a": "The standard BMI categories apply to adults 20 and older. However, older adults may be healthier at a slightly higher BMI (25-27) to protect against osteoporosis and frailty."
      },
      {
        "q": "Can children use this BMI calculator?",
        "a": "No. Children and teens need a BMI percentile calculator that compares their score against others of the same age and gender."
      }
    ]
  },
  "bmr": {
    "whatIs": "Your Basal Metabolic Rate (BMR) is the number of calories your body burns while completely at rest — just to keep your heart beating, lungs breathing, and organs functioning. It is the minimum energy your body needs to survive.",
    "howToUse": [
      "Input your accurate height, weight, age, and gender.",
      "Choose metric or imperial units.",
      "Review your BMR result to understand your baseline calorie needs."
    ],
    "howCalculate": "We use the Mifflin-St Jeor equation, which is widely considered the most accurate formula. Men: (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5. Women: (10 × weight in kg) + (6.25 × height in cm) − (5 × age) − 161.",
    "faqs": [
      {
        "q": "Should I eat my BMR in calories?",
        "a": "No, your BMR is the bare minimum to stay alive in a coma. You should eat your TDEE for maintenance, or slightly below TDEE for weight loss."
      },
      {
        "q": "How can I increase my BMR?",
        "a": "Building muscle mass is the most effective way to increase your BMR, as muscle tissue burns more calories at rest than fat tissue."
      },
      {
        "q": "Does BMR decrease with age?",
        "a": "Yes, BMR typically decreases by 1-2% per decade after age 20, largely due to a natural loss of muscle mass."
      },
      {
        "q": "Is BMR the same as resting metabolic rate (RMR)?",
        "a": "They are very similar. BMR is measured under strict laboratory conditions, while RMR is measured under less strict conditions. For most people, the difference is negligible."
      }
    ]
  },
  "tdee": {
    "whatIs": "Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a full day, including exercise, daily movement, and basic body functions. It is the most important number for any calorie-based fitness goal.",
    "howToUse": [
      "Enter your physical metrics (age, gender, height, weight).",
      "Select your activity level honestly, factoring in both exercise and your daily job.",
      "Use the resulting TDEE to set your daily calorie targets."
    ],
    "howCalculate": "We first calculate your BMR using the Mifflin-St Jeor formula, then multiply it by an activity multiplier (ranging from 1.2 for sedentary to 1.9 for extremely active).",
    "faqs": [
      {
        "q": "Why is my TDEE important?",
        "a": "TDEE is the starting point for any diet. If you eat below your TDEE, you lose weight. If you eat above it, you gain weight."
      },
      {
        "q": "Should I re-calculate my TDEE?",
        "a": "Yes, recalculate your TDEE every time you lose or gain 5-10 pounds, as your calorie needs will change."
      },
      {
        "q": "Do I add exercise calories to my TDEE?",
        "a": "No. Your activity level multiplier already accounts for your exercise. Adding more calories would lead to double-counting."
      },
      {
        "q": "Is TDEE accurate for everyone?",
        "a": "It is a highly accurate estimate, but individual metabolisms vary. Use it as a starting point and adjust based on real-world results after 2 weeks."
      }
    ]
  },
  "bodyfat": {
    "whatIs": "Body fat percentage is the proportion of your total body weight that is fat mass, as opposed to lean mass (muscle, bone, organs, water). It is a more accurate measure of fitness than weight or BMI alone.",
    "howToUse": [
      "Use a flexible measuring tape to measure your waist, neck, and (for women) hips.",
      "Enter your height and gender.",
      "Ensure the tape is snug but not compressing the skin."
    ],
    "howCalculate": "We use the US Navy circumference method. For men: 86.010×log10(abdomen-neck) - 70.041×log10(height) + 36.76. For women: 163.205×log10(waist+hip-neck) - 97.684×log10(height) - 78.387.",
    "faqs": [
      {
        "q": "How accurate is the US Navy method?",
        "a": "It is generally accurate within 3-4% of DEXA scans for most people, making it an excellent and accessible tracking tool."
      },
      {
        "q": "What is an ideal body fat percentage?",
        "a": "For men, fitness range is 14-17% and acceptable is 18-24%. For women, fitness range is 21-24% and acceptable is 25-31%."
      },
      {
        "q": "Can I lose fat in specific areas?",
        "a": "No, spot reduction is a myth. You must lower your overall body fat percentage through a calorie deficit to lose fat in specific areas."
      },
      {
        "q": "How often should I measure my body fat?",
        "a": "Measuring once every 2-4 weeks is ideal. Daily measurements will fluctuate based on water retention and bloating."
      }
    ]
  },
  "idealweight": {
    "whatIs": "Ideal weight is an estimated healthy weight range for your height and frame. There is no single 'correct' ideal weight — different medical formulas give different results, which is why this calculator shows multiple ranges.",
    "howToUse": [
      "Select your gender and enter your exact height.",
      "Review the results across the 5 different formulas.",
      "Use the range as a generalized goal, rather than obsessing over a single exact number."
    ],
    "howCalculate": "We use 5 distinct clinical formulas: Devine (1974), Robinson (1983), Miller (1983), Hamwi (1964), and a back-calculation of the healthy BMI range (18.5-24.9).",
    "faqs": [
      {
        "q": "Why do the formulas give different numbers?",
        "a": "Each formula was developed by different medical researchers at different times using different population samples. Viewing them as a range is best."
      },
      {
        "q": "Do these formulas account for muscle mass?",
        "a": "No, they are based strictly on height and gender. If you are highly muscular, your healthy weight will be higher than these estimates."
      },
      {
        "q": "Which formula is the most accurate?",
        "a": "The Devine formula is the most widely used in medical settings for drug dosing, but the BMI range provides the broadest healthy target."
      },
      {
        "q": "Should I try to hit the exact ideal weight?",
        "a": "No. It is a guideline. Body composition (muscle vs fat) and how you feel are far more important than a specific number on the scale."
      }
    ]
  },
  "calories": {
    "whatIs": "Your daily calorie target is the specific number of calories you should eat each day to achieve your goal—whether that is weight loss, maintenance, or muscle gain.",
    "howToUse": [
      "Input your physical stats and current activity level.",
      "Select your specific goal (e.g., moderate weight loss, maintenance, muscle gain).",
      "Follow the daily calorie recommendation consistently."
    ],
    "howCalculate": "We calculate your TDEE using the Mifflin-St Jeor equation. Then we apply a deficit (e.g., -500 calories for weight loss) or a surplus (e.g., +300 for muscle gain) based on your goal.",
    "faqs": [
      {
        "q": "Can I eat anything as long as it fits my calories?",
        "a": "For pure weight loss, yes (CICO - Calories In, Calories Out). However, for health, energy, and muscle retention, food quality and macros matter greatly."
      },
      {
        "q": "Should I eat back calories burned from exercise?",
        "a": "No, our calculator already factors your exercise routine into your activity multiplier. Eating back exercise calories often leads to weight plateaus."
      },
      {
        "q": "What happens if I eat too few calories?",
        "a": "Extreme calorie restriction can cause muscle loss, nutrient deficiencies, fatigue, and a temporary drop in your metabolic rate."
      },
      {
        "q": "How long will it take to see results?",
        "a": "A 500-calorie daily deficit typically results in 1 pound of fat loss per week. Consistency over 4-8 weeks is required to see noticeable visual changes."
      }
    ]
  },
  "macros": {
    "whatIs": "Macronutrients (macros) are the three categories of nutrients that provide calories: protein, carbohydrates, and fat. Tracking macros ensures your body gets the right nutrients for your specific goal, prioritizing muscle retention and energy.",
    "howToUse": [
      "Enter your stats, activity level, and fitness goal.",
      "Get your precise gram targets for protein, fat, and carbs.",
      "Use a food tracking app to hit those targets daily."
    ],
    "howCalculate": "We establish your calorie target first. Protein is set based on lean mass/goal (usually 0.8-1g per lb). Fats are set at 25-30% of total calories. Carbs fill the remaining calories.",
    "faqs": [
      {
        "q": "Do I have to hit my macros perfectly?",
        "a": "No. Aim to hit your protein target within 10 grams, and stay within your overall calorie limit. The exact ratio of carbs to fats is less critical for most people."
      },
      {
        "q": "Which macro is most important for weight loss?",
        "a": "Protein is the most important because it preserves muscle mass while in a calorie deficit and keeps you feeling full longer."
      },
      {
        "q": "Can I lose weight without tracking macros?",
        "a": "Yes, as long as you are in a calorie deficit. However, tracking macros ensures you lose fat rather than muscle."
      },
      {
        "q": "What are good sources of healthy fats?",
        "a": "Avocados, nuts, seeds, olive oil, and fatty fish like salmon are excellent sources of healthy dietary fats."
      }
    ]
  },
  "water": {
    "whatIs": "A daily water intake target ensures your body remains properly hydrated. Hydration impacts everything from cognitive function and energy levels to joint health and athletic performance.",
    "howToUse": [
      "Enter your current body weight.",
      "Enter your average daily minutes of moderate-to-intense exercise.",
      "View your personalized daily hydration target in liters or ounces."
    ],
    "howCalculate": "We use a baseline of 35ml of water per kg of body weight, plus an additional 500-1000ml for every hour of exercise to account for sweat loss.",
    "faqs": [
      {
        "q": "Does coffee or tea count toward my water intake?",
        "a": "Yes. While caffeine is a mild diuretic, the water in coffee and tea still contributes positively to your overall hydration."
      },
      {
        "q": "Can I drink too much water?",
        "a": "Yes, drinking extreme amounts of water in a short time can lead to hyponatremia (low blood sodium). Stick to your calculated daily target spread throughout the day."
      },
      {
        "q": "How do I know if I'm hydrated enough?",
        "a": "The simplest test is the color of your urine. It should be a pale, straw-like yellow. Dark yellow indicates dehydration."
      },
      {
        "q": "Do I need electrolytes with my water?",
        "a": "If you exercise intensely for more than an hour or sweat heavily in hot climates, adding electrolytes (sodium, potassium, magnesium) is beneficial."
      }
    ]
  },
  "heartrate": {
    "whatIs": "Your target heart rate is a specific beats-per-minute (BPM) range you should aim for during cardiovascular exercise to achieve specific results, like fat burning or aerobic endurance.",
    "howToUse": [
      "Enter your age and your resting heart rate (taken right after waking up).",
      "View your personalized heart rate zones.",
      "Use a fitness tracker or smartwatch to stay in your desired zone during workouts."
    ],
    "howCalculate": "We use the Karvonen method, which factors in your resting heart rate to find your Heart Rate Reserve (HRR), combined with the Tanaka formula (208 - 0.7 × age) for Maximum Heart Rate.",
    "faqs": [
      {
        "q": "What is the best zone for fat burning?",
        "a": "Zone 2 (60-70% of maximum HR) burns the highest percentage of calories from fat, making it ideal for steady-state cardio."
      },
      {
        "q": "How do I measure my resting heart rate?",
        "a": "Measure your pulse for 60 seconds immediately after waking up naturally in the morning, while still lying in bed."
      },
      {
        "q": "Is the '220 minus age' formula accurate?",
        "a": "The older '220 minus age' formula is a rough estimate but is often inaccurate. We use the updated Tanaka formula which research shows is more precise."
      },
      {
        "q": "Why is my heart rate higher than normal during exercise?",
        "a": "Heat, humidity, dehydration, caffeine, and lack of sleep can all elevate your heart rate higher than normal for a given effort level."
      }
    ]
  },
  "leanmass": {
    "whatIs": "Lean Body Mass (LBM) is the weight of everything in your body except fat. This includes your muscles, bones, organs, water, and connective tissues. It represents the metabolically active tissue in your body.",
    "howToUse": [
      "Enter your gender, height, and current weight accurately.",
      "Review your lean mass estimation.",
      "Compare it over time to ensure you are retaining muscle during weight loss."
    ],
    "howCalculate": "We calculate LBM using the widely validated Boer formula and the James formula, which use height, weight, and gender correlations to estimate non-fat mass.",
    "faqs": [
      {
        "q": "Why is tracking lean mass important?",
        "a": "When you lose weight, you want to lose fat, not muscle. Tracking LBM helps ensure your diet and exercise program is preserving your muscle tissue."
      },
      {
        "q": "Can lean mass increase?",
        "a": "Yes, through resistance training (weightlifting) and adequate protein intake, you can increase your lean mass by building muscle."
      },
      {
        "q": "Is lean mass the same as muscle mass?",
        "a": "No. Skeletal muscle is just one component of lean mass. Lean mass also includes bones, water, and organs."
      },
      {
        "q": "How accurate are these formulas?",
        "a": "They provide a good estimate for the general population. However, athletes or those with very low/high body fat may need a DEXA scan for absolute accuracy."
      }
    ]
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://calaifitness.com");
function getStaticPaths() {
  return Object.keys(calculatorRegistry).map((slug) => ({
    params: { slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug || !(slug in calculatorRegistry)) {
    return Astro2.redirect("/404");
  }
  const calc = calculatorRegistry[slug];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${calc.label} \u2014 FitnessCalculator`, "description": calc.metaDescription || calc.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-12"> <a href="/" class="mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs sm:text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white">
← Back to home
</a> <div class="mb-6 sm:mb-8"> <div class="mb-3 sm:mb-4 text-4xl sm:text-5xl">${calc.icon}</div> <h1 class="mb-1 sm:mb-2 text-2xl sm:text-4xl font-bold">${calc.label}</h1> <p class="text-sm sm:text-lg text-black/60 dark:text-white/60">${calc.description}</p> </div> ${renderComponent($$result2, "InputFlow", $$InputFlow, { "calculatorSlug": slug, "requiredFields": calc.fields })} <!-- Static Content Sections --> ${contentData[slug] && renderTemplate`<div class="calculator-content mt-16 max-w-4xl space-y-12"> <section> <h2 class="mb-4 text-2xl sm:text-3xl font-bold text-black dark:text-white">What is ${calc.label}?</h2> <p class="text-black/70 dark:text-white/70 leading-relaxed">${contentData[slug].whatIs}</p> </section> <section> <h2 class="mb-4 text-2xl sm:text-3xl font-bold text-black dark:text-white">How to Use This Calculator</h2> <ol class="list-decimal pl-5 space-y-2 text-black/70 dark:text-white/70"> ${contentData[slug].howToUse.map((step) => renderTemplate`<li>${step}</li>`)} </ol> </section> <section> <h2 class="mb-4 text-2xl sm:text-3xl font-bold text-black dark:text-white">How We Calculate ${calc.label}</h2> <p class="text-black/70 dark:text-white/70 leading-relaxed">${contentData[slug].howCalculate}</p> </section> <section> <h2 class="mb-6 text-2xl sm:text-3xl font-bold text-black dark:text-white">Frequently Asked Questions</h2> <div class="space-y-4"> ${contentData[slug].faqs.map((faq, idx) => renderTemplate`<div class="rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-5"> <h3 class="text-lg font-semibold text-black dark:text-white mb-2">${faq.q}</h3> <p class="text-black/60 dark:text-white/60">${faq.a}</p> </div>`)} </div> </section> </div>`} </div> ${contentData[slug] && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contentData[slug].faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  })))}` })}`;
}, "/Users/princegautam/fitness/src/pages/calculator/[slug].astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/calculator/[slug].astro";
const $$url = "/calculator/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
