import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const infoAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-4 animate-fade-in">CONTACT</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            We welcome founders, researchers, engineers, investors, and partners who want to build the future.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section ref={infoAnim.ref} className="py-28 bg-card border-y border-border">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <div className={`space-y-8 ${infoAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {/* WhatsApp */}
            <div className="bg-background rounded-xl border border-border p-8 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+254 795 184 144</p>
                </div>
              </div>
              <a
                href="https://wa.me/254795184144"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-semibold rounded-full px-6 py-2.5 text-sm hover:opacity-90 transition-opacity inline-block w-full text-center"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="bg-background rounded-xl border border-border p-8 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">johnmnjuguna89@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:johnmnjuguna89@gmail.com"
                className="border border-border text-foreground font-semibold rounded-full px-6 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors inline-block w-full text-center"
              >
                Send Email
              </a>
            </div>

            {/* Locations */}
            <div className="bg-background rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
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
      </section>
    </Layout>
  );
};

export default Contact;
