import shape5 from "@/assets/shape5.png";
import overlayMain from "@/assets/overlay-main.png";

const testimonials = [
  {
    stars: 5,
    quote: "FN Press Wire transformed our PR strategy completely. We saw a 3x increase in media pickups within the first month. The distribution network is incredibly powerful.",
    author: "Sarah Johnson",
    role: "PR Director, TechStart Inc.",
    initials: "SJ",
    color: "#3366FF",
  },
  {
    stars: 5,
    quote: "The analytics dashboard gives us real-time insights into our press release performance. We can track exactly which outlets are picking up our stories and optimize accordingly.",
    author: "Michael Chen",
    role: "Communications Manager, GrowthCo",
    initials: "MC",
    color: "#7B3FF5",
  },
  {
    stars: 5,
    quote: "Outstanding customer support and an intuitive platform. FN Press Wire has become an essential tool for our investor relations and media communications.",
    author: "Emily Rodriguez",
    role: "VP of Marketing, InvestorFirst",
    initials: "ER",
    color: "#00B69B",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8f9ff 0%, #e8eeff 100%)",
      }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <img src={shape5} alt="" className="w-full object-cover" style={{ maxHeight: "150px" }} />
      </div>

      <div className="fn-container relative z-10">
        <div className="fn-section-header">
          <p className="text-blue-600 font-semibold uppercase text-xs tracking-widest mb-2">Client Stories</p>
          <h2>What Our Clients Say<br />About Their Success</h2>
          <p>
            Join thousands of satisfied customers who have transformed their PR results
            with our communications platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
