import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-mockup-1.png";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              +500 restaurantes ya confían en nosotros
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Automatiza tus reservas por{" "}
              <span className="text-gradient">WhatsApp</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up animation-delay-200">
              Menos llamadas, menos errores, más clientes. Tu chatbot atenderá las 
              reservas <strong className="text-foreground">24/7</strong> mientras tú te centras en lo importante: 
              ofrecer una experiencia gastronómica inolvidable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  Solicitar Demo Gratis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#precios">
                  <Play className="w-5 h-5" />
                  Ver Precios
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-border animate-fade-up animation-delay-400">
              <p className="text-sm text-muted-foreground mb-4">Integrado con las herramientas que ya usas:</p>
              <div className="flex items-center gap-6 justify-center lg:justify-start opacity-60">
                <span className="font-semibold text-foreground">Google Calendar</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="font-semibold text-foreground">Google Sheets</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="font-semibold text-foreground">WhatsApp Business</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative z-10 animate-float">
              <img
                src={whatsappMockup}
                alt="WhatsApp chatbot para reservas de restaurante"
                className="w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
