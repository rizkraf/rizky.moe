import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-8 border-black">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black mb-4">Rizky Rafi</h2>
            <p className="mb-6 max-w-md">
              Software engineer who loves creating beautiful and functional web
              applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
              >
                <IconBrandX className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="#"
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
              >
                <IconBrandInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
              >
                <IconBrandGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="bg-white text-black p-2 rounded-none hover:bg-yellow-400 transition-colors"
              >
                <IconBrandLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>azhararizkyrafi@gmail.com</li>
              <li>Bandung, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Rizky Rafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
