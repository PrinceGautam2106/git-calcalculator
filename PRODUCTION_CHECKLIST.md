# Production Readiness Checklist

## ✅ PART A — Streak System
- [x] localStorage.ts with StreakData interface created
- [x] recordCheckIn() logic: yesterday→increment, today→no change, older→reset
- [x] Milestone detection: 3, 7, 14, 30 days with messages
- [x] getHistory() returns 7-day boolean array
- [x] Safe localStorage with try/catch fallback for private browsing
- [ ] Update Header.astro to use getStreakData()
- [ ] Update StreakBanner.astro to show 7-day dots
- [ ] Add confetti on result page milestones

## ✅ PART B — SEO
- [x] robots.txt created (allow all + sitemap)
- [ ] Update astro.config: add site + @astrojs/sitemap
- [ ] Layout.astro: OG tags, Twitter cards, preconnect
- [ ] Homepage: update title/description
- [ ] Calculator pages: SEO-friendly titles

## ✅ PART C — Accessibility
- [ ] InputFlow: aria-label, aria-describedby, role attributes
- [ ] Min 48px touch targets on buttons
- [ ] Focus rings (focus:ring-2 focus:ring-[#0070f3])
- [ ] Charts: aria-label on canvas elements

## ✅ PART D — Mobile Responsive
- [ ] Header: hamburger menu <768px
- [ ] StreakBanner: flex-col on mobile, flex-row on desktop
- [ ] InputFlow: single column, larger touch targets
- [ ] ResultsDashboard: responsive chart sizing

## ✅ PART E — Performance
- [ ] Layout: preconnect to fonts, DNS prefetch CDN
- [ ] Chart.js: defer attribute
- [ ] All localStorage wrapped in safe functions

## 🚀 Next Steps
1. Install: `npm install @astrojs/sitemap`
2. Update all component files with streak/SEO/accessibility improvements
3. Test mobile responsive breakpoints
4. Build and deploy

**Core files created:**
- ✅ src/utils/localStorage.ts
- ✅ public/robots.txt
- ⏳ Need to update: Header, StreakBanner, Layout, result page
