import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  GraduationCap, HeartPulse, Leaf, Zap,
  Briefcase, Wheat, ShieldAlert, Film,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/Layout";

const focusAreas = [
  { icon: GraduationCap, title: "Education", desc: "Empowering minds through accessible learning" },
  { icon: HeartPulse, title: "Health", desc: "Innovative healthcare solutions for all" },
  { icon: Leaf, title: "Climate", desc: "Sustainable solutions for our planet" },
  { icon: Zap, title: "Energy", desc: "Clean and renewable energy access" },
  { icon: Briefcase, title: "Entrepreneurship", desc: "Fostering bold business builders" },
  { icon: Wheat, title: "Agriculture", desc: "Tech-driven food security" },
  { icon: ShieldAlert, title: "Emergency Aid", desc: "Rapid response and disaster relief" },
  { icon: Film, title: "Sports, Arts & Cinema", desc: "Creative industries and culture" },
];

const timeline = [
  { year: "2025", label: "Foundation launch" },
  { year: "2030", label: "Innovation labs across Africa" },
  { year: "2035", label: "Global venture platform" },
  { year: "2040", label: "Backing world-changing companies" },
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="container mx-auto px-4 relative z-10 py-20">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-background leading-tight mb-6 animate-slide-up">
          Building the Future<br />from Africa.
        </h1>
        <p className="text-lg sm:text-xl text-background/80 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.15s" }}>
          Mbote Foundation is a mission-driven organization building and backing bold ideas in technology, science, and entrepreneurship to solve humanity's biggest challenges.
        </p>
        <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">Apply to Build</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-background/30 text-background hover:bg-background/10 hover:text-background">
            <Link to="/builders">Join the Community</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const MissionSnippet = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className={`container mx-auto px-4 max-w-3xl text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We exist to support bold thinkers, engineers, scientists, and entrepreneurs building solutions for global challenges. From artificial intelligence and renewable energy to biotech and space technologies, we believe the next generation of world-changing companies can emerge from Africa.
        </p>
        <Button asChild variant="link" className="text-base gap-2">
          <Link to="/about">Learn more about us <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  );
};

const FocusAreasSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="focus-areas" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Focus Areas</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We invest in the sectors that matter most for Africa's future and humanity's progress.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className={`bg-card rounded-lg p-6 border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <area.icon className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Vision</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A roadmap to building Africa's innovation future.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`flex gap-6 items-start mb-10 last:mb-0 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0">
                  {item.year}
                </div>
                {i < timeline.length - 1 && <div className="w-px h-10 bg-border mt-2" />}
              </div>
              <div className="pt-3">
                <p className="text-lg font-medium text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-primary">
      <div className={`container mx-auto px-4 text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
          Ready to build the future?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
          We welcome founders, researchers, engineers, investors, and partners who want to build the future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="text-base px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/ventures">Explore Ventures</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <Layout>
    <HeroSection />
    <MissionSnippet />
    <FocusAreasSection />
    <TimelineSection />
    <CTASection />
  </Layout>
);

export default Index;
