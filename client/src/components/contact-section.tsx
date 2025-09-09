import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { downloadCV } from "@/lib/cv-download";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Success",
      description: t("contact.success"),
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t("contact.get_in_touch")}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:Kazmouhi.malak@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      Kazmouhi.malak@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.phone")}</p>
                    <a href="tel:+212652571213" className="text-muted-foreground hover:text-primary transition-colors">
                      +212 652 57 12 13
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.location")}</p>
                    <p className="text-muted-foreground">Tanger, Maroc</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div>
              <h4 className="font-medium mb-4">{t("contact.follow_me")}</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-linkedin"
                >
                  <a href="https://linkedin.com/in/hassan-kazmouhi" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-email"
                >
                  <a href="mailto:Kazmouhi.malak@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid="social-phone"
                >
                  <a href="tel:+212652571213">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* CV Download */}
            <Card className="p-6">
              <h4 className="font-medium mb-3">{t("contact.download_cv")}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t("contact.cv_description")}</p>
              <Button 
                onClick={downloadCV}
                className="w-full"
                data-testid="button-download-cv"
              >
                <Download className="h-4 w-4 mr-2" />
                {t("contact.download")}
              </Button>
            </Card>
          </div>
          
          {/* Contact form */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">{t("contact.send_message")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">{t("contact.first_name")}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t("contact.last_name")}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">{t("contact.subject")}</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button type="submit" className="w-full" data-testid="button-send-message">
                {t("contact.send")}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
