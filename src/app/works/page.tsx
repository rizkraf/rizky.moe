import { Metadata } from 'next';
import WorksHeader from '@/components/works/header';
import WorksGrid from '@/components/works/grid';
import AnimatedPageContainer from '@/components/animated-page-container';

// import { Button } from '@/components/ui/button';
// import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer | Works',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function Works() {
  return (
    <AnimatedPageContainer>
      {/* Header */}
      <WorksHeader />

      {/* Works Grid */}
      <WorksGrid />
    </AnimatedPageContainer>
  );
}
