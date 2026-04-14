import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const setupPrices = ["297", "497", "997"];
const monthlyPrices = ["49", "89", "149"];
const highlighted = [false, true, false];

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="precios" className="py-16 md:py-24">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {t.pricing.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.pricing.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <div
                className={`relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col ${
                  highlighted[index]
                    ? "bg-gradient-to-b from-primary/5 to-accent/5 border-primary shadow-card scale-105"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {highlighted[index] && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent text-accent-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {t.pricing.mostPopular}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">{t.pricing.setup} </span>
                    <span className="text-2xl font-bold text-foreground">{setupPrices[index]}€</span>
                  </div>
                  <div>
                    <span className="text-4xl font-extrabold text-foreground">{monthlyPrices[index]}€</span>
                    <span className="text-muted-foreground">{t.pricing.perMonth}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${highlighted[index] ? "text-primary" : "text-whatsapp"}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={highlighted[index] ? "accent" : "outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href="#contacto">{t.pricing.requestSetup}</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={400}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            {t.pricing.footer}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
