globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_Cu1oycWn.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.calaifitness.com");
const $$SchemaScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SchemaScript;
  const { schema, schemas, pretty = false } = Astro2.props;
  let finalSchema;
  if (schemas && schemas.length > 0) {
    if (schemas.length === 1) {
      finalSchema = schemas[0];
    } else {
      finalSchema = {
        "@context": "https://schema.org",
        "@graph": schemas.map((s) => {
          const { "@context": _, ...rest } = s;
          return rest;
        })
      };
    }
  } else if (schema) {
    finalSchema = schema;
  } else {
    finalSchema = {};
  }
  const json = pretty ? JSON.stringify(finalSchema, null, 2) : JSON.stringify(finalSchema);
  return renderTemplate`${Object.keys(finalSchema).length > 0 && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(json))}`;
}, "/Users/princegautam/fitness/src/components/seo/SchemaScript.astro", void 0);

export { $$SchemaScript as $ };
