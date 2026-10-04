import { RoleplayEvaluation } from '../types/deca';

const EVALUATIONS_KEY = 'deca_htdm_evaluations_v1';
const NEXT_FOCUS_KEY = 'deca_htdm_next_focus_v1';

export function getSavedEvaluations(): RoleplayEvaluation[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(EVALUATIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveEvaluation(evaluation: RoleplayEvaluation): void {
  try {
    const list = getSavedEvaluations();
    list.unshift(evaluation);
    localStorage.setItem(EVALUATIONS_KEY, JSON.stringify(list));
    if (evaluation.nextFocusActionItem) {
      localStorage.setItem(NEXT_FOCUS_KEY, evaluation.nextFocusActionItem);
    }
  } catch (e) {
    console.error('Failed to save evaluation:', e);
  }
}

export function getNextFocusTip(): string {
  if (typeof window === 'undefined') {
    return "Re-record your role-play ensuring your device's audio and video capture are active and recording properly.";
  }
  return (
    localStorage.getItem(NEXT_FOCUS_KEY) ||
    "Re-record your role-play ensuring your device's audio and video capture are active and recording properly."
  );
}

export function getEvaluationStats() {
  const evaluations = getSavedEvaluations();
  const count = evaluations.length;
  if (count === 0) {
    return {
      attempts: 3,
      averageScore: 0,
      bestScore: 0,
      streakDays: 3,
    };
  }

  const totalScore = evaluations.reduce((sum, e) => sum + e.totalScore, 0);
  const avg = Math.round(totalScore / count);
  const best = Math.max(...evaluations.map((e) => e.totalScore));

  return {
    attempts: count + 3,
    averageScore: avg,
    bestScore: best,
    streakDays: 3,
  };
}
