import { Phone, UserX, Clock, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: Phone,
    title: "Llamadas constantes",
    description: "Tu teléfono no para de sonar durante el servicio, distrayendo a tu equipo."
  },
  {
    icon: UserX,
    title: "Reservas perdidas",
    description: "Clientes que llaman fuera de horario y nunca vuelven a intentarlo."
  },
  {
    icon: Clock,
    title: "Sobrecarga de personal",
    description: "Tu equipo pierde tiempo valioso gestionando reservas manualmente."
  },
  {
    icon: AlertTriangle,
    title: "Mala organización",
    description: "Overbooking, dobles reservas y caos en la gestión de mesas."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              El problema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Te suena familiar?
            </h2>
            <p className="text-lg text-muted-foreground">
              La gestión tradicional de reservas consume tiempo, genera estrés y te hace 
              perder clientes. Es hora de cambiar las reglas del juego.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} animation="fade-up" delay={index * 100}>
              <div className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
