import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ReservaBot</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Automatizamos las reservas de tu restaurante con chatbots inteligentes 
              para WhatsApp. Más reservas, menos trabajo.
            </p>
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Producto</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#solucion" className="hover:text-primary-foreground transition-colors">Solución</a></li>
              <li><a href="#beneficios" className="hover:text-primary-foreground transition-colors">Beneficios</a></li>
              <li><a href="#precios" className="hover:text-primary-foreground transition-colors">Precios</a></li>
              <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">Cómo funciona</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@reservabot.es" className="hover:text-primary-foreground transition-colors">
                  hola@reservabot.es
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+34612345678" className="hover:text-primary-foreground transition-colors">
                  +34 612 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Barcelona, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 ReservaBot. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
