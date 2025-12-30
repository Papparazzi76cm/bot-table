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
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SectionTransition from="background" to="muted" height="lg" />
        <ParallaxSection speed={0.15} direction="up">
          <ProblemSection />
        </ParallaxSection>
        <SectionTransition from="muted" to="background" height="md" />
        <ParallaxSection speed={0.2} direction="down">
          <SolutionSection />
        </ParallaxSection>
        <SectionTransition from="background" to="muted" height="lg" />
        <ParallaxSection speed={0.15} direction="up">
          <BenefitsSection />
        </ParallaxSection>
        <SectionTransition from="muted" to="card" height="md" />
        <ParallaxSection speed={0.1} direction="down">
          <PricingSection />
        </ParallaxSection>
        <SectionTransition from="card" to="background" height="lg" />
        <ParallaxSection speed={0.2} direction="up">
          <HowItWorksSection />
        </ParallaxSection>
        <SectionTransition from="background" to="muted" height="md" />
        <ParallaxSection speed={0.15} direction="down">
          <TestimonialsSection />
        </ParallaxSection>
        <SectionTransition from="muted" to="background" height="lg" />
        <ParallaxSection speed={0.1} direction="up">
          <FAQSection />
        </ParallaxSection>
        <SectionTransition from="background" to="muted" height="md" />
        <ParallaxSection speed={0.15} direction="down">
          <ContactForm />
        </ParallaxSection>
        <SectionTransition from="muted" to="primary" height="lg" />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
