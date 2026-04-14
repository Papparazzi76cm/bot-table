import { MessageSquare, Palette, Smartphone, TestTube, Rocket } from "lucide-react";
import whatsappMockup1 from "@/assets/whatsapp-mockup-1.png";
import whatsappMockup2 from "@/assets/whatsapp-mockup-2.png";
import calendarDashboard from "@/assets/calendar-dashboard.png";
import whatsappTesting from "@/assets/whatsapp-testing.png";
import restaurantSuccess from "@/assets/restaurant-success.png";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [MessageSquare, Palette, Smartphone, TestTube, Rocket];
const mockups = [whatsappMockup1, calendarDashboard, whatsappMockup2, whatsappTesting, restaurantSuccess];

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {t.howItWorks.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.howItWorks.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {t.howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                  <div
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <div className={`p-6 rounded-2xl bg-background border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-md`}>
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center lg:hidden">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-soft z-10 hidden lg:flex">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    <div className="flex-1">
                      <div className={`relative ${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
                        <div className="relative max-w-sm mx-auto lg:mx-0 group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-20 scale-95 transition-all duration-500 group-hover:opacity-40 group-hover:scale-100" />
                          <div className="overflow-hidden rounded-2xl">
                            <img 
                              src={mockups[index]} 
                              alt={step.title}
                              className="relative rounded-2xl shadow-card border border-border/50 w-full object-cover aspect-[4/3] transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                            />
                          </div>
                          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-lg shadow-accent transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
