'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animation';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-8 border-black">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black mb-4">Rizky Rafi</h2>
            <p className="mb-6 max-w-md">
              Software engineer who loves creating beautiful and functional web
              applications.
            </p>
            <div className="flex gap-4">
              <motion.div
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <a
                  href="https://x.com/rizkraf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandX className="h-5 w-5" />
                  <span className="sr-only">X</span>
                </a>
              </motion.div>
              <motion.div
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <a
                  href="https://instagram.com/rizkraf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </motion.div>
              <motion.div
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <a href="https://github.com/rizkraf">
                  <IconBrandGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </motion.div>
              <motion.div
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <a
                  href="https://linkedin.com/in/rizkraf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/works"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Works
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>azhararizkyrafi@gmail.com</li>
              <li>Bandung, Indonesia</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p>© {new Date().getFullYear()} Rizky Rafi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
