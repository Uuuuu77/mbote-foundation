import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Heart, Shield } from "lucide-react";

/** Pain points data */
const problems = [
  { num: "01", title: "Capital is inaccessible", desc: "African founders face a funding gap orders of magnitude larger than their counterparts in Silicon Valley. The infrastructure to connect great ideas with capital simply doesn't exist at scale." },
  { num: "02", title: "Ecosystems are fragmented", desc: "Mentorship, legal support, technical talent, and market access are scattered across disconnected networks. No single platform brings them together for the African context." },
  { num: "03", title: "Institutions weren't built for us", desc: "Global innovation infrastructure was designed for founders in New York, London, and San Francisco. African founders need purpose-built systems, not imported frameworks." },
];

/** Values data */
const values = [
  { icon: Target, title: "Mission permanence", desc: "We are building an institution designed to outlive its founders. Every decision is made with a 50-year horizon — not a 5-year fund cycle." },
  { icon: Heart, title: "Radical honesty", desc: "We publish our blueprint openly. We say what we have and what we don't. Trust is earned through transparency, not marketing." },
  { icon: Shield, title: "Self-sustaining model", desc: "Our for-profit Ventures arm funds our non-profit mission. We don't depend on perpetual fundraising — we built the engine to fund ourselves." },
];

/** Presence locations */
const locations = [
  { flag: "🇰🇪", city: "Nairobi", country: "Kenya", status: "HQ — Founding city" },
  { flag: "🇳🇬", city: "Lagos", country: "Nigeria", status: "Planned — 2026" },
  { flag: "🇬🇭", city: "Accra", country: "Ghana", status: "Planned — 2027" },
  { flag: "🇺🇸", city: "San Francisco", country: "United States", status: "Planned — Diaspora hub" },
  { flag: "🇺🇸", city: "Austin", country: "United States", status: "Planned — Ventures office" },
  { flag: "🇸🇬", city: "Singapore", country: "Singapore", status: "Planned — Asia bridge" },
];

const About = () => {
  const problemAnim = useScrollAnimation();
  const teamAnim = useScrollAnimation();
  const presenceAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1800&q=80&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.85)] to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28 md:py-36">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-6 animate-fade-in">ABOUT MBOTE FOUNDATION</p>
          <h1 className="font-display font-extrabold text-foreground text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-slide-up">
            We exist to build the infrastructure Africa's boldest founders never had.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            A non-profit and for-profit dual entity, self-sustaining by design, founded in Nairobi with a global mandate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/manifesto" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity">
              Read the Manifesto →
            </Link>
            <Link to="/contact" className="border border-border text-foreground rounded-full px-8 py-3.5 text-base hover:border-primary hover:text-primary transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section ref={problemAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${problemAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">THE PROBLEM</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Why does this need to exist?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <div
                key={p.num}
                className={`bg-background border border-border rounded-xl p-8 hover:border-primary/25 transition-all duration-300 ${problemAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="font-mono text-4xl font-bold text-primary/20">{p.num}</span>
                <h3 className="font-display font-semibold text-foreground text-xl mt-4 mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team / Founder */}
      <section ref={teamAnim.ref} className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${teamAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">THE FOUNDER</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Built from lived experience.</h2>
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${teamAnim.isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <img src="/john-mbote.jpeg" alt="John Mbote Njuguna, founder of Mbote Foundation" className="h-72 w-full object-cover" />
                <div className="p-8">
                  <h3 className="font-display font-bold text-lg text-foreground">John Mbote Njuguna</h3>
                  <p className="text-primary text-sm font-medium mt-1">Founder, Mbote Foundation</p>
                  <p className="text-muted-foreground text-sm mt-1">Nairobi, Kenya</p>
                  <hr className="border-border my-6" />
                  <blockquote className="border-l-2 border-primary pl-4">
                    <p className="text-muted-foreground text-[15px] italic leading-relaxed">
                      "I have spent years trying to build technology in Africa with no capital, no network, no infrastructure designed for someone like me."
                    </p>
                    <cite className="text-muted-foreground/60 text-sm mt-2 block not-italic">— John Mbote Njuguna</cite>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                John Mbote Njuguna has spent years trying to build technology companies in Africa — fighting systems not designed for founders like him. Mbote Foundation is his answer: the infrastructure he never had.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The turning point came when he stopped asking "what's wrong with me?" and started asking "what's missing?" Every founder he met across Nairobi, Lagos, Accra, and Johannesburg told the same story. Different name, different idea, same structural absence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mbote Foundation is the organization he needed — a non-profit Foundation running community programs alongside a for-profit Ventures arm that invests in frontier technology and returns all profits to fund the mission. Commerce and impact, running as one machine.
              </p>
              <Link to="/manifesto" className="inline-block text-primary font-medium hover:opacity-80 transition-opacity mt-4">
                Read the full manifesto →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section ref={presenceAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${presenceAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">OUR PRESENCE</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Starting in Nairobi. Building globally.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`bg-background border border-border rounded-xl p-8 hover:border-primary/25 transition-all duration-300 ${presenceAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="text-4xl">{loc.flag}</span>
                <h3 className="font-display font-semibold text-foreground text-lg mt-4">{loc.city}</h3>
                <p className="text-muted-foreground text-sm">{loc.country}</p>
                <p className="font-mono text-[10px] tracking-widest text-primary mt-3">{loc.status.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section ref={valuesAnim.ref} className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${valuesAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">OUR VALUES</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">What drives us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`${valuesAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section ref={ctaAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 text-center ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join us in building the future.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10" style={{ lineHeight: 1.7 }}>
            Whether you're a founder, investor, engineer, or researcher — there is a place for you at Mbote Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity">
              Build With Us →
            </Link>
            <Link to="/ventures" className="border border-border text-foreground rounded-full px-8 py-3.5 text-base hover:border-primary hover:text-primary transition-colors">
              Explore Ventures
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
