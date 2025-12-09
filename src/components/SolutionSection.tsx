import { Bot, Clock, CalendarCheck, Bell, LayoutDashboard, CheckCircle } from "lucide-react";

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

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
              <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
                    <Bot className="w-5 h-5 text-whatsapp-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Trazo Digital</p>
                    <p className="text-xs text-muted-foreground">En línea</p>
                  </div>
                </div>

                {/* Chat simulation */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      Hola, quiero reservar mesa para 4 personas
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      ¡Hola! 👋 Claro, te ayudo con tu reserva. ¿Para qué día y hora la necesitas?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      Para el sábado a las 21:00
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <div className="flex items-center gap-2 text-whatsapp font-medium">
                        <CheckCircle className="w-4 h-4" />
                        ¡Perfecto! Mesa confirmada
                      </div>
                      <p className="mt-1 text-sm">Sábado 14 dic, 21:00h - 4 personas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
