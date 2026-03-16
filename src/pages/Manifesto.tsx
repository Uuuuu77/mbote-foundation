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
            "There is a version of this story where I give up."
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="bg-background py-20 md:py-28">
        <div className="max-w-[680px] mx-auto px-6">
          <h1 className="font-display font-bold text-foreground text-3xl md:text-[40px] leading-tight">
            Why I'm building Mbote Foundation
          </h1>
          <p className="text-lg text-muted-foreground mt-3" style={{ lineHeight: 1.7 }}>
            A founder's letter to anyone who has ever tried to build something in Africa and been told to wait.
          </p>

          <hr className="border-border my-10" />

          <div className="space-y-10 text-[20px] text-[#AAAAAA]" style={{ lineHeight: 1.9 }}>
            <p className="drop-cap">
              There is a version of this story where I give up. Most founders who try to build technology in Africa without capital, without connections, and without an ecosystem built for them — they eventually do. I almost did. Several times.
            </p>

            <p>
              I tried to build companies. I built technology I knew had value. I could see the market. But every time I reached for the resources I needed — capital, mentorship, infrastructure, legal structure, investor networks — I found a wall. Not always hostile. Often just... absent. Built for someone else's context, in someone else's city.
            </p>

            {/* Pull quote */}
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 my-12">
              <span className="font-serif text-7xl text-primary/20 leading-none block -mb-6">"</span>
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="text-foreground text-xl italic leading-relaxed">
                  The turning point was when I stopped blaming myself and started asking a different question: what if the problem isn't me? What if it's the missing layer?
                </p>
              </blockquote>
            </div>

            <p>
              The turning point was when I stopped blaming myself and started asking a different question: what if the problem isn't me? What if it's the missing layer? Every founder I spoke to in Nairobi, in Lagos, in Accra, in Johannesburg — same story. Different name, different idea, same structural absence.
            </p>

            <p>
              Mbote Foundation is the organization I needed. It has two arms that fund each other: a non-profit Foundation that runs community programs — builders, researchers, fellowships, hackathons — and a for-profit Ventures arm that invests in frontier technology companies and returns all profits to fund the mission. Commerce and impact are not in tension here. They are the same machine.
            </p>

            <p>
              I do not have the capital to start this yet. I have the vision, the structure, and the conviction. I am putting this blueprint into the world publicly because the right people will find it. If you are a technical co-founder who has been looking for a long-term mission. If you are an investor who thinks in decades. If you are an engineer who wants their work to mean something beyond a product roadmap — this letter was written for you.
            </p>

            <p>
              Africa's moment is not coming. It is here. The question is only whether we build the infrastructure to catch it, or watch it happen without us. I have spent years watching. I am done watching.
            </p>
          </div>

          <p className="font-display font-bold text-2xl text-primary mt-12">
            If this letter found you — it was meant to.
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
