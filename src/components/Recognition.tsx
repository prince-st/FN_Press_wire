import svgIcon from "@/assets/svg1.png";

const recognitions = [
  {
    title: "Industry Recognition",
    items: [
      "Top 10 PR platforms 2024",
      "#1 Press Release Service",
      "Best Media Distribution Tool",
    ],
    icon: "🏆",
  },
  {
    title: "Security & Compliance",
    items: [
      "SOC 2 Type II certified",
      "GDPR compliant",
      "256-bit SSL encryption",
    ],
    icon: "🔒",
  },
];

const metrics = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "45%", label: "Faster Media Pickup" },
  { value: "80%", label: "More Media Coverage" },
  { value: "24/7", label: "Support Available" },
];

export default function Recognition() {
  return (
    <section className="py-20 bg-white">
      <div className="fn-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {recognitions.map((rec) => (
            <div
              key={rec.title}
              className="rounded-2xl p-8 border border-gray-100 bg-gray-50 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{rec.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{rec.title}</h3>
              <ul className="flex flex-col gap-3">
                {rec.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="text-center rounded-2xl p-6 bg-blue-50 border border-blue-100"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">{m.value}</div>
              <div className="text-xs text-gray-500 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
