import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ParallaxSection speed={0.15} direction="up">
          <ProblemSection />
        </ParallaxSection>
        <ParallaxSection speed={0.2} direction="down">
          <SolutionSection />
        </ParallaxSection>
        <ParallaxSection speed={0.15} direction="up">
          <BenefitsSection />
        </ParallaxSection>
        <ParallaxSection speed={0.1} direction="down">
          <PricingSection />
        </ParallaxSection>
        <ParallaxSection speed={0.2} direction="up">
          <HowItWorksSection />
        </ParallaxSection>
        <ParallaxSection speed={0.15} direction="down">
          <TestimonialsSection />
        </ParallaxSection>
        <ParallaxSection speed={0.1} direction="up">
          <FAQSection />
        </ParallaxSection>
        <ParallaxSection speed={0.15} direction="down">
          <ContactForm />
        </ParallaxSection>
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
