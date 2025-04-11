import { Metadata } from 'next';
import Link from 'next/link';
// import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-br-3xl -translate-x-1/4 -translate-y-1/4 rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 rounded-tl-3xl translate-x-1/4 translate-y-1/4 -rotate-12"></div>

        <div className="container relative mx-auto max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Hello, I&apos;m <span className="text-red-500">Rizky Rafi</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 border-4 border-black bg-yellow-300 p-4 rotate-1">
            I&apos;m a <span className="font-bold">software engineer</span> who
            loves creating beautiful and functional web applications.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
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

      {/* Contact CTA */}
      <section className="px-6 py-16 bg-yellow-400 border-y-8 border-black">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let&apos;s Work Together
          </h2>
          <Link
            href="/contact"
            className="bg-black text-white border-4 border-black hover:bg-white hover:text-black text-lg px-8 py-6 h-auto rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all inline-flex items-center"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
