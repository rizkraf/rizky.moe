'use client';

import Link from 'next/link';
import { AnimatedSection } from '../animated-section';
import { AnimatedText } from '../animated-text';
import { motion } from 'motion/react';
import { bounceAnimation } from '@/lib/animation';

export default function ContactCTA() {
  return (
    <AnimatedSection className="px-6 py-16 bg-yellow-400 border-y-8 border-black">
      <div className="container mx-auto max-w-5xl text-center">
        <AnimatedText className="text-4xl md:text-5xl font-black mb-6">
          Let&apos;s Work Together
        </AnimatedText>
        <motion.div
          variants={bounceAnimation}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="bg-black text-white border-4 border-black hover:bg-white hover:text-black text-lg px-8 py-6 h-auto rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all inline-flex items-center"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
