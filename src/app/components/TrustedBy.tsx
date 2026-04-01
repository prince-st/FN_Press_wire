"use client";

import { Globe, Shield, Star } from "lucide-react";

export default function TrustedBy() {
  const logos = [
    { name: "ABC News", icon: <Globe className="w-8 h-8" /> },
    { name: "NBC", icon: <Shield className="w-8 h-8" /> },
    { name: "CBS", icon: <Star className="w-8 h-8" /> },
    { name: "FOX", icon: <Globe className="w-8 h-8" /> },
    { name: "CNN", icon: <Shield className="w-8 h-8" /> },
    { name: "BBC", icon: <Star className="w-8 h-8" /> },
    { name: "Reuters", icon: <Globe className="w-8 h-8" /> },
    { name: "AP", icon: <Shield className="w-8 h-8" /> },
    { name: "NY Times", icon: <Star className="w-8 h-8" /> },
    { name: "WSJ", icon: <Globe className="w-8 h-8" /> },
    { name: "Forbes", icon: <Shield className="w-8 h-8" /> },
    { name: "Bloomberg", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <section className="py-24 bg-dark-blue overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight uppercase">
            Trusted by Leading Media Outlets <br />
            <span className="text-primary">Worldwide</span>
          </h2>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Our platform connects your content with the most influential news organizations across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/20 transition-all group animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="text-white opacity-40 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                {logo.icon}
              </div>
              <span className="text-white/60 font-bold text-sm tracking-widest uppercase group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center border-t border-white/10 pt-16">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">50,000+</div>
            <div className="text-blue-100/60 text-sm font-semibold uppercase tracking-widest">Active Journalists</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">185</div>
            <div className="text-blue-100/60 text-sm font-semibold uppercase tracking-widest">Countries Reached</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">24/7</div>
            <div className="text-blue-100/60 text-sm font-semibold uppercase tracking-widest">Network Monitoring</div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-[32px] p-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-left duration-700">
            <h4 className="text-xl font-bold text-dark-blue">Industry Recognition</h4>
            <ul className="space-y-3">
              {["Top PR Platform 2024", "Best Media Database", "Distinguished Innovation"].map(item => (
                <li key={item} className="flex items-center gap-3 text-zinc-900 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-[32px] p-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-right duration-700">
            <h4 className="text-xl font-bold text-dark-blue">Security & Compliance</h4>
            <ul className="space-y-3">
              {["GDPR Compliant", "ISO 27001 Certified", "SOC 2 Type II Certified"].map(item => (
                <li key={item} className="flex items-center gap-3 text-zinc-900 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
