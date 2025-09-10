import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { downloadCV } from "@/lib/cv-download";
import profileImage from "@/images/profile.jpg";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%), url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-float" style={{animationDelay: '0.5s'}} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-ring" />
              <img 
                src={profileImage}  // ✅ Using imported variable
                alt="Hassan Kazmouhi" 
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-background shadow-xl"
              />
          </div>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow">
              <span className="block">{t("hero.greeting")}</span>
              <span className="block gradient-text">Hassan Kazmouhi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>
              {t("hero.title")}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
              {t("hero.description")}
            </p>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={scrollToContact}
              className="px-8 py-3 text-lg"
              data-testid="button-contact-hero"
            >
              {t("hero.contact")}
            </Button>
            <Button 
              variant="outline"
              onClick={downloadCV}
              className="px-8 py-3 text-lg"
              data-testid="button-download-cv-hero"
            >
              <i className="fas fa-download mr-2" />
              {t("hero.download_cv")}
            </Button>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-linkedin"
              >
                <a href="https://linkedin.com/in/hassan-kazmouhi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-email"
              >
                <a href="mailto:Kazmouhi.malak@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-2xl"
                data-testid="link-phone"
              >
                <a href="tel:+212652571213">
                  <Phone className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <button 
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="button-scroll-down"
            >
              <i className="fas fa-chevron-down text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
