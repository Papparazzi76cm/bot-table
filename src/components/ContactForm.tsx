import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const leadSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  phone: z.string().trim().max(20, "Máximo 20 caracteres").optional().or(z.literal("")),
  restaurant_name: z.string().trim().min(1, "El restaurante es obligatorio").max(100, "Máximo 100 caracteres"),
  message: z.string().trim().max(1000, "Máximo 1000 caracteres").optional().or(z.literal("")),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

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

    const result = leadSchema.safeParse(rawData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: t.contact.validationError,
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

      supabase.functions.invoke("send-demo-notification", {
        body: {
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || undefined,
          restaurant_name: result.data.restaurant_name,
          message: result.data.message || undefined,
        },
      }).catch((err) => console.error("Email notification error:", err));

      (e.target as HTMLFormElement).reset();
      navigate("/gracias");
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: t.contact.submitError,
        description: t.contact.submitErrorDesc,
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
                {t.contact.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.contact.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.name} {t.contact.required}
                  </label>
                  <Input id="name" name="name" type="text" required maxLength={100} placeholder={t.contact.namePlaceholder} className="h-12" />
                </div>
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.restaurant} {t.contact.required}
                  </label>
                  <Input id="restaurant" name="restaurant" type="text" required maxLength={100} placeholder={t.contact.restaurantPlaceholder} className="h-12" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.email} {t.contact.required}
                  </label>
                  <Input id="email" name="email" type="email" required maxLength={255} placeholder={t.contact.emailPlaceholder} className="h-12" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.phone}
                  </label>
                  <Input id="phone" name="phone" type="tel" maxLength={20} placeholder={t.contact.phonePlaceholder} className="h-12" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.message}
                </label>
                <Textarea id="message" name="message" rows={4} maxLength={1000} placeholder={t.contact.messagePlaceholder} className="resize-none" />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? t.contact.submitting : (
                  <>
                    {t.contact.submit}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t.contact.privacy}{" "}
                <a href="#" className="text-primary hover:underline">{t.contact.privacyLink}</a>.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
