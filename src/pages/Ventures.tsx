import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Rocket, Brain, Globe, Clock, Zap, Target, Users, TrendingUp, Cpu, Sun, Stethoscope, GraduationCap, Leaf, Film, Factory, Shield } from "lucide-react";

/** Investment thesis */
const thesis = [
  { num: "01", title: "We back outliers.", desc: "Founders with non-consensus insights, unconventional backgrounds, and the conviction to build what others say is impossible. We are not looking for the obvious bet." },
  { num: "02", title: "We think in decades.", desc: "Patient capital for hard problems. We are not here for the quick exit. We are here to build companies that last generations — the way Africa's challenges demand." },
  { num: "03", title: "We start in Africa.", desc: "Local insight is a moat. Founders building for African markets first carry a depth of understanding no outsider can replicate — and global markets will follow." },
];

/** What we look for */
const criteria = [
  { icon: Brain, title: "Non-consensus thinking", desc: "Founders who see what others miss. We want the insights that feel obvious in hindsight but contrarian today." },
  { icon: Target, title: "Hard problems", desc: "We back companies working on problems that matter — not incremental improvements but fundamental breakthroughs." },
  { icon: Globe, title: "Africa-first, global-ready", desc: "Companies that start with deep African market insight and build products the world will adopt." },
  { icon: Clock, title: "Long-term conviction", desc: "We want founders who are building for the next 20 years, not the next funding round." },
];

/** Sectors */
const sectors = [
  { icon: Cpu, title: "Artificial Intelligence", desc: "AI infrastructure and applications built for African contexts." },
  { icon: Rocket, title: "Space Technology", desc: "Satellite systems, Earth observation, and launch infrastructure." },
  { icon: Stethoscope, title: "Biotech & Health", desc: "Drug discovery, diagnostics, and healthcare delivery at scale." },
  { icon: Sun, title: "Renewable Energy", desc: "Solar, wind, battery storage, and grid infrastructure." },
  { icon: TrendingUp, title: "Fintech", desc: "Banking, payments, insurance, and financial inclusion." },
  { icon: GraduationCap, title: "Education", desc: "EdTech platforms and workforce development." },
  { icon: Leaf, title: "Agriculture", desc: "AgTech, supply chain, and food security systems." },
  { icon: Shield, title: "Emergency Aid", desc: "Disaster response technology and humanitarian logistics." },
  { icon: Factory, title: "Manufacturing", desc: "Advanced manufacturing and industrial automation." },
  { icon: Zap, title: "Climate Tech", desc: "Carbon capture, clean water, and environmental monitoring." },
  { icon: Film, title: "Arts & Cinema", desc: "Creative technology, streaming platforms, and content tools." },
  { icon: Users, title: "Infrastructure", desc: "Connectivity, logistics, and civic technology." },
];

/** Pitch process steps */
const pitchSteps = [
  { step: "01", title: "Reach out", desc: "Send us a one-page overview via WhatsApp or email. No pitch deck needed initially — we want to understand you and the problem you're solving." },
  { step: "02", title: "Initial conversation", desc: "A 30-minute call with our team. We'll ask about your vision, your market, and why you're the right person to build this." },
  { step: "03", title: "Deep dive", desc: "If we're aligned, we go deeper — technical review, market analysis, and founder reference checks. Decisions within 4 weeks." },
];

const Ventures = () => {
  const thesisAnim = useScrollAnimation();
  const criteriaAnim = useScrollAnimation();
  const pitchAnim = useScrollAnimation();
  const sectorAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.85)] to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28 md:py-36">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-6 animate-fade-in">MBOTE VENTURES</p>
          <h1 className="font-display font-extrabold text-foreground text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-slide-up">
            Backing the founders who will define the next century.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            The for-profit arm of Mbote Foundation. All profits fund the mission.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              { value: "12", label: "Sectors" },
              { value: "$0 →", label: "Raising" },
              { value: "100%", label: "Profits to Mission" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-mono text-3xl md:text-4xl font-bold text-primary">{m.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section ref={thesisAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className={`font-mono text-[10px] tracking-widest text-primary mb-4 ${thesisAnim.isVisible ? "animate-fade-in" : "opacity-0"}`}>INVESTMENT THESIS</p>
          {thesis.map((t, i) => (
            <div
              key={t.num}
              className={`py-10 ${i < thesis.length - 1 ? "border-b border-border" : ""} ${thesisAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="font-mono text-[10px] tracking-widest text-primary mb-2">{t.num}</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{t.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Look For */}
      <section ref={criteriaAnim.ref} className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${criteriaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">WHAT WE LOOK FOR</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">The founders we back.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {criteria.map((c, i) => (
              <div
                key={c.title}
                className={`bg-card border border-border rounded-xl p-8 hover:border-primary/25 transition-all duration-300 ${criteriaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <c.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Pitch Us */}
      <section ref={pitchAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${pitchAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">HOW TO PITCH US</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Three steps. No bureaucracy.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-6 bottom-6 w-px bg-border" />
            {pitchSteps.map((s, i) => (
              <div
                key={s.step}
                className={`relative flex gap-8 pb-12 last:pb-0 ${pitchAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-primary-foreground">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section ref={sectorAnim.ref} className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${sectorAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">SECTORS</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">12 sectors. One thesis.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <div
                key={s.title}
                className={`bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:bg-card/80 transition-all duration-300 ${sectorAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <s.icon className="text-primary mb-4" size={24} />
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section ref={ctaAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 text-center ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground italic mb-6">
            Are you building something bold?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10" style={{ lineHeight: 1.7 }}>
            We want to hear from founders who are building for the long term — solving hard problems with deep conviction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity">
              Pitch Mbote Ventures →
            </Link>
            <Link to="/manifesto" className="border border-border text-foreground rounded-full px-8 py-3.5 text-base hover:border-primary hover:text-primary transition-colors">
              Read the Manifesto
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ventures;
