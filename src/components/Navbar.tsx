import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:aashirvadplant@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              aashirvadplant@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+919449371247" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              +91-9449371247
            </a>
            <a href="tel:+919449371246" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              +91-9449371246
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-lg' : 'bg-card/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Aashirvad Plant Services" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-primary text-lg leading-tight">
                  Aashirvad Plant Services
                </h1>
                <p className="text-xs text-muted-foreground">Industrial Excellence Since 2018</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="navbar-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <a href="mailto:aashirvadplant@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} /> aashirvadplant@gmail.com
                </a>
                <a href="tel:+919449371247" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={14} /> +91-9449371247
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
