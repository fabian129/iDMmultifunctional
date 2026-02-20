'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustSignals() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // JS: from(reveal-item, { y: 60, opacity: 0 ... })
        const section = containerRef.current;
        if (!section) return;

        gsap.from(section.querySelectorAll('.reveal-item'), {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 70%"
            }
        });

    }, { scope: containerRef });

    return (
        <section id="inverted-section" ref={containerRef} className="py-48 bg-[#0A0A0A] text-white relative z-20">
            <div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                <div className="reveal-item">
                    <span className="text-xs font-mono text-gray-500 block mb-6 tracking-widest">
                        VALIDATION
                    </span>
                    <h2 className="display-font text-5xl md:text-7xl font-medium tracking-tighter leading-none">
                        SIGNALS OF
                        <br />
                        TRUST
                    </h2>
                </div>
                <div className="flex flex-col gap-0 reveal-item">
                    <div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                            Turnaround Scenarios
                        </span>
                        <span className="text-xs font-mono text-gray-500">SPECIALTY</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                            Margin Protection
                        </span>
                        <span className="text-xs font-mono text-gray-500">OUTCOME</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                            Execution Reliability
                        </span>
                        <span className="text-xs font-mono text-gray-500">METRIC</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                            System Governance
                        </span>
                        <span className="text-xs font-mono text-gray-500">SERVICE</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
