import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito WhatsApp Business API?",
    answer: "Sí, para que el chatbot funcione correctamente necesitas WhatsApp Business API. Nosotros te ayudamos con todo el proceso de configuración y verificación. Si ya tienes WhatsApp Business normal, te guiamos en la migración."
  },
  {
    question: "¿Qué pasa si no tengo web?",
    answer: "¡No hay problema! El chatbot funciona directamente en WhatsApp, sin necesidad de tener una página web. Tus clientes simplemente escriben a tu número de WhatsApp y el bot gestiona la reserva automáticamente."
  },
  {
    question: "¿Puedo integrar el chatbot con mi TPV?",
    answer: "Sí, en nuestro plan Premium ofrecemos integración con los principales sistemas TPV del mercado. Si usas un TPV específico, consúltanos y te confirmamos la compatibilidad."
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer: "El proceso completo suele durar entre 3 y 7 días laborables, dependiendo de la complejidad de tu configuración. Incluye la reunión inicial, diseño del chatbot, instalación y pruebas."
  },
  {
    question: "¿Puedo personalizar los mensajes del chatbot?",
    answer: "Por supuesto. Personalizamos todos los mensajes con el tono y estilo de tu restaurante. Además, puedes solicitar cambios en cualquier momento y los implementamos sin coste adicional."
  },
  {
    question: "¿Qué pasa si hay un problema técnico?",
    answer: "Contamos con soporte técnico especializado. En los planes Profesional y Premium, tienes soporte prioritario con respuesta en menos de 4 horas en horario laboral. También monitorizamos el sistema 24/7."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, no hay permanencia. Puedes cancelar tu suscripción mensual cuando quieras. Solo te pedimos un aviso de 15 días para hacer una transición ordenada."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas. Si no encuentras la respuesta que buscas, 
            escríbenos y te ayudamos encantados.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
