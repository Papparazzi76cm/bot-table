import { Clock, CalendarCheck, Bell, LayoutDashboard, Bot } from "lucide-react";
import calendarDashboard from "@/assets/calendar-dashboard.png";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Clock, CalendarCheck, Bot, Bell, LayoutDashboard];

const SolutionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="solucion" className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal animation="fade-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                {t.solution.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.solution.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.solution.description}
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {t.solution.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <ScrollReveal key={index} animation="slide-right" delay={index * 100}>
                    <div className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal animation="slide-left" delay={200}>
            <div className="relative group cursor-pointer">
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img
                  src={calendarDashboard}
                  alt={t.solution.imageAlt}
                  className="w-full max-w-xl mx-auto rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -z-10 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/20 rounded-2xl -z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
