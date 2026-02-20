import { AuditResult, Pillar } from './audit-scoring';
import { AuditQuestion } from '@/lib/data/audit-questions';

export function generateAuditHTML(result: AuditResult, email: string): string {
    const { overallScore, maturityLevel, pillarScores, redFlags, actionItems } = result;

    // Helper to get color based on score
    const getScoreColor = (score: number) => {
        if (score >= 4) return '#10b981'; // Green
        if (score >= 3) return '#f59e0b'; // Amber
        return '#ef4444'; // Red
    };

    const pillarRows = (Object.keys(pillarScores) as Pillar[]).map(pillar => {
        const score = pillarScores[pillar];
        return `
        <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 8px;">
            <span style="font-weight: 600; text-transform: uppercase; font-size: 14px;">${pillar}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 700; color: ${getScoreColor(score)};">${score.toFixed(1)}/5.0</span>
            </div>
        </div>`;
    }).join('');

    const actionItemsList = actionItems.map(q => `
        <li style="margin-bottom: 8px; color: #4b5563;">
            <strong style="color: #000;">${q.category}:</strong> ${q.text}
            <br>
            <span style="font-size: 12px; color: #dc2626;">Recommendation: Check ${q.playbookRef}</span>
        </li>
    `).join('');

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 20px; }
        .score-box { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 8px; margin-bottom: 30px; }
        .score { font-size: 48px; font-weight: 800; color: #000; }
        .level { text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: #666; font-size: 14px; }
        .section { margin-bottom: 30px; }
        .h2 { font-size: 18px; font-weight: 700; text-transform: uppercase; border-left: 4px solid #000; padding-left: 12px; margin-bottom: 16px; }
        .cta { display: inline-block; background: #000; color: #fff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 4px; font-size: 14px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Digital Sales 360 Report</h1>
        <p>Prepared for: ${email}</p>
    </div>

    <div class="score-box">
        <div class="level">Your Digital Maturity Score</div>
        <div class="score">${overallScore}%</div>
        <div class="level" style="margin-top: 8px; color: #000;">${maturityLevel}</div>
    </div>

    <div class="section">
        <div class="h2">Pillar Breakdown</div>
        ${pillarRows}
    </div>

    ${redFlags.length > 0 ? `
    <div class="section" style="background: #fef2f2; padding: 20px; border-radius: 8px; border: 1px solid #fee2e2;">
        <div class="h2" style="border-color: #dc2626; color: #991b1b;">Critical Bottlenecks</div>
        <p style="font-size: 14px; margin-bottom: 16px;">The following areas scored below the safety threshold (< 3.5). These are your primary constraints to growth.</p>
        <ul style="padding-left: 20px; margin: 0;">
            ${redFlags.map(p => `<li style="margin-bottom: 4px; font-weight: 600; color: #b91c1c;">${p}</li>`).join('')}
        </ul>
        <p style="font-size: 14px; margin-top: 16px;">
            <strong>Prescription:</strong> Review the associated Playbooks in your library immediately.
        </p>
    </div>
    ` : ''}

    <div class="section">
        <div class="h2">Priority Action Items</div>
        <p style="font-size: 14px; margin-bottom: 16px;">Based on your lowest scoring responses:</p>
        <ul style="padding-left: 20px; font-size: 14px;">
            ${actionItemsList || '<li>No specific low-scoring items found. Maintain current systems.</li>'}
        </ul>
    </div>

    <div style="text-align: center; margin-top: 50px; border-top: 1px solid #eee; padding-top: 30px;">
        <p>Ready to deploy the fixes?</p>
        <a href="https://idm.zaitex.se/playbooks" class="cta">Access Playbook Library</a>
    </div>
</body>
</html>
    `;
}
