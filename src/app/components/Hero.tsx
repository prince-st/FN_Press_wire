"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                Communication made <br />
                <span className="text-primary text-gradient-brand">easier.</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800">
                Customer happiness made better.
              </h2>
              <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
                Transform your communications with our all-in-one platform for media relations, press distribution, and analytics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-full hover:bg-zinc-50 transition-all flex items-center gap-2">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 fill-primary text-primary" />
                </div>
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
              <span className="text-sm font-semibold text-zinc-400">Trusted by:</span>
              <div className="flex items-center gap-6">
                <span className="font-bold text-xl">Forbes</span>
                <span className="font-bold text-xl">TechCrunch</span>
                <span className="font-bold text-xl">WIRED</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-in fade-in zoom-in duration-1000">
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <Image
                src="/assets/hero.png"
                alt="Professional communication solutions"
                fill
                className="object-contain"
                priority
              />
              
              {/* Floating Elements (Decorative) */}
              <div className="absolute top-10 right-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
