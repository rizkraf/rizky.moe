'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animation';

interface AnimatedListProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedList({
  children,
  className,
  delay = 0,
}: AnimatedListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
