import { motion } from "framer-motion";

const services = [
  {
    title: "News Release Dissemination",
    description: "Distribute your news to thousands of media outlets worldwide.",
    icon: "bg-blue-100",
  },
  {
    title: "Filing Services",
    description: "Professional regulatory filing and compliance support.",
    icon: "bg-blue-200",
  },
  {
    title: "Global Reach",
    description: "Connect with audiences across multiple continents and markets.",
    icon: "bg-blue-300",
  }
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 relative py-20 lg:py-32 overflow-hidden">
      <div className="fn-container text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Global News & <span className="text-blue-600">Filing Services</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive news distribution and media services tailored to your needs.
        </p>
      </div>

      <div className="fn-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 rounded-full ${service.icon} mb-8 flex items-center justify-center`}>
                <div className="w-10 h-10 rounded-full bg-white opacity-40 shadow-inner" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="fn-btn-primary px-12 py-4 text-lg">
            Order Services
          </button>
        </div>
      </div>

      {/* Dark Wavy Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] lg:h-[100px]"
          fill="#0d1a3e"
        >
          <path d="M0,0 C150,90 400,0 600,60 C800,120 1050,30 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
