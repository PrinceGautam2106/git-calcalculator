import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.calaifitness.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/calculators", label: "Calculators" },
    { href: "/history", label: "History" },
    { href: "/about", label: "About" }
  ];
  const blogCategories = [
    { href: "/blog", label: "All Articles", emoji: "\u{1F4DA}" },
    { href: "/blog/nutrition", label: "Nutrition", emoji: "\u{1F957}" },
    { href: "/blog/training", label: "Training", emoji: "\u{1F3CB}\uFE0F" },
    { href: "/blog/fat-loss", label: "Fat Loss", emoji: "\u{1F525}" },
    { href: "/blog/muscle-building", label: "Muscle Building", emoji: "\u{1F4AA}" }
  ];
  const currentPath = Astro2.url.pathname;
  function isActive(href) {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="sticky top-0 z-50 w-full" style="height: var(--nav-height);" data-astro-cid-qlfjksao> <!-- Backdrop blur layer --> <div class="absolute inset-0 bg-[var(--color-canvas)]/80 backdrop-blur-xl border-b border-[var(--color-hairline)]" aria-hidden="true" data-astro-cid-qlfjksao></div> <div class="relative container-site flex items-center justify-between h-full" data-astro-cid-qlfjksao> <!-- ── Logo ── --> <a href="/" class="flex items-center gap-2.5 group shrink-0" aria-label="CalaiFitness — Home" data-astro-cid-qlfjksao> <img src="/favicon-96x96.png" alt="CalaiFitness Logo" class="theme-logo h-7 w-7 sm:h-8 sm:w-8 rounded-full flex-shrink-0 transition-opacity duration-150 group-hover:opacity-80" data-astro-cid-qlfjksao> <span class="text-sm font-semibold text-[var(--color-ink)] tracking-tight transition-colors duration-150 group-hover:text-[var(--color-primary)]" data-astro-cid-qlfjksao>
CalaiFitness
</span> </a> <!-- ── Desktop Nav ── --> <nav class="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation" data-astro-cid-qlfjksao> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "relative px-3 py-1.5 text-sm rounded-sm transition-all duration-150",
    "font-medium",
    isActive(link.href) ? "text-[var(--color-ink)] bg-[var(--color-hairline)]" : "text-[var(--color-body)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
  ].join(" "), "class")}${addAttribute(isActive(link.href) ? "page" : void 0, "aria-current")} data-astro-cid-qlfjksao> ${link.label} </a>`)} <!-- Blog Dropdown --> <div class="blog-dropdown-wrap" id="blog-dropdown-wrap" data-astro-cid-qlfjksao> <button id="blog-dropdown-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="blog-dropdown-menu"${addAttribute([
    "relative flex items-center gap-1 px-3 py-1.5 text-sm rounded-sm transition-all duration-150 font-medium cursor-pointer border-none bg-transparent",
    isActive("/blog") ? "text-[var(--color-ink)] bg-[var(--color-hairline)]" : "text-[var(--color-body)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
  ].join(" "), "class")} data-astro-cid-qlfjksao>
Blog
<svg class="blog-chevron w-3 h-3 transition-transform duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-qlfjksao> <path d="M6 9l6 6 6-6" data-astro-cid-qlfjksao></path> </svg> </button> <div id="blog-dropdown-menu" role="menu" aria-label="Blog categories" class="blog-dropdown hidden" data-astro-cid-qlfjksao> ${blogCategories.map((cat) => renderTemplate`<a${addAttribute(cat.href, "href")} role="menuitem"${addAttribute([
    "blog-dropdown-item",
    isActive(cat.href) && cat.href !== "/blog" ? "active" : "",
    isActive("/blog") && cat.href === "/blog" && currentPath === "/blog" ? "active" : ""
  ].join(" "), "class")} data-astro-cid-qlfjksao> <span class="item-emoji" aria-hidden="true" data-astro-cid-qlfjksao>${cat.emoji}</span> ${cat.label} </a>`)} </div> </div> </nav> <!-- ── Right Actions ── --> <div class="flex items-center gap-2" data-astro-cid-qlfjksao> <!-- Dark Mode Toggle --> <button id="theme-toggle" type="button" aria-label="Toggle dark mode" class="flex items-center justify-center w-8 h-8 rounded-sm border border-[var(--color-hairline)] text-[var(--color-body)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)] transition-all duration-150" data-astro-cid-qlfjksao> <!-- Sun icon (shown in dark mode) --> <svg id="icon-sun" class="w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-qlfjksao> <circle cx="12" cy="12" r="5" data-astro-cid-qlfjksao></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-qlfjksao></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-qlfjksao></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-qlfjksao></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-qlfjksao></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-qlfjksao></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-qlfjksao></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-qlfjksao></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-qlfjksao></line> </svg> <!-- Moon icon (shown in light mode) --> <svg id="icon-moon" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-qlfjksao> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-qlfjksao></path> </svg> </button> <!-- Mobile Hamburger --> <button id="mobile-menu-btn" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden flex items-center justify-center w-8 h-8 rounded-sm border border-[var(--color-hairline)] text-[var(--color-body)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)] transition-all duration-150" data-astro-cid-qlfjksao> <!-- Hamburger open --> <svg id="hamburger-icon" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-qlfjksao></path> </svg> <!-- Close X --> <svg id="close-icon" class="w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-qlfjksao></path> </svg> </button> </div> </div> <!-- ── Mobile Menu ── --> <div id="mobile-menu" class="md:hidden hidden absolute top-full left-0 right-0 z-40" role="navigation" aria-label="Mobile navigation" data-astro-cid-qlfjksao> <div class="bg-[var(--color-canvas)]/95 backdrop-blur-xl border-b border-[var(--color-hairline)]" data-astro-cid-qlfjksao> <div class="container-site py-3 flex flex-col gap-1" data-astro-cid-qlfjksao> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-sm transition-colors duration-150",
    isActive(link.href) ? "text-[var(--color-ink)] bg-[var(--color-hairline)]" : "text-[var(--color-body)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
  ].join(" "), "class")}${addAttribute(isActive(link.href) ? "page" : void 0, "aria-current")} data-astro-cid-qlfjksao> ${link.label} </a>`)} <!-- Blog section in mobile --> <div class="px-3 pt-2 pb-1" data-astro-cid-qlfjksao> <p class="text-[0.625rem] font-semibold uppercase tracking-widest text-[var(--color-mute)] mb-1" data-astro-cid-qlfjksao>Blog</p> </div> ${blogCategories.map((cat) => renderTemplate`<a${addAttribute(cat.href, "href")}${addAttribute([
    "flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-sm transition-colors duration-150",
    isActive(cat.href) && (cat.href !== "/blog" || currentPath === "/blog") ? "text-[var(--color-ink)] bg-[var(--color-hairline)]" : "text-[var(--color-body)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
  ].join(" "), "class")}${addAttribute(isActive(cat.href) && (cat.href !== "/blog" || currentPath === "/blog") ? "page" : void 0, "aria-current")} data-astro-cid-qlfjksao> <span aria-hidden="true" data-astro-cid-qlfjksao>${cat.emoji}</span> ${cat.label} </a>`)} </div> </div> </div> </header>  `;
}, "/Users/princegautam/fitness/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const columns = [
    {
      heading: "Calculators",
      links: [
        { href: "/calculator/bmi", label: "BMI Calculator" },
        { href: "/calculator/tdee", label: "TDEE Calculator" },
        { href: "/calculator/bodyfat", label: "Body Fat Calculator" },
        { href: "/calculator/macros", label: "Macro Calculator" },
        { href: "/calculator/protein", label: "Protein Intake" },
        { href: "/calculator/calories", label: "Calorie Calculator" },
        { href: "/calculator/pace", label: "Running Pace" },
        { href: "/calculators", label: "View All \u2192", highlight: true }
      ]
    },
    {
      heading: "Blog",
      links: [
        { href: "/blog", label: "All Articles" },
        { href: "/blog/nutrition", label: "Nutrition" },
        { href: "/blog/training", label: "Training" },
        { href: "/blog/fat-loss", label: "Fat Loss" },
        { href: "/blog/muscle-building", label: "Muscle Building" }
      ]
    },
    {
      heading: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
        { href: "/dashboard", label: "Dashboard" }
      ]
    },
    {
      heading: "Legal",
      links: [
        { href: "/legal", label: "Legal Hub" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/disclaimer", label: "Medical Disclaimer" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-[var(--color-hairline)] bg-[var(--color-canvas-soft)] mt-24"> <div class="container-site py-16"> <!-- ── Top: Brand + Columns ── --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"> <!-- Brand Column --> <div class="sm:col-span-2 lg:col-span-1"> <a href="/" class="inline-flex items-center gap-2 group mb-4" aria-label="CalaiFitness home"> <span class="text-sm font-semibold text-[var(--color-ink)] tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-150">
CalaiFitness
</span> </a> <p class="text-sm text-[var(--color-mute)] leading-relaxed mb-5 max-w-[220px]">
Free, science-backed fitness calculators. No account. No ads. 100% private.
</p> <div class="flex flex-wrap gap-2"> <span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-sm bg-[var(--color-success-muted)] text-[var(--color-success-deep)] dark:text-[var(--color-success)] border border-[var(--color-success)]/15"> <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg>
100% Private
</span> <span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-sm bg-[var(--color-primary-muted)] text-[var(--color-primary-deep)] dark:text-[var(--color-primary)] border border-[var(--color-primary)]/15"> <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>
Free Forever
</span> </div> </div> <!-- Link Columns --> ${columns.map((col) => renderTemplate`<div> <h3 class="text-xs font-semibold text-[var(--color-ink)] uppercase tracking-widest mb-4"> ${col.heading} </h3> <ul class="flex flex-col gap-2.5" role="list"> ${col.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")}${addAttribute([
    "text-sm transition-colors duration-150",
    link.highlight ? "text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium" : "text-[var(--color-body)] hover:text-[var(--color-ink)]"
  ].join(" "), "class")}> ${link.label} </a> </li>`)} </ul> </div>`)} </div> <!-- ── Divider ── --> <div class="mt-12 pt-8 border-t border-[var(--color-hairline)]"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"> <!-- Copyright --> <div class="flex items-center gap-2"> <p class="text-xs text-[var(--color-mute)]">
© ${year} CalaiFitness. All rights reserved.
</p> </div> <!-- Tagline + Links --> <div class="flex flex-wrap items-center gap-4"> <span class="text-xs text-[var(--color-mute)]">Made for your health 🏃</span> <nav class="flex items-center gap-4" aria-label="Footer legal links"> <a href="/privacy" class="text-xs text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors duration-150">Privacy</a> <a href="/terms" class="text-xs text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors duration-150">Terms</a> </nav> </div> </div> </div> </div> </footer>`;
}, "/Users/princegautam/fitness/src/components/layout/Footer.astro", void 0);

export { $$Footer as $, $$Header as a };
