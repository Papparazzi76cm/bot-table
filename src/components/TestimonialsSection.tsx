import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {t.testimonials.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.testimonials.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 h-full">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
