import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Propietaria, La Trattoria del Mar",
    content: "Desde que implementamos ReservaBot, hemos reducido las llamadas en un 70%. Mis camareros ahora pueden centrarse en atender bien a los clientes en lugar de estar al teléfono.",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Director, Grupo Gastro BCN",
    content: "Gestionamos 3 restaurantes con un solo chatbot. La sincronización con Google Calendar es perfecta y los recordatorios han reducido los no-shows a la mitad.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Chef y propietaria, El Rincón de Ana",
    content: "Al principio era escéptica, pero el chatbot se paga solo. Recibo reservas incluso a las 3 de la madrugada. Mis clientes me dicen que es súper fácil de usar.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Restaurantes de toda España ya confían en nosotros para gestionar sus reservas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
