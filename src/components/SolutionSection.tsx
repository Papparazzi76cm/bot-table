import { Clock, CalendarCheck, Bell, LayoutDashboard, Bot } from "lucide-react";
import calendarDashboard from "@/assets/calendar-dashboard.png";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Tu chatbot nunca duerme. Recibe reservas a cualquier hora, incluso de madrugada."
  },
  {
    icon: CalendarCheck,
    title: "Confirma automáticamente",
    description: "Verifica disponibilidad al instante y confirma la reserva sin intervención humana."
  },
  {
    icon: Bot,
    title: "Evita overbooking",
    description: "Control inteligente del aforo. Nunca más dobles reservas ni mesas vacías."
  },
  {
    icon: Bell,
    title: "Envía recordatorios",
    description: "Reduce las ausencias con mensajes automáticos 24h antes de la reserva."
  },
  {
    icon: LayoutDashboard,
    title: "Panel de control",
    description: "Gestiona todo desde un dashboard intuitivo o sincroniza con Google Calendar."
  }
];

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal animation="fade-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                La solución
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tu asistente de reservas por WhatsApp
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Un chatbot inteligente que gestiona las reservas de tu restaurante de forma 
                automática. Tus clientes reservan por WhatsApp en segundos, mientras tú te 
                centras en lo que mejor sabes hacer.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} animation="slide-right" delay={index * 100}>
                  <div className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Visual */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={calendarDashboard}
                  alt="Panel de gestión de reservas con calendario y múltiples locales"
                  className="w-full max-w-xl mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
