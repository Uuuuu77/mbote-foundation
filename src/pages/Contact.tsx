import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const infoAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We welcome founders, researchers, engineers, investors, and partners who want to build the future.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section ref={infoAnim.ref} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className={`space-y-8 ${infoAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
              {/* WhatsApp */}
              <div className="bg-card rounded-lg border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <MessageCircle className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">+254 795 184 144</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <a href="https://wa.me/254795184144" target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Email */}
              <div className="bg-card rounded-lg border p-8" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">johnmnjuguna89@gmail.com</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:johnmnjuguna89@gmail.com">
                    Send Email
                  </a>
                </Button>
              </div>

              {/* Locations */}
              <div className="bg-card rounded-lg border p-8" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <MapPin className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Our Locations</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Konza Technopolis, Kenya", "Texas, United States", "San Francisco", "New York", "Singapore"].map(
                    (loc) => (
                      <p key={loc} className="text-sm text-muted-foreground">{loc}</p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
