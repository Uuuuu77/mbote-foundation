import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, FlaskConical, Lightbulb, Users, Globe, Rocket } from "lucide-react";

const features = [
  { icon: Code2, title: "Hackathons", desc: "Regular hackathons bringing together talent from across Africa and the world to build solutions." },
  { icon: FlaskConical, title: "Research Labs", desc: "Access to cutting-edge research facilities and collaboration with leading scientists." },
  { icon: Lightbulb, title: "Startup Incubation", desc: "From idea to company — we provide mentorship, resources, and funding to launch ventures." },
  { icon: Users, title: "Community Network", desc: "Connect with thousands of builders, founders, and innovators globally." },
  { icon: Globe, title: "Global Exposure", desc: "Opportunities to showcase work on international stages and connect with global investors." },
  { icon: Rocket, title: "Accelerator Programs", desc: "Intensive programs designed to take your startup from zero to scale." },
];

const Builders = () => {
  const featAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-4 animate-fade-in">BUILDERS</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Mbote Builders
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            We are building a community of engineers, researchers, and entrepreneurs across Africa and the world. Through hackathons, research labs, and startup incubation, we help transform ideas into global companies.
          </p>
        </div>
      </section>

      {/* Features */}
      <section ref={featAnim.ref} className="py-28 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`text-center mb-16 ${featAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`${featAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="py-28 bg-background">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 text-center ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join the movement.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Whether you're an engineer, researcher, or entrepreneur — there's a place for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity">
              Join Builders →
            </Link>
            <Link to="/contact" className="border border-border text-foreground rounded-full px-8 py-3.5 text-base hover:border-primary hover:text-primary transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Builders;
