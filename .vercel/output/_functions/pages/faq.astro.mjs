import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_6JBEF78V.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5eMsKSEU.mjs';
import { a as generateTitle, g as generateDescription, b as generateCanonical, $ as $$SchemaScript } from '../chunks/seo_CLC9k0GV.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const TITLE = generateTitle("Frequently Asked Questions");
  const DESC = generateDescription("Find answers to 20 common questions about fitness calculators, privacy, accuracy, formulas, and sleep cycles. Free and private.");
  const CANONICAL = generateCanonical("/faq");
  const faqCategories = [
    {
      categoryName: "Privacy & Data Security",
      items: [
        {
          q: "Is my personal data safe on CalaiFitness?",
          a: "Yes, your data is 100% safe because it never leaves your device. CalaiFitness performs all calculations locally in your browser using client-side JavaScript. No information about your age, weight, height, or health goals is ever uploaded to a server."
        },
        {
          q: "Do you store my weight, age, or health statistics?",
          a: 'No. We do not run any database to store user statistics. If you choose to click "Save to History," the calculation record is stored strictly inside your browser\'s local storage (`localStorage`). This data is private to you and cannot be accessed by us or any third parties.'
        },
        {
          q: "Can I delete my saved calculation history?",
          a: `Yes. You can delete your saved history at any time. Simply clear your browser's local storage or click the "Clear History" button on the history dashboard (available on pages supporting history tracking).`
        },
        {
          q: "Why are there no ads on this website?",
          a: "We built CalaiFitness because we were frustrated by the state of online fitness calculators, which are usually covered in flashing advertisements, tracking scripts, and pop-up banners. We want to provide a clean, fast, and distraction-free experience."
        },
        {
          q: "Do these calculators work offline?",
          a: "Yes. Because all calculations are executed using client-side JavaScript in your browser, once the website files are loaded, you can run calculations even when disconnected from the internet."
        }
      ]
    },
    {
      categoryName: "Accuracy & Clinical Formulas",
      items: [
        {
          q: "How accurate are these online calculators?",
          a: "Our calculators estimate biological metrics using peer-reviewed scientific formulas (such as Mifflin-St Jeor, the Karvonen method, and NTNU models). While they are highly accurate statistical approximations (typically within \xB13% to 10% of clinical tests), they remain estimations. Individual metabolism, genetics, and muscle mass can cause minor variations."
        },
        {
          q: "Where do you get your calculation formulas?",
          a: "We use validated equations published in peer-reviewed clinical and scientific journals (such as the World Health Organization, the National Institutes of Health, and the American Council on Exercise). We cite the exact source publication and formula math at the bottom of every calculator page."
        },
        {
          q: "Which formula is best: Mifflin-St Jeor or Harris-Benedict?",
          a: "The Mifflin-St Jeor equation (developed in 1990) is widely considered the gold standard for predicting resting metabolic rate (BMR) in modern adults. Research shows it is more accurate than the original Harris-Benedict equation (1918) and the revised Harris-Benedict (1984), which tend to overestimate caloric needs by 5% to 10%."
        },
        {
          q: "Why does my body fat percentage not match my BMI?",
          a: 'Body Mass Index (BMI) is a simple ratio of weight to height and cannot distinguish between fat and muscle. A muscular athlete may have an "overweight" BMI despite having low body fat. The US Navy body fat calculator uses waist, neck, and hip circumferences to estimate actual tissue composition, providing a more detailed breakdown.'
        },
        {
          q: "Why do some calculators require a gender input?",
          a: "Gender inputs are required because biological males and females possess different physiological baselines. Females naturally carry a higher essential body fat percentage for reproductive and hormonal health, and males typically have higher muscle mass density. The scientific formulas utilize gender coefficients to adjust for these baseline metabolic variations."
        }
      ]
    },
    {
      categoryName: "Using the Tools",
      items: [
        {
          q: "What is the difference between BMR and TDEE?",
          a: "Basal Metabolic Rate (BMR) is the absolute minimum number of calories your body burns to survive at complete rest (to power organs, heart, and lungs). Total Daily Energy Expenditure (TDEE) is the sum of your BMR plus all calories burned through daily movement, work, and exercise. You use TDEE, not BMR, to calculate your target calories."
        },
        {
          q: "Is it safe to drop my calorie intake below my BMR?",
          a: "Generally, no. Your BMR represents the energy needed to sustain basic organ functions. Consuming fewer calories than your BMR for extended periods triggers severe survival adaptations: thyroid hormones drop, metabolism slows down, and the body breaks down skeletal muscle for energy. Keep your deficit moderate, and avoid dropping below 1,200 calories (women) or 1,500 calories (men)."
        },
        {
          q: "How often should I recalculate my metrics?",
          a: "You should recalculate your metrics (such as TDEE, Calorie Targets, or 1RM) every 4 to 6 weeks, or after losing/gaining 3 to 5 kilograms (6 to 10 lbs). As your weight and body composition change, your baseline metabolic rate adapts, meaning your target numbers must be updated to avoid progress plateaus."
        },
        {
          q: "How does exercise duration affect water intake requirements?",
          a: "Standard hydration baselines only cover resting needs. When you exercise, you lose water through sweat. The National Academies of Sciences, Engineering, and Medicine (NASEM) recommends adding approximately 350 to 700 ml (12 to 24 fl oz) of water for every 30 minutes of moderate-to-vigorous physical activity to maintain fluid balance."
        },
        {
          q: "What is cardiorespiratory fitness (VO2 max) and how does it relate to fitness age?",
          a: "VO2 max is the maximum rate of oxygen your body can utilize during exercise. It is the gold standard indicator of cardiorespiratory health. Our fitness age calculator uses NTNU regression equations to estimate your VO2 max and matches it to average age demographics. If your VO2 max is higher than the average for your age, your biological fitness age will be younger."
        }
      ]
    },
    {
      categoryName: "Health, Medical & Safety",
      items: [
        {
          q: "Can I use these calculators if I am pregnant?",
          a: "No. Standard metabolic, body fat, and weight target calculators (such as BMR, TDEE, and BMI) are not validated for pregnant or lactating individuals. Pregnancy shifts fluid retention, essential fat storage, and metabolic energy requirements drastically. Always consult your obstetrician for clinical health guidelines."
        },
        {
          q: "Can I pay back a sleep debt on weekends?",
          a: "Only partially. Sleeping in on weekends can relieve acute feelings of sleepiness, but it does not reverse the cognitive declines, metabolic changes, or insulin sensitivity drops caused by a week of sleep deprivation. Sleep debt must be paid back gradually by adding 30 to 60 minutes of sleep per night over several days."
        },
        {
          q: "What is the female athlete triad?",
          a: "The female athlete triad is a medical syndrome consisting of three interrelated health issues: (1) low energy availability (insufficient calories for training), (2) menstrual dysfunction (irregular or absent periods), and (3) low bone mineral density (osteopenia or osteoporosis). It is triggered by dropping body fat or calorie intake below safe essential thresholds."
        },
        {
          q: "Can a calculator diagnose obesity or heart issues?",
          a: "No. These calculators are screening tools designed for educational and informational purposes. They cannot diagnose medical conditions. A high BMI or elevated resting heart rate should prompt a consultation with a physician for a comprehensive clinical evaluation."
        },
        {
          q: "Does CalaiFitness provide medical advice?",
          a: "Absolutely not. None of the content, results, or plans generated by CalaiFitness constitute medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider, physician, or registered dietitian before starting a new exercise program or making significant modifications to your diet."
        }
      ]
    }
  ];
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": TITLE, "description": DESC, "canonical": CANONICAL, "data-astro-cid-6kmwghhu": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-site py-16 sm:py-24 max-w-4xl" data-astro-cid-6kmwghhu> <!-- Header --> <header class="mb-12 text-center max-w-2xl mx-auto" data-astro-cid-6kmwghhu> <p class="text-label text-[var(--color-primary)] mb-3" data-astro-cid-6kmwghhu>Help Center</p> <h1 class="text-display-md text-[var(--color-ink)] mb-4" data-astro-cid-6kmwghhu>
Frequently Asked Questions
</h1> <p class="text-body-md text-[var(--color-body)] leading-relaxed" data-astro-cid-6kmwghhu>
Have questions about our calculations, privacy standards, or how to interpret your results? Browse our 20 most frequently asked questions.
</p> </header> <!-- FAQ Accordion Layout --> <div class="faq-accordion-container" data-astro-cid-6kmwghhu> ${faqCategories.map((cat) => renderTemplate`<section class="faq-category-block mb-10" data-astro-cid-6kmwghhu> <h2 class="category-heading" data-astro-cid-6kmwghhu>${cat.categoryName}</h2> <div class="accordion-list" data-astro-cid-6kmwghhu> ${cat.items.map((item, idx) => {
    const id = `faq-${cat.categoryName.toLowerCase().replace(/\s+/g, "-")}-${idx}`;
    return renderTemplate`<div class="accordion-item" data-astro-cid-6kmwghhu> <input type="checkbox"${addAttribute(id, "id")} class="accordion-trigger" data-astro-cid-6kmwghhu> <label${addAttribute(id, "for")} class="accordion-label" data-astro-cid-6kmwghhu> <span class="question-text" data-astro-cid-6kmwghhu>${item.q}</span> <span class="accordion-icon" aria-hidden="true" data-astro-cid-6kmwghhu>+</span> </label> <div class="accordion-content" data-astro-cid-6kmwghhu> <p class="accordion-text" data-astro-cid-6kmwghhu>${item.a}</p> </div> </div>`;
  })} </div> </section>`)} </div> <!-- Contact CTA --> <div class="faq-footer mt-16 p-8 border border-[var(--color-hairline)] rounded-sm text-center bg-[var(--color-canvas-soft)]" data-astro-cid-6kmwghhu> <h3 class="text-base font-semibold text-[var(--color-ink)] mb-2" data-astro-cid-6kmwghhu>Still have questions?</h3> <p class="text-sm text-[var(--color-body)] mb-4 max-w-md mx-auto" data-astro-cid-6kmwghhu>
If you couldn't find the answer you were looking for, or if you noticed an error in our calculations, please let us know.
</p> <a href="mailto:hello@calaifitness.com" class="faq-contact-btn" data-astro-cid-6kmwghhu>
Contact Support →
</a> </div> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SchemaScript", $$SchemaScript, { "slot": "head", "schema": faqSchema, "data-astro-cid-6kmwghhu": true })}` })} `;
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
