import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CUUaOeJb.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Are these calculators completely free?",
      answer: "Yes, 100%. All of our calculators are completely free to use, and we don't hide any features behind a paywall."
    },
    {
      question: "Do you store my personal health data?",
      answer: "No. Our calculators run entirely on your device (in your browser). We do not send your height, weight, or any other metrics to our servers. Any data you choose to save is stored locally on your device using localStorage."
    },
    {
      question: "Which TDEE formula do you use?",
      answer: "Our TDEE calculator uses the Mifflin-St Jeor equation by default, as it is widely considered the most accurate formula by modern scientific standards. We also offer the Katch-McArdle formula for those who know their body fat percentage."
    },
    {
      question: "How accurate are the body fat calculators?",
      answer: "The US Navy Body Fat calculator provides a good estimate (usually within 3-4% of DEXA scans) based on tape measurements. For the absolute most accurate results, we recommend a DEXA scan."
    },
    {
      question: "Why do I need to enter my biological sex?",
      answer: "Most scientifically validated formulas for BMR and body fat (like Mifflin-St Jeor) require biological sex as a variable because male and female bodies typically have different baseline body composition and hormone profiles that affect resting metabolic rate."
    },
    {
      question: "Can I use these calculators offline?",
      answer: "Yes! Once the page has loaded, the calculators run entirely on JavaScript in your browser, meaning they will continue to work even if you lose your internet connection."
    },
    {
      question: "Should I eat back the calories I burn from exercise?",
      answer: "If you've already accounted for your exercise in your Activity Level (e.g., you chose 'Moderately Active'), you should NOT eat back the calories you burn, as they are already included in your TDEE."
    },
    {
      question: "What is BMI and is it accurate?",
      answer: "Body Mass Index (BMI) is a simple height-to-weight ratio. While useful for population studies, it does not account for muscle mass. Athletes and bodybuilders may be classified as 'overweight' despite having low body fat."
    },
    {
      question: "How much protein do I actually need?",
      answer: "For muscle growth and maintenance, most research suggests 0.7-1.0 grams of protein per pound of body weight (1.6-2.2g per kg) is optimal."
    },
    {
      question: "Are your results medical advice?",
      answer: "No. All calculators and information provided on FitnessCalculator are for educational purposes only and do not constitute medical advice. Please consult a physician before starting any diet or exercise program."
    },
    {
      question: "Why did my TDEE change?",
      answer: "Your TDEE changes as your body weight changes. As you lose weight, your body requires fewer calories to maintain itself. It's recommended to recalculate your TDEE every 5-10 lbs."
    },
    {
      question: "What are macros?",
      answer: "Macros (macronutrients) are the three main categories of nutrients you eat that provide you with most of your energy: protein, carbohydrates, and fats."
    },
    {
      question: "Do you have an app?",
      answer: "FitnessCalculator is built as a Progressive Web App (PWA). You can 'Install' it directly to your home screen from your browser menu for an app-like experience."
    },
    {
      question: "Which calculator should I start with?",
      answer: "We recommend starting with the TDEE (Total Daily Energy Expenditure) calculator. It gives you the foundational number you need for weight loss, maintenance, or muscle gain."
    },
    {
      question: "How do I calculate my body fat at home?",
      answer: "The easiest and most reliable at-home method is the US Navy method, which requires only a measuring tape to measure your neck and waist (and hips for women)."
    },
    {
      question: "Can I share my results?",
      answer: "Currently, because we prioritize privacy and do not store your data on our servers, there are no shareable links for specific results. You can always take a screenshot!"
    },
    {
      question: "Are the formulas based on science?",
      answer: "Yes, every calculator uses peer-reviewed, scientifically validated formulas (e.g., Mifflin-St Jeor, Harris-Benedict, US Navy Method)."
    },
    {
      question: "How often should I weigh myself?",
      answer: "Weighing yourself daily and taking the weekly average is the most accurate way to track your weight, as it smooths out daily fluctuations caused by water, sodium, and digestion."
    },
    {
      question: "What is BMR vs TDEE?",
      answer: "BMR (Basal Metabolic Rate) is the number of calories you burn just staying alive in a coma. TDEE is your BMR plus the calories you burn from daily activity and exercise."
    },
    {
      question: "I found a bug. How can I report it?",
      answer: "Please reach out to us via our Contact page. We are always looking to improve our tools!"
    }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Frequently Asked Questions | FitnessCalculator", "description": "Answers to all your questions about our fitness calculators, privacy, and formulas." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<div class="max-w-4xl mx-auto px-4 py-12 sm:py-20"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-black mb-6">Frequently Asked Questions</h1> <p class="text-xl text-black/60 dark:text-white/60">Everything you need to know about our tools, privacy, and formulas.</p> </div> <div class="space-y-6"> ', ` </div> <div class="mt-16 text-center bg-gray-50 dark:bg-white/[0.02] p-8 rounded-3xl border border-black/5 dark:border-white/5"> <h2 class="text-2xl font-bold mb-4">Still have questions?</h2> <p class="text-black/60 dark:text-white/60 mb-6">We're here to help. Reach out to our team anytime.</p> <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#50e3c2] text-black font-bold hover:bg-[#50e3c2]/80 transition-colors">
Contact Support
</a> </div> </div> `])), unescapeHTML(JSON.stringify(schema)), maybeRenderHead(), faqs.map((faq, index) => renderTemplate`<div class="bg-white dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors"> <h3 class="text-xl font-bold mb-3">${faq.question}</h3> <p class="text-black/70 dark:text-white/70 leading-relaxed">${faq.answer}</p> </div>`)) })}`;
}, "/Users/princegautam/fitness/src/pages/faq.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
