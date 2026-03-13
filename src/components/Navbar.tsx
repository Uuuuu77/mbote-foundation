import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mbote-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Focus Areas", path: "/#focus-areas" },
  { label: "Ventures", path: "/ventures" },
  { label: "Builders", path: "/builders" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mbote Foundation" className="h-8 w-8" />
          <span className="font-display font-bold text-lg text-foreground">Mbote</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.path.startsWith("/#") ? (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild size="sm">
            <Link to="/contact">Apply to Build</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Apply to Build</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
