export interface Playbook {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    features: string[];
}

export const playbooks: Playbook[] = [
    {
        id: 'recruitment',
        title: 'Recruitment Architecture',
        description: 'The exact protocol for hiring A-players. Includes scorecards, interview scripts, and offer templates.',
        price: 1495,
        currency: 'SEK',
        category: 'People',
        features: ['Job Scorecards', 'Interview Scripts', 'Offer Templates']
    },
    {
        id: 'sales',
        title: 'Sales Machine',
        description: 'From lead to close. The standard operating procedure for predictable revenue.',
        price: 1495,
        currency: 'SEK',
        category: 'Revenue',
        features: ['Scripting Framework', 'CRM Setup', 'Objection Handling']
    },
    {
        id: 'ops',
        title: 'Operational Backbone',
        description: 'How to run the business without being in the business. Meeting cadences and reporting structures.',
        price: 1995,
        currency: 'SEK',
        category: 'Operations',
        features: ['Meeting Cadence', 'KPI Dashboard', 'Reporting SOPs']
    },
    {
        id: 'finance',
        title: 'Profit Protocol',
        description: 'Cash flow management and profit first implementation for scaling agencies.',
        price: 1495,
        currency: 'SEK',
        category: 'Finance',
        features: ['Cash Flow Model', 'PnL Templates', 'Allocations']
    },
    {
        id: 'leadership',
        title: 'Executive Command',
        description: 'The governance model for the modern CEO. Decision matrices and delegation frameworks.',
        price: 2495,
        currency: 'SEK',
        category: 'Leadership',
        features: ['Decision Matrix', 'Delegation Log', 'Board Deck']
    }
];
