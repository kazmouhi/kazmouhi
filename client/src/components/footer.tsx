import { Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#about", label: t("footer.about") },
    { href: "#skills", label: t("footer.skills") },
    { href: "#projects", label: t("footer.projects") },
    { href: "#experience", label: t("footer.experience") },
    { href: "#contact", label: t("footer.contact") }
  ];

  const services = [
    t("footer.automation"),
    t("footer.programming"),
    t("footer.data_analysis"),
    t("footer.web_development"),
    t("footer.consulting")
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Hassan Kazmouhi</h3>
            <p className="text-muted-foreground mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/hassan-kazmouhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Kazmouhi.malak@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+212652571213"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quick_links")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`footer-link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
