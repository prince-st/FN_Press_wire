import { motion } from "framer-motion";

export default function MissionSection() {
  const missions = [
    {
      title: "Our Mission",
      description: "Our mission is simple yet impactful: to connect your message with the world through comprehensive, reliable, and timely press release services.",
      iconBg: "linear-gradient(135deg, #0047ff 0%, #002db3 100%)",
    },
    {
      title: "Above & Beyond",
      description: "At FN Presswire, we go beyond mere distribution; we are committed to being a trusted partner in your growth journey. With a blend of cutting-edge technology, industry expertise, and exceptional customer support, we make sure your voice is heard loud and clear in the global arena.",
      iconBg: "linear-gradient(135deg, #e0f2ff 0%, #b3d9ff 100%)",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="fn-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {missions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-start"
            >
              <div 
                className="w-16 h-16 rounded-full mb-6 shadow-lg"
                style={{ background: item.iconBg }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
