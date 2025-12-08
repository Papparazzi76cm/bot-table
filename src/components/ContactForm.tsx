import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Reserva tu demo gratuita
            </h2>
            <p className="text-lg text-muted-foreground">
              Déjanos tus datos y te contactamos en menos de 24 horas para 
              mostrarte cómo ReservaBot puede transformar tu restaurante.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium text-foreground mb-2">
                  Restaurante *
                </label>
                <Input
                  id="restaurant"
                  name="restaurant"
                  type="text"
                  required
                  placeholder="Nombre del restaurante"
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+34 612 345 678"
                  className="h-12"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntanos sobre tu restaurante y qué necesitas..."
                className="resize-none"
              />
            </div>

            <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? (
                "Enviando..."
              ) : (
                <>
                  Solicitar Demo
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar este formulario, aceptas nuestra{" "}
              <a href="#" className="text-primary hover:underline">política de privacidad</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
