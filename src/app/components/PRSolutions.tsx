"use client";

import { FileText, Search, BarChart3, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PRSolutions() {
  const solutions = [
    {
      title: "Press Release Distribution",
      description: "Amplify your message with our global network of journalists and news outlets.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      features: ["Drafting Assistance", "Wide Media Reach", "Rapid Distribution"],
      link: "/distribution"
    },
    {
      title: "Media Database & Monitoring",
      description: "Discover and connect with the right contacts for your story instantly.",
      icon: <Search className="w-8 h-8 text-secondary" />,
      features: ["Verified Journalist Info", "Keyword Monitoring", "Trend Tracking"],
      link: "/database"
    },
    {
      title: "Reporting & Analytics",
      description: "Measures the impact of your PR campaigns with advanced sentiment analysis.",
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      features: ["Campaign Performance", "Audience Engagement", "Data Export"],
      link: "/reporting"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
       {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light-blue opacity-30 -skew-x-12 transform origin-top-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-dark-blue tracking-tight">
            Complete PR Solutions <br />
            <span className="text-primary">For Modern Brands</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From creation to distribution and monitoring, we provide everything you need to manage your brand's public presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, id) => (
            <div key={id} className="bg-white border border-zinc-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col group">
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4 leading-tight">{item.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed flex-grow">{item.description}</p>
              
              <ul className="space-y-4 mb-8">
                {item.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-zinc-900">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={item.link} className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Card Embedded */}
        <div className="mt-20 p-12 bg-gradient-brand rounded-[40px] text-center text-white shadow-2xl relative overflow-hidden group">
          {/* Animated Background Glow */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-black/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />

          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold">Ready to transform your PR Strategy?</h3>
            <p className="text-blue-50 text-lg opacity-80 max-w-xl mx-auto">
              Join thousands of brands that trust us for their international communications and media relations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
                Get Started Now
              </button>
              <button className="px-10 py-4 bg-primary/20 border border-white/30 text-white font-bold rounded-full hover:bg-primary/30 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
