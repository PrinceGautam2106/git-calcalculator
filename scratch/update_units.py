import os
import re

file_path = "/Users/princegautam/fitnescal/src/components/calculators/InputFlow.astro"
with open(file_path, "r") as f:
    content = f.read()

# 1. Add global toggle HTML
toggle_html = """<div id="input-flow" class="mx-auto max-w-2xl px-3 sm:px-4 md:px-6 py-8 sm:py-12">
  <div class="mb-6 flex justify-center">
    <div class="inline-flex rounded-lg border border-black/10 bg-gray-50 p-1 dark:border-white/10 dark:bg-[#111]">
      <button id="global-unit-metric" class="rounded-md px-6 py-2 text-sm font-medium transition-colors">Metric</button>
      <button id="global-unit-imperial" class="rounded-md px-6 py-2 text-sm font-medium transition-colors">Imperial</button>
    </div>
  </div>"""
content = content.replace('<div id="input-flow" class="mx-auto max-w-2xl px-3 sm:px-4 md:px-6 py-8 sm:py-12">', toggle_html)

# 2. Add systemUnit variable and logic
sys_unit_js = """  let systemUnit = localStorage.getItem('fc_system_unit') || 'metric';

  function updateGlobalUnitUI() {
    const m = document.getElementById('global-unit-metric');
    const i = document.getElementById('global-unit-imperial');
    if(m && i) {
      if(systemUnit === 'metric') {
        m.className = 'rounded-md px-6 py-2 text-sm font-medium transition-colors bg-[#50e3c2] text-black shadow-sm';
        i.className = 'rounded-md px-6 py-2 text-sm font-medium transition-colors text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white';
      } else {
        i.className = 'rounded-md px-6 py-2 text-sm font-medium transition-colors bg-[#50e3c2] text-black shadow-sm';
        m.className = 'rounded-md px-6 py-2 text-sm font-medium transition-colors text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white';
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

  const unitPrefs = JSON.parse(localStorage.getItem('fc_units') || '{"weight":"kg","height":"cm"}');"""
content = content.replace("  const unitPrefs = JSON.parse(localStorage.getItem('fc_units') || '{\"weight\":\"kg\",\"height\":\"cm\"}');", sys_unit_js)

# 3. Add to attachEvents globally
content = content.replace("""  function attachEvents() {
    const activeFields = getActiveFields();""", """  function attachEvents() {
    const mBtn = document.getElementById('global-unit-metric');
    const iBtn = document.getElementById('global-unit-imperial');
    if(mBtn) mBtn.onclick = () => handleGlobalUnitChange('metric');
    if(iBtn) iBtn.onclick = () => handleGlobalUnitChange('imperial');
    
    const activeFields = getActiveFields();""")

# 4. Modify height step rendering
height_render_old = """    if (config.type === 'height') {
      const heightUnit = unitPrefs.height || 'cm';
      const valueCm = answers[field] || config.default;
      const feet = Math.floor(valueCm / 30.48);
      const inches = Math.round((valueCm / 2.54) % 12);
      
      html += `
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 flex gap-2">
            <button id="unit-cm" class="flex-1 rounded py-2 font-medium transition ${heightUnit === 'cm' ? 'bg-[#50e3c2] text-black' : 'bg-black/5 dark:bg-white/5'}">cm</button>
            <button id="unit-ft" class="flex-1 rounded py-2 font-medium transition ${heightUnit === 'ft' ? 'bg-[#50e3c2] text-black' : 'bg-black/5 dark:bg-white/5'}">ft / in</button>
          </div>
          
          <div id="height-cm" class="${heightUnit === 'ft' ? 'hidden' : ''}">"""
height_render_new = """    if (config.type === 'height') {
      const heightUnit = systemUnit === 'imperial' ? 'ft' : 'cm';
      const valueCm = answers[field] || config.default;
      const feet = Math.floor(valueCm / 30.48);
      const inches = Math.round((valueCm / 2.54) % 12);
      
      html += `
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div id="height-cm" class="${heightUnit === 'ft' ? 'hidden' : ''}">"""
content = content.replace(height_render_old, height_render_new)

# 5. Modify slider step rendering
slider_render_old = """    } else if (config.type === 'slider') {
      const value = answers[field] || config.default;
      html += `
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]">
          <div class="mb-4 flex items-center justify-between">
            <input type="number" id="input-${field}" value="${value}" 
              class="w-24 rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
              min="${config.min}" max="${config.max}">
            <span class="text-black/60 dark:text-white/60">${config.unit || unitPrefs[field] || ''}</span>
          </div>
          <input type="range" id="slider-${field}" value="${value}" 
            min="${config.min}" max="${config.max}" 
            class="w-full accent-[#50e3c2]">"""
