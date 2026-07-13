import { c as createAstro, a as createComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import 'clsx';

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

const SITE_NAME = "CalaiFitness";
const SITE_URL = "https://www.calaifitness.com";
const TITLE_SUFFIX = `| ${SITE_NAME}`;
function generateTitle(pageTitle) {
  if (!pageTitle) return SITE_NAME;
  if (pageTitle.includes(SITE_NAME)) return pageTitle;
  return `${pageTitle} ${TITLE_SUFFIX}`;
}
function generateDescription(text, maxLength = 155) {
  if (!text) return "";
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  const truncated = cleaned.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return lastSpace > 100 ? truncated.slice(0, lastSpace) + "…" : truncated + "…";
}
function generateCanonical(path) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const noTrailing = clean.endsWith("/") && clean.length > 1 ? clean.slice(0, -1) : clean;
  return `${SITE_URL}${noTrailing}`;
}
function generateArticleSchema(input) {
  const publishDateISO = new Date(input.publishDate).toISOString();
  const modifiedDateISO = input.modifiedDate ? new Date(input.modifiedDate).toISOString() : publishDateISO;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: publishDateISO,
    dateModified: modifiedDateISO,
    author: {
      "@type": "Person",
      name: input.authorName ?? "CalaiFitness Team",
      url: input.authorUrl ?? SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`
      }
    },
    image: input.imageUrl ? {
      "@type": "ImageObject",
      url: input.imageUrl,
      width: 1200,
      height: 630
    } : `${SITE_URL}/og-image.jpg`,
    keywords: input.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url
    }
  };
}
function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Free, science-backed fitness calculators for BMI, TDEE, body fat, macros, calories, and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/calculators?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
function combineSchemas(...schemas) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((s) => {
      const { "@context": _, ...rest } = s;
      return rest;
    })
  };
}

export { $$SchemaScript as $, generateTitle as a, generateCanonical as b, generateArticleSchema as c, combineSchemas as d, generateWebSiteSchema as e, generateDescription as g };
