import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_4eSzUG1x.mjs';
import { $ as $$CalculatorCard } from '../chunks/CalculatorCard_C_WRbhF5.mjs';
export { renderers } from '../renderers.mjs';

const $$Calculators = createComponent(($$result, $$props, $$slots) => {
  const calculators = [
    { title: "BMI Calculator", description: "Measure your Body Mass Index based on height and weight. Essential for anyone tracking their health or starting a weight loss journey.", icon: "\u2696\uFE0F", slug: "bmi" },
    { title: "BMR Calculator", description: "Find your Basal Metabolic Rate \u2014 the calories your body burns at rest. Key for anyone planning a diet or understanding their metabolism.", icon: "\u{1F525}", slug: "bmr" },
    { title: "TDEE Calculator", description: "Calculate your Total Daily Energy Expenditure including exercise. The most important number for setting calorie targets for any fitness goal.", icon: "\u26A1", slug: "tdee" },
    { title: "Body Fat %", description: "Estimate your body fat percentage using the US Navy method. More accurate than BMI alone for assessing body composition and fitness level.", icon: "\u{1F4CA}", slug: "bodyfat" },
    { title: "Ideal Weight", description: "Find your ideal weight range based on 5 medical formulas. Gives a realistic, personalised target for your height and sex.", icon: "\u{1F3AF}", slug: "idealweight" },
    { title: "Calorie Tracker", description: "Set a daily calorie target based on your goal \u2014 lose weight, maintain, or build muscle. Uses your TDEE for accurate, personalised recommendations.", icon: "\u{1F34E}", slug: "calories" },
    { title: "Macro Split", description: "Get your daily protein, carbohydrate, and fat targets in grams. Essential for meal planning and hitting your fitness goals precisely.", icon: "\u{1F957}", slug: "macros" },
    { title: "Water Intake", description: "Calculate how much water you should drink daily based on weight and activity. Stay properly hydrated for peak performance and health.", icon: "\u{1F4A7}", slug: "water" },
    { title: "Target Heart Rate", description: "Find your personalised fat-burn, cardio, and peak heart rate zones. Essential for runners, cyclists, and anyone doing cardio training.", icon: "\u2764\uFE0F", slug: "heartrate" },
    { title: "Lean Body Mass", description: "Calculate your lean body mass \u2014 everything except fat. Track muscle gain and understand your body composition over time.", icon: "\u{1F4AA}", slug: "leanmass" },
    { title: "1-Rep Max", description: "Estimate your one-rep max for any lift using the Epley formula. Get training percentages for strength, hypertrophy, and endurance work.", icon: "\u{1F3CB}\uFE0F", slug: "onerep" },
    { title: "Running Pace", description: "Calculate your pace per km/mile and predict finish times. Includes split tables for 5K, 10K, half marathon, and marathon distances.", icon: "\u{1F3C3}", slug: "pace" },
    { title: "Calorie Deficit", description: "Find your optimal calorie deficit for safe, sustainable weight loss. Shows weekly and monthly projected fat loss with safety minimums.", icon: "\u{1F3AF}", slug: "deficit" },
    { title: "Sleep Calculator", description: "Find the best bedtime or wake time aligned with 90-minute sleep cycles. Wake up refreshed instead of groggy by timing your sleep.", icon: "\u{1F634}", slug: "sleep" },
    { title: "Protein Intake", description: "Get your personalised daily protein target in grams. Accounts for body weight, body fat, and goal \u2014 maintenance, cutting, or bulking.", icon: "\u{1F969}", slug: "protein" },
    { title: "Army Body Fat", description: "Estimate body fat using the official US Army circumference formula. Check if you pass Army body composition standards for your age and sex.", icon: "\u{1FA96}", slug: "armybf" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All Calculators \u2014 FitnessCalculator", "description": "Browse all 10 free fitness calculators on FitnessCalculator. Calculate BMI, TDEE, BMR, body fat %, macros, ideal weight, and more. Science-backed formulas, 100% private." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-12"> <h1 class="mb-2 sm:mb-4 text-3xl sm:text-4xl font-bold text-black dark:text-white">All Fitness Calculators — Free & Science-Backed</h1> <p class="mb-8 sm:mb-12 text-base sm:text-lg text-black/60 dark:text-white/60">Use our collection of free fitness and health calculators to track BMI, calories, macros, body fat, and more. Every tool uses validated formulas and works on any device.</p> <div class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> ${calculators.map((calc) => renderTemplate`${renderComponent($$result2, "CalculatorCard", $$CalculatorCard, { ...calc })}`)} </div> </div> ` })}`;
}, "/Users/princegautam/fitness/src/pages/calculators.astro", void 0);

const $$file = "/Users/princegautam/fitness/src/pages/calculators.astro";
const $$url = "/calculators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculators,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
