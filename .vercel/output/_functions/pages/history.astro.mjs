import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B7YyOz1_.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, $ as $$SchemaScript } from '../chunks/seo_CLC9k0GV.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$History = createComponent(($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Your Private History Dashboard");
  const DESC = generateDescription("Manage your locally saved health and fitness calculation logs. 100% private, on-device data storage.");
  const CANONICAL = generateCanonical("/history");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESC,
    url: CANONICAL
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-tal57otx": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-site py-16 sm:py-24" data-astro-cid-tal57otx> <!-- Header --> <header class="mb-10 sm:mb-12" data-astro-cid-tal57otx> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" data-astro-cid-tal57otx> <div data-astro-cid-tal57otx> <p class="text-label text-[var(--color-primary)] mb-2" data-astro-cid-tal57otx>Device Sandbox</p> <h1 class="text-display-md text-[var(--color-ink)] mb-3" data-astro-cid-tal57otx>Your Calculation History</h1> <p class="text-body-sm text-[var(--color-body)] max-w-2xl leading-relaxed" data-astro-cid-tal57otx>
All records below are stored strictly on this device inside your browser's local sandbox.
            No data is ever uploaded to a server, keeping your health journey 100% private.
</p> </div> <!-- Actions button box --> <div class="flex items-center gap-2 shrink-0 self-start sm:self-center" id="dashboard-actions" data-astro-cid-tal57otx> <button id="history-export-btn" class="dash-btn border-btn" type="button" data-astro-cid-tal57otx>
📥 Export Data
</button> <button id="history-clear-btn" class="dash-btn danger-btn" type="button" data-astro-cid-tal57otx>
🗑️ Clear All
</button> </div> </div> </header> <!-- Filters bar --> <div class="filter-panel mb-8" id="filter-panel" data-astro-cid-tal57otx> <div class="filter-input-wrap" data-astro-cid-tal57otx> <label for="history-filter" class="filter-label" data-astro-cid-tal57otx>Filter by Tool</label> <select id="history-filter" class="filter-select" data-astro-cid-tal57otx> <option value="all" data-astro-cid-tal57otx>All Calculations</option> <option value="TDEE" data-astro-cid-tal57otx>TDEE</option> <option value="BMI" data-astro-cid-tal57otx>BMI</option> <option value="Body Fat" data-astro-cid-tal57otx>Body Fat</option> <option value="1 Rep Max" data-astro-cid-tal57otx>1 Rep Max</option> <option value="Sleep Cycles" data-astro-cid-tal57otx>Sleep Cycles</option> <option value="Sleep Debt" data-astro-cid-tal57otx>Sleep Debt</option> <option value="Calorie Deficit" data-astro-cid-tal57otx>Calorie Deficit</option> </select> </div> </div> <!-- History Table --> <div class="table-wrapper border border-[var(--color-hairline)] rounded-sm" id="table-wrapper" data-astro-cid-tal57otx> <table class="history-table" data-astro-cid-tal57otx> <thead data-astro-cid-tal57otx> <tr data-astro-cid-tal57otx> <th data-astro-cid-tal57otx>Date</th> <th data-astro-cid-tal57otx>Calculator</th> <th data-astro-cid-tal57otx>Result Value</th> <th data-astro-cid-tal57otx>Parameters / Context</th> <th class="text-right" data-astro-cid-tal57otx>Action</th> </tr> </thead> <tbody id="history-tbody" data-astro-cid-tal57otx> <!-- Injected dynamically by Client JS --> </tbody> </table> </div> <!-- Empty State --> <div id="history-empty" class="empty-state hidden" role="status" data-astro-cid-tal57otx> <div class="empty-icon" aria-hidden="true" data-astro-cid-tal57otx>📊</div> <h2 class="empty-title" data-astro-cid-tal57otx>No calculation history found</h2> <p class="empty-desc" data-astro-cid-tal57otx>
Your history log is empty. Save your results when using any of our tools to view and track your progress here.
</p> <a href="/calculators" class="browse-btn" data-astro-cid-tal57otx>
Browse Calculators →
</a> </div> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": schema, "data-astro-cid-tal57otx": true })}` })}  `;
}, "/Users/princegautam/fitness/src/pages/history.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/history.astro";
const $$url = "/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
