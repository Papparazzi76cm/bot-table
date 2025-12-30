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
import WaveTransition from "@/components/WaveTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <WaveTransition from="background" to="muted" variant="wave" />
        <ParallaxSection speed={0.15} direction="up">
          <ProblemSection />
        </ParallaxSection>
        <WaveTransition from="muted" to="background" variant="curve" flip />
        <ParallaxSection speed={0.2} direction="down">
          <SolutionSection />
        </ParallaxSection>
        <WaveTransition from="background" to="muted" variant="slope" />
        <ParallaxSection speed={0.15} direction="up">
          <BenefitsSection />
        </ParallaxSection>
        <WaveTransition from="muted" to="card" variant="wave" flip />
        <ParallaxSection speed={0.1} direction="down">
          <PricingSection />
        </ParallaxSection>
        <WaveTransition from="card" to="background" variant="curve" />
        <ParallaxSection speed={0.2} direction="up">
          <HowItWorksSection />
        </ParallaxSection>
        <WaveTransition from="background" to="muted" variant="slope" flip />
        <ParallaxSection speed={0.15} direction="down">
          <TestimonialsSection />
        </ParallaxSection>
        <WaveTransition from="muted" to="background" variant="wave" />
        <ParallaxSection speed={0.1} direction="up">
          <FAQSection />
        </ParallaxSection>
        <WaveTransition from="background" to="muted" variant="curve" flip />
        <ParallaxSection speed={0.15} direction="down">
          <ContactForm />
        </ParallaxSection>
        <WaveTransition from="muted" to="primary" variant="slope" />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
