# calaifitness.com — Launch Checklist

## PRE-LAUNCH:
- [ ] Verify canonical URLs are correct on every page
- [ ] Check robots.txt allows all important pages
- [ ] Test sitemap.xml loads at `/sitemap-index.xml`
- [ ] Confirm no `noindex` meta tags on calculator or blog pages  
- [ ] Test all calculators work on mobile
- [ ] Verify dark mode doesn't flash on load
- [ ] Check all internal links work (no 404s)
- [ ] Confirm `og:image` exists for all main pages
- [ ] Validate JSON-LD schema on schema.org/validator for 5 pages

## GOOGLE SETUP:
- [ ] Add site to Google Search Console (search.google.com/search-console)
- [ ] Verify ownership (HTML meta tag method — add to BaseLayout.astro)
- [ ] Submit sitemap: https://www.calaifitness.com/sitemap-index.xml
- [ ] Request indexing for these URLs manually (in GSC URL Inspection):
   - https://www.calaifitness.com/
   - https://www.calaifitness.com/calculators
   - https://www.calaifitness.com/calculator/bmi
   - https://www.calaifitness.com/calculator/tdee
   - https://www.calaifitness.com/calculator/body-fat
   - https://www.calaifitness.com/blog

## BACKLINK SEEDING (do week 1):
- [ ] Submit to Product Hunt (schedule a PH launch)
- [ ] Add to AlternativeTo.net as alternative to calculator.net
- [ ] Submit to free-tool directories: toolpage.io, toolfinder.co, freetools.io  
- [ ] Post in r/Fitness — "I built a privacy-first fitness calculator" (include link)
- [ ] Post in r/loseit — same
- [ ] Post in r/bodyweightfitness — same
- [ ] Answer 5 Quora questions about BMI, TDEE, calories (link to relevant calculator)
- [ ] Reach out to 10 fitness bloggers offering the calculator as a free embed widget

## ANALYTICS:
- [ ] Add Google Analytics 4 (privacy-respecting, no IP logging)
- [ ] Set up goal events: Calculator Used, Blog Read, Save to History
- [ ] Create GSC performance report for keywords
