'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaybookCard } from '@/components/features/playbooks/PlaybookCard';
import { Playbook } from '@/lib/data/playbooks';

interface PlaybookGridProps {
    playbooks: Playbook[];
}

export default function PlaybookGrid({ playbooks }: PlaybookGridProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {playbooks.map((playbook, i) => (
                <motion.div
                    key={playbook.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <PlaybookCard playbook={playbook} />
                </motion.div>
            ))}
        </div>
    );
}
