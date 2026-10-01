import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { HowItWorks } from "../components/HowItWorks";
import { BrandsGrid } from "../components/BrandsGrid";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <BrandsGrid />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
