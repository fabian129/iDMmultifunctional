import { AuditQuestion } from '@/lib/data/audit-questions';

// Mapped from Swedish "Pelare"
export type Pillar = 'Strategic' | 'Culture' | 'Process' | 'Financial' | 'Experience';

export interface AuditResult {
    overallScore: number; // 0-100%
    pillarScores: Record<Pillar, number>; // 1-5 scale per pillar
    maturityLevel: 'Chaotic' | 'Functional' | 'Scalable' | 'World Class';
    redFlags: string[]; // List of Pillars < 3.5
    actionItems: AuditQuestion[]; // Specific low-scoring questions (<=3)
}

// Helper: Calculate average of an array of numbers
const average = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

export function calculateAudit(answers: { questionId: string; value: number }[], questions: AuditQuestion[]): AuditResult {
    const scoresByPillar: Record<Pillar, number[]> = {
        Strategic: [],
        Culture: [],
        Process: [],
        Financial: [],
        Experience: [],
    };

    const actionItems: AuditQuestion[] = [];

    // 1. Group scores by pillar
    answers.forEach((ans) => {
        const question = questions.find((q) => q.id === ans.questionId);
        if (!question) return;

        scoresByPillar[question.category].push(ans.value);

        // If score is low (1-3), add to action/playbook list
        if (ans.value <= 3) {
            actionItems.push(question);
        }
    });

    // 2. Calculate Pillar Averages (1-5)
    const pillarScores: Record<Pillar, number> = {
        Strategic: average(scoresByPillar.Strategic) || 0,
        Culture: average(scoresByPillar.Culture) || 0,
        Process: average(scoresByPillar.Process) || 0,
        Financial: average(scoresByPillar.Financial) || 0,
        Experience: average(scoresByPillar.Experience) || 0,
    };

    // 3. Identify Red Flags (Pillar < 3.5)
    const redFlags = (Object.keys(pillarScores) as Pillar[]).filter(
        (pillar) => pillarScores[pillar] < 3.5 && pillarScores[pillar] > 0
    );

    // 4. Calculate Overall Score (0-100%)
    // Normalized: (Avg of Pillars - 1) / 4 * 100
    // Since scale is 1-5, minimum is 1. (5-1)=4 range.
    const allPillarAvgs = Object.values(pillarScores).filter((s) => s > 0);
    const totalAvg = average(allPillarAvgs) || 1;
    const overallScore = Math.round(((totalAvg - 1) / 4) * 100);

    // 5. Determine Maturity Level
    let maturityLevel: AuditResult['maturityLevel'] = 'Chaotic';
    if (overallScore >= 90) maturityLevel = 'World Class';
    else if (overallScore >= 70) maturityLevel = 'Scalable';
    else if (overallScore >= 40) maturityLevel = 'Functional';

    return {
        overallScore,
        pillarScores,
        maturityLevel,
        redFlags,
        actionItems,
    };
}
