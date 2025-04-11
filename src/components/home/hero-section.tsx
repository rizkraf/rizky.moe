'use client';
import { bounceAnimation, slideInLeft, slideInRight } from '@/lib/animation';
import { motion } from 'motion/react';
import { AnimatedText } from '../animated-text';

export default function HeroSection() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      <motion.div
        variants={slideInLeft}
        className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-br-3xl -translate-x-1/4 -translate-y-1/4 rotate-12"
      ></motion.div>
      <motion.div
        variants={slideInRight}
        className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 rounded-tl-3xl translate-x-1/4 translate-y-1/4 -rotate-12"
      ></motion.div>

      <div className="container relative mx-auto max-w-5xl">
        <AnimatedText className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          Hello, I&apos;m <span className="text-red-500">Rizky Rafi</span>
        </AnimatedText>
        <motion.p
          variants={bounceAnimation}
          animate="bounce"
          className="text-xl md:text-2xl max-w-2xl mb-8 border-4 border-black bg-yellow-300 p-4 rotate-1"
        >
          I&apos;m a <span className="font-bold">software engineer</span> who
          loves creating beautiful and functional web applications.
        </motion.p>
      </div>
    </section>
  );
}
