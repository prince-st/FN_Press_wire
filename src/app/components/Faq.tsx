"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, HelpCircleIcon } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI assistance work?",
      answer: "Our AI analysis tool parses your content, suggests improvements for clarity, SEO, and tone, and helps you identify which journalists would be most interested in your story based on their previous work."
    },
    {
      question: "Can I target specific media outlets?",
      answer: "Yes, you can search our database of 50,000+ journalists by beat, location, outlet, and previous articles to find the exact people who should hear your message."
    },
    {
      question: "What formats do you support?",
      answer: "We support standard text releases, image-heavy newsroom formats, video press releases, and dedicated PDF attachments."
    },
    {
      question: "Is there a limit on distribution?",
      answer: "Distribution limits depend on your plan level. Professional plans offer unlimited regional distribution, while enterprise plans include global wire access."
    },
    {
      question: "How do I track my performance?",
      answer: "Our dashboard provides real-time analytics on pickup, sentiment analysis, social engagement, and direct clicks from your releases."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white rounded-full blur-[200px] opacity-40 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary">
            <HelpCircle className="w-6 h-6" />
            <span className="font-bold uppercase tracking-widest text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-dark-blue tracking-tight">
            Frequently Asked <br />
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg leading-relaxed">
            Quick answers to the most common questions about our platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-[24px] overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-primary shadow-xl shadow-primary/5" : "border-zinc-100 hover:border-zinc-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between group"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === i ? "text-primary" : "text-dark-blue group-hover:text-primary"
                }`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-primary" : "text-zinc-400"
                }`} />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-zinc-600 leading-relaxed text-lg border-t border-zinc-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-20 p-12 bg-primary rounded-[40px] text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl font-bold">Still have questions?</h3>
            <p className="text-blue-50 opacity-80 max-w-md mx-auto text-lg">
              Contact our support team anytime for personalized assistance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
                 Contact Us
              </button>
              <button className="px-10 py-4 bg-primary/20 border border-white/30 text-white font-bold rounded-full hover:bg-primary/30 transition-all">
                Go to Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
