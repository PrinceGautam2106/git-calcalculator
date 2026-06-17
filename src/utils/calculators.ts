export interface CalcResult {
  value: string;
  unit: string;
  category?: string;
  color?: string;
  advice?: string;
  breakdown?: Record<string, any>;
}

export interface CalcInput {
  age?: number;
  gender?: 'male' | 'female';
  height?: number; // cm
  weight?: number; // kg
  activity?: 'sedentary' | 'light' | 'moderate' | 'very' | 'athlete';
  goal?: 'lose' | 'maintain' | 'build';
  waist?: number; // cm
  neck?: number; // cm
  hip?: number; // cm
  restHR?: number;
  exerciseMin?: number;
}

/** BMI - Body Mass Index */
export function calculateBMI(input: CalcInput): CalcResult {
  const bmi = input.weight! / Math.pow(input.height! / 100, 2);
  const rounded = Math.round(bmi * 10) / 10;
  
  let category = '', color = '', advice = '';
  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#0070f3';
    advice = 'Consider consulting a nutritionist to reach a healthy weight';
  } else if (bmi < 25) {
    category = 'Normal';
    color = '#50e3c2';
    advice = 'Great! Maintain your current lifestyle';
  } else if (bmi < 30) {
    category = 'Overweight';
    color = '#f5a623';
    advice = 'Consider a balanced diet and regular exercise';
  } else {
    category = 'Obese';
    color = '#ff6b6b';
    advice = 'Consult a healthcare professional for a personalized plan';
  }
  
  return { value: rounded.toString(), unit: 'BMI', category, color, advice };
}

/** BMR - Basal Metabolic Rate (Mifflin-St Jeor) */
export function calculateBMR(input: CalcInput): CalcResult {
  const { weight, height, age, gender } = input;
  let bmr = (10 * weight!) + (6.25 * height!) - (5 * age!);
  bmr += gender === 'male' ? 5 : -161;
  
  return {
    value: Math.round(bmr).toString(),
    unit: 'kcal/day',
    advice: 'This is your baseline calorie burn at complete rest'
  };
}

/** TDEE - Total Daily Energy Expenditure */
export function calculateTDEE(input: CalcInput): CalcResult {
  const bmrResult = calculateBMR(input);
  const bmr = parseInt(bmrResult.value);
  
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    athlete: 1.9
  };
  
  const tdee = Math.round(bmr * multipliers[input.activity!]);
  
  return {
    value: tdee.toString(),
    unit: 'kcal/day',
    advice: 'Your total daily calorie burn including activity',
    breakdown: { bmr: bmrResult.value, multiplier: multipliers[input.activity!] }
  };
}

/** Body Fat % - US Navy Method */
export function calculateBodyFat(input: CalcInput): CalcResult {
  const { gender, height, waist, neck, hip } = input;
  let bf: number;
  
  // US Navy Formula (Metric)
  // Male: 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
  // Female: 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450
  
  if (gender === 'male') {
    const logDiff = Math.log10(waist! - neck!);
    const logHeight = Math.log10(height!);
    bf = 495 / (1.0324 - 0.19077 * logDiff + 0.15456 * logHeight) - 450;
  } else {
    const logDiff = Math.log10(waist! + hip! - neck!);
    const logHeight = Math.log10(height!);
    bf = 495 / (1.29579 - 0.35004 * logDiff + 0.22100 * logHeight) - 450;
  }
  
  const rounded = Math.round(bf * 10) / 10;
  let category = '', color = '';
  
  if (gender === 'male') {
    if (bf < 6) { category = 'Essential'; color = '#0070f3'; }
    else if (bf < 14) { category = 'Athletes'; color = '#50e3c2'; }
    else if (bf < 18) { category = 'Fitness'; color = '#50e3c2'; }
    else if (bf < 25) { category = 'Average'; color = '#f5a623'; }
    else { category = 'Obese'; color = '#ff6b6b'; }
  } else {
    if (bf < 14) { category = 'Essential'; color = '#0070f3'; }
    else if (bf < 21) { category = 'Athletes'; color = '#50e3c2'; }
    else if (bf < 25) { category = 'Fitness'; color = '#50e3c2'; }
    else if (bf < 32) { category = 'Average'; color = '#f5a623'; }
    else { category = 'Obese'; color = '#ff6b6b'; }
  }
  
  return { value: rounded.toString(), unit: '%', category, color };
}

/** Ideal Weight - Average of 5 formulas */
export function calculateIdealWeight(input: CalcInput): CalcResult {
  const { gender, height } = input;
  const heightInch = height! / 2.54;
  const base = heightInch - 60;
  
  const robinson = gender === 'male' 
    ? 52 + (1.9 * base) 
    : 49 + (1.7 * base);
  
  const miller = gender === 'male'
    ? 56.2 + (1.41 * base)
    : 53.1 + (1.36 * base);
  
  const hamwi = gender === 'male'
    ? 48 + (2.7 * base)
    : 45.5 + (2.2 * base);
  
  const devine = gender === 'male'
    ? 50 + (2.3 * base)
    : 45.5 + (2.3 * base);
  
  const bmiIdeal = 22 * Math.pow(height! / 100, 2);
  
  const weights = [robinson, miller, hamwi, devine, bmiIdeal];
  const min = Math.round(Math.min(...weights));
  const max = Math.round(Math.max(...weights));
  
  return {
    value: `${min}–${max}`,
    unit: 'kg',
    advice: 'Range based on 5 medical formulas'
  };
}

