import { a as createComponent, r as renderTemplate, c as createAstro, b as renderSlot, d as renderComponent, f as renderHead, u as unescapeHTML, e as addAttribute } from './astro/server_6JBEF78V.mjs';
import 'kleur/colors';
/* empty css                         */
import { $ as $$Footer, a as $$Header } from './Footer_BWoEue4Q.mjs';
import 'clsx';

const $$CriticalCSS = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<style>
  /* Base reset & custom properties */
  :root {
    --color-bg: #ffffff;
    --color-bg-dark: #0a0a0a;
    --color-text: #171717;
    --color-text-dark: #ededed;
    --color-primary: #3b82f6;
    --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html.dark {
    --color-bg: var(--color-bg-dark);
    --color-text: var(--color-text-dark);
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    background-color: var(--color-bg);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Header & Navigation Above-The-Fold Styles */
  header.nav-header {
    height: 64px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background-color: var(--color-bg);
    position: relative;
    z-index: 100;
  }

  html.dark header.nav-header {
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }

  /* Hero Section above-the-fold structure */
  .hero-section {
    padding: 64px 16px;
    text-align: center;
    background-color: var(--color-bg);
  }

  .hero-h1 {
    font-size: clamp(2.25rem, 6vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.1;
    margin: 0 0 16px;
  }
</style>`;
}, "/Users/princegautam/fitness/src/components/common/CriticalCSS.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.calaifitness.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Free, science-backed fitness calculators. BMI, TDEE, body fat, macros, calories \u2014 all in one place. 100% private, no account needed.",
    canonical = new URL(Astro2.url.pathname, Astro2.site).href,
    ogImage = new URL("/og-image.jpg", Astro2.site).href,
    noindex = false,
    schema
  } = Astro2.props;
  const siteUrl = Astro2.site?.href ?? "https://calaifitness.com";
  const siteName = "CalaiFitness";
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/calculators?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  const jsonLd = JSON.stringify(schema ?? defaultSchema);
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="light"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Inline Critical CSS for above-the-fold content -->', "<!-- \u2500\u2500 SEO Core \u2500\u2500 --><title>", '</title><meta name="description"', ">", '<link rel="canonical"', '><!-- \u2500\u2500 Author / Site \u2500\u2500 --><meta name="author"', '><meta name="keywords" content="fitness calculator, BMI calculator, TDEE calculator, calorie calculator, body fat calculator, macro calculator, protein intake, running pace calculator"><meta name="language" content="English"><meta name="revisit-after" content="7 days"><!-- \u2500\u2500 Google Search Console \u2500\u2500 --><meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE"><!-- \u2500\u2500 Open Graph \u2500\u2500 --><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><meta property="og:locale" content="en_US"><!-- \u2500\u2500 Twitter / X Card \u2500\u2500 --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@calaifitness"><meta name="twitter:creator" content="@calaifitness"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- \u2500\u2500 Favicon \u2500\u2500 --><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="apple-mobile-web-app-title"', `><meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0A0A0A"><!-- \u2500\u2500 Font Preconnect & Preload \u2500\u2500 --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" as="style"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'"><!-- \u2500\u2500 Dark Mode: No-Flash Script \u2500\u2500 --><!-- Must be inline, before body renders, to prevent FOUC --><script>
      (function () {
        var stored = '';
        try { stored = localStorage.getItem('theme') || ''; } catch (_) {}
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
        var root = document.documentElement;
        root.classList.remove('dark', 'light');
        root.classList.add(theme);
        try { localStorage.setItem('theme', theme); } catch (_) {}
      })();
    <\/script><!-- \u2500\u2500 Schema.org JSON-LD \u2500\u2500 --><script type="application/ld+json">`, `<\/script><!-- \u2500\u2500 Analytics (Google Tag Manager) \u2500\u2500 --><script async src="https://www.googletagmanager.com/gtag/js?id=G-YT6DG8JVDP"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YT6DG8JVDP');
    <\/script><!-- \u2500\u2500 Google AdSense \u2500\u2500 --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9326184680057918" crossorigin="anonymous"><\/script>`, "", "</head> <body> ", ' <main id="main-content"> ', " </main> ", " <!-- \u2500\u2500 Theme-change dispatch for components \u2500\u2500 --> <script>\n      document.addEventListener('DOMContentLoaded', function () {\n        window.__setTheme = function (t) {\n          var root = document.documentElement;\n          root.classList.remove('dark', 'light');\n          root.classList.add(t);\n          try { localStorage.setItem('theme', t); } catch (_) {}\n          window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: t } }));\n        };\n      });\n    <\/script> ", " </body></html>"])), renderComponent($$result, "CriticalCSS", $$CriticalCSS, {}), title, addAttribute(description, "content"), noindex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : renderTemplate`<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`, addAttribute(canonical, "href"), addAttribute(siteName, "content"), addAttribute(siteName, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(ogImage, "content"), addAttribute(`${siteName} \u2014 Fitness Calculators`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(siteName, "content"), unescapeHTML(jsonLd), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderSlot($$result, $$slots["body-end"]));
}, "/Users/princegautam/fitness/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
