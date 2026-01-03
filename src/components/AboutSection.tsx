import { TrendingUp, Users, Award, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, number: '2018', label: 'Founded' },
  { icon: Users, number: '500+', label: 'Employees' },
  { icon: TrendingUp, number: '₹12 Cr', label: 'FY 2024-25 Turnover' },
  { icon: Award, number: '20×', label: 'Revenue Growth' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Welcome Banner */}
        <div className="bg-primary text-primary-foreground py-6 px-8 rounded-lg mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            Welcome to <span className="text-accent">Aashirvad</span> Plant Services
          </h2>
          <p className="text-lg opacity-90">Established in Karnataka | GST No: 29ABKFA2866R1ZJ</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title">About Us</h2>
            <div className="space-y-4 mt-8 text-foreground/80">
              <p>
                <strong className="text-primary">Aashirvad Plant Services</strong> is one of the Leading Companies that was 
                established in Karnataka during the year 2018.
              </p>
              <p>
                We are a service-oriented organization involved in the <strong>operation and maintenance 
                of industrial plants</strong>, backed by a manpower strength exceeding 500 employees. The company 
                also executes fabrication and erection works across multiple industrial projects.
              </p>
              <p>
                Our services include <em className="text-primary">Fabrication, Erection, Alignment, Testing & 
                Commissioning of Structural, Piping, Storage Tanks, Chimneys and Rotary/Static Equipment</em> 
                for various heavy industries such as Steel, Cement, Petro Chemical, and Refineries in India.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary shadow-md">
                <h3 className="font-heading font-bold text-primary text-xl mb-3">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To become a trusted and leading service provider in plant operation, maintenance, 
                  fabrication, and erection services through excellence in execution and uncompromising safety standards.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent shadow-md">
                <h3 className="font-heading font-bold text-accent text-xl mb-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To deliver reliable plant services with excellence in quality and safety, 
                  driven by a skilled workforce and strong client partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-card rounded-xl shadow-xl p-8 border-b-4 border-accent">
            <h3 className="font-heading font-bold text-primary text-2xl mb-2 text-center">
              Company Growth Snapshot
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              A high-growth organization driven by strong leadership and operational excellence
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">~50%+ CAGR</strong> • From ₹60 Lakhs to ₹12 Crores in 7 years
              </p>
            </div>
          </div>
        </div>

        {/* Safety Banner */}
        <div className="safety-banner rounded-lg mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="font-heading font-bold text-lg uppercase tracking-wider">Our Safety Slogan:</span>
          <span className="text-2xl md:text-3xl font-heading font-bold text-accent">
            "SAFE WAY IS THE BEST WAY"
          </span>
        </div>
      </div>
    </section>
  );
};
