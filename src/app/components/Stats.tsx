"use client";

export default function Stats() {
  const stats = [
    { label: "Partner Media Outlets", value: "100+" },
    { label: "Global Clients", value: "500+" },
    { label: "Platform Uptime", value: "99.9%" },
    { label: "Total Monthly Reach", value: "15M+" }
  ];

  return (
    <section className="py-20 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2 animate-in fade-in zoom-in duration-700" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-4xl lg:text-5xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-blue-200/60 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
