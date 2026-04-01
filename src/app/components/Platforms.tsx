"use client";

import { Sparkles, Megaphone, Check } from "lucide-react";

export default function Platforms() {
  return (
    <section className="relative py-24 overflow-hidden bg-dark-blue">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-24 bg-white rounded-b-[100px]" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-white rounded-t-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
            Two Powerful Platforms. <br />
            <span className="text-secondary">One Complete Solution</span>
          </h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Our dual-platform approach ensures your brand reaches both journalists and your direct audience with precision AI assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary/40">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Media Relations & Press Release AI</h3>
            <p className="text-blue-100/70 mb-6 leading-relaxed">
              Leverage artificial intelligence to craft perfect releases and identify the most relevant journalists for your beat.
            </p>
            <ul className="space-y-3 mb-8">
              {["AI Content Generation", "Journalist Database", "Smart Personalization"].map(item => (
                <li key={item} className="flex items-center gap-3 text-blue-50">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 group">
            <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 border border-secondary/30 group-hover:bg-secondary/40">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Media Relations & Communications</h3>
            <p className="text-blue-100/70 mb-6 leading-relaxed">
              Streamline your entire communications workflow from outreach to reporting with our integrated workspace.
            </p>
             <ul className="space-y-3 mb-8">
              {["Workflow Management", "Team Collaboration", "Global Distribution"].map(item => (
                <li key={item} className="flex items-center gap-3 text-blue-50">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary/90 transition-all">
              Try It Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
