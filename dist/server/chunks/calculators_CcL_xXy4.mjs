function calculateBMI(input) {
  const bmi = input.weight / Math.pow(input.height / 100, 2);
  const rounded = Math.round(bmi * 10) / 10;
  let category = "", color = "", advice = "";
  if (bmi < 18.5) {
    category = "Underweight";
    color = "#0070f3";
    advice = "Consider consulting a nutritionist to reach a healthy weight";
  } else if (bmi < 25) {
    category = "Normal";
    color = "#50e3c2";
    advice = "Great! Maintain your current lifestyle";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "#f5a623";
    advice = "Consider a balanced diet and regular exercise";
  } else {
    category = "Obese";
    color = "#ff6b6b";
    advice = "Consult a healthcare professional for a personalized plan";
  }
  return { value: rounded.toString(), unit: "BMI", category, color, advice };
}
function calculateBMR(input) {
  const { weight, height, age, gender } = input;
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr += gender === "male" ? 5 : -161;
  return {
    value: Math.round(bmr).toString(),
    unit: "kcal/day",
    advice: "This is your baseline calorie burn at complete rest"
  };
}
function calculateTDEE(input) {
  const bmrResult = calculateBMR(input);
  const bmr = parseInt(bmrResult.value);
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    athlete: 1.9
  };
  const tdee = Math.round(bmr * multipliers[input.activity]);
  return {
    value: tdee.toString(),
    unit: "kcal/day",
    advice: "Your total daily calorie burn including activity",
    breakdown: { bmr: bmrResult.value, multiplier: multipliers[input.activity] }
  };
}
function calculateBodyFat(input) {
  const { gender, height, waist, neck, hip } = input;
  let bf;
  if (gender === "male") {
    const logDiff = Math.log10(waist - neck);
    const logHeight = Math.log10(height);
    bf = 495 / (1.0324 - 0.19077 * logDiff + 0.15456 * logHeight) - 450;
  } else {
    const logDiff = Math.log10(waist + hip - neck);
    const logHeight = Math.log10(height);
    bf = 495 / (1.29579 - 0.35004 * logDiff + 0.221 * logHeight) - 450;
  }
  const rounded = Math.round(bf * 10) / 10;
  let category = "", color = "";
  if (gender === "male") {
    if (bf < 6) {
      category = "Essential";
      color = "#0070f3";
    } else if (bf < 14) {
      category = "Athletes";
      color = "#50e3c2";
    } else if (bf < 18) {
      category = "Fitness";
      color = "#50e3c2";
    } else if (bf < 25) {
      category = "Average";
      color = "#f5a623";
    } else {
      category = "Obese";
      color = "#ff6b6b";
    }
  } else {
    if (bf < 14) {
      category = "Essential";
      color = "#0070f3";
    } else if (bf < 21) {
      category = "Athletes";
      color = "#50e3c2";
    } else if (bf < 25) {
      category = "Fitness";
      color = "#50e3c2";
    } else if (bf < 32) {
      category = "Average";
      color = "#f5a623";
    } else {
      category = "Obese";
      color = "#ff6b6b";
    }
  }
  return { value: rounded.toString(), unit: "%", category, color };
}
function calculateIdealWeight(input) {
  const { gender, height } = input;
  const heightInch = height / 2.54;
  const base = heightInch - 60;
  const robinson = gender === "male" ? 52 + 1.9 * base : 49 + 1.7 * base;
  const miller = gender === "male" ? 56.2 + 1.41 * base : 53.1 + 1.36 * base;
  const hamwi = gender === "male" ? 48 + 2.7 * base : 45.5 + 2.2 * base;
  const devine = gender === "male" ? 50 + 2.3 * base : 45.5 + 2.3 * base;
  const bmiIdeal = 22 * Math.pow(height / 100, 2);
  const weights = [robinson, miller, hamwi, devine, bmiIdeal];
  const min = Math.round(Math.min(...weights));
  const max = Math.round(Math.max(...weights));
  return {
    value: `${min}–${max}`,
    unit: "kg",
    advice: "Range based on 5 medical formulas"
  };
}
function calculateCalorieTarget(input) {
  const tdeeResult = calculateTDEE(input);
  const tdee = parseInt(tdeeResult.value);
  const adjustments = {
    lose: -500,
    maintain: 0,
    build: 300
  };
  const target = tdee + adjustments[input.goal];
  const weeklyChange = {
    lose: "0.5kg loss/week",
    maintain: "maintain weight",
    build: "0.25kg gain/week"
  };
  return {
    value: target.toString(),
    unit: "kcal/day",
    advice: weeklyChange[input.goal],
    breakdown: { tdee: tdee.toString(), adjustment: adjustments[input.goal] }
  };
}
function calculateMacros(input) {
  const calorieResult = calculateCalorieTarget(input);
  const calories = parseInt(calorieResult.value);
  const protein = Math.round(input.weight * 2);
  const proteinCal = protein * 4;
  const fatCal = Math.round(calories * 0.25);
  const fat = Math.round(fatCal / 9);
  const carbsCal = calories - proteinCal - fatCal;
  const carbs = Math.round(carbsCal / 4);
  return {
    value: `${protein}g / ${fat}g / ${carbs}g`,
    unit: "P / F / C",
    breakdown: { protein, fat, carbs, calories }
  };
}
function calculateWater(input) {
  const base = input.weight * 35;
  const exercise = (input.exerciseMin || 0) / 30 * 350;
  const total = Math.round((base + exercise) / 1e3 * 10) / 10;
  return {
    value: total.toString(),
    unit: "L/day",
    advice: `${Math.round(total * 4)} cups per day`,
    breakdown: { base: Math.round(base), exercise: Math.round(exercise) }
  };
}
function calculateHeartRate(input) {
  const maxHR = 220 - input.age;
  const restHR = input.restHR || 70;
  const hrr = maxHR - restHR;
  const warmup = `${Math.round(restHR + hrr * 0.5)}–${Math.round(restHR + hrr * 0.6)}`;
  const fatburn = `${Math.round(restHR + hrr * 0.6)}–${Math.round(restHR + hrr * 0.7)}`;
  const cardio = `${Math.round(restHR + hrr * 0.7)}–${Math.round(restHR + hrr * 0.85)}`;
  return {
    value: cardio,
    unit: "bpm",
    advice: "Target for cardio training",
    breakdown: { warmup, fatburn, cardio, max: maxHR }
  };
}
function calculateLeanMass(input) {
  const { gender, weight, height } = input;
  let lbm;
  if (gender === "male") {
    lbm = 0.407 * weight + 0.267 * height - 19.2;
  } else {
    lbm = 0.252 * weight + 0.473 * height - 48.3;
  }
  const fatMass = weight - lbm;
  const bodyFatPercent = fatMass / weight * 100;
  return {
    value: Math.round(lbm).toString(),
    unit: "kg",
    advice: `Fat mass: ${Math.round(fatMass)}kg (${Math.round(bodyFatPercent)}%)`,
    breakdown: { lbm: Math.round(lbm), fat: Math.round(fatMass) }
  };
}
function calculateOneRepMax(input) {
  const weight = input.weight || 60;
  const reps = input.reps || 5;
  const lift = input.lift || "Lift";
  const oneRM = weight * (1 + reps / 30);
  const rounded = Math.round(oneRM * 10) / 10;
  let accuracy = "";
  if (reps <= 3) accuracy = "Highly accurate";
  else if (reps <= 6) accuracy = "Good accuracy";
  else accuracy = "Moderate accuracy";
  return {
    value: rounded.toString(),
    unit: "kg",
    category: lift,
    breakdown: {
      "90%": Math.round(rounded * 0.9),
      "80%": Math.round(rounded * 0.8),
      "70%": Math.round(rounded * 0.7),
      "60%": Math.round(rounded * 0.6)
    },
    advice: accuracy,
    color: reps <= 3 ? "#50e3c2" : reps <= 6 ? "#f5a623" : "#0070f3"
  };
}
function formatDuration(totalSecs) {
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor(totalSecs % 3600 / 60);
  const s = Math.round(totalSecs % 60);
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
}
function calculateRunningPace(input) {
  const distance = input.distance || 10;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (input.duration && typeof input.duration === "object") {
    hours = input.duration.hours ?? 0;
    minutes = input.duration.minutes ?? 0;
    seconds = input.duration.seconds ?? 0;
  } else {
    hours = input.hours ?? 0;
    minutes = input.minutes ?? 45;
    seconds = input.seconds ?? 0;
  }
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const pacePerKm = totalSeconds / distance;
  let paceMin = Math.floor(pacePerKm / 60);
  let paceSec = Math.round(pacePerKm % 60);
  if (paceSec === 60) {
    paceSec = 0;
    paceMin += 1;
  }
  const paceStr = `${paceMin}:${paceSec.toString().padStart(2, "0")}/km`;
  let category = "Intermediate";
  if (pacePerKm < 240) category = "Elite";
  else if (pacePerKm < 300) category = "Competitive";
  else if (pacePerKm < 360) category = "Strong";
  else if (pacePerKm < 420) category = "Intermediate";
  else category = "Beginner";
  const splits = [];
  const cappedDistance = Math.min(Math.ceil(distance), 50);
  for (let i = 1; i <= cappedDistance; i++) {
    const cumulativeSeconds = Math.min(i * pacePerKm, totalSeconds);
    const splitSecs = i === Math.ceil(distance) && distance % 1 !== 0 ? distance % 1 * pacePerKm : pacePerKm;
    splits.push({
      km: i,
      splitTime: formatDuration(splitSecs),
      cumulativeTime: formatDuration(cumulativeSeconds)
    });
  }
  const predictions = [
    { name: "5K", dist: 5 },
    { name: "10K", dist: 10 },
    { name: "Half Marathon", dist: 21.0975 },
    { name: "Marathon", dist: 42.195 }
  ].map((race) => {
    const predictedSeconds = totalSeconds * Math.pow(race.dist / distance, 1.06);
    const predictedPace = predictedSeconds / race.dist;
    let predPaceMin = Math.floor(predictedPace / 60);
    let predPaceSec = Math.round(predictedPace % 60);
    if (predPaceSec === 60) {
      predPaceSec = 0;
      predPaceMin += 1;
    }
    return {
      name: race.name,
      time: formatDuration(predictedSeconds),
      pace: `${predPaceMin}:${predPaceSec.toString().padStart(2, "0")}/km`
    };
  });
  return {
    value: paceStr,
    unit: "pace",
    category,
    breakdown: {
      pace: paceStr,
      distance: distance.toFixed(2),
      duration: formatDuration(totalSeconds),
      splits,
      predictions
    }
  };
}
function calculateDeficit(input) {
  const weight = input.weight || 70;
  const height = input.height || 170;
  const age = input.age || 30;
  const gender = input.gender || "male";
  const activity = input.activity || "moderate";
  const deficitAmount = input.deficitAmount || 500;
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr += gender === "male" ? 5 : -161;
  const multipliers = {
    "sedentary": 1.2,
    "light": 1.375,
    "moderate": 1.55,
    "very": 1.725,
    "athlete": 1.9
  };
  const tdee = Math.round(bmr * multipliers[activity]);
  const minSafe = gender === "male" ? 1500 : 1200;
  const target = Math.max(tdee - deficitAmount, minSafe);
  const weeklyLoss = deficitAmount * 7 / 7700;
  const monthlyLoss = weeklyLoss * 4.33;
  return {
    value: target.toString(),
    unit: "kcal/day",
    breakdown: {
      tdee,
      deficit: deficitAmount,
      weeklyLoss: weeklyLoss.toFixed(2),
      monthlyLoss: monthlyLoss.toFixed(2),
      minSafe
    }
  };
}
function calculateSleep(input) {
  const timeInput = input.sleepMode === "bedtime" ? input.wakeTime : input.sleepTime;
  const mode = input.sleepMode || "bedtime";
  if (!timeInput) {
    return { value: "06:30", unit: "time", advice: "Enter a time to calculate" };
  }
  const cycles = [2, 3, 4, 5, 6];
  const sleepLatency = 14;
  const sleepCycleMins = 90;
  let h = 0;
  let m = 0;
  if (typeof timeInput === "object" && timeInput !== null) {
    h = timeInput.hours ?? 7;
    m = timeInput.minutes ?? 0;
  } else if (typeof timeInput === "string" && timeInput.includes(":")) {
    const parts = timeInput.split(":").map(Number);
    h = parts[0] ?? 7;
    m = parts[1] ?? 0;
  } else {
    h = 7;
    m = 0;
  }
  const baseTime = h * 60 + m;
  const times = {};
  let primaryTime = "";
  cycles.forEach((cycle) => {
    const offset = cycle * sleepCycleMins + sleepLatency;
    let resultMins = mode === "bedtime" ? baseTime - offset : baseTime + offset;
    while (resultMins < 0) resultMins += 1440;
    while (resultMins >= 1440) resultMins -= 1440;
    const resultH = Math.floor(resultMins / 60);
    const resultM = Math.round(resultMins % 60);
    const timeStr = `${String(resultH).padStart(2, "0")}:${String(resultM).padStart(2, "0")}`;
    times[`${cycle}cycles`] = timeStr;
    if (cycle === 5) primaryTime = timeStr;
  });
  return {
    value: primaryTime,
    unit: "time",
    breakdown: times,
    advice: "5 cycles = 7.5 hours (optimal)"
  };
}
function calculateProtein(input) {
  const weight = input.weight || 70;
  const bodyFat = input.bodyFat || 20;
  const goal = input.proteinGoal || "maintain";
  const lbm = weight * (1 - bodyFat / 100);
  const multipliers = {
    "maintain": { min: 1.2, max: 1.6 },
    "loss": { min: 1.8, max: 2.4 },
    "gain": { min: 1.6, max: 2.2 },
    "recomp": { min: 2, max: 2.6 },
    "athlete": { min: 1.7, max: 2.5 }
  };
  const range = multipliers[goal] || multipliers["maintain"];
  const minProtein = Math.round(lbm * range.min);
  const maxProtein = Math.round(lbm * range.max);
  const targetProtein = Math.round((minProtein + maxProtein) / 2);
  return {
    value: `${minProtein}–${maxProtein}`,
    unit: "g/day",
    breakdown: {
      floor: minProtein,
      target: targetProtein,
      ceiling: maxProtein,
      perKg: range.min.toFixed(1),
      calories: targetProtein * 4
    }
  };
}
function calculateArmyBodyFat(input) {
  const { gender, height, neck, waist, hip, age } = input;
  let bf;
  if (gender === "male") {
    bf = 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  } else {
    bf = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  }
  const standards = {
    "male": { "17-20": 20, "21-27": 22, "28-39": 24, "40+": 26 },
    "female": { "17-20": 30, "21-27": 32, "28-39": 34, "40+": 36 }
  };
  let ageGroup = "40+";
  if (age <= 20) ageGroup = "17-20";
  else if (age <= 27) ageGroup = "21-27";
  else if (age <= 39) ageGroup = "28-39";
  const standard = standards[gender][ageGroup];
  const passes = bf <= standard;
  return {
    value: (Math.round(bf * 10) / 10).toString(),
    unit: "%",
    category: passes ? "✓ PASS" : "✗ FAIL",
    color: passes ? "#50e3c2" : "#ff6b6b",
    breakdown: {
      standard,
      ageGroup,
      difference: Math.round((bf - standard) * 10) / 10
    }
  };
}
const calculatorRegistry = {
  bmi: {
    label: "BMI Calculator",
    description: "Body Mass Index",
    metaDescription: "Calculate your BMI instantly with our free body mass index calculator. Supports metric & imperial units (kg/lbs, cm/ft). Includes BMI chart and WHO categories.",
    icon: "⚖️",
    fields: ["age", "gender", "height", "weight"],
    fn: calculateBMI
  },
  bmr: {
    label: "BMR Calculator",
    description: "Basal Metabolic Rate",
    metaDescription: "Calculate your Basal Metabolic Rate with our free BMR calculator. Uses science-backed Mifflin-St Jeor equation. Supports metric and imperial units for accuracy.",
    icon: "🔥",
    fields: ["age", "gender", "height", "weight"],
    fn: calculateBMR
  },
  tdee: {
    label: "TDEE Calculator",
    description: "Total Daily Energy Expenditure",
    metaDescription: "Find your Total Daily Energy Expenditure free. Accurate TDEE calculator using Mifflin-St Jeor formula. Perfect for weight loss or bulking. Metric & imperial.",
    icon: "⚡",
    fields: ["age", "gender", "height", "weight", "activity"],
    fn: calculateTDEE
  },
  bodyfat: {
    label: "Body Fat %",
    description: "US Navy Method",
    metaDescription: "Estimate your body fat percentage free with our calculator. Uses validated US Navy circumference method. Includes healthy range charts for men and women.",
    icon: "📊",
    fields: ["gender", "height", "waist", "neck", "hip"],
    fn: calculateBodyFat
  },
  idealweight: {
    label: "Ideal Weight",
    description: "Based on 5 formulas",
    metaDescription: "Find your ideal weight free using 5 medical formulas — Devine, Robinson, Miller, Hamwi, and BMI. Get a personalized healthy weight range for your height.",
    icon: "🎯",
    fields: ["gender", "height"],
    fn: calculateIdealWeight
  },
  calories: {
    label: "Calorie Target",
    description: "Daily calorie goal",
    metaDescription: "Calculate your daily calorie target free. Set your goal (lose weight, maintain, or build muscle) and get a science-based calorie number from your TDEE.",
    icon: "🍎",
    fields: ["age", "gender", "height", "weight", "activity", "goal"],
    fn: calculateCalorieTarget
  },
  macros: {
    label: "Macro Split",
    description: "Protein, carbs, fat breakdown",
    metaDescription: "Calculate your macros free — get personalized protein, carb, and fat targets in grams. Based on your TDEE and fitness goal. Supports all diet types.",
    icon: "🥗",
    fields: ["age", "gender", "height", "weight", "activity", "goal"],
    fn: calculateMacros
  },
  water: {
    label: "Water Intake",
    description: "Daily hydration goal",
    metaDescription: "Calculate your daily water intake free. Get a personalized hydration goal based on your body weight and activity level. Supports metric and imperial units.",
    icon: "💧",
    fields: ["weight", "exerciseMin"],
    fn: calculateWater
  },
  heartrate: {
    label: "Target Heart Rate",
    description: "Training zones",
    metaDescription: "Find your target heart rate zones free. Calculate fat-burn, cardio, and peak zones based on your age and resting HR. Uses accurate Karvonen method.",
    icon: "❤️",
    fields: ["age", "restHR"],
    fn: calculateHeartRate
  },
  leanmass: {
    label: "Lean Body Mass",
    description: "Muscle vs fat mass",
    metaDescription: "Calculate your lean body mass free. Estimate muscle mass versus fat mass using validated Boer and James formulas. Supports both metric and imperial units.",
    icon: "💪",
    fields: ["gender", "height", "weight"],
    fn: calculateLeanMass
  },
  onerep: {
    label: "1-Rep Max Calculator",
    description: "Find your maximum strength",
    metaDescription: "Calculate your one-rep max free with our 1RM calculator. Uses the Epley formula. Get training percentages for strength, hypertrophy, and endurance.",
    icon: "🏋️",
    fields: ["lift", "weight", "reps"],
    fn: calculateOneRepMax
  },
  pace: {
    label: "Running Pace Calculator",
    description: "Calculate pace and finish time",
    metaDescription: "Calculate your running pace free. Find pace per km, predicted finish times for 5K to marathon, and per-km splits. Uses the Riegel prediction formula.",
    icon: "🏃",
    fields: ["distance", "duration"],
    fn: calculateRunningPace
  },
  deficit: {
    label: "Calorie Deficit Calculator",
    description: "Find your weight loss target",
    metaDescription: "Calculate your calorie deficit free. Get your daily target, weekly fat-loss projection, and safe minimum intake. Uses the Mifflin-St Jeor equation.",
    icon: "🎯",
    fields: ["gender", "age", "height", "weight", "activity", "deficitAmount"],
    fn: calculateDeficit
  },
  sleep: {
    label: "Sleep Calculator",
    description: "Find ideal sleep times",
    metaDescription: "Calculate your ideal sleep and wake times free. Aligns with 90-minute sleep cycles so you wake refreshed. Enter your bedtime or desired wake-up time.",
    icon: "😴",
    fields: ["sleepMode", "wakeTime", "sleepTime"],
    fn: calculateSleep
  },
  protein: {
    label: "Protein Intake Calculator",
    description: "Your daily protein target",
    metaDescription: "Calculate your daily protein intake free. Get a personalised target in grams based on body weight and goal — muscle gain, fat loss, or recomp.",
    icon: "🥩",
    fields: ["weight", "bodyFat", "proteinGoal"],
    fn: calculateProtein
  },
  armybf: {
    label: "Army Body Fat Calculator",
    description: "Official military standard",
    metaDescription: "Estimate your body fat using the official US Army circumference method free. Check your result against military standards for your age group and sex.",
    icon: "🪖",
    fields: ["gender", "age", "height", "neck", "waist", "hip"],
    fn: calculateArmyBodyFat
  }
};

export { calculatorRegistry as c };
