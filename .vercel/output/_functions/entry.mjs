import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CAcsNFzu.mjs';
import { manifest } from './manifest_14xWIQgz.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/calculator/_slug_/result.astro.mjs');
const _page5 = () => import('./pages/calculator/_slug_.astro.mjs');
const _page6 = () => import('./pages/calculators.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/error.astro.mjs');
const _page10 = () => import('./pages/faq.astro.mjs');
const _page11 = () => import('./pages/history.astro.mjs');
const _page12 = () => import('./pages/privacy.astro.mjs');
const _page13 = () => import('./pages/sitemap.xml.astro.mjs');
const _page14 = () => import('./pages/terms.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/calculator/[slug]/result.astro", _page4],
    ["src/pages/calculator/[slug].astro", _page5],
    ["src/pages/calculators.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/dashboard.astro", _page8],
    ["src/pages/error.astro", _page9],
    ["src/pages/faq.astro", _page10],
    ["src/pages/history.astro", _page11],
    ["src/pages/privacy.astro", _page12],
    ["src/pages/sitemap.xml.ts", _page13],
    ["src/pages/terms.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
