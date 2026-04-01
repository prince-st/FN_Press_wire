import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platforms from "./components/Platforms";
import Stats from "./components/Stats";
import PRSolutions from "./components/PRSolutions";
import TrustedBy from "./components/TrustedBy";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Platforms />
        <Stats />
        <PRSolutions />
        <TrustedBy />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
