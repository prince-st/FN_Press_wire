"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                 <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
               </div>
               <span className="text-xl font-extrabold tracking-tight">FN Press Wire</span>
            </div>
            <p className="text-blue-100/60 leading-relaxed text-sm">
              Your comprehensive platform for international communications, media relations, and professional PR analytics.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                 <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                 <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                 <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                 <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Team", "Careers", "Newsroom", "Contact"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-blue-100/60 hover:text-white transition-colors text-sm font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service</h4>
            <ul className="space-y-4">
              {["Press Distribution", "Media Database", "PR Analytics", "Content Strategy", "Global Wire"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-blue-100/60 hover:text-white transition-colors text-sm font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <form className="space-y-4 pt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
              />
              <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between gap-6">
          <p className="text-blue-100/40 text-xs font-semibold uppercase tracking-widest">
            © {currentYear} FN Press Wire. All rights reserved.
          </p>
          <div className="flex gap-8 justify-center md:justify-end">
            <Link href="#" className="text-blue-100/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="text-blue-100/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Terms of Service</Link>
            <Link href="#" className="text-blue-100/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
