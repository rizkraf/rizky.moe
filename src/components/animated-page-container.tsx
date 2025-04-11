'use client';

import { pageTransition } from '@/lib/animation';
import { motion } from 'motion/react';

export default function AnimatedPageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen bg-white"
    >
      {children}
    </motion.div>
  );
}
