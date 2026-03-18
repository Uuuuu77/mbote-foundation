import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  GraduationCap, HeartPulse, Leaf, Zap,
  Briefcase, Wheat, ShieldAlert, Film,
  ArrowRight, Check, Star,
} from "lucide-react";
import Layout from "@/components/Layout";

const tickerItems = "AI · Space · Biotech · Renewable Energy · Education · Climate · Fintech · Health · Agriculture · Infrastructure · Emergency Aid · Cinema · Robotics · Manufacturing · ";

const focusAreas = [
  { icon: GraduationCap, title: "Education", desc: "Empowering minds through accessible, technology-driven learning across Africa.", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=70&fit=crop" },
  { icon: HeartPulse, title: "Health", desc: "Innovative healthcare solutions making quality care accessible to every community.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=70&fit=crop" },
  { icon: Leaf, title: "Climate", desc: "Sustainable solutions addressing the defining challenge of our generation.", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=70&fit=crop" },
  { icon: Zap, title: "Energy", desc: "Clean, renewable energy access powering Africa's next industrial revolution.", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=70&fit=crop" },
  { icon: Briefcase, title: "Entrepreneurship", desc: "Fostering bold business builders with the tools and networks to scale globally.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=70&fit=crop" },
  { icon: Wheat, title: "Agriculture", desc: "Tech-driven food security transforming how the continent feeds itself.", img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=70&fit=crop" },
  { icon: ShieldAlert, title: "Emergency Aid", desc: "Rapid response systems and disaster relief infrastructure for vulnerable communities.", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=70&fit=crop" },
  { icon: Film, title: "Space, Arts & Cinema", desc: "Creative industries, space exploration, and culture as engines of progress.", img: "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=600&q=70&fit=crop" },
];

const founderTimeline = [
  { year: "Early years", title: "Curiosity without infrastructure", body: "The ideas were always there. The ecosystem wasn't.", current: false },
  { year: "The struggle", title: "Building without a safety net", body: "Capital inaccessible. Mentorship non-existent. Every institution built for someone else's context.", current: false },
  { year: "The realization", title: "The problem is structural, not personal", body: "Every founder I spoke to across Africa told the same story. Not failure — a missing layer of support.", current: false },
  { year: "2025 · NOW", title: "Building what was missing", body: "Mbote Foundation is that missing layer. Pre-launch. Pre-capital. Full conviction.", current: true },
];

const visionTimeline = [
  { year: "2025", title: "The Foundation", body: "We launch publicly and begin assembling the Builders community — our first engineers, scientists, and aligned investors.", badge: "NOW · SEEKING BUILDERS" },
  { year: "2030", title: "The Labs", body: "Innovation labs operational in Nairobi, Lagos, Accra, CapeTown, Kigali, Konza, Casablanca. First 20 companies in the Ventures portfolio. Research partnerships on three continents.", badge: null },
  { year: "2035", title: "The Platform", body: "Mbote Ventures is a recognized frontier technology investment platform. Portfolio companies in 20+ countries. Foundation programs reaching 1M+ beneficiaries.", badge: null },
  { year: "2040", title: "The Legacy", body: "Companies we've backed have shaped healthcare, energy, food, and connectivity for hundreds of millions. Africa is the defining innovation continent of the 21st century.", badge: null },
];

const builderPrograms = [
  { title: "Hackathons", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=70", desc: "Rapid-build events bringing talent together to solve defined problems in climate, health, and infrastructure. Open to engineers and designers worldwide. No experience minimum — only conviction required." },
  { title: "Research Labs", img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&q=70", desc: "Collaborative programs connecting African scientists with global research partners to produce open-source work. Foundation-backed startups build on this research directly." },
  { title: "Startup Incubation", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=70", desc: "Structured support for early-stage founders: mentorship, resources, access to the Mbote Ventures pipeline, and a community of peers navigating the same journey." },
  { title: "Fellowships", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=70", desc: "12-month funded fellowships for exceptional researchers and engineers working at the intersection of technology and the Foundation's mission areas." },
];

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=1800&q=80&fit=crop)` }}
    />
    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 60%, #0A0A0A 100%)" }} />
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center pb-32 pt-32">
      <p className="font-mono text-[11px] tracking-widest text-primary mb-8 animate-fade-in">
        NAIROBI, KENYA · FOUNDED 2025 · PRE-LAUNCH
      </p>
      <h1 className="font-display font-extrabold text-foreground leading-tight mb-6 animate-slide-up" style={{ fontSize: "clamp(52px, 7vw, 84px)" }}>
        The future will be<br />
        <span className="text-primary italic">built from Africa.</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-6 animate-slide-up" style={{ animationDelay: "0.15s", lineHeight: 1.7 }}>
        A pre-launch initiative to build the infrastructure Africa's boldest founders never had — backed by a self-sustaining model where commerce funds mission.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base btn-primary-hover hover:opacity-90 transition-opacity">
          Join the Vision →
        </Link>
        <Link to="/manifesto" className="border border-border text-foreground rounded-full px-8 py-3.5 text-base btn-primary-hover hover:border-primary hover:text-primary transition-colors">
          Read the Manifesto
        </Link>
      </div>
      <div className="mt-8 inline-flex items-center gap-2 bg-muted border border-border text-muted-foreground text-xs rounded-full px-5 py-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <span className="w-2 h-2 rounded-full bg-primary" />
        Pre-launch · Nairobi, Kenya · 2025
      </div>
    </div>
  </section>
);

/* ─── TICKER ─── */
const TickerSection = () => (
  <section className="bg-card border-y border-border h-10 overflow-hidden flex items-center">
    <div className="whitespace-nowrap" style={{ animation: "ticker 30s linear infinite" }}>
      <span className="font-mono text-[10px] tracking-widest uppercase text-primary">
        {tickerItems}{tickerItems}
      </span>
    </div>
  </section>
);

/* ─── FOUNDER ─── */
const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* Founder card */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <img
                src="/john-mbote.jpeg"
                alt="John Mbote Njuguna"
                className="h-72 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-display font-bold text-lg text-foreground">John Mbote Njuguna</h3>
                <p className="text-sm font-medium text-primary mt-1">Founder, Mbote Foundation</p>
                <p className="text-sm text-muted-foreground mt-1">Nairobi, Kenya</p>
                <hr className="border-border my-6" />
                <blockquote className="pl-4 border-l-2 border-primary">
                  <p className="text-[15px] italic text-muted-foreground leading-relaxed">
                    "I have spent years trying to build technology in Africa with no capital, no network, no infrastructure designed for someone like me."
                  </p>
                  <cite className="text-sm font-medium text-muted-foreground mt-3 block not-italic">— John Mbote Njuguna</cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Story timeline */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-widest text-primary">THE FOUNDER'S JOURNEY</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mt-3">
              Building the organization I wish had existed.
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed mt-6 mb-10">
              John Mbote Njuguna has spent years trying to build technology companies in Africa — fighting systems not designed for founders like him. Mbote Foundation is his answer: the infrastructure he never had.
            </p>

            <div className="relative ml-3">
              <div className="absolute left-[4px] top-2 bottom-0 w-[2px] bg-secondary" />
              {founderTimeline.map((item, i) => (
                <div key={i} className="flex gap-5 pb-10 last:pb-0 relative">
                  <div className={`w-[10px] h-[10px] rounded-full mt-2 shrink-0 z-10 ${item.current ? "bg-primary" : "bg-secondary"}`} />
                  <div>
                    <p className={`font-mono text-[11px] tracking-widest ${item.current ? "text-primary" : "text-muted-foreground"}`}>{item.year}</p>
                    <h3 className="font-display font-semibold text-[17px] text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.body}</p>
                    {item.current && (
                      <Link to="/contact" className="text-sm text-primary hover:underline mt-2 inline-block">Talk to John →</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── STRUCTURE ─── */
const StructureSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="structure" ref={ref} className="py-28 md:py-36 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary">HOW IT WORKS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">One structure. Two arms.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4" style={{ lineHeight: 1.7 }}>
            Most non-profits depend on endless fundraising. We are building a model where commercial success permanently funds the social mission.
          </p>
        </div>

        {/* SVG Diagram */}
        <div className={`flex justify-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          <svg viewBox="0 0 600 280" className="w-full max-w-2xl" fill="none">
            {/* Foundation box */}
            <rect x="170" y="10" width="260" height="72" rx="10" fill="#161616" stroke="hsl(152, 60%, 26%)" strokeWidth="2" />
            <text x="300" y="38" textAnchor="middle" fill="hsl(152, 60%, 26%)" fontFamily="Sora" fontWeight="600" fontSize="14">MBOTE FOUNDATION</text>
            <text x="300" y="58" textAnchor="middle" fill="#555" fontFamily="Inter" fontSize="11">Non-Profit · Mission keeper · Governance</text>

            {/* Mission Programs box */}
            <rect x="30" y="170" width="230" height="72" rx="10" fill="#161616" stroke="#242424" strokeWidth="1.5" />
            <text x="145" y="198" textAnchor="middle" fill="#8C8C8C" fontFamily="Sora" fontWeight="600" fontSize="13">MISSION PROGRAMS</text>
            <text x="145" y="218" textAnchor="middle" fill="#444" fontFamily="Inter" fontSize="11">Builders · Research · Education</text>

            {/* Ventures box */}
            <rect x="340" y="170" width="230" height="72" rx="10" fill="#161616" stroke="hsl(43, 70%, 47%)" strokeWidth="2" />
            <text x="455" y="198" textAnchor="middle" fill="hsl(43, 70%, 47%)" fontFamily="Sora" fontWeight="600" fontSize="14">MBOTE VENTURES</text>
            <text x="455" y="218" textAnchor="middle" fill="#8C8C8C" fontFamily="Inter" fontSize="11">For-Profit · Tech Investment · Revenue</text>

            {/* Arrow: Foundation → Programs */}
            <line x1="230" y1="82" x2="160" y2="170" stroke="hsl(152, 60%, 26%)" strokeWidth="1.5" strokeDasharray="6 4" />
            <text x="165" y="130" fill="#555" fontFamily="Inter" fontSize="10">resources</text>

            {/* Arrow: Foundation → Ventures */}
            <line x1="370" y1="82" x2="440" y2="170" stroke="#F0EDE8" strokeWidth="1.5" />
            <text x="395" y="130" fill="#8C8C8C" fontFamily="Inter" fontSize="10">controls & owns</text>

            {/* Arrow: Ventures → Foundation (curved) */}
            <path d="M 550 170 C 580 100 580 40 420 20" stroke="hsl(43, 70%, 47%)" strokeWidth="2" fill="none" markerEnd="url(#arrowGold)" />
            <text x="542" y="95" fill="hsl(43, 70%, 47%)" fontFamily="Inter" fontWeight="500" fontSize="10" textAnchor="end">profits fund</text>
            <text x="542" y="108" fill="hsl(43, 70%, 47%)" fontFamily="Inter" fontWeight="500" fontSize="10" textAnchor="end">the mission</text>

            <defs>
              <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="hsl(43, 70%, 47%)" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Two columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <div className="border-t-2 border-secondary pt-6">
            <h3 className="font-display font-semibold text-lg text-foreground">Mbote Foundation</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mt-3">
              The non-profit. Open community programs: Builders network, research, fellowships, hackathons, and emergency aid. No investor return expectation. Community-owned.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Non-Profit", "Open Access", "Mission-Driven"].map(tag => (
                <span key={tag} className="text-[10px] font-mono tracking-widest border border-secondary text-secondary rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-primary pt-6">
            <h3 className="font-display font-semibold text-lg text-foreground">Mbote Ventures</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mt-3">
              The for-profit arm. Invests in frontier technology: AI, Space, Biotech, Fintech, Renewables. Real returns — all profits flow back to fund the Foundation.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["For-Profit", "Frontier Tech", "Self-Sustaining"].map(tag => (
                <span key={tag} className="text-[10px] font-mono tracking-widest border border-primary text-primary rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── FOCUS AREAS ─── */
const FocusAreasSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary">WHAT WE BACK</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">
            Eight areas where we believe the next century will be won.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className={`bg-card border border-border rounded-xl overflow-hidden hover:border-primary/25 hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img src={area.img} alt={area.title} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-3" />
                <h3 className="font-display font-semibold text-[17px] text-foreground">{area.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mt-2">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── VISION TIMELINE ─── */
const VisionTimeline = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-28 md:py-36 bg-background dot-grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary">THE ROADMAP</p>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-foreground mt-3">A 15-year blueprint.</h2>
          <p className="text-muted-foreground text-lg mt-4">Published publicly — so anyone who shares this vision can find us.</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          {visionTimeline.map((item) => (
            <div key={item.year} className="bg-card border border-border rounded-xl p-8 hover:border-primary/25 transition-all duration-300">
              <p className="font-mono text-[13px] text-primary">{item.year}</p>
              <h3 className="font-display font-semibold text-xl text-foreground mt-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.body}</p>
              {item.badge && (
                <span className="inline-block font-mono text-[9px] tracking-widest border border-primary text-primary rounded-full px-3 py-1 mt-4">{item.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── VENTURES DEEP ─── */
const VenturesDeep = () => {
  const { ref, isVisible } = useScrollAnimation();
  const theses = [
    { num: "01", title: "We back outliers.", body: "Founders with non-consensus insights, unconventional backgrounds, and the conviction to build what others say is impossible. We are not looking for the obvious bet." },
    { num: "02", title: "We think in decades.", body: "Patient capital for hard problems. We are not here for the quick exit. We are here to build companies that last generations — the way Africa's challenges demand." },
    { num: "03", title: "We start in Africa.", body: "Local insight is a moat. Founders building for African markets first carry a depth of understanding no outsider can replicate — and global markets will follow." },
  ];
  return (
    <section ref={ref} className="py-28 md:py-36 bg-[#0D1409] border-y border-[#1A3A20]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary">MBOTE VENTURES</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">The engine that funds the mission.</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mt-4" style={{ lineHeight: 1.7 }}>
            Mbote Ventures invests in frontier technology founders. All returns flow back to the Foundation. Commercial success and social mission are not in conflict — they are the same thing.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden h-72 mt-12 mb-16">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=70&fit=crop" alt="Earth from space" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0D1409]/60" />
        </div>

        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {theses.map((t) => (
            <div key={t.num} className="max-w-2xl mx-auto py-10 border-b border-[#1A3A20] last:border-0">
              <p className="font-mono text-[10px] tracking-widest text-primary">{t.num}</p>
              <h3 className="font-display font-bold text-2xl md:text-[32px] text-foreground mt-2">{t.title}</h3>
              <p className="text-[17px] text-muted-foreground leading-relaxed mt-4">{t.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/ventures" className="border border-primary text-primary rounded-full px-8 py-3 text-base hover:bg-primary/10 transition-colors inline-block">
            Pitch Mbote Ventures →
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── BUILDERS ─── */
const BuildersSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary">MBOTE BUILDERS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">The community building the future.</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mt-4" style={{ lineHeight: 1.7 }}>
            Engineers, researchers, scientists, and builders who want to contribute to Africa's innovation future — not just observe it from a distance.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          {builderPrograms.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:border-primary/25 transition-all duration-300">
              <div className="relative h-48">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/40" />
              </div>
              <div className="p-7">
                <h3 className="font-display font-semibold text-lg text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/builders" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity inline-block">
            Apply to Join Builders →
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── HONEST PITCH ─── */
const HonestPitch = () => {
  const { ref, isVisible } = useScrollAnimation();
  const columns = [
    { title: "What exists today", icon: Check, color: "text-secondary", items: ["A clear vision and legal structure blueprint", "A founder with lived experience of the problem", "This public document — the blueprint", "A growing network of interested builders"] },
    { title: "What we need", icon: ArrowRight, color: "text-primary", items: ["Seed investors (Foundation and/or Ventures arm)", "2–3 technical co-founders", "Pro-bono legal/financial advisors", "Anyone who has built a non-profit/for-profit hybrid"] },
    { title: "What you get", icon: Star, color: "text-primary", items: ["Ground floor of a long-term platform", "Equity / board involvement (Ventures arm)", "The chance to be a founding pillar", "Not a quick win — a generational institution"] },
  ];
  return (
    <section ref={ref} className="py-28 md:py-36 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="font-mono text-[10px] tracking-widest text-primary">WE ARE HONEST ABOUT WHERE WE ARE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">Pre-launch. Pre-capital. Full conviction.</h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          {columns.map((col) => (
            <div key={col.title}>
              <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4 ${col.color}`}>
                <col.icon size={18} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i} className="text-[15px] text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-muted-foreground mt-1">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className={`bg-background rounded-2xl p-10 mt-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <span className="font-serif text-8xl text-primary/15 leading-none block">"</span>
          <p className="text-xl italic text-foreground leading-relaxed max-w-3xl -mt-10 ml-4">
            I am not asking anyone to believe in me blindly. I am asking you to read this blueprint, examine the structure, and tell me if you see what I see — a sustainable model to back African innovation at scale.
          </p>
          <p className="text-sm font-medium text-muted-foreground mt-6 ml-4">— John Mbote Njuguna, Founder</p>
        </div>
      </div>
    </section>
  );
};

/* ─── PAGE ─── */
const Index = () => (
  <Layout>
    <HeroSection />
    <TickerSection />
    <FounderSection />
    <StructureSection />
    <FocusAreasSection />
    <VisionTimeline />
    <VenturesDeep />
    <BuildersSection />
    <HonestPitch />
  </Layout>
);

export default Index;
