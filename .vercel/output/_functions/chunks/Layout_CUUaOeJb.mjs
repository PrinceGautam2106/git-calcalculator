import { a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, c as createAstro, b as renderSlot, f as renderHead, e as addAttribute } from './astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-all hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10" aria-label="Toggle Theme"> <div class="relative h-5 w-5 overflow-hidden"> <!-- Sun Icon --> <svg id="sun-icon" class="absolute inset-0 h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] dark:-translate-y-full dark:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path> </svg> <!-- Moon Icon --> <svg id="moon-icon" class="absolute inset-0 h-5 w-5 translate-y-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] dark:translate-y-0 dark:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </div> </button> `;
}, "/Users/princegautam/fitness/src/components/ui/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 border-b border-black/10 bg-white/80 dark:border-white/10 dark:bg-black/80 backdrop-blur-xl"> <div class="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-4 md:px-6"> <a href="/" class="flex items-center gap-2 sm:gap-3 min-w-0"> <img src="/favicon-96x96.png" alt="FitnessCalculator Logo" class="h-7 w-7 sm:h-8 sm:w-8 rounded-full flex-shrink-0 invert dark:invert-0"> <span class="text-sm font-medium text-black dark:text-white truncate">FitnessCalculator</span> </a> <nav class="hidden items-center gap-4 sm:gap-8 md:flex"> <a href="/dashboard" id="nav-dashboard" class="text-xs sm:text-sm text-black/60 dark:text-white/60 transition-colors hover:text-black dark:hover:text-white whitespace-nowrap">Dashboard</a> <a href="/calculators" id="nav-calculators" class="text-xs sm:text-sm text-black/60 dark:text-white/60 transition-colors hover:text-black dark:hover:text-white whitespace-nowrap">Calculators</a> <a href="/history" id="nav-history" class="text-xs sm:text-sm text-black/60 dark:text-white/60 transition-colors hover:text-black dark:hover:text-white whitespace-nowrap">History</a> </nav> <div class="flex items-center gap-2 sm:gap-4"> <div id="streak-badge" class="hidden flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-black/60 dark:border-white/10 dark:bg-white/5 dark:text-white/60 flex-shrink-0"> <span>🔥</span> <span id="streak-text">0 day streak</span> </div> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden text-xl text-black dark:text-white hover:opacity-70 transition"> <span>☰</span> </button> </div> </div> <!-- Mobile Menu Dropdown --> <div id="mobile-menu" class="hidden md:hidden border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur"> <div class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-2"> <div class="grid grid-cols-3 gap-2"> <a href="/dashboard" class="flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-black dark:text-white"> <span class="text-2xl">📊</span> <span class="text-xs font-medium">Dashboard</span> </a> <a href="/calculators" class="flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-black dark:text-white"> <span class="text-2xl">🧮</span> <span class="text-xs font-medium">Calculators</span> </a> <a href="/history" class="flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-black dark:text-white"> <span class="text-2xl">📜</span> <span class="text-xs font-medium">History</span> </a> </div> </div> </div> </header> `;
}, "/Users/princegautam/fitness/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Notification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="notification-container" class="fixed bottom-8 right-8 z-[100] flex flex-col gap-4" data-astro-cid-lv2j2rcs> <!-- Notifications will be injected here --> </div> <script>
  window.showNotification = (message, type = 'success') => {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = \`
      flex items-center gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-[#111] dark:shadow-2xl
      transform transition-all duration-500 translate-x-full opacity-0
    \`;
    
    const icon = type === 'milestone' ? '\u{1F389}' : '\u2705';
    
    notification.innerHTML = \`
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-xl">
        \${icon}
      </div>
      <div>
        <p class="text-sm font-semibold">\${message}</p>
      </div>
    \`;

    container.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.classList.remove('translate-x-full', 'opacity-0');
      notification.classList.add('translate-x-0', 'opacity-100');
    });

    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('translate-x-0', 'opacity-100');
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  };
<\/script> `], ["", `<div id="notification-container" class="fixed bottom-8 right-8 z-[100] flex flex-col gap-4" data-astro-cid-lv2j2rcs> <!-- Notifications will be injected here --> </div> <script>
  window.showNotification = (message, type = 'success') => {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = \\\`
      flex items-center gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-[#111] dark:shadow-2xl
      transform transition-all duration-500 translate-x-full opacity-0
    \\\`;
    
    const icon = type === 'milestone' ? '\u{1F389}' : '\u2705';
    
    notification.innerHTML = \\\`
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-xl">
        \\\${icon}
      </div>
      <div>
        <p class="text-sm font-semibold">\\\${message}</p>
      </div>
    \\\`;

    container.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.classList.remove('translate-x-full', 'opacity-0');
      notification.classList.add('translate-x-0', 'opacity-100');
    });

    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('translate-x-0', 'opacity-100');
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  };
<\/script> `])), maybeRenderHead());
}, "/Users/princegautam/fitness/src/components/ui/Notification.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.calaifitness.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Track your fitness metrics every day. BMI, TDEE, Body Fat, and more." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords" content="fitness calculator, calorie calculator, BMI calculator, body fat calculator, TDEE calculator, BMR calculator, macro calculator, weight loss calculator, calorie deficit calculator, health calculator, fitness tools"><meta name="robots" content="index, follow"><meta name="language" content="English"><meta name="revisit-after" content="7 days"><meta name="author" content="FitnessCalculator"><title>', '</title><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96"><link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"><link rel="manifest" href="/site.webmanifest"><meta name="apple-mobile-web-app-title" content="CalaiFitness"><link rel="canonical"', `><script>
      (function() {
        try {
          const streakData = localStorage.getItem('fc_streak_data');
          if (streakData) {
            const data = JSON.parse(streakData);
            const streakEl = document.getElementById('streak-text');
            const streakBadge = document.getElementById('streak-badge');
            if (streakEl && data.currentStreak !== undefined) {
              streakEl.textContent = data.currentStreak + ' day' + (data.currentStreak === 1 ? '' : 's') + ' streak';
              if (streakBadge && data.currentStreak > 0) {
                streakBadge.classList.remove('hidden');
              }
            }
          }
        } catch(e) {}
      })();
    <\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://cdn.jsdelivr.net"><!-- Google AdSense --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9326184680057918" crossorigin="anonymous"><\/script><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-YT6DG8JVDP"><\/script><!-- Open Graph Meta Tags --><meta property="og:title"`, '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:site_name" content="FitnessCalculator"><!-- Twitter Card Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Schema.org Markup --><script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "FitnessCalculator",
      "description": "Free fitness calculators for BMI, TDEE, body fat, macro split, calorie intake, and more.",
      "url": "https://calaifitness.com",
      "applicationCategory": "HealthApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    <\/script><script>
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
    
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      window.localStorage.setItem('theme', theme);
    <\/script>`, '</head> <body class="bg-white text-black dark:bg-black dark:text-white antialiased transition-colors duration-300"> ', ' <main class="min-h-[calc(100vh-8rem)]"> ', ' </main> <footer class="border-t border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] mt-16"> <div class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-10 sm:py-16"> <!-- Main Footer Content --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"> <!-- Brand Section --> <div class="sm:col-span-2 lg:col-span-1"> <h3 class="text-xl font-black text-black dark:text-white mb-3">FitnessCalculator</h3> <p class="text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4">\nFree, science-backed fitness calculators. Track your health metrics with 100% privacy.\n</p> <div class="flex gap-2"> <span class="inline-flex items-center px-2 py-1 rounded-md bg-[#50e3c2]/10 text-[#50e3c2] text-xs font-bold">\n\u{1F512} 100% Private\n</span> <span class="inline-flex items-center px-2 py-1 rounded-md bg-[#50e3c2]/10 text-[#50e3c2] text-xs font-bold">\n\u26A1 Free Forever\n</span> </div> </div> <!-- Calculators --> <div> <h4 class="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-wider">Calculators</h4> <ul class="space-y-3"> <li><a href="/calculator/bmi" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">BMI Calculator</a></li> <li><a href="/calculator/tdee" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">TDEE Calculator</a></li> <li><a href="/calculator/bodyfat" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Body Fat Calculator</a></li> <li><a href="/calculator/macros" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Macro Calculator</a></li> <li><a href="/calculator/protein" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Protein Intake</a></li> <li><a href="/calculator/pace" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Running Pace</a></li> <li><a href="/calculators" class="text-sm text-[#50e3c2] hover:text-black dark:hover:text-white font-medium transition">View All \u2192</a></li> </ul> </div> <!-- Company --> <div> <h4 class="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-wider">Company</h4> <ul class="space-y-3"> <li><a href="/about" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">About Us</a></li> <li><a href="/faq" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">FAQ</a></li> <li><a href="/contact" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Contact Us</a></li> <li><a href="/dashboard" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Dashboard</a></li> </ul> </div> <!-- Legal --> <div> <h4 class="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-wider">Legal</h4> <ul class="space-y-3"> <li><a href="/privacy" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Privacy Policy</a></li> <li><a href="/terms" class="text-sm text-black/70 dark:text-white/70 hover:text-[#50e3c2] transition">Terms & Conditions</a></li> </ul> <div class="mt-6 p-3 rounded-xl bg-white dark:bg-black/30 border border-black/10 dark:border-white/10"> <p class="text-xs text-black/60 dark:text-white/60 leading-relaxed"> <strong class="text-black/80 dark:text-white/80">Medical Disclaimer:</strong> Not a substitute for professional medical advice.\n</p> </div> </div> </div> <!-- Bottom Bar --> <div class="pt-8 border-t border-black/10 dark:border-white/10"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"> <p class="text-xs sm:text-sm text-black/50 dark:text-white/50">\n\xA9 2026 FitnessCalculator. All rights reserved.\n</p> <div class="flex items-center gap-4 text-xs text-black/50 dark:text-white/50"> <span>Made with \u2764\uFE0F for your health</span> </div> </div> </div> </div> </footer> ', " </body></html>"])), addAttribute(description, "content"), title, addAttribute(new URL(Astro2.url.pathname, Astro2.site).href, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL("/og-image.jpg", Astro2.site).href, "content"), addAttribute(new URL(Astro2.url.pathname, Astro2.site).href, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL("/og-image.jpg", Astro2.site).href, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Notification", $$Notification, {}));
}, "/Users/princegautam/fitness/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
