'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = "Precision before inspiration. Structure before motivation. Strategy is meaningless unless it survives the translation into execution. We do not coach. We build.";

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    // Split text into words for scrubbing
    const words = content.split(' ');

    useGSAP(() => {
        // .scrub-word opacity/color calculation
        // JS: gsap.to('.scrub-word', { opacity: 1, color: '#000000', stagger: 0.05, ease: 'none', scrollTrigger: ... })

        // We target the spans we created
        const spans = textRef.current?.querySelectorAll('.scrub-word');

        if (spans) {
            gsap.to(spans, {
                opacity: 1,
                color: '#000000',
                stagger: 0.05,
                ease: 'none',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    end: 'bottom 40%',
                    scrub: true
                }
            });
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] relative z-20">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/10 pt-4">
                    <span className="text-xs font-mono text-gray-400">01 — MANIFESTO</span>

                    <div className="mt-12 text-xs font-mono text-gray-500 space-y-2">
                        <p>OUTCOMES:</p>
                        <p className="text-black">— Predictable Revenue</p>
                        <p className="text-black">— Founder detachment</p>
                        <p className="text-black">— Asset Valuation</p>
                    </div>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                    <h2 ref={textRef} className="display-font text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-6xl text-black">
                        {words.map((word, i) => (
                            <span key={i} className="scrub-word inline-block opacity-[0.15] transition-opacity will-change-[opacity,color]">
                                {word}&nbsp;
                            </span>
                        ))}
                    </h2>
                    <p className="mt-12 text-lg text-gray-500 font-light max-w-2xl leading-relaxed">
                        Most companies stall because their operating system cannot support their ambition. We engineer the infrastructure—roles, decision paths, and governance—that turns volatility into a compounding asset.
                    </p>
                </div>
            </div>
        </section>
    );
}
