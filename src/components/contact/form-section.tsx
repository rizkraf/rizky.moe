'use client';
import { motion } from 'motion/react';
import ContactForm from '../contact-form';
import { Mail, MapPin } from 'lucide-react';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import { AnimatedSection } from '../animated-section';
import { fadeUp, slideInRight } from '@/lib/animation';
import { AnimatedText } from '../animated-text';

export default function ContactFormSection() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info section remains the same */}
          <motion.div variants={slideInRight} className="lg:w-1/3">
            {/* Rest of the contact info section */}
            <AnimatedText className="text-4xl font-black mb-8">
              Contact Info
            </AnimatedText>

            <div className="space-y-8">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
              >
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p>azhararizkyrafi@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
              >
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Location</h3>
                    <p>Bandung, Indonesia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-purple-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
              >
                <h3 className="text-lg font-bold mb-3">Connect</h3>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href="https://github.com/rizkraf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    href="https://x.com/rizkraf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                  >
                    <IconBrandX className="h-5 w-5" />
                    <span className="sr-only">X</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href="https://linkedin.com/in/rizkraf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    href="https://instagram.com/rizkraf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                  >
                    <IconBrandInstagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
