import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Brain, Bot, Landmark, Link2, Sun, Microscope,
  HeartPulse, Rocket, Factory, Leaf, Wheat, Building2,
} from "lucide-react";

const ventures = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Machine learning, NLP, and computer vision solutions" },
  { icon: Bot, title: "Robotics", desc: "Autonomous systems and intelligent automation" },
  { icon: Landmark, title: "Fintech", desc: "Financial inclusion and digital banking" },
  { icon: Link2, title: "Blockchain & Web3", desc: "Decentralized systems and digital assets" },
  { icon: Sun, title: "Renewable Energy", desc: "Solar, wind, and clean energy infrastructure" },
  { icon: Microscope, title: "Biotech", desc: "Genomics, drug discovery, and biomanufacturing" },
  { icon: HeartPulse, title: "Healthcare", desc: "Digital health, diagnostics, and telemedicine" },
  { icon: Rocket, title: "Space Technology", desc: "Satellite systems and space exploration" },
  { icon: Factory, title: "Manufacturing", desc: "Smart manufacturing and Industry 4.0" },
  { icon: Leaf, title: "Climate Technology", desc: "Carbon capture, sustainability solutions" },
  { icon: Wheat, title: "Agriculture Technology", desc: "Precision farming and food systems" },
  { icon: Building2, title: "Infrastructure Technology", desc: "Smart cities and connected infrastructure" },
];

const Ventures = () => {
  const gridAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-4 animate-fade-in">VENTURES</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Mbote Ventures
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            We back ambitious founders building transformative technologies that will define the next century.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridAnim.ref} className="py-28 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`text-center mb-16 ${gridAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Investment Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest across 12 frontier technology sectors driving global transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ventures.map((v, i) => (
              <div
                key={v.title}
                className={`bg-background rounded-xl p-8 border border-border hover:border-primary/25 hover:-translate-y-1 transition-all duration-300 ${
                  gridAnim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="py-28 bg-background">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 text-center ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Founders building the future should reach out.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            If you're building transformative technology, we want to hear from you.
          </p>
          <Link to="/contact" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity inline-block">
            Get in Touch →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Ventures;
