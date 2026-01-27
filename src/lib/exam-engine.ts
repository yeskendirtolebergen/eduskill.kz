export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export const SCORING = {
    EASY: { correct: 5, mistake: -3 },
    MEDIUM: { correct: 7, mistake: -5 },
    HARD: { correct: 10, mistake: -7 },
};

export function getDifficulty(score: number): Difficulty {
    if (score <= 40) return "EASY";
    if (score <= 70) return "MEDIUM";
    return "HARD";
}

export function getPoints(difficulty: Difficulty, isCorrect: boolean): number {
    const rule = SCORING[difficulty as keyof typeof SCORING];
    if (!rule) return 0;
    return isCorrect ? rule.correct : rule.mistake;
}
