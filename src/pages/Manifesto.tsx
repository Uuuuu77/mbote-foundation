import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Manifesto = () => (
  <Layout>
    <article className="bg-background py-28 md:py-36">
      <div className="max-w-[680px] mx-auto px-6">
        <h1 className="font-display font-bold text-foreground text-4xl md:text-[40px] leading-tight">
          Why I'm building Mbote Foundation
        </h1>
        <p className="text-lg text-muted-foreground mt-3" style={{ lineHeight: 1.7 }}>
          A founder's letter to anyone who has ever tried to build something in Africa and been told to wait.
        </p>

        <hr className="border-border my-10" />

        <div className="space-y-8 text-[19px] text-[#AAAAAA]" style={{ lineHeight: 1.85 }}>
          <p className="drop-cap">
            There is a version of this story where I give up. Most founders who try to build technology in Africa without capital, without connections, and without an ecosystem built for them — they eventually do. I almost did. Several times.
          </p>

          <p>
            I tried to build companies. I built technology I knew had value. I could see the market. But every time I reached for the resources I needed — capital, mentorship, infrastructure, legal structure, investor networks — I found a wall. Not always hostile. Often just... absent. Built for someone else's context, in someone else's city.
          </p>

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
      </div>
    </article>
  </Layout>
);

export default Manifesto;
