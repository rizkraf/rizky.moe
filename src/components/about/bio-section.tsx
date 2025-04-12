'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import Me from '../../../public/me.png';
import { AnimatedSection } from '../animated-section';
import { motion } from 'motion/react';
import { bounceAnimation, slideInLeft, slideInRight } from '@/lib/animation';
import { AnimatedText } from '../animated-text';

export default function AboutBioSection() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div variants={slideInLeft} className="md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 border-4 border-black translate-x-4 translate-y-4"></div>
              <Image
                src={Me}
                alt="Rizky Rafi Azhara"
                width={600}
                height={600}
                className="relative z-10 border-4 border-black object-cover aspect-square"
              />
            </div>
          </motion.div>
          <motion.div variants={slideInRight} className="md:w-3/5">
            <AnimatedText className="text-4xl font-black mb-6">
              Hello there!
            </AnimatedText>
            <div className="space-y-4 text-lg">
              <AnimatedText type="paragraph" delay={0.1}>
                I&apos;m Rizky Rafi Azhara, a dedicated front-end developer
                driven by the belief that every product I create should bring
                meaningful benefits to many. With a passion for technology and
                over 3 of experience in web development, I strive to craft
                solutions that not only serve their purpose but also improve
                lives.
              </AnimatedText>
              <AnimatedText type="paragraph" delay={0.2}>
                Specializing in front-end development, I find it fascinating to
                work on the parts of a website or application that directly
                interact with users. It&apos;s where creativity meets
                technology, and every pixel matters. For me, the most important
                values in work are ensuring that what I create truly benefits
                users and aligns with divine blessings.
              </AnimatedText>
              <AnimatedText type="paragraph" delay={0.3}>
                In my free time, I love exploring the latest technologies,
                immersing myself in games, or escaping to nature—whether
                it&apos;s hiking in the mountains or enjoying the serenity of
                the beach. These moments recharge my creativity and perspective,
                inspiring me to approach challenges with fresh ideas.
              </AnimatedText>
            </div>
            <motion.div variants={bounceAnimation} className="mt-8">
              <Button
                asChild
                className="bg-black text-white border-4 border-black hover:bg-white hover:text-black text-lg px-8 py-4 h-auto rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
              >
                <a
                  href="https://drive.google.com/file/d/1OEdSjwg0yM3_lnAD6Czowxn8focGZ1X4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
