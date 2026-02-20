'use client';

import React from 'react';
import Image from 'next/image';

export default function TheArchitect() {
    return (
        <section id="architect" className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] overflow-hidden">
            <div className="mb-24 flex flex-col md:flex-row justify-between md:items-end gap-8">
                <h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight">
                    THE
                    <br />
                    ARCHITECT
                </h2>
                <div className="flex flex-col gap-1">
                    <span className="text-lg font-medium">Ivan Dropuljic</span>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Executive Architect / 20+ Years
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div className="relative aspect-[3/4] md:aspect-square bg-gray-200 overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=800&q=80"
                        alt="Ivan Dropuljic"
                        fill
                        className="contrast-125 w-full h-full object-cover grayscale"
                    />
                    <div className="bg-gradient-to-t from-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0">
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 mb-8">
                        &quot;Scale is not a function of effort. It is a function of
                        structure.&quot;
                    </p>
                    <div className="space-y-6 text-sm text-gray-500 leading-relaxed max-w-md">
                        <p className="">
                            With two decades of experience in turnaround scenarios and
                            scaling systems, my role is to remove the friction that exists
                            between a founder&rsquo;s vision and the company&rsquo;s output.
                        </p>
                        <p className="">
                            I do not offer motivation. I offer the blueprints required to
                            build a machine that functions without your constant
                            intervention.
                        </p>
                    </div>
                    <div className="mt-12 flex gap-12 border-t border-black/10 pt-8">
                        <div>
                            <span className="block text-3xl font-medium display-font">20+</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">
                                Years Exp
                            </span>
                        </div>
                        <div>
                            <span className="block text-3xl font-medium display-font">
                                System
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">
                                Focus
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
