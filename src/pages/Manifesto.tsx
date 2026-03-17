import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Manifesto = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[2px] bg-transparent">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Cinematic hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=1800&q=80&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.6)] via-[rgba(10,10,10,0.8)] to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 pt-28 md:pt-36">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-6 animate-fade-in">MANIFESTO</p>
          <p className="font-display font-bold text-foreground text-2xl md:text-4xl italic leading-tight animate-slide-up">
            "There is no version of this story where I stop building."
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="bg-background py-20 md:py-28">
        <div className="max-w-[680px] mx-auto px-6">
          <h1 className="font-display font-bold text-foreground text-3xl md:text-[40px] leading-tight">
            Why I'm Building Mbote Foundation
          </h1>
          <p className="text-lg text-muted-foreground mt-3" style={{ lineHeight: 1.7 }}>
            A letter to anyone who has ever tried to build something and refused to wait.
          </p>

          <hr className="border-border my-10" />

          <div className="space-y-10 text-[20px] text-[#AAAAAA]" style={{ lineHeight: 1.9 }}>
            <p className="drop-cap">
              There are many versions of this story. In some of them, I build quietly. In others, I build and fail, then build again. In all of them, one thing remains constant — I never stopped building. Because that is the reality for founders in Africa. We rarely start with capital. We rarely start with networks. We start with ideas, conviction, and the willingness to keep moving when the system was not designed for us.
            </p>

            <p>
              I have built companies. I have built technology I knew had real value. I could see the market clearly. I can still see it. But every time I reached for the next layer — capital, mentorship, legal infrastructure, investor networks — I encountered something consistent. Not rejection. Not hostility. Absence. A layer that simply was not there. Built for someone else's city, someone else's context.
            </p>

            {/* Pull quote */}
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 my-12">
              <span className="font-serif text-7xl text-primary/20 leading-none block -mb-6">"</span>
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="text-foreground text-xl italic leading-relaxed">
                  The problem was never a lack of talent or ambition. The problem was a missing layer — and I decided to build it.
                </p>
              </blockquote>
            </div>

            <p>
              When I spoke to other founders across Nairobi, Lagos, Accra, and Johannesburg, the pattern repeated. Different people. Different ideas. Same structural gap. That is when I stopped asking what was wrong with me, and started asking what was missing. The answer was clear: no one had built the infrastructure.
            </p>

            <p>
              Mbote Foundation is that infrastructure. It has two parts designed to work together: a Foundation that backs builders, researchers, and early ideas — and Mbote Ventures, a for-profit investment arm that backs frontier technology companies and returns all profits into the mission. Commerce and impact are not in tension here. They are the same machine.
            </p>

            <p>
              I am still building. CoinByte is one of the companies I am actively developing — and there will be more. Mbote Foundation is not a retreat from building; it is the system that should have existed when I started. I am building it now so the next generation of founders does not have to build alone.
            </p>

            <p>
              I do not have all the resources yet. I have not officially launched, raised capital, or assembled the full team. What I have is a clear vision, a published blueprint, and the conviction to see it through. This letter is public because the right people will find it. If you are a builder, researcher, engineer, or investor who thinks in decades — this was written for you.
            </p>
          </div>

          <p className="font-display font-bold text-2xl text-primary mt-12">
            Africa's moment is not coming. It is already here. The only question is whether we build the infrastructure to support it. I have decided to build it. If this letter found you — it was not by accident.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-opacity inline-block"
            >
              Get in Touch →
            </Link>
          </div>

          {/* Share section */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">SHARE THIS MANIFESTO</p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                className="border border-border text-foreground rounded-full px-6 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Copy Link
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent("Read this manifesto from Mbote Foundation: " + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground rounded-full px-6 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Related */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-mono text-[10px] tracking-widest text-primary mb-6">RELATED</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link to="/about" className="bg-card border border-border rounded-xl p-6 hover:border-primary/25 transition-all duration-300 block">
                <h3 className="font-display font-semibold text-foreground mb-2">About Mbote</h3>
                <p className="text-muted-foreground text-sm">Learn about our mission, structure, and the team behind it.</p>
              </Link>
              <Link to="/ventures" className="bg-card border border-border rounded-xl p-6 hover:border-primary/25 transition-all duration-300 block">
                <h3 className="font-display font-semibold text-foreground mb-2">Mbote Ventures</h3>
                <p className="text-muted-foreground text-sm">Explore our investment thesis and the sectors we back.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Manifesto;
