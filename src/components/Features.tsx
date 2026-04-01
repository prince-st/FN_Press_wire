import iconChart from "@/assets/icon-chart.png";
import iconNews from "@/assets/icon-news.png";
import iconSearch from "@/assets/icon-search.png";

const features = [
  {
    icon: iconNews,
    iconBg: "#e8f4ff",
    title: "Press Release Distribution",
    description: "Distribute your press releases to thousands of journalists, newsrooms, and online media outlets instantly.",
    bullets: [
      "Targeted media outreach",
      "National & international coverage",
      "RSS feed syndication",
      "Google News indexing",
    ],
  },
  {
    icon: iconSearch,
    iconBg: "#e8fff4",
    title: "Media Outreach & Monitoring",
    description: "Track your brand mentions, monitor media coverage, and measure the impact of every press release.",
    bullets: [
      "Real-time brand monitoring",
      "Competitor tracking",
      "Sentiment analysis",
      "Coverage reports",
    ],
  },
  {
    icon: iconChart,
    iconBg: "#fff8e8",
    title: "Reporting & Analytics",
    description: "Get in-depth analytics and actionable insights to improve your PR campaigns and maximize your reach.",
    bullets: [
      "Open & click rate tracking",
      "Media pickup reports",
      "ROI measurement",
      "Custom dashboards",
    ],
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="fn-container">
        <div className="fn-section-header">
          <p className="text-blue-600 font-semibold uppercase text-xs tracking-widest mb-2">What We Offer</p>
          <h2>Complete PR Solutions<br />For Modern Brands</h2>
          <p>
            Everything you need to distribute press releases, monitor coverage,
            and measure your PR impact in one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: feature.iconBg }}
              >
                <img src={feature.icon} alt="" className="w-7 h-7 object-contain" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{feature.description}</p>

              <ul className="flex flex-col gap-2">
                {feature.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <a href="#" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm mt-6 hover:underline">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-2xl p-10 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #3366FF 0%, #1a3fbf 100%)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Transform Your PR Strategy?
          </h3>
          <p className="text-blue-100 text-base mb-6 max-w-xl mx-auto">
            Join thousands of companies that trust FN Press Wire to distribute their news and build media relationships.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="fn-btn-white">Start Free Trial</button>
            <button className="bg-transparent border-2 border-white text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-white hover:text-blue-600 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
