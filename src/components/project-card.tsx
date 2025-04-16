import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { popAnimation } from '@/lib/animation';
import { IconBrandGithub } from '@tabler/icons-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  githubLink?: string; // Added optional GitHub link
  color: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  githubLink,
  color,
}: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      variants={popAnimation}
      className={`group border-4 border-black ${color} overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-all duration-300`}
    >
      <div className="relative h-48 overflow-hidden border-b-4 border-black">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-white text-black text-xs font-bold px-2 py-1 border-2 border-black"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-4">
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold hover:underline"
            >
              View Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
          {githubLink && (
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold hover:underline"
              >
                GitHub <IconBrandGithub className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
