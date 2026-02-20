import { NextRequest, NextResponse } from 'next/server';
import { generateAuditHTML } from '@/lib/logic/report-generator';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, answers, result } = body;

        if (!email || !result) {
            return NextResponse.json({ error: 'Missing data' }, { status: 400 });
        }

        // 1. Generate HTML Report
        const htmlEmail = generateAuditHTML(result, email);

        // 2. Simulate Email Sending (Log to Console)
        console.log('--- SIMULATING EMAIL SEND TO:', email, '---');
        console.log(htmlEmail); // View formatting in console
        console.log('--- END EMAIL SIMULATION ---');

        // TODO: Integrate Resend/SendGrid here
        // await resend.emails.send({ ... })

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Audit submission error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
