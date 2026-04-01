import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import Recognition from "@/components/Recognition";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Platforms />
        <Features />
        <TrustedBy />
        <Recognition />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
