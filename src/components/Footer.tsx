import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";
import logo from "@/assets/mbote-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Mbote" className="h-8 w-8 brightness-0 invert" />
            <span className="font-display font-bold text-lg">Mbote Foundation</span>
          </div>
          <p className="text-sm opacity-70">Building the future from Africa.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Organization</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/ventures" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Ventures</Link>
            <Link to="/builders" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Builders</Link>
            <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Locations</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>Konza Technopolis, Kenya</span>
            <span>Texas, United States</span>
            <span>San Francisco</span>
            <span>New York</span>
            <span>Singapore</span>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Connect</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="opacity-50 hover:opacity-100 transition-opacity">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-50 hover:opacity-100 transition-opacity">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="opacity-50 hover:opacity-100 transition-opacity">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center">
        <p className="text-sm opacity-50">© {new Date().getFullYear()} Mbote Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
