import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gracias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "+34611040204";
  const whatsappMessage = encodeURIComponent(
    "Hola, acabo de solicitar una demo de Trazo Digital y me gustaría más información."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¡Gracias por tu interés!
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Hemos recibido tu solicitud de demo. Nuestro equipo se pondrá en contacto contigo 
              en menos de <strong className="text-foreground">24 horas</strong> para agendar una 
              demostración personalizada de Trazo Digital.
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-semibold text-foreground mb-2">¿Qué sigue?</h2>
              <ul className="text-muted-foreground text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">1.</span>
                  Revisaremos tu solicitud y prepararemos una demo personalizada.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">2.</span>
                  Te contactaremos por email o teléfono para confirmar la cita.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">3.</span>
                  En la demo, te mostraremos cómo Trazo Digital puede transformar tu restaurante.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                  Volver al inicio
                </Link>
              </Button>
              <Button asChild variant="accent" size="lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gracias;
