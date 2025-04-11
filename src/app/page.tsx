import AnimatedPageContainer from '@/components/animated-page-container';
import ContactCTA from '@/components/home/contact-cta';
import FeaturedProjects from '@/components/home/featured-projects';
import HeroSection from '@/components/home/hero-section';
import { Metadata } from 'next';
// import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function Home() {
  return (
    <AnimatedPageContainer>
      {/* Hero Section */}
      <HeroSection />
      {/* Featured Projects */}
      <FeaturedProjects />
      {/* Contact CTA */}
      <ContactCTA />
    </AnimatedPageContainer>
  );
}
