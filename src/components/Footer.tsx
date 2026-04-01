import logoImg from "@/assets/logo.png";
import link1 from "@/assets/link1.png";
import link2 from "@/assets/link2.png";
import link3 from "@/assets/link3.png";

const footerLinks = {
  Platform: ["Press Release Distribution", "Media Monitoring", "Investor Relations", "Analytics", "Integrations"],
  Company: ["About Us", "Careers", "Press Room", "Partners", "Contact"],
  Resources: ["Blog", "Case Studies", "Help Center", "API Documentation", "Status Page"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0d1a3e" }}>
      <div className="fn-container">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <img
                src={logoImg}
                alt="FN Press Wire"
                className="h-10 w-auto object-contain mb-4"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The leading platform for press release distribution, media outreach, and investor communications.
              </p>
              <div className="flex gap-3">
                {[link1, link2, link3].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
                  >
                    <img src={icon} alt="" className="w-5 h-5 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white border-opacity-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © 2024 FN Press Wire. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
