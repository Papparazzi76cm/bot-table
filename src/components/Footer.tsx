import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import trazoLogo from "@/assets/trazo-digital-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <img src={trazoLogo} alt="Trazo Digital" className="h-14 w-auto" />
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              {t.footer.description}
            </p>
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              {t.footer.whatsapp}
            </Button>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.product}</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#solucion" className="hover:text-primary-foreground transition-colors">{t.header.solution}</a></li>
              <li><a href="#beneficios" className="hover:text-primary-foreground transition-colors">{t.header.benefits}</a></li>
              <li><a href="#precios" className="hover:text-primary-foreground transition-colors">{t.header.pricing}</a></li>
              <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">{t.header.howItWorks}</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">{t.header.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@trazodigital.es" className="hover:text-primary-foreground transition-colors">
                  hola@trazodigital.es
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
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
