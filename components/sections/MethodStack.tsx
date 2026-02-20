'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MethodStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        const cards = cardsRef.current;

        cards.forEach((card, i) => {
            if (!card) return;
            const inner = card.querySelector('.card-inner');
            // Random rotation logic from original script
            // const rot = (i % 2 === 0 ? 3 : -3) + (Math.random() * 2 - 1);
            // To match server/client hydration we should use fixed values or deterministic random.
            // I'll use fixed values based on index to avoid hydration mismatch if I were rendering styles, 
            // but here it is animation. exact match to "Math.random()" is hard. 
            // I will use a deterministic pseudo-random based on index.
            const rot = (i % 2 === 0 ? 3 : -3) + ((i * 0.5) % 2 - 1);

            if (i < cards.length - 1) {
                gsap.to(inner, {
                    scale: 0.9,
                    rotation: rot,
                    y: -30,
                    filter: 'blur(5px)',
                    opacity: 0.6,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: 'top bottom',
                        end: 'top 20%',
                        scrub: true
                    }
                });
            }
        });

    }, { scope: containerRef });

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="method" ref={containerRef} className="stack-section pb-32 pt-32 bg-[var(--c-bg)] relative">
            <div className="px-6 md:px-20 mb-20 flex justify-between items-end max-w-[1600px] mx-auto">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                            Operating System
                        </span>
                    </div>
                    <h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight">
                        METHOD
                        <br />
                        STACK
                    </h2>
                </div>
            </div>

            <div className="stack-container px-4 md:px-0 w-full max-w-[1200px] mx-auto relative pb-[10vh]">
                {/* Card 01 */}
                <div ref={addToRefs} className="card-item sticky top-[10vh] h-[80vh] w-full flex items-center justify-center mb-[5vh] perspective-[1000px]">
                    <div className="card-inner w-[95%] h-full bg-[var(--c-card)] border border-[var(--c-border)] rounded-[1rem] relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] shadow-xl origin-bottom">
                        <div className="card-content p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--c-border)] z-10 order-2 lg:order-1 h-[45%] lg:h-auto">
                            <div className="w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-gray-400">
                                        PHASE 01
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-scan text-gray-400 w-5 h-5">
                                        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                    </svg>
                                </div>
                                <h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">
                                    ARCHITECTURE AUDIT
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-sm text-gray-600 leading-relaxed font-light">
                                    A forensic analysis of your current commercial
                                    infrastructure. We inspect data integrity, role clarity, and
                                    process adherence to locate the leakage.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                                        Diagnostics
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                                        Data Integrity
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-img-wrap relative w-full h-[55%] lg:h-full overflow-hidden order-1 lg:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
                                alt="Audit"
                                fill
                                className="card-img object-cover w-full h-full grayscale contrast-125"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 02 */}
                <div ref={addToRefs} className="card-item sticky top-[10vh] h-[80vh] w-full flex items-center justify-center mb-[5vh] perspective-[1000px]">
                    <div className="card-inner w-[95%] h-full bg-[var(--c-card)] border border-[var(--c-border)] rounded-[1rem] relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] shadow-xl origin-bottom">
                        <div className="card-content p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--c-border)] z-10 order-2 lg:order-1 h-[45%] lg:h-auto">
                            <div className="w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-gray-400">
                                        PHASE 02
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-network text-gray-400 w-5 h-5">
                                        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                                        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                                        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                                        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                                        <path d="M12 12V8"></path>
                                    </svg>
                                </div>
                                <h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">
                                    SYSTEM REDESIGN
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-sm text-gray-600 leading-relaxed font-light">
                                    Re-engineering the workflow. We define the standard
                                    operating procedures, tech stack integration, and decision
                                    matrices that remove ambiguity.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                                        Blueprints
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                                        Protocols
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-img-wrap relative w-full h-[55%] lg:h-full overflow-hidden order-1 lg:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                                alt="Blueprint"
                                fill
                                className="card-img object-cover w-full h-full grayscale contrast-125"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 03 */}
                <div ref={addToRefs} className="card-item sticky top-[10vh] h-[80vh] w-full flex items-center justify-center mb-[5vh] perspective-[1000px]">
                    <div className="card-inner w-[95%] h-full bg-[var(--c-card)] border border-[var(--c-border)] rounded-[1rem] relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] shadow-xl origin-bottom">
                        <div className="card-content p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--c-border)] z-10 order-2 lg:order-1 h-[45%] lg:h-auto">
                            <div className="w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-gray-400">
                                        PHASE 03
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-shield-check text-gray-400 w-5 h-5">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">
                                    INSTALLATION & GOVERNANCE
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-sm text-gray-600 leading-relaxed font-light">
                                    Implementation is not a slide deck. We embed with your team
                                    to install the new OS, training the habits required to
                                    maintain structural integrity.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                                        Adoption
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                                        Governance
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-img-wrap relative w-full h-[55%] lg:h-full overflow-hidden order-1 lg:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop"
                                alt="Structure"
                                fill
                                className="card-img object-cover w-full h-full grayscale contrast-125"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
