import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Aashirvad Plant Services" className="h-12 w-auto rounded bg-background p-1" />
              <div>
                <h3 className="font-heading font-bold text-lg">Aashirvad Plant Services</h3>
                <p className="text-xs opacity-70">Industrial Excellence Since 2018</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              A leading service provider in plant operation, maintenance, fabrication, 
              and erection services across Karnataka and India.
            </p>
            <p className="mt-4 text-sm opacity-70">
              <strong>GST:</strong> 29ABKFA2866R1ZJ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#clients" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Clients</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-accent">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="opacity-80">
                  1st Floor, No.710, Ward No.15, 2nd Cross, Bharathi Nagar, 
                  Amravathi, HOSPET – 583201, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <a href="tel:+919449371247" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors block">
                    Adarsh: +91-9449371247
                  </a>
                  <a href="tel:+919449371246" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors block">
                    Ashwin: +91-9449371246
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:aashirvadplant@gmail.com" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  aashirvadplant@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm opacity-60">
            © {currentYear} Aashirvad Plant Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
