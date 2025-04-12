'use client';

import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection } from '../animated-section';
import { AnimatedText } from '../animated-text';
import { AnimatedList } from '../animated-list';
import { fadeUp } from '@/lib/animation';

export default function AboutEducationSection() {
  return (
    <AnimatedSection className="px-6 py-16 bg-green-300 border-y-8 border-black">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center mb-12">
          <GraduationCap className="h-10 w-10 mr-4" />
          <AnimatedText className="text-4xl font-black">Education</AnimatedText>
        </div>

        <AnimatedList className="space-y-8">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold">Software Engineering</h3>
              <span className="bg-black text-white px-4 py-1 font-bold">
                2018 - 2021
              </span>
            </div>
            <p className="text-lg font-medium mb-2">SMK Pusdikhubad</p>
            <p>
              Graduated with a focus on software development, specializing in
              web technologies and programming languages. Make school tuition
              application for exam project using PHP and MySQL.
            </p>
          </motion.div>
        </AnimatedList>
      </div>
    </AnimatedSection>
  );
}
