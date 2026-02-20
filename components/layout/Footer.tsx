import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 py-12 px-6">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest">
                        © 2025 iDM Executive Architecture
                    </span>
                </div>
                <div className="flex gap-8">
                    <Link href="/privacy" className="text-[10px] uppercase tracking-widest relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Privacy Policy</span>
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                    <Link href="#" className="text-[10px] uppercase tracking-widest relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Terms of Service</span>
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
