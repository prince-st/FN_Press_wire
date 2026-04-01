import link1 from "@/assets/link1.png";
import link2 from "@/assets/link2.png";
import link3 from "@/assets/link3.png";
import shape4 from "@/assets/shape4.png";

const mediaLogos = [
  { name: "Forbes", color: "#CC0000" },
  { name: "Bloomberg", color: "#000000" },
  { name: "Reuters", color: "#FF8000" },
  { name: "AP News", color: "#CC0000" },
  { name: "BBC", color: "#CC0000" },
  { name: "CNN", color: "#CC0000" },
  { name: "Yahoo Finance", color: "#7B00D4" },
  { name: "MarketWatch", color: "#004693" },
  { name: "Business Wire", color: "#0068B0" },
  { name: "PR Newswire", color: "#003087" },
];

const keyStats = [
  { value: "50,000+", label: "Press Releases" },
  { value: "185", label: "Media Partners" },
  { value: "24/7", label: "Expert Support" },
];

export default function TrustedBy() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a2a80 0%, #0d1a5e 100%)",
      }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <img src={shape4} alt="" className="w-full object-cover" style={{ maxHeight: "150px" }} />
      </div>

      <div className="fn-container relative z-10">
        <div className="fn-section-header">
          <h2 className="text-white">Trusted by Leading Media Outlets<br />Worldwide</h2>
          <p className="text-blue-200">
            Our platform connects you with the world's most influential media organizations and publications.
          </p>
        </div>

        {/* Media logos grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-16">
          {mediaLogos.map((logo) => (
            <div
              key={logo.name}
              className="bg-white bg-opacity-10 rounded-xl px-4 py-5 flex items-center justify-center text-white font-bold text-sm hover:bg-opacity-20 transition-all cursor-pointer"
              style={{ minHeight: "64px" }}
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {keyStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-10"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-10">
          {[link1, link2, link3].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
            >
              <img src={icon} alt="" className="w-6 h-6 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
