import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
import AboutSection from "@/components/sections/AboutSection";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";

export const metadata: Metadata = {
  title: "Bluee Leads Marketing Limited | BPO & Lead Generation UK",
  description:
    "Accelerate your UK business growth with Bluee Leads — expert B2B telemarketing, lead generation, appointment setting and inbound call handling. Save up to 70% vs. in-house. ISO certified. GDPR compliant.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <SavingsCalculator />
      <AboutSection />
      <TrustMarquee />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
