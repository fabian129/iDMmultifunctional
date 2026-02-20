'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Loader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(counterRef.current, { y: 0, duration: 1, ease: 'power4.out' })
            .to(progressRef.current, { width: '100%', duration: 1.2, ease: 'expo.inOut' }, 0)
            .to(counterRef.current, { y: '-100%', duration: 0.5, ease: 'power2.in' }, 1.5)
            .to(containerRef.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'expo.inOut' }, 1.8);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="loader fixed inset-0 z-[9999] bg-[#0A0A0A] text-white flex flex-col items-center justify-center" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="overflow-hidden h-[1.2em] mb-6">
                <div ref={counterRef} className="loader-counter display-font text-8xl md:text-9xl font-medium tracking-tighter leading-none translate-y-full">
                    100
                </div>
            </div>
            <div className="w-64 h-[1px] bg-white/10 overflow-hidden">
                <div ref={progressRef} className="loader-progress w-0 h-full bg-white"></div>
            </div>
        </div>
    );
}
