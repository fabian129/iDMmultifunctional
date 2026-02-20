import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white mix-blend-exclusion">
            <Link href="#" className="display-font text-lg font-semibold tracking-tighter flex items-center gap-2">
                ID MULTIFUNCTIONAL
            </Link>
            <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
                <Link href="#method" className="hover:opacity-100 transition-opacity">The Method</Link>
                <Link href="#pillars" className="hover:opacity-100 transition-opacity">5 Pillars</Link>
                <Link href="#ladder" className="hover:opacity-100 transition-opacity">Value Ladder</Link>
                <Link href="#contact" className="hover:opacity-100 transition-opacity mr-4">Contact</Link>

                <Link href="/audit" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300">
                    <span>Start Digital Audit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
            <button className="md:hidden group text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-menu w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M4 5h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 19h16"></path>
                </svg>
            </button>
        </nav>
    );
}
