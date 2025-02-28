import Image from 'next/image';
import Permaloka from "../../public/permaloka.png"

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: 'Permaloka',
    description: 'Indonesian Database Games platform',
    link: 'https://www.permaloka.id',
    image: Permaloka.src,
    techStack: [
      'Next.js',
      'tRPC',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Docker',
      'Coolify'
    ],
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target='_blank'
            className="relative cursor-pointer inline-block w-full border-2 border-black rounded shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            key={index}
          >
            <Image
              className="w-full"
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              priority
            />
            <div className="p-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className='p-3 flex flex-wrap gap-2'>
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded border-2 border-black px-2.5 font-base py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 bg-white text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
