import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t("about.paragraph1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.paragraph2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.paragraph3")}
              </p>
            </div>
            
            {/* Personal info cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <User className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.age")}</p>
                    <p className="font-semibold">25 ans</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.location")}</p>
                    <p className="font-semibold">Tanger, Maroc</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-sm">Kazmouhi.malak@gmail.com</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.phone")}</p>
                    <p className="font-semibold">+212 652 57 12 13</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Image and achievements */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Hassan Kazmouhi programming workspace" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
            
            {/* Achievement stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4 hover-elevate">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">{t("about.years_experience")}</div>
              </Card>
              <Card className="text-center p-4 hover-elevate">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">{t("about.projects")}</div>
              </Card>
              <Card className="text-center p-4 hover-elevate">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">{t("about.technologies")}</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
