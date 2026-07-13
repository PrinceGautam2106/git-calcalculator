# CalaiFitness Launch Checklist & SEO Submission Assets

This checklist outlines the exact steps to launch **calaifitness.com** successfully, configure Google Search Console, seed initial backlinks, and set up privacy-focused analytics.

---

## 🚀 Pre-Launch Checklist

- [ ] **Verify Canonical URLs:**
  Ensure `<link rel="canonical">` matches the exact URL of each page with `https://www.calaifitness.com` prefix and no trailing slashes.
- [ ] **Verify Robots.txt:**
  Confirm `/public/robots.txt` exists and permits search engine crawlers to access all pages:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://www.calaifitness.com/sitemap.xml
  ```
- [ ] **Test sitemap.xml:**
  Check that the sitemap loads successfully at `https://www.calaifitness.com/sitemap.xml` (or `/sitemap.xml` redirects/serves the XML output from our dynamic route).
- [ ] **Verify Noindex Status:**
  Ensure `<meta name="robots" content="noindex">` is absent from all main calculator pages, growth tools, and blog posts. Only `/404` and search result overlays should carry `noindex`.
- [ ] **Mobile Responsive Test:**
  Ensure the mobile navigation layout handles all devices, inputs are easily clickable without zoom triggers, and the dynamic layout teleports the calculator widget smoothly.
- [ ] **Check Dark Mode Flash (FOUC):**
  Verify the inline theme switcher script in `<head>` executes before the page renders, preventing a white flash when users load the site with dark mode enabled.
- [ ] **Check Internal Links (No 404s):**
  Run a link checker or review links in `/blog`, `/calculator/`, and `/tools/` to guarantee zero broken links.
- [ ] **Verify Social Share Meta (Open Graph):**
  Confirm `<meta property="og:image">` points to the correct absolute URL (`https://www.calaifitness.com/og-image.jpg`) and is properly sized (1200x630).
- [ ] **Validate JSON-LD Schemas:**
  Test schemas on [validator.schema.org](https://validator.schema.org) for:
  1. Home Page (`WebSite` search box)
  2. BMI Calculator (`SoftwareApplication` + `HowTo` + `FAQPage` + `BreadcrumbList`)
  3. Calorie Deficit Planner (`SoftwareApplication` + `FAQPage` + `BreadcrumbList`)
  4. Blog Index (`WebPage` + `BreadcrumbList`)
  5. What is TDEE Blog Post (`Article` + `BreadcrumbList`)

---

## 🔍 Google Setup & Indexing

- [ ] **Create Google Search Console Property:**
  Add `https://www.calaifitness.com` as a URL prefix property in GSC.
- [ ] **Verify Ownership (HTML Meta Tag Method):**
  Add the GSC verification code in [`/src/layouts/BaseLayout.astro`](file:///Users/princegautam/fitness/src/layouts/BaseLayout.astro):
  ```html
  <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE" />
  ```
- [ ] **Submit Sitemap:**
  Navigate to GSC > Sitemaps and submit:
  `https://www.calaifitness.com/sitemap.xml`
- [ ] **Request Indexing for Primary URLs:**
  In GSC, paste each of these URLs in the URL Inspection tool and click "Request Indexing" to force crawl:
  *   `https://www.calaifitness.com/` (Home Page)
  *   `https://www.calaifitness.com/calculators` (Index)
  *   `https://www.calaifitness.com/calculator/bmi` (BMI Page)
  *   `https://www.calaifitness.com/calculator/tdee` (TDEE Page)
  *   `https://www.calaifitness.com/calculator/body-fat` (Body Fat Page)
  *   `https://www.calaifitness.com/blog` (Blog Directory)

---

## 🔗 Backlink Seeding (Week 1)

- [ ] **Product Hunt Launch:**
  Submit to Product Hunt. Title: "CalaiFitness — 100% Private, Ad-Free Health & Fitness Calculators". Focus on the "on-device calculation" privacy USP.
- [ ] **AlternativeTo Submission:**
  Submit CalaiFitness to [AlternativeTo.net](https://alternativeto.net) as a free, privacy-first, open-source alternative to `calculator.net` and `tdeecalculator.net`.
- [ ] **Free Tool Directories:**
  Submit links to:
  *   [toolpage.io](https://toolpage.io)
  *   [toolfinder.co](https://toolfinder.co)
  *   [freetools.io](https://freetools.io)
- [ ] **Reddit Community Seeding:**
  Post descriptive, value-first posts highlighting the "no-ads, no-tracking, client-side calculations" aspect in:
  *   [r/Fitness](https://www.reddit.com/r/Fitness/)
  *   [r/loseit](https://www.reddit.com/r/loseit/)
  *   [r/bodyweightfitness](https://www.reddit.com/r/bodyweightfitness/)
- [ ] **Quora Authority Building:**
  Search Quora for questions on "how is TDEE calculated", "is BMI accurate", and "how much protein do I need". Provide detailed scientific answers and link to the relevant calculator on CalaiFitness.
- [ ] **Fitness Blogger Outreach:**
  Reach out to 10 fitness bloggers offering our calculators as a free embed widget (copy/paste code iframe) to earn highly valuable editorial back links.

---

## 📈 Analytics & Event Tracking

- [ ] **Google Analytics 4 (GA4) Configuration:**
  Create a GA4 stream and configure privacy options:
  *   **Disable IP Address Logging** (IP masking enabled by default).
  *   **Disable Ads Personalization signals** to maintain compliance with COPPA, GDPR, and CCPA.
- [ ] **Set Up GA4 Custom Events:**
  Track user conversion and retention goals via custom events:
  *   `calculator_used` (Triggered on click of any `#*calc-btn`)
  *   `blog_read` (Triggered when users scroll past 70% of a blog post)
  *   `save_history` (Triggered on click of any `#*save-btn`)
- [ ] **Keyword Performance Reports:**
  Link GSC to GA4 to track impressions, click-through rates, and average search positions for "fitness calculator", "sleep cycles calculator", "calorie deficit planner", and other targets.
