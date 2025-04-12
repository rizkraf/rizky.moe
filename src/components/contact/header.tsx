'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { slideInLeft, slideInRight } from '@/lib/animation';
import { AnimatedText } from '../animated-text';

export default function ContactHeader() {
  return (
    <header className="px-6 py-12 bg-red-300 border-b-8 border-black">
      {/* Header content remains the same */}
      <div className="container mx-auto max-w-5xl">
        <motion.div variants={slideInLeft}>
          <Link
            href="/"
            className="inline-flex items-center mb-8 bg-white px-4 py-2 border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back Home
          </Link>
        </motion.div>
        <AnimatedText className="text-5xl md:text-7xl font-black mb-6">
          Get In Touch
        </AnimatedText>
        <motion.p
          variants={slideInRight}
          className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block"
        >
          Let&apos;s discuss your project or just say hello!
        </motion.p>
      </div>
    </header>
  );
}
