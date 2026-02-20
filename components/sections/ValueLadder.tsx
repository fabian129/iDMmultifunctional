'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ValueLadder() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const horizWrap = wrapRef.current;
        if (!horizWrap) return;

        // JS: x: -(horizWrap.scrollWidth - window.innerWidth)

        gsap.to(horizWrap, {
            x: () => -(horizWrap.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${horizWrap.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
            }
        });

    }, { scope: containerRef });

    return (
        <section id="ladder" ref={containerRef} className="relative h-screen overflow-hidden bg-[var(--c-bg)] border-t border-black/5">
            <div ref={wrapRef} className="horiz-wrap flex h-full w-[500vw]">
                {/* Panel 1 */}
                <div className="flex flex-col md:px-20 bg-[#f9f9fb] w-screen h-full border-black/10 border-r pr-6 pl-6 justify-center">
                    <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        LEVEL 01 — ASSETS
                    </span>
                    <h2 className="display-font text-5xl md:text-7xl font-medium tracking-tight text-gray-300">
                        iDM BLUEPRINTS
                    </h2>
                    <div className="mt-8 flex flex-col gap-6 max-w-md">
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            The raw architectural drawings. Access our library of standard
                            operating procedures, role scorecards, and process maps.
                        </p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-medium">1,495 SEK</span>
                            <span className="text-xs uppercase tracking-wider text-gray-400">
                                Digital Access
                            </span>
                        </div>
                        <a href="/playbooks" className="text-xs font-semibold uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-60 transition-opacity">
                            View Library
                        </a>
                    </div>
                </div>

                {/* Panel 2 */}
                <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#f4f4f6]">
                    <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        LEVEL 02 — DIAGNOSTICS
                    </span>
                    <h2 className="display-font text-5xl md:text-7xl font-medium tracking-tight text-gray-400">
                        DIGITAL SALES 360
                    </h2>
                    <div className="mt-8 flex flex-col gap-6 max-w-md">
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            Automated architectural audit. Input your data, receive a
                            calculated report on structural weakness and revenue leakage.
                        </p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-medium">4,900 SEK</span>
                            <span className="text-xs uppercase tracking-wider text-gray-400">
                                One-time Report
                            </span>
                        </div>
                        <a href="/audit" className="text-xs font-semibold uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-60 transition-opacity">
                            Start Assessment
                        </a>
                    </div>
                </div>

                {/* Panel 3 */}
                <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#ededf0]">
                    <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        LEVEL 03 — INSPECTION
                    </span>
                    <h2 className="display-font text-5xl md:text-7xl font-medium tracking-tight text-gray-600">
                        EXPERT SALES 360
                    </h2>
                    <div className="mt-8 flex flex-col gap-6 max-w-md">
                        <p className="text-gray-800 text-lg leading-relaxed font-light">
                            Deep-dive forensic audit. We manually inspect your CRM, shadow
                            calls, and interview key staff to build a correction roadmap.
                        </p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-medium">45,000 SEK</span>
                            <span className="text-xs uppercase tracking-wider text-gray-500">
                                Credited upon retainer
                            </span>
                        </div>
                        <button className="text-xs font-semibold uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-60 transition-opacity">
                            Book Audit
                        </button>
                    </div>
                </div>

                {/* Panel 4 */}
                <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#e5e5e8]">
                    <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        LEVEL 04 — WORKSHOPS
                    </span>
                    <h2 className="display-font text-5xl md:text-7xl font-medium tracking-tight text-gray-800">
                        BLUEPRINTS LIVE
                    </h2>
                    <div className="mt-8 flex flex-col gap-6 max-w-md">
                        <p className="text-gray-800 text-lg leading-relaxed font-light">
                            Intensive implementation workshops. We work with your leadership
                            team to install specific modules of the operating system.
                        </p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-medium">35k - 85k SEK</span>
                            <span className="text-xs uppercase tracking-wider text-gray-500">
                                Per Module
                            </span>
                        </div>
                        <button className="text-xs font-semibold uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-60 transition-opacity">
                            See Modules
                        </button>
                    </div>
                </div>

                {/* Panel 5 */}
                <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-white relative">
                    <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        LEVEL 05 — PARTNERSHIP
                    </span>
                    <h2 className="display-font text-5xl md:text-7xl font-medium tracking-tight text-black">
                        CHIEF SALES ARCHITECT
                    </h2>
                    <div className="mt-8 flex flex-col gap-6 max-w-md relative z-10">
                        <p className="text-gray-800 text-lg leading-relaxed font-light">
                            Fractional executive leadership. We take accountability for the
                            architecture, overseeing installation and governance.
                        </p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-medium">25k - 100k+ / mo</span>
                            <span className="text-xs uppercase tracking-wider text-gray-500">
                                Retainer
                            </span>
                        </div>
                        <a href="#contact" className="text-xs font-semibold uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-60 transition-opacity">
                            Apply for Partnership
                        </a>
                    </div>

                    {/* Conversion Note */}
                    <div className="absolute bottom-12 right-12 max-w-xs p-6 border border-black/5 bg-gray-50">
                        <span className="font-mono text-[10px] text-gray-400 block mb-2 uppercase tracking-widest">
                            Pricing Policy
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            If a partnership (Level 5) is signed within 30 days of an Audit
                            (Level 3), the full cost of the audit is credited on the first
                            retainer invoice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
