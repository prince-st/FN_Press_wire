"use client";

import { Star, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "John Does",
      company: "CEO at Tech Inc.",
      text: "The platform has completely transformed how we handle our PR. The AI assistance for drafting releases is a game-changer.",
      rating: 5,
      avatar: "JD"
    },
    {
      name: "Jane Smith",
      company: "CMO at Global Corp",
      text: "We reached more media outlets in a week than we did in a year before using this platform. The monitoring is incredibly accurate.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Mark Wilson",
      company: "PR Manager at Startup X",
      text: "The database is always up to date. We've built amazing relationships with journalists thanks to the verified contact info.",
      rating: 5,
      avatar: "MW"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-light-blue opacity-20 -skew-y-6 transform origin-top-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-dark-blue tracking-tight">
            What Our Clients Say <br />
            <span className="text-primary text-gradient-brand">About Their Success</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take our word for it—hear from the brands that have scaled their outreach with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-xl shadow-zinc-100/50 flex flex-col space-y-6 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed text-lg flex-grow italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                <div className="w-14 h-14 bg-gradient-brand rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue text-lg">{review.name}</h4>
                  <p className="text-zinc-400 text-sm font-medium">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {["Forbes", "CNN", "TechCrunch", "BBC"].map(partner => (
            <div key={partner} className="text-center p-6 bg-white border border-zinc-100 rounded-2xl shadow-lg shadow-zinc-100 group hover:bg-primary transition-all duration-300">
              <span className="text-2xl font-black text-zinc-300 group-hover:text-white transition-colors uppercase tracking-widest italic">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
