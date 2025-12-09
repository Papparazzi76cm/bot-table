import { Clock, TrendingUp, HeadphonesIcon, ShieldCheck, Star } from "lucide-react";
import mockupApp from "@/assets/mockup-app.png";
import mockupProfile from "@/assets/mockup-profile.jpeg";

const benefits = [
  {
    icon: Clock,
    title: "Ahorra horas diarias",
    description: "Libera a tu equipo de gestionar reservas manualmente. Más tiempo para atender a tus clientes.",
    stat: "+3h/día"
  },
  {
    icon: TrendingUp,
    title: "Incrementa las reservas",
    description: "Nunca pierdas una reserva por no poder atender el teléfono. Recibe pedidos 24/7.",
    stat: "+40%"
  },
  {
    icon: HeadphonesIcon,
    title: "Atención profesional",
    description: "Respuestas instantáneas y consistentes que mejoran la percepción de tu restaurante.",
    stat: "5★"
  },
  {
    icon: ShieldCheck,
    title: "Reduce errores",
    description: "Adiós a las confusiones de fechas, horas o número de comensales. Todo queda registrado.",
    stat: "-95%"
  },
  {
    icon: Star,
    title: "Mejora tu imagen",
    description: "Proyecta modernidad e innovación. Tus clientes valorarán la facilidad de reservar.",
    stat: "Premium"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transforma la gestión de tu restaurante
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados tangibles desde el primer día. Nuestros clientes experimentan 
            mejoras significativas en eficiencia y satisfacción del cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Benefits cards */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 text-xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  {benefit.stat}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Mockups */}
          <div className="relative flex justify-center items-center gap-4">
            <img
              src={mockupApp}
              alt="Aplicación móvil Trazo"
              className="w-48 md:w-56 drop-shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            />
            <img
              src={mockupProfile}
              alt="Perfil de usuario en Trazo"
              className="w-44 md:w-52 drop-shadow-2xl animate-fade-up -mt-12"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>

        {/* Last benefit card centered */}
        <div className="max-w-md mx-auto">
          <div
            className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-up text-center"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute top-6 right-6 text-2xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
              {benefits[4].stat}
            </div>
            
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors mx-auto">
              <Star className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3">{benefits[4].title}</h3>
            <p className="text-muted-foreground">{benefits[4].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