/** Calorie Target - Based on goal */
export function calculateCalorieTarget(input: CalcInput): CalcResult {
  const tdeeResult = calculateTDEE(input);
  const tdee = parseInt(tdeeResult.value);
  
  const adjustments = {
    lose: -500,
    maintain: 0,
    build: 300
  };
  
  const target = tdee + adjustments[input.goal!];
  const weeklyChange = {
    lose: '0.5kg loss/week',
    maintain: 'maintain weight',
    build: '0.25kg gain/week'
  };
  
  return {
    value: target.toString(),
    unit: 'kcal/day',
    advice: weeklyChange[input.goal!],
    breakdown: { tdee: tdee.toString(), adjustment: adjustments[input.goal!] }
  };
}

/** Macros - Protein, Fat, Carbs breakdown */
export function calculateMacros(input: CalcInput): CalcResult {
  const calorieResult = calculateCalorieTarget(input);
  const calories = parseInt(calorieResult.value);
  
  const protein = Math.round(input.weight! * 2);
  const proteinCal = protein * 4;
  
  const fatCal = Math.round(calories * 0.25);
  const fat = Math.round(fatCal / 9);
  
  const carbsCal = calories - proteinCal - fatCal;
  const carbs = Math.round(carbsCal / 4);
  
  return {
    value: `${protein}g / ${fat}g / ${carbs}g`,
    unit: 'P / F / C',
    breakdown: { protein, fat, carbs, calories }
  };
}

/** Water Intake - Based on weight and exercise */
export function calculateWater(input: CalcInput): CalcResult {
  const base = input.weight! * 35;
  const exercise = (input.exerciseMin || 0) / 30 * 350;
  const total = Math.round((base + exercise) / 1000 * 10) / 10;
  
  return {
    value: total.toString(),
    unit: 'L/day',
    advice: `${Math.round(total * 4)} cups per day`,
    breakdown: { base: Math.round(base), exercise: Math.round(exercise) }
  };
}

/** Target Heart Rate - Karvonen method */
export function calculateHeartRate(input: CalcInput): CalcResult {
  const maxHR = 220 - input.age!;
  const restHR = input.restHR || 70;
  const hrr = maxHR - restHR;
  
  const warmup = `${Math.round(restHR + hrr * 0.5)}–${Math.round(restHR + hrr * 0.6)}`;
  const fatburn = `${Math.round(restHR + hrr * 0.6)}–${Math.round(restHR + hrr * 0.7)}`;
  const cardio = `${Math.round(restHR + hrr * 0.7)}–${Math.round(restHR + hrr * 0.85)}`;
  
  return {
    value: cardio,
    unit: 'bpm',
    advice: 'Target for cardio training',
    breakdown: { warmup, fatburn, cardio, max: maxHR }
  };
}

/** Lean Body Mass */
export function calculateLeanMass(input: CalcInput): CalcResult {
  const { gender, weight, height } = input;
  let lbm: number;
  
  if (gender === 'male') {
    lbm = 0.407 * weight! + 0.267 * height! - 19.2;
  } else {
    lbm = 0.252 * weight! + 0.473 * height! - 48.3;
  }
  
  const fatMass = weight! - lbm;
  const bodyFatPercent = (fatMass / weight!) * 100;
  
  return {
    value: Math.round(lbm).toString(),
    unit: 'kg',
    advice: `Fat mass: ${Math.round(fatMass)}kg (${Math.round(bodyFatPercent)}%)`,
    breakdown: { lbm: Math.round(lbm), fat: Math.round(fatMass) }
  };
}

export const calculatorRegistry = {
  bmi: {
    label: 'BMI Calculator',
    description: 'Body Mass Index',
    icon: '⚖️',
    fields: ['age', 'gender', 'height', 'weight'],
    fn: calculateBMI
  },
  bmr: {
    label: 'BMR Calculator',
    description: 'Basal Metabolic Rate',
    icon: '🔥',
    fields: ['age', 'gender', 'height', 'weight'],
    fn: calculateBMR
  },
  tdee: {
    label: 'TDEE Calculator',
    description: 'Total Daily Energy Expenditure',
    icon: '⚡',
    fields: ['age', 'gender', 'height', 'weight', 'activity'],
    fn: calculateTDEE
  },
  bodyfat: {
    label: 'Body Fat %',
    description: 'US Navy Method',
    icon: '📊',
    fields: ['gender', 'height', 'waist', 'neck', 'hip'],
    fn: calculateBodyFat
  },
  idealweight: {
    label: 'Ideal Weight',
    description: 'Based on 5 formulas',
    icon: '🎯',
    fields: ['gender', 'height'],
    fn: calculateIdealWeight
  },
  calories: {
    label: 'Calorie Target',
    description: 'Daily calorie goal',
    icon: '🍎',
    fields: ['age', 'gender', 'height', 'weight', 'activity', 'goal'],
    fn: calculateCalorieTarget
  },
  macros: {
    label: 'Macro Split',
    description: 'Protein, carbs, fat breakdown',
    icon: '🥗',
    fields: ['age', 'gender', 'height', 'weight', 'activity', 'goal'],
    fn: calculateMacros
  },
  water: {
    label: 'Water Intake',
    description: 'Daily hydration goal',
    icon: '💧',
    fields: ['weight', 'exerciseMin'],
    fn: calculateWater
  },
  heartrate: {
    label: 'Target Heart Rate',
    description: 'Training zones',
    icon: '❤️',
    fields: ['age', 'restHR'],
    fn: calculateHeartRate
  },
  leanmass: {
    label: 'Lean Body Mass',
    description: 'Muscle vs fat mass',
    icon: '💪',
    fields: ['gender', 'height', 'weight'],
    fn: calculateLeanMass
  }
};
