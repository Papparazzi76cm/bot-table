import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";

const leadSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  phone: z.string().trim().max(20, "Máximo 20 caracteres").optional().or(z.literal("")),
  restaurant_name: z.string().trim().min(1, "El restaurante es obligatorio").max(100, "Máximo 100 caracteres"),
  message: z.string().trim().max(1000, "Máximo 1000 caracteres").optional().or(z.literal("")),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      restaurant_name: formData.get("restaurant") as string,
      message: formData.get("message") as string,
    };

    // Validate input
    const result = leadSchema.safeParse(rawData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Error de validación",
        description: firstError.message,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("leads").insert({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        restaurant_name: result.data.restaurant_name,
        message: result.data.message || null,
      });

      if (error) throw error;

      // Send email notifications (fire and forget - don't block form submission)
      supabase.functions.invoke("send-demo-notification", {
        body: {
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || undefined,
          restaurant_name: result.data.restaurant_name,
          message: result.data.message || undefined,
        },
      }).catch((err) => console.error("Email notification error:", err));

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error al enviar",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Contacto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Reserva tu demo gratuita
              </h2>
              <p className="text-lg text-muted-foreground">
                Déjanos tus datos y te contactamos en menos de 24 horas para 
                mostrarte cómo Trazo Digital puede transformar tu restaurante.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={100}>
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
                    maxLength={100}
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
                    maxLength={100}
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
                    maxLength={255}
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
                    maxLength={20}
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
                  maxLength={1000}
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
