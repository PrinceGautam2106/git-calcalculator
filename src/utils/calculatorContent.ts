export const contentData = {
  "bmi": {
    "whatIs": "Body Mass Index (BMI) is a number calculated from your height and weight. It is a widely used screening tool to identify whether a person is underweight, at a healthy weight, overweight, or obese. BMI does not directly measure body fat, but research shows it correlates with more direct measurements of body fat.",
    "howToUse": [
      "Select your preferred measurement system (Metric or Imperial).",
      "Enter your age, gender, height, and weight accurately.",
      "Click calculate to see your BMI score and health category."
    ],
    "howCalculate": "We use the standard WHO formula. For metric: weight (kg) \u00f7 height (m)\u00b2. For imperial: 703 \u00d7 weight (lb) \u00f7 height (in)\u00b2.",
    "faqs": [
      {
        "q": "Is BMI accurate for athletes?",
        "a": "No. BMI does not account for muscle mass. Athletes with high muscle mass may be classified as overweight or obese despite having low body fat."
      },
      {
        "q": "What is a healthy BMI?",
        "a": "A healthy BMI typically falls between 18.5 and 24.9 for most adults."
      },
      {
        "q": "Does age affect BMI?",
        "a": "The standard BMI categories apply to adults 20 and older. However, older adults may be healthier at a slightly higher BMI (25-27) to protect against osteoporosis and frailty."
      },
      {
        "q": "Can children use this BMI calculator?",
        "a": "No. Children and teens need a BMI percentile calculator that compares their score against others of the same age and gender."
      }
    ]
  },
  "bmr": {
    "whatIs": "Your Basal Metabolic Rate (BMR) is the number of calories your body burns while completely at rest \u2014 just to keep your heart beating, lungs breathing, and organs functioning. It is the minimum energy your body needs to survive.",
    "howToUse": [
      "Input your accurate height, weight, age, and gender.",
      "Choose metric or imperial units.",
      "Review your BMR result to understand your baseline calorie needs."
    ],
    "howCalculate": "We use the Mifflin-St Jeor equation, which is widely considered the most accurate formula. Men: (10 \u00d7 weight in kg) + (6.25 \u00d7 height in cm) \u2212 (5 \u00d7 age) + 5. Women: (10 \u00d7 weight in kg) + (6.25 \u00d7 height in cm) \u2212 (5 \u00d7 age) \u2212 161.",
    "faqs": [
      {
        "q": "Should I eat my BMR in calories?",
        "a": "No, your BMR is the bare minimum to stay alive in a coma. You should eat your TDEE for maintenance, or slightly below TDEE for weight loss."
      },
      {
        "q": "How can I increase my BMR?",
        "a": "Building muscle mass is the most effective way to increase your BMR, as muscle tissue burns more calories at rest than fat tissue."
      },
      {
        "q": "Does BMR decrease with age?",
        "a": "Yes, BMR typically decreases by 1-2% per decade after age 20, largely due to a natural loss of muscle mass."
      },
      {
        "q": "Is BMR the same as resting metabolic rate (RMR)?",
        "a": "They are very similar. BMR is measured under strict laboratory conditions, while RMR is measured under less strict conditions. For most people, the difference is negligible."
      }
    ]
  },
  "tdee": {
    "whatIs": "Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a full day, including exercise, daily movement, and basic body functions. It is the most important number for any calorie-based fitness goal.",
    "howToUse": [
      "Enter your physical metrics (age, gender, height, weight).",
      "Select your activity level honestly, factoring in both exercise and your daily job.",
      "Use the resulting TDEE to set your daily calorie targets."
    ],
    "howCalculate": "We first calculate your BMR using the Mifflin-St Jeor formula, then multiply it by an activity multiplier (ranging from 1.2 for sedentary to 1.9 for extremely active).",
    "faqs": [
      {
        "q": "Why is my TDEE important?",
        "a": "TDEE is the starting point for any diet. If you eat below your TDEE, you lose weight. If you eat above it, you gain weight."
      },
      {
        "q": "Should I re-calculate my TDEE?",
        "a": "Yes, recalculate your TDEE every time you lose or gain 5-10 pounds, as your calorie needs will change."
      },
      {
        "q": "Do I add exercise calories to my TDEE?",
        "a": "No. Your activity level multiplier already accounts for your exercise. Adding more calories would lead to double-counting."
      },
      {
        "q": "Is TDEE accurate for everyone?",
        "a": "It is a highly accurate estimate, but individual metabolisms vary. Use it as a starting point and adjust based on real-world results after 2 weeks."
      }
    ]
  },
  "bodyfat": {
    "whatIs": "Body fat percentage is the proportion of your total body weight that is fat mass, as opposed to lean mass (muscle, bone, organs, water). It is a more accurate measure of fitness than weight or BMI alone.",
    "howToUse": [
      "Use a flexible measuring tape to measure your waist, neck, and (for women) hips.",
      "Enter your height and gender.",
      "Ensure the tape is snug but not compressing the skin."
    ],
    "howCalculate": "We use the US Navy circumference method. For men: 86.010\u00d7log10(abdomen-neck) - 70.041\u00d7log10(height) + 36.76. For women: 163.205\u00d7log10(waist+hip-neck) - 97.684\u00d7log10(height) - 78.387.",
    "faqs": [
      {
        "q": "How accurate is the US Navy method?",
        "a": "It is generally accurate within 3-4% of DEXA scans for most people, making it an excellent and accessible tracking tool."
      },
      {
        "q": "What is an ideal body fat percentage?",
        "a": "For men, fitness range is 14-17% and acceptable is 18-24%. For women, fitness range is 21-24% and acceptable is 25-31%."
      },
      {
        "q": "Can I lose fat in specific areas?",
        "a": "No, spot reduction is a myth. You must lower your overall body fat percentage through a calorie deficit to lose fat in specific areas."
      },
      {
        "q": "How often should I measure my body fat?",
        "a": "Measuring once every 2-4 weeks is ideal. Daily measurements will fluctuate based on water retention and bloating."
      }
    ]
  },
  "idealweight": {
    "whatIs": "Ideal weight is an estimated healthy weight range for your height and frame. There is no single 'correct' ideal weight \u2014 different medical formulas give different results, which is why this calculator shows multiple ranges.",
    "howToUse": [
      "Select your gender and enter your exact height.",
      "Review the results across the 5 different formulas.",
      "Use the range as a generalized goal, rather than obsessing over a single exact number."
    ],
    "howCalculate": "We use 5 distinct clinical formulas: Devine (1974), Robinson (1983), Miller (1983), Hamwi (1964), and a back-calculation of the healthy BMI range (18.5-24.9).",
    "faqs": [
      {
        "q": "Why do the formulas give different numbers?",
        "a": "Each formula was developed by different medical researchers at different times using different population samples. Viewing them as a range is best."
      },
      {
        "q": "Do these formulas account for muscle mass?",
        "a": "No, they are based strictly on height and gender. If you are highly muscular, your healthy weight will be higher than these estimates."
      },
      {
        "q": "Which formula is the most accurate?",
        "a": "The Devine formula is the most widely used in medical settings for drug dosing, but the BMI range provides the broadest healthy target."
      },
      {
        "q": "Should I try to hit the exact ideal weight?",
        "a": "No. It is a guideline. Body composition (muscle vs fat) and how you feel are far more important than a specific number on the scale."
      }
    ]
  },
  "calories": {
    "whatIs": "Your daily calorie target is the specific number of calories you should eat each day to achieve your goal\u2014whether that is weight loss, maintenance, or muscle gain.",
    "howToUse": [
      "Input your physical stats and current activity level.",
      "Select your specific goal (e.g., moderate weight loss, maintenance, muscle gain).",
      "Follow the daily calorie recommendation consistently."
    ],
    "howCalculate": "We calculate your TDEE using the Mifflin-St Jeor equation. Then we apply a deficit (e.g., -500 calories for weight loss) or a surplus (e.g., +300 for muscle gain) based on your goal.",
    "faqs": [
      {
        "q": "Can I eat anything as long as it fits my calories?",
        "a": "For pure weight loss, yes (CICO - Calories In, Calories Out). However, for health, energy, and muscle retention, food quality and macros matter greatly."
      },
      {
        "q": "Should I eat back calories burned from exercise?",
        "a": "No, our calculator already factors your exercise routine into your activity multiplier. Eating back exercise calories often leads to weight plateaus."
      },
      {
        "q": "What happens if I eat too few calories?",
        "a": "Extreme calorie restriction can cause muscle loss, nutrient deficiencies, fatigue, and a temporary drop in your metabolic rate."
      },
      {
        "q": "How long will it take to see results?",
        "a": "A 500-calorie daily deficit typically results in 1 pound of fat loss per week. Consistency over 4-8 weeks is required to see noticeable visual changes."
      }
    ]
  },
  "macros": {
    "whatIs": "Macronutrients (macros) are the three categories of nutrients that provide calories: protein, carbohydrates, and fat. Tracking macros ensures your body gets the right nutrients for your specific goal, prioritizing muscle retention and energy.",
    "howToUse": [
      "Enter your stats, activity level, and fitness goal.",
      "Get your precise gram targets for protein, fat, and carbs.",
      "Use a food tracking app to hit those targets daily."
    ],
    "howCalculate": "We establish your calorie target first. Protein is set based on lean mass/goal (usually 0.8-1g per lb). Fats are set at 25-30% of total calories. Carbs fill the remaining calories.",
    "faqs": [
      {
        "q": "Do I have to hit my macros perfectly?",
        "a": "No. Aim to hit your protein target within 10 grams, and stay within your overall calorie limit. The exact ratio of carbs to fats is less critical for most people."
      },
      {
        "q": "Which macro is most important for weight loss?",
        "a": "Protein is the most important because it preserves muscle mass while in a calorie deficit and keeps you feeling full longer."
      },
      {
        "q": "Can I lose weight without tracking macros?",
        "a": "Yes, as long as you are in a calorie deficit. However, tracking macros ensures you lose fat rather than muscle."
      },
      {
        "q": "What are good sources of healthy fats?",
        "a": "Avocados, nuts, seeds, olive oil, and fatty fish like salmon are excellent sources of healthy dietary fats."
      }
    ]
  },
  "water": {
    "whatIs": "A daily water intake target ensures your body remains properly hydrated. Hydration impacts everything from cognitive function and energy levels to joint health and athletic performance.",
    "howToUse": [
      "Enter your current body weight.",
      "Enter your average daily minutes of moderate-to-intense exercise.",
      "View your personalized daily hydration target in liters or ounces."
    ],
    "howCalculate": "We use a baseline of 35ml of water per kg of body weight, plus an additional 500-1000ml for every hour of exercise to account for sweat loss.",
    "faqs": [
      {
        "q": "Does coffee or tea count toward my water intake?",
        "a": "Yes. While caffeine is a mild diuretic, the water in coffee and tea still contributes positively to your overall hydration."
      },
      {
        "q": "Can I drink too much water?",
        "a": "Yes, drinking extreme amounts of water in a short time can lead to hyponatremia (low blood sodium). Stick to your calculated daily target spread throughout the day."
      },
      {
        "q": "How do I know if I'm hydrated enough?",
        "a": "The simplest test is the color of your urine. It should be a pale, straw-like yellow. Dark yellow indicates dehydration."
      },
      {
        "q": "Do I need electrolytes with my water?",
        "a": "If you exercise intensely for more than an hour or sweat heavily in hot climates, adding electrolytes (sodium, potassium, magnesium) is beneficial."
      }
    ]
  },
  "heartrate": {
    "whatIs": "Your target heart rate is a specific beats-per-minute (BPM) range you should aim for during cardiovascular exercise to achieve specific results, like fat burning or aerobic endurance.",
    "howToUse": [
      "Enter your age and your resting heart rate (taken right after waking up).",
      "View your personalized heart rate zones.",
      "Use a fitness tracker or smartwatch to stay in your desired zone during workouts."
    ],
    "howCalculate": "We use the Karvonen method, which factors in your resting heart rate to find your Heart Rate Reserve (HRR), combined with the Tanaka formula (208 - 0.7 \u00d7 age) for Maximum Heart Rate.",
    "faqs": [
      {
        "q": "What is the best zone for fat burning?",
        "a": "Zone 2 (60-70% of maximum HR) burns the highest percentage of calories from fat, making it ideal for steady-state cardio."
      },
      {
        "q": "How do I measure my resting heart rate?",
        "a": "Measure your pulse for 60 seconds immediately after waking up naturally in the morning, while still lying in bed."
      },
      {
        "q": "Is the '220 minus age' formula accurate?",
        "a": "The older '220 minus age' formula is a rough estimate but is often inaccurate. We use the updated Tanaka formula which research shows is more precise."
      },
      {
        "q": "Why is my heart rate higher than normal during exercise?",
        "a": "Heat, humidity, dehydration, caffeine, and lack of sleep can all elevate your heart rate higher than normal for a given effort level."
      }
    ]
  },
  "leanmass": {
    "whatIs": "Lean Body Mass (LBM) is the weight of everything in your body except fat. This includes your muscles, bones, organs, water, and connective tissues. It represents the metabolically active tissue in your body.",
    "howToUse": [
      "Enter your gender, height, and current weight accurately.",
      "Review your lean mass estimation.",
      "Compare it over time to ensure you are retaining muscle during weight loss."
    ],
    "howCalculate": "We calculate LBM using the widely validated Boer formula and the James formula, which use height, weight, and gender correlations to estimate non-fat mass.",
    "faqs": [
      {
        "q": "Why is tracking lean mass important?",
        "a": "When you lose weight, you want to lose fat, not muscle. Tracking LBM helps ensure your diet and exercise program is preserving your muscle tissue."
      },
      {
        "q": "Can lean mass increase?",
        "a": "Yes, through resistance training (weightlifting) and adequate protein intake, you can increase your lean mass by building muscle."
      },
      {
        "q": "Is lean mass the same as muscle mass?",
        "a": "No. Skeletal muscle is just one component of lean mass. Lean mass also includes bones, water, and organs."
      },
      {
        "q": "How accurate are these formulas?",
        "a": "They provide a good estimate for the general population. However, athletes or those with very low/high body fat may need a DEXA scan for absolute accuracy."
      }
    ]
  }
};
