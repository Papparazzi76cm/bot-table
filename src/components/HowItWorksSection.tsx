import { MessageSquare, Palette, Smartphone, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Reunión rápida",
    description: "Analizamos las necesidades de tu restaurante en una videollamada de 30 min."
  },
  {
    icon: Palette,
    title: "Diseño del chatbot",
    description: "Configuramos el flujo de conversación y personalizamos los mensajes."
  },
  {
    icon: Smartphone,
    title: "Instalación en WhatsApp",
    description: "Conectamos el chatbot a tu número de WhatsApp Business."
  },
  {
    icon: TestTube,
    title: "Pruebas + ajustes",
    description: "Testeamos juntos y afinamos los detalles hasta dejarlo perfecto."
  },
  {
    icon: Rocket,
    title: "¡Listo para funcionar!",
    description: "Tu chatbot empieza a recibir reservas automáticamente."
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

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex items-start gap-6 md:gap-0 animate-fade-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`p-6 rounded-2xl bg-background border border-border hover:shadow-card transition-all duration-300 ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-sm`}>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-soft z-10">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Step number */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-8xl font-extrabold text-primary/5 ${
                  index % 2 === 0 ? "right-0" : "left-0"
                }`}>
                  {index + 1}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
