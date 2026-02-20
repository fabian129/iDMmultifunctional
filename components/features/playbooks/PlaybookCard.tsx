"use client";

import React from 'react';
import { Playbook } from '@/lib/data/playbooks';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface PlaybookCardProps {
    playbook: Playbook;
}

export const PlaybookCard: React.FC<PlaybookCardProps> = ({ playbook }) => {
    return (
        <div className="group relative bg-[#FAFAFA] border border-black/5 rounded-xl p-8 md:p-10 flex flex-col justify-between hover:border-black/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 h-full min-h-[420px]">

            {/* Header */}
            <div className="space-y-6 mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                    [{playbook.category}]
                </span>
                <h3 className="text-3xl font-display leading-none group-hover:translate-x-1 transition-transform duration-300">
                    {playbook.title}
                </h3>
                <p className="text-base text-gray-600 font-normal leading-relaxed">
                    {playbook.description}
                </p>
            </div>

            {/* Features */}
            <ul className="mb-10 space-y-3">
                {playbook.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Footer */}
            <div className="flex items-center justify-between pt-8 border-t border-black/5 mt-auto">
                <span className="font-display text-xl font-medium">
                    {playbook.price} {playbook.currency}
                </span>
                <Button variant="outline" size="sm" className="group/btn px-6">
                    Acquire
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
            </div>
        </div>
    );
};
