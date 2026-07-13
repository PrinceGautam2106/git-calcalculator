import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5eMsKSEU.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, d as combineSchemas, e as generateWebSiteSchema, $ as $$SchemaScript } from '../chunks/seo_CLC9k0GV.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Free Fitness Calculators \u2014 BMI, TDEE, Calories & More");
  const DESC = generateDescription("Free science-backed fitness calculators: BMI, TDEE, BMR, body fat %, calories, macros, water intake and more. Results are instant, 100% private \u2014 nothing leaves your device.");
  const CANONICAL = generateCanonical("/");
  const websiteSchema = generateWebSiteSchema();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESC,
    url: CANONICAL,
    isPartOf: { "@id": "https://www.calaifitness.com" },
    about: {
      "@type": "Thing",
      name: "Fitness Calculators"
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL }
      ]
    }
  };
  const schema = combineSchemas(websiteSchema, webPageSchema);
  const calculators = [
    {
      slug: "bmi",
      icon: "\u2696\uFE0F",
      name: "BMI Calculator",
      desc: "Body Mass Index from height & weight",
      href: "/calculator/bmi",
      keywords: "body mass index"
    },
    {
      slug: "tdee",
      icon: "\u26A1",
      name: "TDEE Calculator",
      desc: "Total daily energy expenditure",
      href: "/calculator/tdee",
      keywords: "maintenance calories"
    },
    {
      slug: "bmr",
      icon: "\u{1F525}",
      name: "BMR Calculator",
      desc: "Calories burned at complete rest",
      href: "/calculator/bmr",
      keywords: "basal metabolic rate"
    },
    {
      slug: "body-fat",
      icon: "\u{1F4CA}",
      name: "Body Fat %",
      desc: "US Navy circumference method",
      href: "/calculator/body-fat",
      keywords: "body fat percentage"
    },
    {
      slug: "ideal-weight",
      icon: "\u{1F3AF}",
      name: "Ideal Weight",
      desc: "Based on 5 medical formulas",
      href: "/calculator/ideal-weight",
      keywords: "healthy weight range"
    },
    {
      slug: "calories",
      icon: "\u{1F34E}",
      name: "Calorie Target",
      desc: "Daily calories for your goal",
      href: "/calculator/calories",
      keywords: "calorie calculator"
    },
    {
      slug: "macros",
      icon: "\u{1F957}",
      name: "Macro Split",
      desc: "Protein, carbs & fat breakdown",
      href: "/calculator/macros",
      keywords: "macro calculator"
    },
    {
      slug: "water",
      icon: "\u{1F4A7}",
      name: "Water Intake",
      desc: "Daily hydration goal",
      href: "/calculator/water",
      keywords: "water intake calculator"
    },
    {
      slug: "heart-rate",
      icon: "\u2764\uFE0F",
      name: "Heart Rate Zones",
      desc: "Training intensity zones",
      href: "/calculator/heart-rate",
      keywords: "heart rate calculator"
    },
    {
      slug: "lean-mass",
      icon: "\u{1F4AA}",
      name: "Lean Body Mass",
      desc: "Muscle vs fat mass estimate",
      href: "/calculator/lean-mass",
      keywords: "lean body mass calculator"
    }
  ];
  const features = [
    {
      icon: "\u{1F512}",
      title: "Private by Default",
      body: "Every calculation runs entirely in your browser using JavaScript. No data is ever sent to our servers, logged, or sold. What you enter stays on your device \u2014 always.",
      stat: "0 bytes",
      statLabel: "sent to servers"
    },
    {
      icon: "\u{1F9EC}",
      title: "Medically Referenced",
      body: "We use only peer-reviewed formulas: Mifflin-St Jeor for BMR/TDEE, the US Navy method for body fat, WHO BMI standards, and the Karvonen formula for heart rate zones.",
      stat: "10+",
      statLabel: "validated formulas"
    },
    {
      icon: "\u{1F4CA}",
      title: "Track Over Time",
      body: "Your results are saved automatically to your browser's local storage. Open the dashboard to see your history and track how your numbers change week over week.",
      stat: "100%",
      statLabel: "on-device storage"
    }
  ];
  const steps = [
    {
      num: "01",
      title: "Choose a Calculator",
      body: "Pick from 10 free calculators covering every key fitness metric \u2014 from BMI to body fat to daily calories."
    },
    {
      num: "02",
      title: "Enter Your Stats",
      body: "Input your measurements in metric or imperial units. Our clean, distraction-free interface takes seconds to fill out."
    },
    {
      num: "03",
      title: "Get Your Result Instantly",
      body: "Results appear immediately, with context, categories, and advice. Save to history to track your progress over time."
    }
  ];
  const faqs = [
    {
      q: "What is TDEE and why does it matter?",
      a: "TDEE (Total Daily Energy Expenditure) is the total calories your body burns each day, including activity. It's the most important number in nutrition \u2014 knowing it lets you set an exact calorie target for fat loss, maintenance, or muscle gain.",
      link: "/calculator/tdee"
    },
    {
      q: "How accurate is a BMI calculator?",
      a: "BMI is accurate as a population-level screening tool for adults. It has known limitations for athletes and older adults due to muscle mass differences. For a complete picture, pair it with body fat percentage.",
      link: "/calculator/bmi"
    },
    {
      q: "Is my data private? Do you track anything?",
      a: "Completely private. All calculations run in your browser \u2014 nothing is ever sent to our servers. We have no database of user data. Your history is stored in your browser's localStorage only.",
      link: "/privacy"
    }
  ];
  const articles = [
    {
      title: "How to Calculate Your TDEE (And Actually Use It)",
      excerpt: "Your TDEE is the single most important number in nutrition. Here's how to find it and use it to lose fat or build muscle.",
      date: "June 1, 2026",
      slug: "how-to-calculate-tdee",
      category: "Nutrition",
      readTime: 7
    },
    {
      title: "BMI vs Body Fat %: Which One Actually Matters?",
      excerpt: "BMI is a blunt tool. Body fat percentage tells you far more. Here's when to use each and what the numbers really mean.",
      date: "June 8, 2026",
      slug: "bmi-vs-body-fat",
      category: "Metrics",
      readTime: 6
    },
    {
      title: "How Much Protein Do You Actually Need?",
      excerpt: "The research is clear, the internet is noisy. We break down the optimal protein intake for muscle gain, fat loss, and general health.",
      date: "June 15, 2026",
      slug: "how-much-protein-do-you-need",
      category: "Nutrition",
      readTime: 8
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section id="hero" class="hero-section relative isolate overflow-hidden" aria-labelledby="hero-headline" data-astro-cid-j7pv25f6> <!-- CSS-only grid background --> <div class="hero-grid" aria-hidden="true" data-astro-cid-j7pv25f6></div> <!-- Gradient fade at bottom --> <div class="hero-fade" aria-hidden="true" data-astro-cid-j7pv25f6></div> <!-- Radial glow --> <div class="hero-glow" aria-hidden="true" data-astro-cid-j7pv25f6></div> <div class="container-site relative z-10 py-24 sm:py-32 md:py-40 text-center" data-astro-cid-j7pv25f6> <!-- Eyebrow --> <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[var(--color-hairline)] rounded-sm bg-[var(--color-canvas)]/60 backdrop-blur-sm" data-astro-cid-j7pv25f6> <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] inline-block animate-pulse-glow" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="text-xs font-semibold text-[var(--color-body)] uppercase tracking-widest" data-astro-cid-j7pv25f6>10 Free Calculators · No Account Required</span> </div> <!-- Headline --> <h1 id="hero-headline" class="text-hero-headline mb-6" data-astro-cid-j7pv25f6> <span class="block text-[var(--color-ink)]" data-astro-cid-j7pv25f6>Your Body.</span> <span class="block text-[var(--color-ink)]" data-astro-cid-j7pv25f6>Your Numbers.</span> <span class="block gradient-text" data-astro-cid-j7pv25f6>Your Privacy.</span> </h1> <!-- Subheadline --> <p class="text-body-lg text-[var(--color-body)] max-w-xl mx-auto mb-10 leading-relaxed" data-astro-cid-j7pv25f6>
Science-backed fitness calculators that run&nbsp;
<strong class="text-[var(--color-ink)] font-medium" data-astro-cid-j7pv25f6>100% on your device.</strong>
No ads, no tracking, no data sent to servers.
</p> <!-- CTAs --> <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10" data-astro-cid-j7pv25f6> <a href="/calculator/bmi" id="hero-cta-primary" class="cta-primary group" data-astro-cid-j7pv25f6>
Try BMI Calculator
<svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-j7pv25f6></path> </svg> </a> <a href="/calculators" id="hero-cta-secondary" class="cta-secondary group" data-astro-cid-j7pv25f6>
See All Tools
<svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-j7pv25f6></path> </svg> </a> </div> <!-- Trust Badges --> <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-5" role="list" aria-label="Trust signals" data-astro-cid-j7pv25f6> ${[
    { icon: "\u{1F512}", label: "Private by Design" },
    { icon: "\u26A1", label: "Instant Results" },
    { icon: "\u{1F9EC}", label: "Science-Backed" },
    { icon: "\u{1F193}", label: "Always Free" }
  ].map((badge) => renderTemplate`<div role="listitem" class="flex items-center gap-1.5 text-xs font-medium text-[var(--color-mute)]" data-astro-cid-j7pv25f6> <span aria-hidden="true" data-astro-cid-j7pv25f6>${badge.icon}</span> <span data-astro-cid-j7pv25f6>${badge.label}</span> </div>`)} </div> </div> </section>  <section id="calculators" class="container-site py-16 sm:py-20" aria-labelledby="calculators-heading" data-astro-cid-j7pv25f6> <!-- Section Header --> <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="flex items-center gap-2.5 mb-2" data-astro-cid-j7pv25f6> <h2 id="calculators-heading" class="text-display-md text-[var(--color-ink)]" data-astro-cid-j7pv25f6>
