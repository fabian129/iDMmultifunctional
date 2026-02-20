'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Image Parallax
        gsap.to(imageRef.current, {
            scale: 1.2,
            y: '20%',
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Content Entry
        gsap.fromTo(centerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 2.0 }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full hero-img-wrap will-change-transform">
                <Image
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=3840&auto=format&fit=crop"
                    alt="Structure"
                    fill
                    className="object-cover brightness-[0.4] contrast-125 grayscale"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Center Content */}
            <div ref={centerRef} className="relative z-20 flex flex-col items-center justify-center text-center px-6">
                <h1 className="flex flex-col items-center leading-none text-white mb-8 gap-0 md:gap-4">
                    <span className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter shadow-xl shadow-black/20">
                        Executive
                    </span>
                    <span className="text-6xl md:text-8xl lg:text-9xl font-light italic uppercase tracking-widest text-white/90 shadow-xl shadow-black/20">
                        Architecture
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-white/80 max-w-3xl font-light tracking-wide mb-12 leading-relaxed drop-shadow-md">
                    Installing the operating structure required to scale beyond the founder.
                </p>
                <Link href="/audit" className="group relative flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    {/* Shimmer Effect - Dark Sweep on White */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/20 to-transparent" />

                    <span className="text-sm md:text-base uppercase tracking-widest font-bold z-10">
                        Start Digital Audit
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform z-10">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </Link>
            </div>

            {/* Bottom Left Branding (Preserved) */}
            <div className="absolute bottom-12 left-6 md:left-12 text-white mix-blend-exclusion flex flex-col gap-6 pointer-events-auto z-20">
                <div className="flex flex-col gap-1 opacity-60">
                    <span className="text-[10px] uppercase tracking-[0.2em]">
                        ID MULTIFUNCTIONAL / iDM
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em]">
                        Executive Architecture / System Design
                    </span>
                </div>
            </div>
        </section>
    );
}
