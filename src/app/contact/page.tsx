import ContactForm from '@/components/contact';
import SocialMedia from '@/components/social-media';
import React from 'react';

export const metadata = {
  title: 'Contact',
  description: 'Here my contacts.',
};

export default function ContactPage() {
  return (
    <div>
      <SocialMedia />
      <ContactForm />
    </div>
  );
};

;
