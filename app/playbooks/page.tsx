import React from 'react';
import { playbooks } from '@/lib/data/playbooks';
import PlaybookGrid from '@/components/features/playbooks/PlaybookGrid';

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blueprints | iDM',
    description: 'Standard Operating Procedures for scaling businesses.',
};

export default function PlaybooksPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F5] text-black">
            <div className="max-w-[1600px] mx-auto px-6 md:px-20 py-12 md:py-20">

                {/* Header */}
                <header className="mb-20">
                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center text-sm font-mono tracking-widest text-black/40 hover:text-black transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            BACK TO BASE
                        </Link>
                    </div>

                    <div className="max-w-4xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6 block">
                            Commercial Architecture
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Operating<br />
                            <span className="text-black/20">Blueprints</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed max-w-2xl">
                            Pre-engineered systems for immediate deployment.
                            Install the infrastructure used by market leaders.
                        </p>
                    </div>
                </header>

                {/* Grid */}
                <PlaybookGrid playbooks={playbooks} />

            </div>
        </main>
    );
}
