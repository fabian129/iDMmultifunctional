'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="py-32 md:py-48 px-6 md:px-20 bg-white border-t border-black/5 relative z-20">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-32">
                {/* Context Side */}
                <div>
                    <span className="text-xs font-mono text-gray-400 block mb-6 tracking-widest">
                        INITIATE PROTOCOL
                    </span>
                    <h2 className="display-font text-5xl md:text-6xl font-medium tracking-tight mb-8">
                        Let's Build the Machine.
                    </h2>
                    <p className="text-lg text-gray-500 font-light leading-relaxed mb-12 max-w-sm">
                        We only work with founders ready to install rigorous architecture.
                        If you are prepared to scale beyond yourself, send the signal.
                    </p>

                    <div className="space-y-8 mt-24 border-t border-black/5 pt-12">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">
                                Direct Channel
                            </span>
                            <Link href="mailto:ivan@idm.com" className="text-lg font-medium hover:opacity-60 transition-opacity">
                                ivan@idm.com
                            </Link>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">
                                Headquarters
                            </span>
                            <p className="text-lg font-medium text-gray-800">
                                Stockholm, Sweden Birger Jarlsgatan 12
                            </p>
                        </div>
                        <div className="flex gap-6 pt-4">
                            <Link href="#" className="text-xs font-semibold uppercase tracking-widest hover:text-gray-500 transition-colors">
                                LinkedIn
                            </Link>
                            <Link href="#" className="text-xs font-semibold uppercase tracking-widest hover:text-gray-500 transition-colors">
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="relative">
                    <form className="flex flex-col gap-8 mt-4">
                        <div className="group">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                                Full Name
                            </label>
                            <input type="text" placeholder="John Doe" className="input-field" />
                        </div>

                        <div className="group">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                                Work Email
                            </label>
                            <input type="email" placeholder="john@company.com" className="input-field" />
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="group">
                                <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                                    Inquiry Type
                                </label>
                                <select className="input-field">
                                    <option>Architecture Audit</option>
                                    <option>System Design</option>
                                    <option>Partnership</option>
                                    <option>General</option>
                                </select>
                            </div>
                            <div className="group">
                                <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                                    Company Size
                                </label>
                                <select className="input-field">
                                    <option>1 - 10</option>
                                    <option>11 - 50</option>
                                    <option>50 - 200</option>
                                    <option>200+</option>
                                </select>
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                                Briefing
                            </label>
                            <textarea rows={4} placeholder="Describe your current structural bottlenecks..." className="input-field resize-none"></textarea>
                        </div>

                        <div className="pt-8 flex justify-end">
                            <button type="button" className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Transmit Request
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
