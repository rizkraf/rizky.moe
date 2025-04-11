'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Frame } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white border-b-8 border-black sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Frame className="h-8 w-8" />
            <span className="font-black text-xl">Rizky Rafi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-bold hover:text-red-500 transition-colors ${
                isActive('/') ? 'text-red-500' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-bold hover:text-red-500 transition-colors ${
                isActive('/about') ? 'text-red-500' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/works"
              className={`font-bold hover:text-red-500 transition-colors ${
                isActive('/works') ? 'text-red-500' : ''
              }`}
            >
              Works
            </Link>
            <Link
              href="/contact"
              className={`bg-black text-white px-4 py-2 border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all ${
                isActive('/contact') ? 'bg-red-500 border-red-500' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-4 border-black mt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`font-bold hover:text-red-500 transition-colors py-2 ${
                  isActive('/') ? 'text-red-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-bold hover:text-red-500 transition-colors py-2 ${
                  isActive('/about') ? 'text-red-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/works"
                className={`font-bold hover:text-red-500 transition-colors py-2 ${
                  isActive('/works') ? 'text-red-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
              <Link
                href="/contact"
                className={`bg-black text-white px-4 py-2 border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all inline-block w-fit ${
                  isActive('/contact') ? 'bg-red-500 border-red-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
