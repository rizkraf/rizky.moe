import { Metadata } from 'next';
import AnimatedPageContainer from '@/components/animated-page-container';
import ContactHeader from '@/components/contact/header';
import ContactFormSection from '@/components/contact/form-section';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer | Contact',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function Contact() {
  return (
    <AnimatedPageContainer>
      {/* Header */}
      <ContactHeader />

      {/* Contact Form Section */}
      <ContactFormSection />
    </AnimatedPageContainer>
  );
}
