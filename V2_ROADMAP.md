# Version 2 Development Environment

You're now working in the **v2 branch** — a safe space to improve the site without affecting production.

## 🚀 Quick Start

**Work on v2:**
```bash
npm run dev          # Develop locally
npm run deploy:v2    # Deploy to v2 preview URL
```

**Switch back to production:**
```bash
git checkout master
```

---

## 📍 Current Status

**Production (master branch)**
- URL: https://fitnescal.pages.dev
- Status: Stable, untouched
- Version: 1.0

**Development (v2 branch)**
- Local: http://localhost:4321
- Preview: Will be `https://v2.fitnescal.pages.dev` after first deploy
- Status: Ready for improvements

---

## ✨ V2 Improvements Checklist

### SEO
- [ ] `npm install @astrojs/sitemap`
- [ ] Update astro.config.mjs with site URL
- [ ] Better homepage meta titles/descriptions
- [ ] Add JSON-LD structured data

### Mobile
- [ ] Hamburger menu in Header.astro
- [ ] Responsive calculator inputs
- [ ] Test on iPhone/Android

### Accessibility
- [ ] aria-labels on buttons/inputs
- [ ] focus:ring-2 on interactive elements
- [ ] 48px minimum touch targets
- [ ] Keyboard navigation

### New Features (Optional)
- [ ] Dark/light mode toggle
- [ ] Export results as PDF
- [ ] Share results via link

---

## 🔄 Workflow

1. **Develop**: Make changes in v2 branch
2. **Test**: `npm run dev` → http://localhost:4321
3. **Deploy Preview**: `npm run deploy:v2`
4. **Get Feedback**: Share preview URL
5. **Merge to Production**: When ready, merge v2 → master

---

## 📦 Deployment URLs

| Environment | Branch | URL | Purpose |
|------------|--------|-----|---------|
| Production | master | https://fitnescal.pages.dev | Live site (don't touch) |
| Preview | v2 | https://v2.fitnescal.pages.dev | Testing v2 features |
| Local | v2 | http://localhost:4321 | Development |

---

## 🛡️ Safety

- **Production site is protected** — changes only happen when you merge v2 → master
- **Preview URL is separate** — test freely without affecting users
- **Easy rollback** — just `git checkout master` to go back
