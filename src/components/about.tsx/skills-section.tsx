'use client';

import { staggerContainer } from '@/lib/animation';
import { AnimatedSection } from '../animated-section';
import { AnimatedText } from '../animated-text';
import { SkillBadge } from '../skill-badge';
import { motion } from 'motion/react';

export default function AboutSkillsSection() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="container mx-auto max-w-5xl">
        <AnimatedText className="text-4xl font-black mb-12">
          Skills & Technologies
        </AnimatedText>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex flex-wrap gap-3"
        >
          <SkillBadge name="HTML" color="bg-yellow-300" />
          <SkillBadge name="CSS" color="bg-purple-300" />
          <SkillBadge name="Javascript" color="bg-blue-300" />
          <SkillBadge name="Typescript" color="bg-green-300" />
          <SkillBadge name="React" color="bg-red-300" />
          <SkillBadge name="Vue.js" color="bg-orange-300" />
          <SkillBadge name="Next.js" color="bg-yellow-300" />
          <SkillBadge name="Nuxt" color="bg-purple-300" />
          <SkillBadge name="Tailwind CSS" color="bg-blue-300" />
          <SkillBadge name="Bootstrap" color="bg-green-300" />
          <SkillBadge name="Node.js" color="bg-red-300" />
          <SkillBadge name="Express.js" color="bg-orange-300" />
          <SkillBadge name="Prisma" color="bg-yellow-300" />
          <SkillBadge name="MySQL" color="bg-purple-300" />
          <SkillBadge name="PostgreSQL" color="bg-blue-300" />
          <SkillBadge name="Supabase" color="bg-green-300" />
          <SkillBadge name="Git" color="bg-red-300" />
          <SkillBadge name="Figma" color="bg-orange-300" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
