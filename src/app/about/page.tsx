import { Metadata } from 'next';
import AnimatedPageContainer from '@/components/animated-page-container';
import AboutHeader from '@/components/about/header';
import AboutBioSection from '@/components/about/bio-section';
import AboutExperienceSection from '@/components/about/experience-section';
import AboutSkillsSection from '@/components/about/skills-section';
import AboutEducationSection from '@/components/about/education-section';

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
