'use client';
import { AnimatedList } from '../animated-list';
import { AnimatedSection } from '../animated-section';
import { motion } from 'motion/react';
import { ProjectCard } from '../project-card';
import { fadeUp } from '@/lib/animation';
import { projects } from '@/lib/projects-data';

export default function WorksGrid() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="container mx-auto max-w-5xl">
        <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
                color={project.color}
                githubLink={project.githubLink}
              />
            </motion.div>
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  );
}
