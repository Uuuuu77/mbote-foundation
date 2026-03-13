import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Target, Eye, Users } from "lucide-react";

const locations = [
  { name: "Konza Technopolis, Kenya", type: "Headquarters" },
  { name: "Texas, United States", type: "Headquarters" },
  { name: "San Francisco", type: "Innovation Hub" },
  { name: "New York", type: "Innovation Hub" },
  { name: "Singapore", type: "Innovation Hub" },
  { name: "Konza Technopolis", type: "Innovation Hub" },
];

const values = [
  { icon: Target, title: "Bold Ambition", desc: "We back ideas that aim to solve humanity's biggest challenges, not incremental improvements." },
  { icon: Eye, title: "Long-Term Vision", desc: "We think in decades, not quarters. True innovation takes patience and conviction." },
  { icon: Users, title: "Global Community", desc: "We connect brilliant minds across continents to build solutions that transcend borders." },
];

const About = () => {
  const missionAnim = useScrollAnimation();
  const locAnim = useScrollAnimation();
  const valAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            About Mbote Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            A mission-driven organization dedicated to building and backing the future from Africa.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionAnim.ref} className="py-24 bg-background">
        <div className={`container mx-auto px-4 max-w-3xl ${missionAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Mission</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Mbote Foundation exists to support bold thinkers, engineers, scientists, and entrepreneurs building solutions for global challenges.
            </p>
            <p>
              From artificial intelligence and renewable energy to biotech and space technologies, we believe the next generation of world-changing companies can emerge from Africa.
            </p>
            <p>
              We provide funding, mentorship, infrastructure, and a global network to help visionary founders turn breakthrough ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section ref={locAnim.ref} className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className={`mb-16 ${locAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Presence</h2>
            <p className="text-lg text-muted-foreground">Global reach, African roots.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className={`bg-card rounded-lg p-6 border ${locAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{loc.type}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">{loc.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valAnim.ref} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${valAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`text-center ${valAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
