'use client';

import { Briefcase } from 'lucide-react';
import { ExperienceCard } from '../experience-card';
import { AnimatedSection } from '../animated-section';
import { AnimatedText } from '../animated-text';
import { AnimatedList } from '../animated-list';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animation';

export default function AboutExperienceSection() {
  return (
    <AnimatedSection className="px-6 py-16 bg-purple-300 border-y-8 border-black">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center mb-12">
          <Briefcase className="h-10 w-10 mr-4" />
          <AnimatedText className="text-4xl font-black">
            Work Experience
          </AnimatedText>
        </div>

        <AnimatedList className="space-y-8">
          <motion.div variants={fadeUp}>
            <ExperienceCard
              title="Frontend Engineer"
              company="PT Roketin Kreatif Teknologi"
              period="September 2022 - Present"
              achievements={[
                'Enhanced the existing dashboard using Vue.js, achieving a 20% faster load time and a 10% increase in user engagement.',
                'Assisted in redeveloping the application with React, which improved scalability and responsiveness—contributing to a 15% boost in overall performance.',
                'Collaborated with backend engineers to integrate new features, resulting in a 25% improvement in operational efficiency and seamless user interactions.',
              ]}
              color="bg-red-300"
            />
          </motion.div>
        </AnimatedList>
      </div>
    </AnimatedSection>
  );
}