slider_render_new = """    } else if (config.type === 'slider') {
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

      html += `
        <div class="rounded-lg border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-[#111]" data-is-imp="${isImp}" data-base-unit="${config.unit}">
          <div class="mb-4 flex items-center justify-between">
            <input type="number" id="input-${field}" value="${displayVal}" 
              class="w-24 rounded border border-black/10 bg-white px-3 py-2 text-2xl font-mono font-bold dark:border-white/10 dark:bg-black" 
              min="${displayMin}" max="${displayMax}">
            <span class="text-black/60 dark:text-white/60">${displayUnit}</span>
          </div>
          <input type="range" id="slider-${field}" value="${displayVal}" 
            min="${displayMin}" max="${displayMax}" 
            class="w-full accent-[#50e3c2]">"""
content = content.replace(slider_render_old, slider_render_new)

# 6. Remove height unit toggle events in attachEvents
height_events_old = """      const unitCmBtn = document.getElementById('unit-cm');
      const unitFtBtn = document.getElementById('unit-ft');
      const heightCmDiv = document.getElementById('height-cm');
      const heightFtDiv = document.getElementById('height-ft');
      
      let currentUnit = unitPrefs.height || 'cm';
      
      unitCmBtn.onclick = () => {
        currentUnit = 'cm';
        unitPrefs.height = 'cm';
        localStorage.setItem('fc_units', JSON.stringify(unitPrefs));
        
        unitCmBtn.className = 'flex-1 rounded py-2 font-medium transition bg-[#50e3c2] text-black';
        unitFtBtn.className = 'flex-1 rounded py-2 font-medium transition bg-black/5 dark:bg-white/5';
        
        heightCmDiv.classList.remove('hidden');
        heightFtDiv.classList.add('hidden');
      };
      
      unitFtBtn.onclick = () => {
        currentUnit = 'ft';
        unitPrefs.height = 'ft';
        localStorage.setItem('fc_units', JSON.stringify(unitPrefs));
        
        unitFtBtn.className = 'flex-1 rounded py-2 font-medium transition bg-[#50e3c2] text-black';
        unitCmBtn.className = 'flex-1 rounded py-2 font-medium transition bg-black/5 dark:bg-white/5';
        
        heightFtDiv.classList.remove('hidden');
        heightCmDiv.classList.add('hidden');
      };"""
height_events_new = """      const heightCmDiv = document.getElementById('height-cm');
      const heightFtDiv = document.getElementById('height-ft');
      let currentUnit = systemUnit === 'imperial' ? 'ft' : 'cm';"""
content = content.replace(height_events_old, height_events_new)

# 7. Modify slider validation logic
slider_val_old = """      const validate = (val, autoAdvance = false) => {
        if (val >= config.min && val <= config.max) {
          validation.innerHTML = '<span class="text-[#50e3c2]">✓ Looks good</span>';
          answers[field] = parseInt(val);
          saveToSession();
          if (autoAdvance) setTimeout(() => nextStep(), 400);
        } else {
          validation.innerHTML = `<span class="text-red-400">Please enter a value between ${config.min}–${config.max}</span>`;
        }
      };"""
slider_val_new = """      const validate = (val, autoAdvance = false) => {
        let actVal = parseInt(val);
        const container = document.querySelector(`[data-base-unit]`);
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
          validation.innerHTML = '<span class="text-[#50e3c2]">✓ Looks good</span>';
          
          if (isImp) {
             if (baseUnit === 'kg') answers[field] = actVal / 2.20462;
             else if (baseUnit === 'cm') answers[field] = actVal * 2.54;
          } else {
             answers[field] = actVal;
          }
          
          saveToSession();
          if (autoAdvance) setTimeout(() => nextStep(), 400);
        } else {
          validation.innerHTML = `<span class="text-red-400">Please enter a value between ${displayMin}–${displayMax}</span>`;
        }
      };"""
content = content.replace(slider_val_old, slider_val_new)

# Initialize global unit UI on load
init_call = """  // Initial render
  renderStep();
  attachEvents();"""
init_call_new = """  // Initial render
  updateGlobalUnitUI();
  renderStep();
  attachEvents();"""
content = content.replace(init_call, init_call_new)

with open(file_path, "w") as f:
    f.write(content)

print("Updated InputFlow.astro successfully")
