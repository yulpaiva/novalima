import Navbar from "../Components/landing/Navbar";
import HeroSection from "../Components/landing/HeroSection";
import AboutSection from "../Components/landing/AboutSection";
import MethodSection from "../Components/landing/MethodSection";
import SolutionsSection from "../Components/landing/SolutionsSection";
import StrategiesSection from "../Components/landing/StrategiesSection";
import PricingSection from "../Components/landing/PricingSection";
import SocialProofSection from "../Components/landing/SocialProofSection";
import TestimonialsSection from "../Components/landing/TestimonialsSection";
import WhyChooseUs from "../Components/landing/WhyChooseUs";
import ContactSection from "../Components/landing/ContactSection";
import Footer from "../Components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MethodSection />
      <SolutionsSection />
      <StrategiesSection />
      <PricingSection />
      <SocialProofSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </>
  );
}
