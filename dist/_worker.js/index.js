globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { createExports } from './_@astrojs-ssr-adapter.mjs';
import { manifest } from './manifest_BQV_321I.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/blog/fat-loss.astro.mjs');
const _page5 = () => import('./pages/blog/muscle-building.astro.mjs');
const _page6 = () => import('./pages/blog/nutrition.astro.mjs');
const _page7 = () => import('./pages/blog/training.astro.mjs');
const _page8 = () => import('./pages/blog/_slug_.astro.mjs');
const _page9 = () => import('./pages/blog.astro.mjs');
const _page10 = () => import('./pages/calculator/bmi.astro.mjs');
const _page11 = () => import('./pages/calculator/bmr.astro.mjs');
const _page12 = () => import('./pages/calculator/body-fat.astro.mjs');
const _page13 = () => import('./pages/calculator/calories.astro.mjs');
const _page14 = () => import('./pages/calculator/heart-rate.astro.mjs');
const _page15 = () => import('./pages/calculator/ideal-weight.astro.mjs');
const _page16 = () => import('./pages/calculator/lean-mass.astro.mjs');
const _page17 = () => import('./pages/calculator/macros.astro.mjs');
const _page18 = () => import('./pages/calculator/one-rep-max.astro.mjs');
const _page19 = () => import('./pages/calculator/protein.astro.mjs');
const _page20 = () => import('./pages/calculator/sleep.astro.mjs');
const _page21 = () => import('./pages/calculator/sleep-debt.astro.mjs');
const _page22 = () => import('./pages/calculator/tdee.astro.mjs');
const _page23 = () => import('./pages/calculator/water.astro.mjs');
const _page24 = () => import('./pages/calculator/_slug_/result.astro.mjs');
const _page25 = () => import('./pages/calculator/_slug_.astro.mjs');
const _page26 = () => import('./pages/calculators.astro.mjs');
const _page27 = () => import('./pages/contact.astro.mjs');
const _page28 = () => import('./pages/dashboard.astro.mjs');
const _page29 = () => import('./pages/disclaimer.astro.mjs');
const _page30 = () => import('./pages/error.astro.mjs');
const _page31 = () => import('./pages/faq.astro.mjs');
const _page32 = () => import('./pages/history.astro.mjs');
const _page33 = () => import('./pages/legal.astro.mjs');
const _page34 = () => import('./pages/privacy.astro.mjs');
const _page35 = () => import('./pages/sitemap.xml.astro.mjs');
const _page36 = () => import('./pages/terms.astro.mjs');
const _page37 = () => import('./pages/tools/calorie-deficit-planner.astro.mjs');
const _page38 = () => import('./pages/tools/fitness-age-calculator.astro.mjs');
const _page39 = () => import('./pages/tools/macro-calculator.astro.mjs');
const _page40 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/blog/fat-loss/index.astro", _page4],
    ["src/pages/blog/muscle-building/index.astro", _page5],
    ["src/pages/blog/nutrition/index.astro", _page6],
    ["src/pages/blog/training/index.astro", _page7],
    ["src/pages/blog/[slug].astro", _page8],
    ["src/pages/blog/index.astro", _page9],
    ["src/pages/calculator/bmi.astro", _page10],
    ["src/pages/calculator/bmr.astro", _page11],
    ["src/pages/calculator/body-fat.astro", _page12],
    ["src/pages/calculator/calories.astro", _page13],
    ["src/pages/calculator/heart-rate.astro", _page14],
    ["src/pages/calculator/ideal-weight.astro", _page15],
    ["src/pages/calculator/lean-mass.astro", _page16],
    ["src/pages/calculator/macros.astro", _page17],
    ["src/pages/calculator/one-rep-max.astro", _page18],
    ["src/pages/calculator/protein.astro", _page19],
    ["src/pages/calculator/sleep.astro", _page20],
    ["src/pages/calculator/sleep-debt.astro", _page21],
    ["src/pages/calculator/tdee.astro", _page22],
    ["src/pages/calculator/water.astro", _page23],
    ["src/pages/calculator/[slug]/result.astro", _page24],
    ["src/pages/calculator/[slug].astro", _page25],
    ["src/pages/calculators.astro", _page26],
    ["src/pages/contact.astro", _page27],
    ["src/pages/dashboard.astro", _page28],
    ["src/pages/disclaimer.astro", _page29],
    ["src/pages/error.astro", _page30],
    ["src/pages/faq.astro", _page31],
    ["src/pages/history.astro", _page32],
    ["src/pages/legal.astro", _page33],
    ["src/pages/privacy.astro", _page34],
    ["src/pages/sitemap.xml.ts", _page35],
    ["src/pages/terms.astro", _page36],
    ["src/pages/tools/calorie-deficit-planner.astro", _page37],
    ["src/pages/tools/fitness-age-calculator.astro", _page38],
    ["src/pages/tools/macro-calculator.astro", _page39],
    ["src/pages/index.astro", _page40]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
