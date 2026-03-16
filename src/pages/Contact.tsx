import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Mail, MapPin, Users, TrendingUp, Handshake } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/** What we're looking for */
const seekingCards = [
  { icon: Users, title: "Co-founders", desc: "Technical co-founders with deep engineering skills and long-term conviction. If you've been looking for a mission worth decades of your life, talk to us.", link: "https://wa.me/254795184144", linkText: "Message on WhatsApp →" },
  { icon: TrendingUp, title: "Investors", desc: "Seed investors for the Foundation and/or Ventures arm. Patient capital for a self-sustaining model. Board involvement available.", link: "mailto:johnmnjuguna89@gmail.com", linkText: "Send Email →" },
  { icon: Handshake, title: "Partners", desc: "Pro-bono legal and financial advisors, institutional partners, and anyone who has built a non-profit/for-profit hybrid before.", link: "https://wa.me/254795184144", linkText: "Reach Out →" },
];

/** FAQ items */
const faqs = [
  { q: "Are you currently raising capital?", a: "We are in pre-launch and actively seeking seed investors for both the Foundation (non-profit) and Ventures (for-profit) arms. We welcome conversations with aligned investors who think in decades, not quarters." },
  { q: "Can I apply as a builder from outside Africa?", a: "Absolutely. Mbote Builders is a global community. We welcome engineers, researchers, and entrepreneurs from everywhere who share our mission. Many of the problems we're solving require global collaboration." },
  { q: "What stage do you invest at through Ventures?", a: "Mbote Ventures will focus on early-stage investments — pre-seed and seed — in frontier technology companies. We back founders at the earliest stages when conviction matters more than metrics." },
  { q: "How is the Foundation funded if it's non-profit?", a: "The Foundation is funded by profits from Mbote Ventures, our for-profit investment arm. This self-sustaining model means we don't depend on perpetual fundraising. Commercial success directly funds the social mission." },
  { q: "I want to help but I'm not a founder or investor. How can I contribute?", a: "We need mentors, advisors, researchers, engineers, designers, and anyone with skills and conviction. Join our Builders community or reach out directly — there are many ways to contribute to the mission." },
];

const Contact = () => {
  const seekingAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.85)] to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28 md:py-36">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-6 animate-fade-in">CONTACT</p>
          <h1 className="font-display font-extrabold text-foreground text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-slide-up">
            Let's build together.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s", lineHeight: 1.7 }}>
            We welcome founders, researchers, engineers, investors, and partners who want to build the future.
          </p>
        </div>
      </section>

      {/* What We're Looking For */}
      <section ref={seekingAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${seekingAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">WHAT WE NEED RIGHT NOW</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">We're looking for the right people.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seekingCards.map((c, i) => (
              <div
                key={c.title}
                className={`bg-background border border-border rounded-xl p-8 hover:border-primary/25 transition-all duration-300 flex flex-col ${seekingAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5">
                  <c.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-xl mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium mt-6 hover:opacity-80 transition-opacity inline-block"
                >
                  {c.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section ref={contactAnim.ref} className="py-28 md:py-36 bg-background">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <div className={`space-y-8 ${contactAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {/* WhatsApp */}
            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <MessageCircle className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground">+254 795 184 144</p>
                </div>
              </div>
              <a
                href="https://wa.me/254795184144"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-semibold rounded-full px-6 py-3 text-sm hover:opacity-90 transition-opacity inline-block w-full text-center"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg">Email</h3>
                  <p className="text-muted-foreground">johnmnjuguna89@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:johnmnjuguna89@gmail.com"
                className="border border-border text-foreground font-semibold rounded-full px-6 py-3 text-sm hover:border-primary hover:text-primary transition-colors inline-block w-full text-center"
              >
                Send Email
              </a>
            </div>

            {/* Locations */}
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="text-primary" size={28} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">Our Locations</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Konza Technopolis, Kenya", "Austin, Texas", "San Francisco, CA", "New York, NY", "Singapore"].map(
                  (loc) => (
                    <p key={loc} className="text-muted-foreground text-sm">{loc}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqAnim.ref} className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className={`mb-16 ${faqAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="font-mono text-[10px] tracking-widest text-primary mb-4">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Frequently asked questions.</h2>
          </div>
          <Accordion type="single" collapsible className={`space-y-4 ${faqAnim.isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6 overflow-hidden">
                <AccordionTrigger className="text-foreground font-medium text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-muted-foreground text-lg">
            Still have questions?{" "}
            <a href="https://wa.me/254795184144" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:opacity-80 transition-opacity">
              Message us on WhatsApp →
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
