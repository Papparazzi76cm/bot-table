import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Ideal para empezar a automatizar",
    setupPrice: "297",
    monthlyPrice: "49",
    features: [
      "Chatbot de reservas básico",
      "Hasta 100 reservas/mes",
      "Confirmación automática",
      "Integración Google Calendar",
      "Soporte por email"
    ],
    highlighted: false
  },
  {
    name: "Profesional",
    description: "El más elegido por restaurantes",
    setupPrice: "497",
    monthlyPrice: "89",
    features: [
      "Todo lo del plan Básico",
      "Reservas ilimitadas",
      "Recordatorios automáticos",
      "Panel de control avanzado",
      "Estadísticas y reportes",
      "Soporte prioritario",
      "Personalización del chatbot"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    description: "Para grupos y cadenas",
    setupPrice: "997",
    monthlyPrice: "149",
    features: [
      "Todo lo del plan Profesional",
      "Múltiples locales",
      "API personalizada",
      "Integración con TPV",
      "Gestor de cuenta dedicado",
      "Formación del equipo",
      "SLA garantizado"
    ],
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="precios" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Planes adaptados a tu restaurante
          </h2>
          <p className="text-lg text-muted-foreground">
            Sin sorpresas ni costes ocultos. Elige el plan que mejor se adapte a tus 
            necesidades y empieza a automatizar hoy mismo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 animate-fade-up ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/5 to-accent/5 border-primary shadow-card scale-105"
                  : "bg-card border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent text-accent-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Más popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">Setup: </span>
                  <span className="text-2xl font-bold text-foreground">{plan.setupPrice}€</span>
                </div>
                <div>
                  <span className="text-4xl font-extrabold text-foreground">{plan.monthlyPrice}€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-primary" : "text-whatsapp"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "accent" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="#contacto">Solicitar instalación</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos los precios en EUR + IVA. Cancelación en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
