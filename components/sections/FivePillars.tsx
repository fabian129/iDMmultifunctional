'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Pillar = {
    title: string;
    text: string;
};

const pillars: Record<number, Pillar> = {
    0: { title: "THE 5 PILLARS", text: "A complete commercial architecture requires structural integrity across five critical nodes. Hover over the blueprint to inspect." },
    1: { title: "PURPOSE", text: "The strategic North Star. We align execution with intent, ensuring every structural decision serves the ultimate valuation goal." },
    2: { title: "PEOPLE", text: "Role clarity and accountability. We design organizational charts based on function, not personality, removing single points of failure." },
    3: { title: "PROCESS", text: "The codified workflow. We document and optimize the standard operating procedures that turn manual effort into automated reliability." },
    4: { title: "CASH", text: "Margin protection and unit economics. We structure commercial agreements and pricing models to ensure profitability scales with volume." },
    5: { title: "EXPERIENCE", text: "The user journey. We map the client lifecycle to ensure structural consistency delivers a predictable, premium outcome." }
};

export default function FivePillars() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const [activePillar, setActivePillar] = useState(0);

    useGSAP(() => {
        // Draw SVG
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 60%",
            onEnter: () => {
                const svg = containerRef.current?.querySelector('.pentagon-svg');
                if (svg) svg.classList.add('in-view');
            }
        });
    }, { scope: containerRef });

    const handleMouseEnter = (id: number) => {
        // Transition text
        const el = textContainerRef.current;
        if (!el) return;

        gsap.to(el, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                setActivePillar(id);
                gsap.to(el, { opacity: 1, duration: 0.3 });
            }
        });
    };

    return (
        <section id="pillars" ref={containerRef} className="py-32 md:py-48 bg-white border-t border-black/5 overflow-hidden relative">
            <div className="px-6 md:px-20 max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="relative z-10 order-2 lg:order-1">
                    <span className="text-xs font-mono text-gray-500 block mb-6 tracking-widest">
                        SYSTEM COMPONENTS
                    </span>

                    <div id="pillar-content">
                        <div ref={textContainerRef} className="pillar-text transition-opacity duration-300">
                            <h2 className="display-font text-5xl md:text-6xl font-medium tracking-tight mb-6 uppercase">
                                {pillars[activePillar].title}
                            </h2>
                            <p className="text-lg text-gray-600 font-normal leading-relaxed max-w-md">
                                {pillars[activePillar].text}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#contact" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition-all duration-300 w-fit cursor-pointer">
                            <span className="text-xs uppercase tracking-widest font-semibold">
                                Discuss your architecture
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Interactive Graphic */}
                <div className="relative flex justify-center items-center h-[500px] order-1 lg:order-2">
                    <svg viewBox="-50 0 600 500" className="w-full h-full max-w-[600px] pentagon-svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0.2 }}></stop>
                                <stop offset="100%" style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0.2 }}></stop>
                            </linearGradient>
                        </defs>
                        <path d="M250 50 L440 190 L367 415 L133 415 L60 190 Z" fill="none" stroke="black" strokeWidth="1" opacity="0.2"></path>

                        {/* Nodes */}
                        {/* 1. Purpose (Top) */}
                        <g className={`pillar-node ${activePillar === 1 ? 'pillar-active' : ''} group cursor-pointer`} transform="translate(250, 50)" onMouseEnter={() => handleMouseEnter(1)}>
                            <circle cx="0" cy="0" r="6" fill="#fff" stroke="black" strokeWidth="2" className="transition-all duration-300 group-hover:r-8"></circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="black" strokeWidth="1" className="opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-110 transition-all duration-500"></circle>
                            <text x="0" y="-20" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" fill="#404040" letterSpacing="2">PURPOSE</text>
                        </g>
                        {/* 2. People (Right Top) */}
                        <g className={`pillar-node ${activePillar === 2 ? 'pillar-active' : ''} group cursor-pointer`} transform="translate(440, 190)" onMouseEnter={() => handleMouseEnter(2)}>
                            <circle cx="0" cy="0" r="6" fill="#fff" stroke="black" strokeWidth="2" className="transition-all duration-300 group-hover:r-8"></circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="black" strokeWidth="1" className="opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-110 transition-all duration-500"></circle>
                            <text x="20" y="5" textAnchor="start" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" fill="#404040" letterSpacing="2">PEOPLE</text>
                        </g>
                        {/* 3. Process (Right Bottom) */}
                        <g className={`pillar-node ${activePillar === 3 ? 'pillar-active' : ''} group cursor-pointer`} transform="translate(367, 415)" onMouseEnter={() => handleMouseEnter(3)}>
                            <circle cx="0" cy="0" r="6" fill="#fff" stroke="black" strokeWidth="2" className="transition-all duration-300 group-hover:r-8"></circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="black" strokeWidth="1" className="opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-110 transition-all duration-500"></circle>
                            <text x="15" y="20" textAnchor="start" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" fill="#404040" letterSpacing="2">PROCESS</text>
                        </g>
                        {/* 4. Cash (Left Bottom) */}
                        <g className={`pillar-node ${activePillar === 4 ? 'pillar-active' : ''} group cursor-pointer`} transform="translate(133, 415)" onMouseEnter={() => handleMouseEnter(4)}>
                            <circle cx="0" cy="0" r="6" fill="#fff" stroke="black" strokeWidth="2" className="transition-all duration-300 group-hover:r-8"></circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="black" strokeWidth="1" className="opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-110 transition-all duration-500"></circle>
                            <text x="-15" y="20" textAnchor="end" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" fill="#404040" letterSpacing="2">CASH</text>
                        </g>
                        {/* 5. Experience (Left Top) */}
                        <g className={`pillar-node ${activePillar === 5 ? 'pillar-active' : ''} group cursor-pointer`} transform="translate(60, 190)" onMouseEnter={() => handleMouseEnter(5)}>
                            <circle cx="0" cy="0" r="6" fill="#fff" stroke="black" strokeWidth="2" className="transition-all duration-300 group-hover:r-8"></circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="black" strokeWidth="1" className="opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-110 transition-all duration-500"></circle>
                            <text x="0" y="-20" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" fill="#404040" letterSpacing="2">EXPERIENCE</text>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}
