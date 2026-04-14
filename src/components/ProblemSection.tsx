import { Phone, UserX, Clock, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import stressedOwner from "@/assets/stressed-owner.png";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Phone, UserX, Clock, AlertTriangle];

const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          <ScrollReveal animation="fade-up">
            <div className="text-center lg:text-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                {t.problem.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.problem.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.problem.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={200}>
            <div className="relative group cursor-pointer">
              <img
                src={stressedOwner}
                alt={t.problem.imageAlt}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.4)]"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-destructive/20 rounded-2xl -z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-destructive/10 rounded-2xl -z-10 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.problem.items.map((problem, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                    <Icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
