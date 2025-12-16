import { MessageSquare, Palette, Smartphone, TestTube, Rocket } from "lucide-react";
import whatsappMockup1 from "@/assets/whatsapp-mockup-1.png";
import whatsappMockup2 from "@/assets/whatsapp-mockup-2.png";
import calendarDashboard from "@/assets/calendar-dashboard.png";
import whatsappTesting from "@/assets/whatsapp-testing.png";
import restaurantSuccess from "@/assets/restaurant-success.png";

const steps = [
  {
    icon: MessageSquare,
    title: "Reunión rápida",
    description: "Analizamos las necesidades de tu restaurante en una videollamada de 30 min.",
    mockup: whatsappMockup1,
  },
  {
    icon: Palette,
    title: "Diseño del chatbot",
    description: "Configuramos el flujo de conversación y personalizamos los mensajes.",
    mockup: calendarDashboard,
  },
  {
    icon: Smartphone,
    title: "Instalación en WhatsApp",
    description: "Conectamos el chatbot a tu número de WhatsApp Business.",
    mockup: whatsappMockup2,
  },
  {
    icon: TestTube,
    title: "Pruebas + ajustes",
    description: "Testeamos juntos y afinamos los detalles hasta dejarlo perfecto.",
    mockup: whatsappTesting,
  },
  {
    icon: Rocket,
    title: "¡Listo para funcionar!",
    description: "Tu chatbot empieza a recibir reservas automáticamente.",
    mockup: restaurantSuccess,
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            En menos de una semana tendrás tu chatbot funcionando. 
            Nosotros nos encargamos de todo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-fade-up ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div className={`p-6 rounded-2xl bg-background border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-md`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center lg:hidden">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-soft z-10 hidden lg:flex">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Mockup Image */}
                <div className="flex-1">
                  <div className={`relative ${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
                    <div className="relative max-w-sm mx-auto lg:mx-0">
                      <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-20 scale-95" />
                      <img 
                        src={step.mockup} 
                        alt={step.title}
                        className="relative rounded-2xl shadow-card border border-border/50 w-full object-cover aspect-[4/3]"
                      />
                      {/* Step number badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-lg shadow-accent">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
