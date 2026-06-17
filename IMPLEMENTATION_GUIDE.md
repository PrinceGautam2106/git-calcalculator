# Production Polish - Implementation Guide

## ✅ COMPLETED
- ✅ `src/utils/localStorage.ts` — Streak tracking with milestones
- ✅ `public/robots.txt` — SEO ready
- ✅ `PRODUCTION_CHECKLIST.md` — Task tracking

## 🔨 MANUAL UPDATES NEEDED

### 1. Install Sitemap Package
```bash
npm install @astrojs/sitemap
```

### 2. Create/Update astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fitnesscalculator.com',
  integrations: [tailwind(), sitemap()],
});
```

### 3. Update Header.astro
Replace the streak badge script section:
```js
import { getStreakData } from '../utils/localStorage';

const data = getStreakData();
const streak = data.currentStreak;
```

Add mobile menu toggle button before closing `</div>`:
```html
<button id="menu-toggle" class="md:hidden" aria-label="Menu">
  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
```

### 4. Update StreakBanner.astro
Replace script with:
```js
import { getStreakData, getHistory } from '../utils/localStorage';

const data = getStreakData();
const streak = data.currentStreak;
const history = getHistory(7);

const milestones = {
  3: "You're building a habit! 🌱",
  7: "One week strong! 🏆",
  14: "Two weeks! Incredible! 💪",
  30: "You're unstoppable! 🔥"
};

// Use milestones[streak] for message
// Loop through history to fill dots
```

### 5. Update Layout.astro
Add in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="https://fitnesscalculator.com/og-image.png" />

<meta name="twitter:card" content="summary_large_image" />
```

### 6. Update result.astro
Add before first `<script>` tag:
```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js" defer></script>
```

In the script, add after calculating result:
```js
import { recordCheckIn } from '../../../utils/localStorage';

const streakResult = recordCheckIn();
if (streakResult.milestone && streakResult.message) {
  setTimeout(() => {
    if (window.confetti) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    alert(`🎉 ${streakResult.message}`);
  }, 500);
}
```

### 7. Update index.astro
Change Layout props to:
```astro
<Layout 
  title="FitnessCalculator — Free Fitness & Health Calculators" 
  description="Calculate BMI, TDEE, body fat %, macros. Science-backed formulas. Track progress with daily streaks. 100% free."
/>
```

### 8. Accessibility Additions
In InputFlow.astro, add to buttons/inputs:
```html
aria-label="..."
role="form"
focus:ring-2 focus:ring-[#0070f3]
min-h-[48px]
```

## 🎨 Optional: Create OG Image
Create `public/og-image.png` — 1200x630px with:
- Black background
- "FitnessCalculator" in large white text
- "Free · Science-Backed · Privacy-First" subtitle

## 🚀 Deploy Checklist
- [ ] Run `npm install @astrojs/sitemap`
- [ ] Apply all manual updates above
- [ ] Test on mobile (Chrome DevTools responsive mode)
- [ ] Run `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Verify robots.txt accessible at /robots.txt
- [ ] Verify sitemap at /sitemap-index.xml
- [ ] Test streak system works (localStorage)
- [ ] Test confetti on 3rd calculation

**All calculator logic, design system, and core features are complete!**
