import overlay1 from "@/assets/overlay1.png";
import overlay2 from "@/assets/overlay2.png";
import overlay3 from "@/assets/overlay3.png";
import overlay4 from "@/assets/overlay4.png";
import shape2 from "@/assets/shape2.png";
import shape3 from "@/assets/shape3.png";

const stats = [
  { value: "120+", label: "Media Outlets" },
  { value: "50K+", label: "Brands Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "20+", label: "Countries" },
];

interface PlatformCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  isBlue?: boolean;
}

function PlatformCard({ icon, title, description, features, isBlue }: PlatformCardProps) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-4 shadow-lg transition-transform hover:-translate-y-1"
      style={{
        background: isBlue
          ? "linear-gradient(135deg, #3366FF 0%, #1a3fbf 100%)"
          : "white",
        color: isBlue ? "white" : "#1a1a2e",
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
        style={{
          background: isBlue ? "rgba(255,255,255,0.15)" : "#f0f4ff",
        }}
      >
        <img src={icon} alt="" className="w-8 h-8 object-contain" />
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className={`text-sm leading-relaxed ${isBlue ? "text-blue-100" : "text-gray-500"}`}>
        {description}
      </p>

      <ul className="flex flex-col gap-2 mt-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: isBlue ? "rgba(255,255,255,0.2)" : "#e8eeff",
              }}
            >
              <svg className="w-3 h-3" fill="none" stroke={isBlue ? "white" : "#3366FF"} strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className={isBlue ? "text-blue-50" : "text-gray-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className="mt-4 text-sm font-semibold flex items-center gap-1 transition-all"
        style={{ color: isBlue ? "white" : "#3366FF" }}
      >
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Platforms() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8f9ff 0%, #e8eeff 100%)",
      }}
    >
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <img src={shape2} alt="" className="w-full object-cover" style={{ maxHeight: "150px" }} />
      </div>

      <div className="fn-container relative z-10 py-24">
        <div className="fn-section-header">
          <h2>Two Powerful Platforms,<br />One Complete Solution</h2>
          <p>
            Whether your strategy needs media distribution or stakeholder communications,
            FN Press Wire delivers both in one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <PlatformCard
            icon={overlay1}
            title="Press Release & Press Distribution"
            description="Get your news in front of the right journalists, publications, and online platforms with our advanced press release distribution network."
            features={[
              "Target industry-specific journalists",
              "SEO-optimized distribution",
              "Real-time analytics dashboard",
              "Multimedia attachment support",
            ]}
            isBlue={true}
          />
          <PlatformCard
            icon={overlay2}
            title="Investor Relations & Communications"
            description="Manage and enhance communications with your investors, shareholders, and financial stakeholders effectively."
            features={[
              "Secure investor portal",
              "Earnings call management",
              "Financial calendar tools",
              "Regulatory compliance reports",
            ]}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-8 shadow-md">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img src={shape3} alt="" className="w-full object-cover" style={{ maxHeight: "200px" }} />
      </div>
    </section>
  );
}
