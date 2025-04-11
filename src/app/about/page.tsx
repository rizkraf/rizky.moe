import { Metadata } from 'next';
import AnimatedPageContainer from '@/components/animated-page-container';
import AboutHeader from '@/components/about.tsx/header';
import AboutBioSection from '@/components/about.tsx/bio-section';
import AboutExperienceSection from '@/components/about.tsx/experience-section';
import AboutSkillsSection from '@/components/about.tsx/skills-section';
import AboutEducationSection from '@/components/about.tsx/education-section';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer | About Me',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function About() {
  return (
    <AnimatedPageContainer>
      {/* Header */}
      <AboutHeader />
      {/* Bio Section */}
      <AboutBioSection />
      {/* Experience Section */}
      <AboutExperienceSection />

      {/* Skills Section */}
      <AboutSkillsSection />

      {/* Education Section */}
      <AboutEducationSection />
    </AnimatedPageContainer>
  );
}