10 Free Calculators
</h2> <span class="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-[var(--color-primary)] text-white text-xs font-bold" aria-hidden="true" data-astro-cid-j7pv25f6>10</span> </div> <p class="text-body-sm text-[var(--color-mute)]" data-astro-cid-j7pv25f6>
Every key fitness metric — one tool, zero friction
</p> </div> <a href="/calculators" class="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-150 flex items-center gap-1 shrink-0" aria-label="View all calculators" data-astro-cid-j7pv25f6>
View all →
</a> </div> <!-- Grid --> <div class="calc-grid" role="list" aria-label="Available calculators" data-astro-cid-j7pv25f6> ${calculators.map((calc, i) => renderTemplate`<a${addAttribute(calc.href, "href")} role="listitem"${addAttribute(`calc-card-${calc.slug}`, "id")} class="calc-card group"${addAttribute(`${calc.name}: ${calc.desc}`, "aria-label")} data-astro-cid-j7pv25f6> <!-- Icon --> <div class="calc-card-icon" aria-hidden="true" data-astro-cid-j7pv25f6>${calc.icon}</div> <!-- Text --> <div class="flex-1 min-w-0" data-astro-cid-j7pv25f6> <p class="text-sm font-semibold text-[var(--color-ink)] leading-tight mb-0.5 truncate" data-astro-cid-j7pv25f6> ${calc.name} </p> <p class="text-xs text-[var(--color-mute)] leading-tight line-clamp-2" data-astro-cid-j7pv25f6> ${calc.desc} </p> </div> <!-- Arrow --> <div class="calc-card-arrow" aria-hidden="true" data-astro-cid-j7pv25f6> <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-j7pv25f6></path> </svg> </div> </a>`)} </div> </section>  <div class="container-site" data-astro-cid-j7pv25f6><hr class="border-[var(--color-hairline)]" data-astro-cid-j7pv25f6></div>  <section id="features" class="container-site py-16 sm:py-20" aria-labelledby="features-heading" data-astro-cid-j7pv25f6> <div class="mb-10 text-center sm:text-left" data-astro-cid-j7pv25f6> <p class="text-label text-[var(--color-mute)] mb-2" data-astro-cid-j7pv25f6>Why CalaiFitness</p> <h2 id="features-heading" class="text-display-md text-[var(--color-ink)]" data-astro-cid-j7pv25f6>
Built Different
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)] rounded-sm overflow-hidden" data-astro-cid-j7pv25f6> ${features.map((f, i) => renderTemplate`<div class="feature-card" data-astro-cid-j7pv25f6> <!-- Icon --> <div class="text-3xl mb-4" aria-hidden="true" data-astro-cid-j7pv25f6>${f.icon}</div> <!-- Title --> <h3 class="text-display-sm mb-3 text-[var(--color-ink)]" data-astro-cid-j7pv25f6>${f.title}</h3> <!-- Body --> <p class="text-body-sm text-[var(--color-body)] leading-relaxed mb-6 flex-1" data-astro-cid-j7pv25f6>${f.body}</p> <!-- Stat --> <div class="feature-stat" data-astro-cid-j7pv25f6> <p class="text-2xl font-mono font-semibold text-[var(--color-ink)] leading-none" data-astro-cid-j7pv25f6>${f.stat}</p> <p class="text-xs text-[var(--color-mute)] mt-1" data-astro-cid-j7pv25f6>${f.statLabel}</p> </div> </div>`)} </div> </section>  <div class="container-site" data-astro-cid-j7pv25f6><hr class="border-[var(--color-hairline)]" data-astro-cid-j7pv25f6></div>  <section id="how-it-works" class="container-site py-16 sm:py-20" aria-labelledby="how-heading" data-astro-cid-j7pv25f6> <div class="mb-10 text-center sm:text-left" data-astro-cid-j7pv25f6> <p class="text-label text-[var(--color-mute)] mb-2" data-astro-cid-j7pv25f6>Simple by Design</p> <h2 id="how-heading" class="text-display-md text-[var(--color-ink)]" data-astro-cid-j7pv25f6>
How It Works
</h2> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-px bg-transparent sm:bg-[var(--color-hairline)] border-0 sm:border sm:border-[var(--color-hairline)] sm:rounded-sm overflow-hidden" data-astro-cid-j7pv25f6> ${steps.map((step, i) => renderTemplate`<div class="step-card" data-astro-cid-j7pv25f6> <!-- Step number --> <div class="step-number" aria-hidden="true" data-astro-cid-j7pv25f6>${step.num}</div> <div class="w-px h-6 bg-[var(--color-hairline)] my-4 hidden sm:block" aria-hidden="true" data-astro-cid-j7pv25f6></div> <!-- Content --> <h3 class="text-display-sm mb-2 text-[var(--color-ink)]" data-astro-cid-j7pv25f6>${step.title}</h3> <p class="text-body-sm text-[var(--color-body)] leading-relaxed" data-astro-cid-j7pv25f6>${step.body}</p> ${i < steps.length - 1 && renderTemplate`<div class="sm:hidden mt-6 border-b border-[var(--color-hairline)]" aria-hidden="true" data-astro-cid-j7pv25f6></div>`} </div>`)} </div> <!-- CTA below steps --> <div class="mt-8 text-center sm:text-left" data-astro-cid-j7pv25f6> <a href="/calculator/bmi" class="cta-primary inline-flex" data-astro-cid-j7pv25f6>
Start with BMI →
</a> </div> </section>  <div class="container-site" data-astro-cid-j7pv25f6><hr class="border-[var(--color-hairline)]" data-astro-cid-j7pv25f6></div>  <section id="faq-preview" class="container-site py-16 sm:py-20" aria-labelledby="faq-heading" data-astro-cid-j7pv25f6> <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="text-label text-[var(--color-mute)] mb-2" data-astro-cid-j7pv25f6>Quick Answers</p> <h2 id="faq-heading" class="text-display-md text-[var(--color-ink)]" data-astro-cid-j7pv25f6>
Common Questions
</h2> </div> <a href="/faq" class="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-150 shrink-0" data-astro-cid-j7pv25f6>
View all FAQs →
</a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-astro-cid-j7pv25f6> ${faqs.map((faq) => renderTemplate`<div class="faq-card" data-astro-cid-j7pv25f6> <h3 class="text-body-sm font-semibold text-[var(--color-ink)] mb-2 leading-snug" data-astro-cid-j7pv25f6>${faq.q}</h3> <p class="text-body-sm text-[var(--color-body)] leading-relaxed flex-1" data-astro-cid-j7pv25f6>${faq.a}</p> <a${addAttribute(faq.link, "href")} class="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-150" data-astro-cid-j7pv25f6>
Learn more →
</a> </div>`)} </div> </section>  <div class="container-site" data-astro-cid-j7pv25f6><hr class="border-[var(--color-hairline)]" data-astro-cid-j7pv25f6></div>  <section id="blog-preview" class="container-site py-16 sm:py-20" aria-labelledby="blog-heading" data-astro-cid-j7pv25f6> <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="text-label text-[var(--color-mute)] mb-2" data-astro-cid-j7pv25f6>Science-Based Articles</p> <h2 id="blog-heading" class="text-display-md text-[var(--color-ink)]" data-astro-cid-j7pv25f6>
Evidence-Based Insights
</h2> </div> <a href="/blog" class="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-150 shrink-0" data-astro-cid-j7pv25f6>
View all articles →
</a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-astro-cid-j7pv25f6> ${articles.map((article) => renderTemplate`<article class="blog-card group" data-astro-cid-j7pv25f6> <!-- Meta --> <div class="flex items-center gap-2 mb-3" data-astro-cid-j7pv25f6> <span class="text-xs font-semibold text-[var(--color-mute)] uppercase tracking-wider" data-astro-cid-j7pv25f6>${article.category}</span> <span class="text-[var(--color-hairline)]" data-astro-cid-j7pv25f6>·</span> <time class="text-xs text-[var(--color-mute)]" data-astro-cid-j7pv25f6>${article.date}</time> <span class="text-[var(--color-hairline)]" data-astro-cid-j7pv25f6>·</span> <span class="text-xs text-[var(--color-mute)]" data-astro-cid-j7pv25f6>${article.readTime}m</span> </div> <!-- Title --> <h3 class="text-display-sm mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors duration-150 leading-snug" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${article.slug}`, "href")} class="focus:outline-none focus-visible:underline" data-astro-cid-j7pv25f6> ${article.title} </a> </h3> <!-- Excerpt --> <p class="text-body-sm text-[var(--color-body)] leading-relaxed flex-1" data-astro-cid-j7pv25f6>${article.excerpt}</p> <!-- Read link --> <a${addAttribute(`/blog/${article.slug}`, "href")} class="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-150"${addAttribute(`Read article: ${article.title}`, "aria-label")} data-astro-cid-j7pv25f6>
Read article →
</a> </article>`)} </div> </section>  <section class="border-t border-[var(--color-hairline)] bg-[var(--color-canvas-soft)]" aria-label="Call to action" data-astro-cid-j7pv25f6> <div class="container-site py-16 text-center" data-astro-cid-j7pv25f6> <h2 class="text-display-md text-[var(--color-ink)] mb-3" data-astro-cid-j7pv25f6>
Ready to know your numbers?
</h2> <p class="text-body-md text-[var(--color-body)] mb-8 max-w-md mx-auto" data-astro-cid-j7pv25f6>
No sign-up. No ads. Results in under 30 seconds. Everything stays on your device.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-3" data-astro-cid-j7pv25f6> <a href="/calculator/bmi" class="cta-primary group" data-astro-cid-j7pv25f6>
Get Started Free
<svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-j7pv25f6></path> </svg> </a> <a href="/calculators" class="cta-secondary group" data-astro-cid-j7pv25f6>
Browse All Tools →
</a> </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-j7pv25f6": true })}` })} `;
}, "/Users/princegautam/fitness/src/pages/index.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
