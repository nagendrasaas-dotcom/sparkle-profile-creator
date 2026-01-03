import { Settings, Wrench, Factory, Construction, Cog, RefreshCw, Wind, CircleDot } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Operation & Maintenance',
    description: 'Complete plant operation and maintenance services for industrial facilities with 500+ skilled professionals.',
  },
  {
    icon: Wrench,
    title: 'Shutdown & Breakdown Jobs',
    description: 'Quick response shutdown and emergency breakdown services to minimize downtime and ensure continuity.',
  },
  {
    icon: Factory,
    title: 'Fabrication & Erection',
    description: 'Expert fabrication and erection of structural components, tanks, and industrial equipment.',
  },
  {
    icon: Construction,
    title: 'Piping Jobs',
    description: 'Complete piping solutions including fabrication, installation, testing, and commissioning.',
  },
  {
    icon: Cog,
    title: 'Equipment Erections',
    description: 'Professional erection and installation of rotary and static industrial equipment.',
  },
  {
    icon: RefreshCw,
    title: 'Refurbishments & Reinstallation',
    description: 'Equipment refurbishment and reinstallation services to extend asset life and performance.',
  },
  {
    icon: Wind,
    title: 'Chimneys & Rotary/Statics',
    description: 'Specialized fabrication and erection of industrial chimneys and rotary/static equipment.',
  },
  {
    icon: CircleDot,
    title: 'Pipe Rolling',
    description: 'Precision pipe rolling services using MS & SS plate rolling machines for custom requirements.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title-center">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Comprehensive industrial services backed by years of experience and a commitment to excellence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-industrial group"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
