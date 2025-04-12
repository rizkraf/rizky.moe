'use client';
import { slideInLeft } from '@/lib/animation';
import { motion } from 'motion/react';

export default function WorksGrid() {
  return (
    <section className="px-6 py-16">
      {/* <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-6">Filter Projects</h2>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all">
                All
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
              >
                Web Design
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
              >
                Mobile
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
              >
                Branding
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
              >
                UI/UX
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Redesign"
              description="A complete redesign of an e-commerce platform focusing on user experience and conversion optimization."
              image="/placeholder.svg?height=400&width=600"
              tags={['UI/UX', 'Figma', 'React']}
              link="#"
              color="bg-yellow-300"
            />
            <ProjectCard
              title="Mobile Banking App"
              description="A mobile banking application designed for simplicity and security, with a focus on accessibility."
              image="/placeholder.svg?height=400&width=600"
              tags={['Mobile', 'UI Design', 'Swift']}
              link="#"
              color="bg-green-300"
            />
            <ProjectCard
              title="Brand Identity System"
              description="A comprehensive brand identity system for a tech startup, including logo, color palette, and guidelines."
              image="/placeholder.svg?height=400&width=600"
              tags={['Branding', 'Illustrator']}
              link="#"
              color="bg-red-300"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A custom portfolio website for a photographer showcasing their work with a focus on visual storytelling."
              image="/placeholder.svg?height=400&width=600"
              tags={['Web Design', 'JavaScript', 'CSS']}
              link="#"
              color="bg-blue-300"
            />
            <ProjectCard
              title="Health & Fitness App"
              description="A mobile application for tracking fitness goals, nutrition, and providing personalized workout plans."
              image="/placeholder.svg?height=400&width=600"
              tags={['Mobile', 'UI/UX', 'React Native']}
              link="#"
              color="bg-purple-300"
            />
            <ProjectCard
              title="Restaurant Website"
              description="A website for a local restaurant featuring online ordering, reservations, and menu management."
              image="/placeholder.svg?height=400&width=600"
              tags={['Web Design', 'Next.js', 'CMS']}
              link="#"
              color="bg-orange-300"
            />
          </div>
        </div> */}
      <motion.div
        variants={slideInLeft}
        className="container mx-auto max-w-5xl"
      >
        <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
          Currently, I am working on a personal project that I will showcase
          soon. Stay tuned!
        </p>
      </motion.div>
    </section>
  );
}
