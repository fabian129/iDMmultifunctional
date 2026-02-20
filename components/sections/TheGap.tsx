'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheGap() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // HTML script:
        // ScrollTrigger.create({ trigger: gapSection, start: "top 60%", onEnter: () => add 'in-view' })
        // CSS: .gap-line { width: 0; transition: width 1.5s ... }

        // We can animate width directly with GSAP for smoother control or stick to class toggle. 
        // Stick to GSAP tween for consistency with React.

        gsap.to('.gap-line', {
            width: '100%',
            duration: 1.5,
            ease: 'power3.out', // Using existing ease-out var or similar
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                // toggleActions: 'play none none reverse' // Optional: if we want it to reverse
            },
            stagger: 0.2 // Add a little stagger if distinct elements
        });

    }, { scope: containerRef });

    return (
        <section id="gap" ref={containerRef} className="py-24 px-6 md:px-20 border-t border-black/5 bg-[#f0f0f2]">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-xs font-mono text-gray-400 block mb-4 tracking-widest">
                            02 — THE PROBLEM
                        </span>
                        <h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight">
                            THE WISDOM GAP
                        </h2>
                    </div>
                    <div className="max-w-md mt-6 md:mt-0">
                        <p className="text-sm text-gray-500">
                            The silent erosion of value that occurs between leadership intent and frontline reality.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-[400px] border border-black/5 bg-white rounded-lg p-8 md:p-12 overflow-hidden flex flex-col justify-center">
                    {/* Abstract Graph Visual */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                    </div>

                    <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between text-xs uppercase tracking-widest font-semibold mb-2">
                                    <span>Strategic Intent</span>
                                    <span>100%</span>
                                </div>
                                <div className="h-px w-full bg-black/10">
                                    <div className="h-full bg-black gap-line w-0"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs uppercase tracking-widest font-semibold mb-2 text-gray-400">
                                    <span>Process Adherence</span>
                                    <span>60%</span>
                                </div>
                                <div className="h-px w-full bg-black/10">
                                    <div className="h-full bg-gray-400 gap-line w-0"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs uppercase tracking-widest font-semibold mb-2 text-gray-400">
                                    <span>Execution Reality</span>
                                    <span>35%</span>
                                </div>
                                <div className="h-px w-full bg-black/10">
                                    <div className="h-full bg-gray-300 gap-line w-0"></div>
                                </div>
                            </div>
                        </div>
                        <div className="border-l border-black/10 pl-8 md:pl-12">
                            <span className="text-xs font-mono text-red-500 block mb-2">
                                COST OF INACTION
                            </span>
                            <h3 className="display-font text-2xl font-medium mb-4">
                                The Price of Drift
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                When architecture is undefined, every decision requires a meeting. Talent burns out compensating for broken systems. Margin leaks through undefined protocols.
                            </p>
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b border-black pb-0.5">
                                Margin Leakage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
