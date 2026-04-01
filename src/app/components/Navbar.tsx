"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold text-dark-blue">FN Press Wire</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                Company <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link href="/resources" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Log In
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
