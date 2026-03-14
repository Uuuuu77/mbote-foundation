import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mbote-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Our Structure", path: "/#structure" },
  { label: "Ventures", path: "/ventures" },
  { label: "Builders", path: "/builders" },
  { label: "Manifesto", path: "/manifesto" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setOpen(false);
    if (path.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.getElementById(path.slice(2));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mbote Foundation" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-base text-foreground">Mbote Foundation</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <span className="font-mono text-[9px] tracking-widest border border-border text-muted-foreground rounded-full px-3 py-1">
            PRE-LAUNCH
          </span>

          <Link
            to="/contact"
            className="bg-primary text-primary-foreground font-semibold rounded-full text-sm px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Build With Us →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu — full screen overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-50 flex flex-col px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-xl font-medium text-muted-foreground hover:text-foreground py-3 border-b border-border"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground font-semibold rounded-full text-base px-8 py-3 mt-8 text-center hover:opacity-90 transition-opacity"
          >
            Build With Us →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
