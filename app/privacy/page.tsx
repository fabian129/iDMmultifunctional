import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | iDM',
    description: 'Data protection and usage policy.',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0A] font-sans selection:bg-black selection:text-white relative">

            {/* Navigation */}
            <nav className="absolute top-6 left-6 md:top-12 md:left-12 z-50">
                <Link href="/" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Base
                </Link>
            </nav>

            <div className="container mx-auto px-6 py-24 md:py-32 max-w-3xl">
                <header className="mb-16 border-b border-black/10 pb-8">
                    <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4 uppercase">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                        Last Updated: February 2026
                    </p>
                </header>

                <article className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-p:text-gray-600 prose-a:text-black">
                    <h3>1. Data Collection</h3>
                    <p>
                        We collect information you provide directly to us when you use our Digital Audit tool, purchase Playbooks, or communicate with us. This includes your name, email address, company details, and operational data.
                    </p>

                    <h3>2. Use of Information</h3>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Generate and deliver your Digital Sales 360 Report.</li>
                        <li>Process transactions for IDM Blueprints.</li>
                        <li>Send you technical notices and support messages.</li>
                        <li>Communicate with you about products, services, and events.</li>
                    </ul>

                    <h3>3. Data Protection</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized processing and against accidental loss, destruction, or damage. Your audit data is treated as confidential commercial intelligence.
                    </p>

                    <h3>4. Contact</h3>
                    <p>
                        For any questions about this policy, please contact us at compliance@idm.zaitex.se.
                    </p>
                </article>
            </div>
        </main>
    );
}
