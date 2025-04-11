import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  color: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  color,
}: ProjectCardProps) {
  return (
    <div
      className={`group border-4 border-black ${color} overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-all duration-300`}
    >
      <div className="relative h-48 overflow-hidden border-b-4 border-black">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black text-xs font-bold px-2 py-1 border-2 border-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center font-bold hover:underline"
        >
          View Project <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
