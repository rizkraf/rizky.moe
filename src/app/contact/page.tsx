import Link from 'next/link';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

import { Metadata } from 'next';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Rizky Rafi Azhara - Software Engineer | Contact',
  description: 'Personal website of Rizky Rafi Azhara, a software engineer.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-12 bg-red-300 border-b-8 border-black">
        {/* Header content remains the same */}
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center mb-8 bg-white px-4 py-2 border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Get In Touch</h1>
          <p className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block">
            Let&apos;s discuss your project or just say hello!
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info section remains the same */}
            <div className="lg:w-1/3">
              {/* Rest of the contact info section */}
              <h2 className="text-4xl font-black mb-8">Contact Info</h2>

              <div className="space-y-8">
                <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email</h3>
                      <p>azhararizkyrafi@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Location</h3>
                      <p>Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                  <h3 className="text-lg font-bold mb-3">Connect</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/rizkraf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <IconBrandGithub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://x.com/rizkraf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <IconBrandX className="h-5 w-5" />
                      <span className="sr-only">X</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/rizkraf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <IconBrandLinkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://instagram.com/rizkraf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <IconBrandInstagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
