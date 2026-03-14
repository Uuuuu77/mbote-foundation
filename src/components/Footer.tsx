import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";
import logo from "@/assets/mbote-logo.png";

const Footer = () => (
  <footer className="bg-[#080808] border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Mbote" className="h-9 w-9 object-contain" />
            <span className="font-display font-bold text-base text-foreground">Mbote Foundation</span>
          </div>
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
            PRE-LAUNCH · NAIROBI, KENYA · 2025
          </p>
        </div>

        {/* Organization */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider text-muted-foreground">Organization</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/manifesto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Manifesto</Link>
            <Link to="/ventures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ventures</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider text-muted-foreground">Programs</h4>
          <div className="flex flex-col gap-2">
            <Link to="/builders" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Builders</Link>
            <span className="text-sm text-muted-foreground">Hackathons</span>
            <span className="text-sm text-muted-foreground">Research Labs</span>
            <span className="text-sm text-muted-foreground">Fellowships</span>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider text-muted-foreground">Connect</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
            <a href="https://wa.me/254795184144" className="hover:text-primary transition-colors">WhatsApp: +254 795 184 144</a>
            <a href="mailto:johnmnjuguna89@gmail.com" className="hover:text-primary transition-colors">johnmnjuguna89@gmail.com</a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mbote Foundation. All rights reserved.</p>
        <p className="font-display text-sm italic text-muted-foreground">A vision from Nairobi, Kenya 🌍</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
          <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
