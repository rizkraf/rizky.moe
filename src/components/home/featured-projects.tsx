'use client';

import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-16 bg-blue-100 border-y-8 border-black">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black">Featured Works</h2>
          <Link
            href="/works"
            className="bg-black text-white px-6 py-3 border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
          >
            All Works
          </Link>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div> */}
        <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
          Currently, I am working on a personal project that I will showcase
          soon. Stay tuned!
        </p>
      </div>
    </section>
  );
}
