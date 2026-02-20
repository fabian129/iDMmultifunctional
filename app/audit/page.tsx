import React from 'react';
import { AuditWizard } from '@/components/features/audit/AuditWizard';

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Digital Audit | iDM',
    description: '15-minute architectural assessment of your business systems.',
};

export default function AuditPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0A] font-sans selection:bg-black selection:text-white relative">

            {/* Navigation */}
            <nav className="absolute top-6 left-6 md:top-12 md:left-12 z-50">
                <Link href="/" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Base
                </Link>
            </nav>

            <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
                <header className="mb-16 text-center">
                    <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-4 uppercase">
                        Digital Sales 360
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
                        Analyze your business architecture. Identify the bottlenecks.
                        Get a tailored 15-page roadmap in 10 minutes.
                    </p>
                </header>

                <AuditWizard />
            </div>
        </main>
    );
}
