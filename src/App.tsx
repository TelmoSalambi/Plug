import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { HowItWorks } from "./components/HowItWorks";
import { Tecnologia, Ourivesaria, PlugClean } from "./components/Showcase";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Tecnologia />
        <Ourivesaria />
        <PlugClean />
        <Benefits />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
