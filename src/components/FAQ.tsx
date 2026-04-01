import { useState } from "react";

const faqs = [
  {
    q: "How does FN Press Wire distribute press releases?",
    a: "FN Press Wire uses an extensive network of over 185 media partners, news agencies, and online publications to distribute your press releases. We utilize direct editorial relationships and automated syndication to maximize your coverage.",
  },
  {
    q: "Do you offer white-labeling options?",
    a: "Yes, we offer white-label solutions for PR agencies and enterprises. Your clients will see your brand, not ours, in all communications and reports.",
  },
  {
    q: "Can I target specific industries or regions?",
    a: "Absolutely! Our platform allows you to target specific industries, geographic regions, publication types, and journalist categories to ensure your press release reaches the most relevant audience.",
  },
  {
    q: "What kind of analytics do you provide?",
    a: "Our analytics dashboard provides real-time data including pickup rates, media mentions, social shares, website traffic referrals, and detailed engagement metrics for every press release you distribute.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day free trial with no credit card required. You can send up to 3 press releases and access our full analytics dashboard during the trial period.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="fn-container">
        <div className="fn-section-header">
          <h2>Frequently Asked<br />Questions</h2>
          <p>
            Everything you need to know about FN Press Wire's platform,
            pricing, and distribution network.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: open === i ? "#3366FF" : "#f0f4ff",
                  }}
                >
                  <svg
                    className="w-4 h-4 transition-transform"
                    style={{
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                      color: open === i ? "white" : "#3366FF",
                    }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {open === i && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="mt-16 rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #3366FF 0%, #1a3fbf 100%)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Still Have Questions?
          </h3>
          <p className="text-blue-200 text-sm mb-6">
            Our expert team is ready to help you find the perfect solution for your PR needs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-lg text-sm outline-none w-64 md:w-80"
            />
            <button className="fn-btn-white">Contact Support</button>
          </div>
        </div>
      </div>
    </section>
  );
}
