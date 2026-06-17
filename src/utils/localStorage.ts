interface StreakData {
  lastCheckIn: string;
  currentStreak: number;
  longestStreak: number;
  totalCheckIns: number;
  history: string[];
}

const STREAK_KEY = 'fc_streak_data';

function safeLocalStorage() {
  try {
    localStorage.setItem('test', '1');
    localStorage.removeItem('test');
    return true;
  } catch {
    return false;
  }
}

export function getStreakData(): StreakData {
  if (!safeLocalStorage()) {
    return { lastCheckIn: '', currentStreak: 0, longestStreak: 0, totalCheckIns: 0, history: [] };
  }
  
  try {
    const data = localStorage.getItem(STREAK_KEY);
    return data ? JSON.parse(data) : { lastCheckIn: '', currentStreak: 0, longestStreak: 0, totalCheckIns: 0, history: [] };
  } catch {
    return { lastCheckIn: '', currentStreak: 0, longestStreak: 0, totalCheckIns: 0, history: [] };
  }
}

export function recordCheckIn(): { streak: number, milestone: boolean, message?: string } {
  if (!safeLocalStorage()) return { streak: 0, milestone: false };

  const today = new Date().toISOString().split('T')[0];
  const data = getStreakData();

  if (data.lastCheckIn === today) {
    return { streak: data.currentStreak, milestone: false };
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  let newStreak = 1;
  let milestone = false;
  let message = '';

  if (data.lastCheckIn === yesterday) {
    newStreak = data.currentStreak + 1;
  }

  if ([3, 7, 14, 30].includes(newStreak)) {
    milestone = true;
    const messages: Record<number, string> = {
      3: "You're building a habit! 🌱",
      7: "One week strong! 🏆",
      14: "Two weeks! Incredible! 💪",
      30: "You're unstoppable! 🔥"
    };
    message = messages[newStreak];
  }

  const updatedData: StreakData = {
    lastCheckIn: today,
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, data.longestStreak),
    totalCheckIns: data.totalCheckIns + 1,
    history: [today, ...data.history.slice(0, 29)]
  };

  localStorage.setItem(STREAK_KEY, JSON.stringify(updatedData));
  localStorage.setItem('fc_streak', newStreak.toString());

  return { streak: newStreak, milestone, message };
}

export function getHistory(days: number = 7): boolean[] {
  const data = getStreakData();
  const result: boolean[] = [];
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86400000).toISOString().split('T')[0];
    result.push(data.history.includes(date));
  }
  
  return result;
}
