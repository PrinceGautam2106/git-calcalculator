import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CCNkBnzp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_4eSzUG1x.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    { q: "How many calories do I need?", a: "Daily calorie needs depend on age, gender, weight, height, and activity level. Most adults require 1,600\u20133,000 calories. Use our calorie calculator to find your personalized daily intake based on your Basal Metabolic Rate (BMR) and activity multiplier for accurate results." },
    { q: "What is BMI?", a: "BMI (Body Mass Index) is a screening measure of body fat based on height and weight. It's calculated by dividing weight in kilograms by height in meters squared. A BMI of 18.5\u201324.9 is considered normal. Use our BMI calculator to check yours instantly." },
    { q: "What is a healthy BMI?", a: "A healthy BMI falls between 18.5 and 24.9 for most adults. Below 18.5 is underweight, 25\u201329.9 is overweight, and 30 or above is obese. These ranges apply to both men and women. Use our BMI calculator alongside body fat measurements for a fuller picture." },
    { q: "What is TDEE and how is it calculated?", a: "TDEE (Total Daily Energy Expenditure) is the total calories your body burns daily. It's calculated by multiplying your BMR by an activity factor (sedentary 1.2 to very active 1.9). Our TDEE calculator automates this to help plan weight loss or muscle gain." },
    { q: "What is BMR?", a: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing and circulation. It's calculated using formulas like Mifflin-St Jeor based on age, weight, height, and gender. Our BMR calculator provides your exact number." },
    { q: "How do I calculate my macros?", a: "Macros (protein, carbs, fats) are calculated based on your total calorie goal and fitness objective. A common split is 40% carbs, 30% protein, 30% fat. Use our macro calculator to get precise gram breakdowns tailored for weight loss, maintenance, or muscle gain." },
    { q: "What is a calorie deficit?", a: "A calorie deficit means consuming fewer calories than your body burns daily. For example, eating 2,000 calories when your TDEE is 2,500 creates a 500-calorie deficit. This forces your body to use stored fat for energy, resulting in weight loss over time." },
    { q: "How much protein should I eat per day?", a: "The recommended protein intake is 0.7\u20131 gram per pound of body weight for active individuals. Sedentary adults need at least 0.36 grams per pound. A 150-pound active person should aim for 105\u2013150 grams daily. Use our protein calculator for a personalized recommendation." },
    { q: "What is an ideal weight for my height?", a: `Ideal weight varies by height, gender, age, and frame size. Medical formulas like Devine and Robinson provide estimates\u2014for example, a 5'8" male is roughly 154\u2013160 lbs. Our ideal weight calculator shows multiple formulas so you can compare and set realistic goals.` },
    { q: "What should my body fat be?", a: "Healthy body fat ranges vary by age and gender. Generally, women should aim for 18\u201328% and men 10\u201320%. Essential fat is 10\u201313% for women and 2\u20135% for men. Use our body fat percentage calculator to estimate your current level accurately." },
    { q: "How much water should I drink per day?", a: "A general guideline is half your body weight in ounces daily\u2014a 160-pound person needs about 80 ounces. Activity level, climate, and diet affect needs. Our water intake calculator provides personalized recommendations factoring in your weight, exercise habits, and environment." },
    { q: "How many calories to build muscle?", a: "To build muscle, eat in a caloric surplus of 300\u2013500 calories above your maintenance TDEE with adequate protein (0.8\u20131g per pound of body weight). This supports muscle protein synthesis while limiting fat gain. Use our calorie and protein calculators together for precision." },
    { q: "Is my weight healthy?", a: "Healthy weight depends on multiple factors: BMI, body fat percentage, muscle mass, waist circumference, and overall fitness level. Use our BMI calculator and body fat calculator to assess your metrics. Consult a healthcare provider for personalized advice beyond numbers alone." },
    { q: "How do I know my ideal weight?", a: "Ideal weight depends on height, age, gender, and body composition. Our ideal weight calculator uses multiple medical formulas including Devine, Robinson, Miller, and Hamwi to provide a healthy range. Remember, body composition matters more than scale weight alone." },
    { q: "What heart rate zone burns fat?", a: "Zone 2 (60\u201370% of max heart rate) is the most efficient zone for fat burning during exercise. For a 30-year-old, this means 114\u2013133 bpm. Higher zones burn more total calories but a lower fat percentage. Use our heart rate calculator for your personal zones." },
    { q: "Does muscle weigh more than fat?", a: "Muscle is about 18% denser than fat, so one pound of muscle takes up significantly less space than one pound of fat. This explains why you can look leaner at the same weight. Track body composition with our body fat calculator rather than relying on scale weight alone." },
    { q: "What is lean body mass?", a: "Lean body mass (LBM) is your total body weight minus all body fat. It includes muscle, bone, water, organs, and connective tissue. Knowing your LBM helps set accurate protein targets and calorie goals. Our lean body mass calculator estimates this using validated formulas." },
    { q: "How accurate is BMI?", a: "BMI is a useful population-level screening tool but has limitations for individuals. It doesn't distinguish between muscle and fat\u2014athletes may show high BMI despite low body fat. Use BMI alongside body fat percentage and waist circumference for a more complete health assessment." },
    { q: "What is a weight loss calculator?", a: "A weight loss calculator estimates how long it will take to reach your goal weight based on your daily calorie deficit. It factors in your current weight, target weight, and deficit size. Our tool helps plan realistic timelines for safe, sustainable weight loss." },
    { q: "How to lose weight fast?", a: "Safe weight loss is 1\u20132 pounds per week through a moderate calorie deficit of 500\u20131,000 calories daily. Combine dietary changes with regular exercise for best results. Crash diets cause muscle loss and rebound. Use our calorie deficit and weight loss calculators for personalized plans." },
    { q: "How many calories to lose 1kg per week?", a: "To lose 1kg (2.2 lbs) per week, you need a total weekly calorie deficit of about 7,700 calories, or roughly 1,100 per day. This is aggressive for most people\u2014a 500\u2013750 daily deficit producing 0.5\u20130.75kg weekly loss is safer and more sustainable." },
    { q: "Calorie deficit to lose weight", a: "A calorie deficit of 300\u2013750 calories daily (roughly 20\u201330% below your maintenance TDEE) promotes sustainable weight loss of 0.5\u20131.5 lbs per week. Larger deficits risk muscle loss and metabolic slowdown. Our calorie deficit calculator helps determine the right amount for your body." },
    { q: "Weight loss tips", a: "Track calories accurately using a food scale, eat adequate protein (0.7\u20131g per pound), stay hydrated, exercise with both cardio and strength training, prioritize 7\u20139 hours of sleep, manage stress levels, and stay consistent over weeks. Use our calculators to set precise targets." },
    { q: "Lose weight without exercise", a: "Weight loss is primarily driven by calorie deficit, which can be achieved through diet alone. Our calorie calculator shows how many calories to consume for your goal. However, exercise preserves muscle mass, boosts metabolism, and improves overall health during weight loss." },
    { q: "How to lose belly fat", a: "Belly fat loss requires overall body fat reduction through a sustained calorie deficit\u2014spot reduction is not possible. Combine a moderate calorie deficit with regular cardio, strength training, and stress management. Use our TDEE and calorie calculators to build an effective plan." },
    { q: "Safe weight loss per week", a: "Safe weight loss is 1\u20132 pounds (0.5\u20131kg) per week, achieved through a 500\u20131,000 calorie daily deficit. Faster loss increases risk of muscle loss, gallstones, and nutritional deficiencies. Use our weight loss calculator to set realistic timelines for your goal weight." },
    { q: "Weight loss diet plan", a: "Effective diet plans combine a moderate calorie deficit with adequate protein (at least 0.7g per pound), plenty of vegetables, whole grains, and healthy fats. Sustainability is key\u2014avoid extreme restrictions. Calculate your specific needs with our calorie and macro calculators for a personalized plan." },
    { q: "How long to lose 10kg?", a: "At a safe rate of 0.5\u20131kg per week, losing 10kg takes 10\u201320 weeks. A 500-calorie daily deficit typically produces 0.5kg weekly loss, while 1,000 calories produces 1kg. Use our weight loss calculator to estimate your personal timeline based on your calorie deficit." },
    { q: "How to boost metabolism", a: "Build lean muscle through strength training (muscle burns more calories at rest), eat sufficient protein, exercise regularly, stay well-hydrated, get 7\u20139 hours of sleep, and manage stress. Our BMR calculator shows how increased muscle mass raises your daily calorie burn over time." },
    { q: "Best calorie deficit for weight loss", a: "A 20\u201330% calorie deficit below your TDEE (typically 300\u2013750 calories daily) is ideal for sustainable weight loss while preserving muscle mass. Deficits above 1,000 calories risk metabolic adaptation and muscle loss. Our calorie deficit calculator helps find your optimal personal deficit." },
    { q: "How to calculate weight loss percentage", a: "Use this formula: (Starting weight \u2212 Current weight) \xF7 Starting weight \xD7 100. For example, going from 200 to 180 pounds equals 10% loss. Tracking percentage is more meaningful than absolute pounds lost, especially when comparing progress across different body sizes over time." }
  ];
  return renderTemplate(_a || (_a = __template(["", `  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many calories do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daily calorie needs depend on age, gender, weight, height, and activity level. Most adults require 1,600\u20133,000 calories. Use our calorie calculator to find your personalized daily intake based on your Basal Metabolic Rate (BMR) and activity multiplier for accurate results."
      }
    },
    {
      "@type": "Question",
      "name": "What is BMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMI (Body Mass Index) is a screening measure of body fat based on height and weight. It's calculated by dividing weight in kilograms by height in meters squared. A BMI of 18.5\u201324.9 is considered normal. Use our BMI calculator to check yours instantly."
      }
    },
    {
      "@type": "Question",
      "name": "What is a healthy BMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A healthy BMI falls between 18.5 and 24.9 for most adults. Below 18.5 is underweight, 25\u201329.9 is overweight, and 30 or above is obese. These ranges apply to both men and women. Use our BMI calculator alongside body fat measurements for a fuller picture."
      }
    },
    {
      "@type": "Question",
      "name": "What is TDEE and how is it calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TDEE (Total Daily Energy Expenditure) is the total calories your body burns daily. It's calculated by multiplying your BMR by an activity factor (sedentary 1.2 to very active 1.9). Our TDEE calculator automates this to help plan weight loss or muscle gain."
      }
    },
    {
      "@type": "Question",
      "name": "What is BMR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing and circulation. It's calculated using formulas like Mifflin-St Jeor based on age, weight, height, and gender. Our BMR calculator provides your exact number."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate my macros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Macros (protein, carbs, fats) are calculated based on your total calorie goal and fitness objective. A common split is 40% carbs, 30% protein, 30% fat. Use our macro calculator to get precise gram breakdowns tailored for weight loss, maintenance, or muscle gain."
      }
    },
    {
      "@type": "Question",
      "name": "What is a calorie deficit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A calorie deficit means consuming fewer calories than your body burns daily. For example, eating 2,000 calories when your TDEE is 2,500 creates a 500-calorie deficit. This forces your body to use stored fat for energy, resulting in weight loss over time."
      }
    },
    {
      "@type": "Question",
      "name": "How much protein should I eat per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The recommended protein intake is 0.7\u20131 gram per pound of body weight for active individuals. Sedentary adults need at least 0.36 grams per pound. A 150-pound active person should aim for 105\u2013150 grams daily. Use our protein calculator for a personalized recommendation."
      }
    },
    {
      "@type": "Question",
      "name": "What is an ideal weight for my height?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideal weight varies by height, gender, age, and frame size. Medical formulas like Devine and Robinson provide estimates\u2014for example, a 5'8\\" male is roughly 154\u2013160 lbs. Our ideal weight calculator shows multiple formulas so you can compare and set realistic goals."
      }
    },
    {
      "@type": "Question",
      "name": "What should my body fat be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Healthy body fat ranges vary by age and gender. Generally, women should aim for 18\u201328% and men 10\u201320%. Essential fat is 10\u201313% for women and 2\u20135% for men. Use our body fat percentage calculator to estimate your current level accurately."
      }
    },
    {
      "@type": "Question",
      "name": "How much water should I drink per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A general guideline is half your body weight in ounces daily\u2014a 160-pound person needs about 80 ounces. Activity level, climate, and diet affect needs. Our water intake calculator provides personalized recommendations factoring in your weight, exercise habits, and environment."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories to build muscle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To build muscle, eat in a caloric surplus of 300\u2013500 calories above your maintenance TDEE with adequate protein (0.8\u20131g per pound of body weight). This supports muscle protein synthesis while limiting fat gain. Use our calorie and protein calculators together for precision."
      }
    },
    {
      "@type": "Question",
      "name": "Is my weight healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Healthy weight depends on multiple factors: BMI, body fat percentage, muscle mass, waist circumference, and overall fitness level. Use our BMI calculator and body fat calculator to assess your metrics. Consult a healthcare provider for personalized advice beyond numbers alone."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know my ideal weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideal weight depends on height, age, gender, and body composition. Our ideal weight calculator uses multiple medical formulas including Devine, Robinson, Miller, and Hamwi to provide a healthy range. Remember, body composition matters more than scale weight alone."
      }
    },
    {
      "@type": "Question",
      "name": "What heart rate zone burns fat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zone 2 (60\u201370% of max heart rate) is the most efficient zone for fat burning during exercise. For a 30-year-old, this means 114\u2013133 bpm. Higher zones burn more total calories but a lower fat percentage. Use our heart rate calculator for your personal zones."
      }
    },
    {
      "@type": "Question",
      "name": "Does muscle weigh more than fat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muscle is about 18% denser than fat, so one pound of muscle takes up significantly less space than one pound of fat. This explains why you can look leaner at the same weight. Track body composition with our body fat calculator rather than relying on scale weight alone."
      }
    },
    {
      "@type": "Question",
      "name": "What is lean body mass?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lean body mass (LBM) is your total body weight minus all body fat. It includes muscle, bone, water, organs, and connective tissue. Knowing your LBM helps set accurate protein targets and calorie goals. Our lean body mass calculator estimates this using validated formulas."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is BMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMI is a useful population-level screening tool but has limitations for individuals. It doesn't distinguish between muscle and fat\u2014athletes may show high BMI despite low body fat. Use BMI alongside body fat percentage and waist circumference for a more complete health assessment."
      }
    },
    {
      "@type": "Question",
      "name": "What is a weight loss calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A weight loss calculator estimates how long it will take to reach your goal weight based on your daily calorie deficit. It factors in your current weight, target weight, and deficit size. Our tool helps plan realistic timelines for safe, sustainable weight loss."
      }
    },
    {
      "@type": "Question",
      "name": "How to lose weight fast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safe weight loss is 1\u20132 pounds per week through a moderate calorie deficit of 500\u20131,000 calories daily. Combine dietary changes with regular exercise for best results. Crash diets cause muscle loss and rebound. Use our calorie deficit and weight loss calculators for personalized plans."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories to lose 1kg per week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To lose 1kg (2.2 lbs) per week, you need a total weekly calorie deficit of about 7,700 calories, or roughly 1,100 per day. This is aggressive for most people\u2014a 500\u2013750 daily deficit producing 0.5\u20130.75kg weekly loss is safer and more sustainable."
      }
    },
    {
      "@type": "Question",
      "name": "Calorie deficit to lose weight",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A calorie deficit of 300\u2013750 calories daily (roughly 20\u201330% below your maintenance TDEE) promotes sustainable weight loss of 0.5\u20131.5 lbs per week. Larger deficits risk muscle loss and metabolic slowdown. Our calorie deficit calculator helps determine the right amount for your body."
      }
    },
    {
      "@type": "Question",
      "name": "Weight loss tips",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Track calories accurately using a food scale, eat adequate protein (0.7\u20131g per pound), stay hydrated, exercise with both cardio and strength training, prioritize 7\u20139 hours of sleep, manage stress levels, and stay consistent over weeks. Use our calculators to set precise targets."
      }
    },
    {
      "@type": "Question",
      "name": "Lose weight without exercise",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weight loss is primarily driven by calorie deficit, which can be achieved through diet alone. Our calorie calculator shows how many calories to consume for your goal. However, exercise preserves muscle mass, boosts metabolism, and improves overall health during weight loss."
      }
    },
    {
      "@type": "Question",
      "name": "How to lose belly fat",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Belly fat loss requires overall body fat reduction through a sustained calorie deficit\u2014spot reduction is not possible. Combine a moderate calorie deficit with regular cardio, strength training, and stress management. Use our TDEE and calorie calculators to build an effective plan."
      }
    },
    {
      "@type": "Question",
      "name": "Safe weight loss per week",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safe weight loss is 1\u20132 pounds (0.5\u20131kg) per week, achieved through a 500\u20131,000 calorie daily deficit. Faster loss increases risk of muscle loss, gallstones, and nutritional deficiencies. Use our weight loss calculator to set realistic timelines for your goal weight."
      }
    },
    {
      "@type": "Question",
      "name": "Weight loss diet plan",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Effective diet plans combine a moderate calorie deficit with adequate protein (at least 0.7g per pound), plenty of vegetables, whole grains, and healthy fats. Sustainability is key\u2014avoid extreme restrictions. Calculate your specific needs with our calorie and macro calculators for a personalized plan."
      }
    },
    {
      "@type": "Question",
      "name": "How long to lose 10kg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At a safe rate of 0.5\u20131kg per week, losing 10kg takes 10\u201320 weeks. A 500-calorie daily deficit typically produces 0.5kg weekly loss, while 1,000 calories produces 1kg. Use our weight loss calculator to estimate your personal timeline based on your calorie deficit."
      }
    },
    {
      "@type": "Question",
      "name": "How to boost metabolism",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Build lean muscle through strength training (muscle burns more calories at rest), eat sufficient protein, exercise regularly, stay well-hydrated, get 7\u20139 hours of sleep, and manage stress. Our BMR calculator shows how increased muscle mass raises your daily calorie burn over time."
      }
    },
    {
      "@type": "Question",
      "name": "Best calorie deficit for weight loss",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 20\u201330% calorie deficit below your TDEE (typically 300\u2013750 calories daily) is ideal for sustainable weight loss while preserving muscle mass. Deficits above 1,000 calories risk metabolic adaptation and muscle loss. Our calorie deficit calculator helps find your optimal personal deficit."
      }
    },
    {
      "@type": "Question",
      "name": "How to calculate weight loss percentage",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use this formula: (Starting weight \u2212 Current weight) \xF7 Starting weight \xD7 100. For example, going from 200 to 180 pounds equals 10% loss. Tracking percentage is more meaningful than absolute pounds lost, especially when comparing progress across different body sizes over time."
      }
    }
  ]
}
<\/script>`], ["", `  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many calories do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daily calorie needs depend on age, gender, weight, height, and activity level. Most adults require 1,600\u20133,000 calories. Use our calorie calculator to find your personalized daily intake based on your Basal Metabolic Rate (BMR) and activity multiplier for accurate results."
      }
    },
    {
      "@type": "Question",
      "name": "What is BMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMI (Body Mass Index) is a screening measure of body fat based on height and weight. It's calculated by dividing weight in kilograms by height in meters squared. A BMI of 18.5\u201324.9 is considered normal. Use our BMI calculator to check yours instantly."
      }
    },
    {
      "@type": "Question",
      "name": "What is a healthy BMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A healthy BMI falls between 18.5 and 24.9 for most adults. Below 18.5 is underweight, 25\u201329.9 is overweight, and 30 or above is obese. These ranges apply to both men and women. Use our BMI calculator alongside body fat measurements for a fuller picture."
      }
    },
    {
      "@type": "Question",
      "name": "What is TDEE and how is it calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TDEE (Total Daily Energy Expenditure) is the total calories your body burns daily. It's calculated by multiplying your BMR by an activity factor (sedentary 1.2 to very active 1.9). Our TDEE calculator automates this to help plan weight loss or muscle gain."
      }
    },
    {
      "@type": "Question",
      "name": "What is BMR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing and circulation. It's calculated using formulas like Mifflin-St Jeor based on age, weight, height, and gender. Our BMR calculator provides your exact number."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate my macros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Macros (protein, carbs, fats) are calculated based on your total calorie goal and fitness objective. A common split is 40% carbs, 30% protein, 30% fat. Use our macro calculator to get precise gram breakdowns tailored for weight loss, maintenance, or muscle gain."
      }
    },
    {
      "@type": "Question",
      "name": "What is a calorie deficit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A calorie deficit means consuming fewer calories than your body burns daily. For example, eating 2,000 calories when your TDEE is 2,500 creates a 500-calorie deficit. This forces your body to use stored fat for energy, resulting in weight loss over time."
      }
    },
    {
      "@type": "Question",
      "name": "How much protein should I eat per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The recommended protein intake is 0.7\u20131 gram per pound of body weight for active individuals. Sedentary adults need at least 0.36 grams per pound. A 150-pound active person should aim for 105\u2013150 grams daily. Use our protein calculator for a personalized recommendation."
      }
    },
    {
      "@type": "Question",
      "name": "What is an ideal weight for my height?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideal weight varies by height, gender, age, and frame size. Medical formulas like Devine and Robinson provide estimates\u2014for example, a 5'8\\\\" male is roughly 154\u2013160 lbs. Our ideal weight calculator shows multiple formulas so you can compare and set realistic goals."
      }
    },
    {
      "@type": "Question",
      "name": "What should my body fat be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Healthy body fat ranges vary by age and gender. Generally, women should aim for 18\u201328% and men 10\u201320%. Essential fat is 10\u201313% for women and 2\u20135% for men. Use our body fat percentage calculator to estimate your current level accurately."
      }
    },
    {
      "@type": "Question",
      "name": "How much water should I drink per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A general guideline is half your body weight in ounces daily\u2014a 160-pound person needs about 80 ounces. Activity level, climate, and diet affect needs. Our water intake calculator provides personalized recommendations factoring in your weight, exercise habits, and environment."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories to build muscle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To build muscle, eat in a caloric surplus of 300\u2013500 calories above your maintenance TDEE with adequate protein (0.8\u20131g per pound of body weight). This supports muscle protein synthesis while limiting fat gain. Use our calorie and protein calculators together for precision."
      }
    },
    {
      "@type": "Question",
      "name": "Is my weight healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Healthy weight depends on multiple factors: BMI, body fat percentage, muscle mass, waist circumference, and overall fitness level. Use our BMI calculator and body fat calculator to assess your metrics. Consult a healthcare provider for personalized advice beyond numbers alone."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know my ideal weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideal weight depends on height, age, gender, and body composition. Our ideal weight calculator uses multiple medical formulas including Devine, Robinson, Miller, and Hamwi to provide a healthy range. Remember, body composition matters more than scale weight alone."
      }
    },
    {
      "@type": "Question",
      "name": "What heart rate zone burns fat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zone 2 (60\u201370% of max heart rate) is the most efficient zone for fat burning during exercise. For a 30-year-old, this means 114\u2013133 bpm. Higher zones burn more total calories but a lower fat percentage. Use our heart rate calculator for your personal zones."
      }
    },
    {
      "@type": "Question",
      "name": "Does muscle weigh more than fat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muscle is about 18% denser than fat, so one pound of muscle takes up significantly less space than one pound of fat. This explains why you can look leaner at the same weight. Track body composition with our body fat calculator rather than relying on scale weight alone."
      }
    },
    {
      "@type": "Question",
      "name": "What is lean body mass?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lean body mass (LBM) is your total body weight minus all body fat. It includes muscle, bone, water, organs, and connective tissue. Knowing your LBM helps set accurate protein targets and calorie goals. Our lean body mass calculator estimates this using validated formulas."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is BMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMI is a useful population-level screening tool but has limitations for individuals. It doesn't distinguish between muscle and fat\u2014athletes may show high BMI despite low body fat. Use BMI alongside body fat percentage and waist circumference for a more complete health assessment."
      }
    },
    {
      "@type": "Question",
      "name": "What is a weight loss calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A weight loss calculator estimates how long it will take to reach your goal weight based on your daily calorie deficit. It factors in your current weight, target weight, and deficit size. Our tool helps plan realistic timelines for safe, sustainable weight loss."
      }
    },
    {
      "@type": "Question",
      "name": "How to lose weight fast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safe weight loss is 1\u20132 pounds per week through a moderate calorie deficit of 500\u20131,000 calories daily. Combine dietary changes with regular exercise for best results. Crash diets cause muscle loss and rebound. Use our calorie deficit and weight loss calculators for personalized plans."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories to lose 1kg per week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To lose 1kg (2.2 lbs) per week, you need a total weekly calorie deficit of about 7,700 calories, or roughly 1,100 per day. This is aggressive for most people\u2014a 500\u2013750 daily deficit producing 0.5\u20130.75kg weekly loss is safer and more sustainable."
      }
    },
    {
      "@type": "Question",
      "name": "Calorie deficit to lose weight",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A calorie deficit of 300\u2013750 calories daily (roughly 20\u201330% below your maintenance TDEE) promotes sustainable weight loss of 0.5\u20131.5 lbs per week. Larger deficits risk muscle loss and metabolic slowdown. Our calorie deficit calculator helps determine the right amount for your body."
      }
    },
    {
      "@type": "Question",
      "name": "Weight loss tips",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Track calories accurately using a food scale, eat adequate protein (0.7\u20131g per pound), stay hydrated, exercise with both cardio and strength training, prioritize 7\u20139 hours of sleep, manage stress levels, and stay consistent over weeks. Use our calculators to set precise targets."
      }
    },
    {
      "@type": "Question",
      "name": "Lose weight without exercise",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weight loss is primarily driven by calorie deficit, which can be achieved through diet alone. Our calorie calculator shows how many calories to consume for your goal. However, exercise preserves muscle mass, boosts metabolism, and improves overall health during weight loss."
      }
    },
    {
      "@type": "Question",
      "name": "How to lose belly fat",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Belly fat loss requires overall body fat reduction through a sustained calorie deficit\u2014spot reduction is not possible. Combine a moderate calorie deficit with regular cardio, strength training, and stress management. Use our TDEE and calorie calculators to build an effective plan."
      }
    },
    {
      "@type": "Question",
      "name": "Safe weight loss per week",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safe weight loss is 1\u20132 pounds (0.5\u20131kg) per week, achieved through a 500\u20131,000 calorie daily deficit. Faster loss increases risk of muscle loss, gallstones, and nutritional deficiencies. Use our weight loss calculator to set realistic timelines for your goal weight."
      }
    },
    {
      "@type": "Question",
      "name": "Weight loss diet plan",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Effective diet plans combine a moderate calorie deficit with adequate protein (at least 0.7g per pound), plenty of vegetables, whole grains, and healthy fats. Sustainability is key\u2014avoid extreme restrictions. Calculate your specific needs with our calorie and macro calculators for a personalized plan."
      }
    },
    {
      "@type": "Question",
      "name": "How long to lose 10kg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At a safe rate of 0.5\u20131kg per week, losing 10kg takes 10\u201320 weeks. A 500-calorie daily deficit typically produces 0.5kg weekly loss, while 1,000 calories produces 1kg. Use our weight loss calculator to estimate your personal timeline based on your calorie deficit."
      }
    },
    {
      "@type": "Question",
      "name": "How to boost metabolism",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Build lean muscle through strength training (muscle burns more calories at rest), eat sufficient protein, exercise regularly, stay well-hydrated, get 7\u20139 hours of sleep, and manage stress. Our BMR calculator shows how increased muscle mass raises your daily calorie burn over time."
      }
    },
    {
      "@type": "Question",
      "name": "Best calorie deficit for weight loss",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 20\u201330% calorie deficit below your TDEE (typically 300\u2013750 calories daily) is ideal for sustainable weight loss while preserving muscle mass. Deficits above 1,000 calories risk metabolic adaptation and muscle loss. Our calorie deficit calculator helps find your optimal personal deficit."
      }
    },
    {
      "@type": "Question",
      "name": "How to calculate weight loss percentage",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use this formula: (Starting weight \u2212 Current weight) \xF7 Starting weight \xD7 100. For example, going from 200 to 180 pounds equals 10% loss. Tracking percentage is more meaningful than absolute pounds lost, especially when comparing progress across different body sizes over time."
      }
    }
  ]
}
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Fitness & Health FAQ \u2014 FitnessCalculator", "description": "Find answers to common fitness and health questions about BMI, calories, TDEE, macros, protein intake, weight loss, and body composition calculators." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-24"> <div class="mb-12"> <h1 class="text-3xl sm:text-5xl font-bold mb-4 text-black dark:text-white">Fitness Calculator FAQ</h1> <p class="text-lg text-black/60 dark:text-white/60">Find answers to common questions about fitness calculators, weight loss, BMI, calories, nutrition, and health metrics.</p> </div> <div class="space-y-6"> ${faqs.map((faq, idx) => renderTemplate`<div class="rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-6 overflow-hidden group cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition"${addAttribute(idx, "data-faq")}> <div class="flex items-start justify-between gap-4"> <h3 class="text-lg font-semibold text-black dark:text-white pr-4 flex-1">${faq.q}</h3> <span class="text-2xl text-black/40 dark:text-white/40 flex-shrink-0 group-hover:text-black dark:group-hover:text-white transition faq-toggle">+</span> </div> <p class="faq-answer hidden mt-4 text-black/60 dark:text-white/60 leading-relaxed">${faq.a}</p> </div>`)} </div> <div class="mt-16 rounded-xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-8"> <h2 class="text-2xl font-bold text-black dark:text-white mb-4">Still have questions?</h2> <p class="text-black/60 dark:text-white/60 mb-6">Try our fitness calculators to get personalized answers based on your body metrics and goals.</p> <a href="/calculators" class="inline-block px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition">
Explore All Calculators →
</a> </div> </section> ` }));
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
