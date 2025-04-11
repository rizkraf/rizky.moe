import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, Briefcase, GraduationCap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ExperienceCard } from '@/components/experience-card';
import { SkillBadge } from '@/components/skill-badge';
import Me from '../../../public/me.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer | About Me',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-12 bg-blue-300 border-b-8 border-black">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center mb-8 bg-white px-4 py-2 border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6">About Me</h1>
          <p className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block">
            Summary of me, my skills, and my experience in the tech world.
          </p>
        </div>
      </header>

      {/* Bio Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 border-4 border-black translate-x-4 translate-y-4 -z-10"></div>
                <Image
                  src={Me}
                  alt="Rizky Rafi Azhara"
                  width={600}
                  height={600}
                  className="border-4 border-black object-cover aspect-square"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-4xl font-black mb-6">Hello there!</h2>
              <div className="space-y-4 text-lg">
                <p>
                  I&apos;m Rizky Rafi Azhara, a dedicated front-end developer
                  driven by the belief that every product I create should bring
                  meaningful benefits to many. With a passion for technology and
                  over 3 of experience in web development, I strive to craft
                  solutions that not only serve their purpose but also improve
                  lives.
                </p>
                <p>
                  Specializing in front-end development, I find it fascinating
                  to work on the parts of a website or application that directly
                  interact with users. It&apos;s where creativity meets
                  technology, and every pixel matters. For me, the most
                  important values in work are ensuring that what I create truly
                  benefits users and aligns with divine blessings.
                </p>
                <p>
                  In my free time, I love exploring the latest technologies,
                  immersing myself in games, or escaping to nature—whether
                  it&apos;s hiking in the mountains or enjoying the serenity of
                  the beach. These moments recharge my creativity and
                  perspective, inspiring me to approach challenges with fresh
                  ideas.
                </p>
              </div>
              <div className="mt-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16 bg-purple-300 border-y-8 border-black">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center mb-12">
            <Briefcase className="h-10 w-10 mr-4" />
            <h2 className="text-4xl font-black">Work Experience</h2>
          </div>

          <div className="space-y-8">
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
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black mb-12">Skills & Technologies</h2>

          <div className="flex flex-wrap gap-3">
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
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-16 bg-green-300 border-y-8 border-black">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center mb-12">
            <GraduationCap className="h-10 w-10 mr-4" />
            <h2 className="text-4xl font-black">Education</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
