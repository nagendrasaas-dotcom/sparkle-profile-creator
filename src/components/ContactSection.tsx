import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 opacity-90 max-w-2xl mx-auto">
            Ready to discuss your next project? Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Address</h3>
            <p className="text-sm opacity-80">
              1st Floor, No.710, Ward No.15<br />
              2nd Cross, Bharathi Nagar<br />
              Amravathi, HOSPET – 583201<br />
              Karnataka, India
            </p>
          </div>

          {/* Phone - Adarsh */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Adarsh Premraj</h3>
            <a href="tel:+919449371247" className="text-accent hover:underline block">
              +91-9449371247
            </a>
          </div>

          {/* Phone - Ashwin */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Ashwin Premraj</h3>
            <a href="tel:+919449371246" className="text-accent hover:underline block">
              +91-9449371246
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
            <a href="mailto:aashirvadplant@gmail.com" className="text-accent hover:underline text-sm break-all">
              aashirvadplant@gmail.com
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-2xl">
          <iframe
            title="Aashirvad Plant Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.0!2d76.39!3d15.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDE2JzEyLjAiTiA3NsKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
