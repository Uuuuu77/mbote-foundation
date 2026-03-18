import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, FlaskConical, Lightbulb, GraduationCap, Cpu, Microscope, Rocket } from "lucide-react";

/** Impact stats */
const stats = [
  { value: "10+", label: "Engineers in the network" },
  { value: "5", label: "Countries represented" },
  { value: "1", label: "Shared mission" },
];

/** Programs data with alternating layout */
const programs = [
  {
    title: "Hackathons",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=70&fit=crop",
    desc: "Rapid-build events bringing talent together to solve defined problems in climate, health, and infrastructure. Open to engineers and designers worldwide. No experience minimum — only conviction required.",
    details: ["48-72 hour intensive builds", "Real problems from real communities", "Prizes include Ventures pipeline access"],
  },
  {
    title: "Research Labs",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=70&fit=crop",
    desc: "Collaborative programs connecting African scientists with global research partners to produce open-source work. Foundation-backed startups build on this research directly.",
    details: ["Open-source publication mandate", "Cross-institutional collaboration", "Direct path to Ventures funding"],
  },
  {
    title: "Startup Incubation",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=70&fit=crop",
    desc: "Structured support for early-stage founders: mentorship, resources, access to the Mbote Ventures pipeline, and a community of peers navigating the same journey.",
    details: ["6-month structured program", "Mentorship from experienced founders", "Demo day to Mbote Ventures investors"],
  },
  {
    title: "Fellowships",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=70&fit=crop",
    desc: "12-month funded fellowships for exceptional researchers and engineers working at the intersection of technology and the Foundation's mission areas.",
    details: ["Fully funded for 12 months", "Access to research labs and community", "Publication and presentation support"],
  },
];

/** Personas */
const personas = [
  {
    icon: Cpu,
    title: "Engineers",
    desc: "Software engineers, hardware developers, and systems architects who want their technical work to drive meaningful impact.",
    gets: ["Access to hackathons and project teams", "Mentorship from senior engineers", "Path to founding or joining a Ventures-backed company"],
  },
  {
    icon: Microscope,
    title: "Researchers",
    desc: "Scientists and academics working on problems in AI, biotech, climate, agriculture, or energy who want to translate research into real-world applications.",
    gets: ["Research lab access and funding", "Fellowship opportunities", "Open-source publication support"],
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    desc: "Early-stage founders with bold ideas and the conviction to build something lasting — even without the resources others take for granted.",
    gets: ["Incubation program placement", "Access to Mbote Ventures pipeline", "Community of founders on the same journey"],
  },
];

const Builders = () => {
  const statsAnim = useScrollAnimation();
  const programsAnim = useScrollAnimation();
  const personaAnim = useScrollAnimation();
  const quoteAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1800&q=80&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.85)] to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28 md:py-36">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-6 animate-fade-in">MBOTE BUILDERS</p>
          <h1 className="font-display font-extrabold text-foreground text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-slide-up">
            The community building Africa's future.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            Engineers, researchers, scientists, and builders who want to contribute to Africa's innovation future — not just observe it from a distance.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section ref={statsAnim.ref} className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className={`grid grid-cols-3 gap-8 text-center ${statsAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-4xl md:text-5xl font-bold text-primary">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — alternating layout */}
      <section ref={programsAnim.ref} className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${programsAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">OUR PROGRAMS</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Four ways to build with us.</h2>
          </div>
          <div className="space-y-16">
            {programs.map((prog, i) => (
              <div
                key={prog.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""} ${programsAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={prog.img}
                    alt={`${prog.title} — Mbote Builders program`}
                    className="w-full h-64 md:h-80 object-cover rounded-xl border border-border"
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-4">{prog.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{prog.desc}</p>
                  <ul className="space-y-2">
                    {prog.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-block text-primary font-medium mt-6 hover:opacity-80 transition-opacity">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section ref={personaAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${personaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">WHO SHOULD APPLY</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Is this for you?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((p, i) => (
              <div
                key={p.title}
                className={`bg-background border border-border rounded-xl p-8 hover:border-primary/25 transition-all duration-300 ${personaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5">
                  <p.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.gets.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section ref={quoteAnim.ref} className="py-28 md:py-36 bg-background">
        <div className={`max-w-3xl mx-auto px-6 md:px-12 ${quoteAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary mb-8">WHAT OUR BUILDERS SAY</p>
          <div className="bg-card rounded-2xl border border-border p-10">
            <span className="font-serif text-8xl text-primary/20 leading-none block -mb-8">"</span>
            <blockquote className="text-foreground text-xl italic leading-relaxed">
              Joining the Builders community gave me something I'd never found anywhere else — a network of people who understood my context, my constraints, and my ambition. For the first time, I wasn't building alone.
            </blockquote>
            <div className="mt-6">
              <p className="text-foreground font-medium">— A Mbote Builder</p>
              <p className="text-muted-foreground text-sm italic">Illustrative testimonial</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 text-center ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to build?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10" style={{ lineHeight: 1.7 }}>
            Whether you're an engineer, researcher, or entrepreneur — there's a place for you at Mbote Builders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity">
              Apply to Join Builders →
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

export default Builders;
