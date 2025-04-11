import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

// import { Button } from '@/components/ui/button';
// import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer | Works',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function Works() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="px-6 py-12 bg-green-300 border-b-8 border-black">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center mb-8 bg-white px-4 py-2 border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6">My Works</h1>
          <p className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block">
            A collection of my best work across web and mobile development.
          </p>
        </div>
      </header>

      {/* Works Grid */}
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
        <div className="container mx-auto max-w-5xl">
          <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
            Currently, I am working on a personal project that I will showcase
            soon. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
}
