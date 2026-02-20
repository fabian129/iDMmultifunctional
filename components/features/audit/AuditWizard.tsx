"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { auditQuestions } from '@/lib/data/audit-questions';
import { calculateAudit, AuditResult } from '@/lib/logic/audit-scoring';
import { Info } from 'lucide-react';

// Types
type Step = 'intro' | 'questions' | 'email' | 'results';

interface Answer {
    questionId: string;
    value: number; // 1-5
}

export const AuditWizard = () => {
    const [step, setStep] = useState<Step>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<AuditResult | null>(null);

    // Use full question bank
    const questions = auditQuestions;
    const currentQuestion = questions[currentQuestionIndex];

    const handleStart = () => setStep('questions');

    const handleAnswer = (value: number) => {
        const newAnswers = [...answers, { questionId: currentQuestion.id, value }];
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Finish
            const calculatedResult = calculateAudit(newAnswers, questions);
            setResult(calculatedResult);
            setStep('email'); // Go to email gate
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !result) return;

        setIsSubmitting(true);

        try {
            await fetch('/api/audit/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    answers,
                    result
                })
            });
        } catch (err) {
            console.error('Failed to submit audit:', err);
        } finally {
            setIsSubmitting(false);
            setStep('results');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {step === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5 text-center"
                    >
                        <h2 className="font-display text-2xl uppercase tracking-wider mb-6">Ready to Audit?</h2>
                        <p className="text-gray-600 mb-8 font-light leading-relaxed">
                            This assessment evaluates your business across 5 key pillars: Strategy, Culture, Process, Financial, and Experience.
                            <br /><br />
                            It takes about 10 minutes. Be honest. The value is in the truth.
                        </p>
                        <Button onClick={handleStart} size="lg" className="w-full md:w-auto">
                            Initiate Audit Sequence
                        </Button>
                    </motion.div>
                )}

                {step === 'questions' && (
                    <motion.div
                        key="questions"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5 relative"
                    >
                        {/* Progress */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 rounded-t-2xl overflow-hidden">
                            <motion.div
                                className="h-full bg-black"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <div className="mb-8 mt-4">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                                {currentQuestion.category} • Question {currentQuestionIndex + 1} / {questions.length}
                            </span>
                            <h3 className="text-2xl font-display font-medium mt-2 mb-4 leading-tight">
                                {currentQuestion.text}
                            </h3>

                            {/* Context Tooltip/Box */}
                            <div className="bg-blue-50/50 p-4 rounded-lg flex gap-3 text-sm text-blue-900/80 items-start">
                                <Info className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70" />
                                <p>{currentQuestion.context}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 gap-2 md:gap-4">
                            {[1, 2, 3, 4, 5].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => handleAnswer(val)}
                                    className="aspect-square rounded-xl border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all duration-200 flex flex-col items-center justify-center gap-1 group"
                                >
                                    <span className="text-xl font-display font-medium">{val}</span>
                                    <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                        {val === 1 ? 'Chaos' : val === 3 ? 'Ad-hoc' : val === 5 ? 'System' : ''}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-gray-400 uppercase tracking-widest px-1">
                            <span>Kaos (1)</span>
                            <span>System (5)</span>
                        </div>
                    </motion.div>
                )}

                {step === 'email' && (
                    <motion.div
                        key="email"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5 text-center"
                    >
                        <h2 className="font-display text-2xl uppercase tracking-wider mb-6">Analysis Complete</h2>
                        <p className="text-gray-600 mb-8 font-light">
                            Your architectural blueprint is ready. Enter your email to generate your personalized report.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="ceo@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="text-center"
                            />
                            <Button type="submit" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? 'Generating Report...' : 'Unlock My Report'}
                            </Button>
                        </form>
                    </motion.div>
                )}

                {step === 'results' && result && (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5 text-center"
                    >
                        <h2 className="font-display text-3xl uppercase mb-2">Audit Complete</h2>
                        <p className="text-gray-500 mb-8">Your Digital Sales 360 Score</p>

                        <div className="flex justify-center items-center mb-10">
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                                    <circle
                                        cx="80" cy="80" r="70"
                                        stroke="black" strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={440}
                                        strokeDashoffset={440 - (440 * result.overallScore) / 100}
                                        className="transition-all duration-1000 ease-out"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-display font-bold">{result.overallScore}%</span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">{result.maturityLevel}</span>
                                </div>
                            </div>
                        </div>

                        {/* Red Flags / Playbooks */}
                        {result.redFlags.length > 0 && (
                            <div className="text-left bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                                <h4 className="font-display uppercase text-red-900 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    Critical Bottlenecks Detected
                                </h4>
                                <ul className="space-y-2">
                                    {result.redFlags.map(pillar => (
                                        <li key={pillar} className="text-sm text-red-800">
                                            • <strong>{pillar}</strong> scored below threshold. Recommended: <span className="underline cursor-pointer">View {pillar} Playbook</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="p-4 bg-gray-50 rounded-lg border border-black/5 text-sm text-gray-500 mb-8">
                            Full report has been sent to <strong>{email}</strong>
                        </div>

                        <Button onClick={() => window.location.reload()} variant="outline">
                            Restart Audit
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
