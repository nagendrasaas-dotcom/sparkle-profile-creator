import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, CheckCircle, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import safety from '@/assets/safety.jpg';
import chimney1 from '@/assets/chimney-1.jpg';
import chimney2 from '@/assets/chimney-2.jpg';
import chimney3 from '@/assets/chimney-3.jpg';
import chimney4 from '@/assets/chimney-4.jpg';
import nitrogen1 from '@/assets/nitrogen-1.jpg';
import nitrogen2 from '@/assets/nitrogen-2.jpg';
import nitrogen3 from '@/assets/nitrogen-3.jpg';
import nitrogen4 from '@/assets/nitrogen-4.jpg';

// 36 Ongoing Projects
const ongoingProjects = [
  { description: 'Operation of Ore Beneficiation Plant 70,000 TPD (OBP-2)', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Mechanical Maintenance of EOT Crane HSM2', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Mechanical Maintenance of EOT Crane CRM2', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Mechanical Maintenance of EOT Crane HSM3', site: 'JVML Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Manpower supply for Commando Group for JVML, JSW', site: 'JVML Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Manpower supply for the Safety Department JSW', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Ore Beneficiation Plant-III Wet Grinding Area', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Manpower supply for Central Maintenance Department (CMD) - Pellet Plant-III', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Slim Slurry Recovery Plant Beneficiation Plant', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Dedusting system at Coke Oven-3', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Dedusting system at Coke Oven-4', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Dedusting system at Coke Oven-5', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Compressor maintenance at OBP-1', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Filter cloth maintenance at OBP-1', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Dedusting system at SMS', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Pumps and Motor Installation at Blast Furnace Plant', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of Sinter Plant 1500 TPA', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Nitrogen Plant Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Operation and Maintenance of PCI Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Commissioning of PCI Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Maintenance of Power Plant 40 MW', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Linner plate Fixing work at Coke Oven Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Pusher car and Charging car refurbishment at Coke Oven', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Chimney Fabrication and Erection work 50 ft', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Operation and Maintenance of Sinter Plant 1500 TPA', site: 'KIRLOSKAR, Hiriyur', location: 'Chitradurga, Karnataka' },
  { description: 'Capital shutdown work at MBF 1', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Capital shutdown work at MBF 2', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Capital shutdown work at Sinter Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Pipe Line Fabrication and Erection of Blast Furnace Project', site: 'BMM ISPATH, Hospete', location: 'Hospete, Karnataka' },
  { description: 'Chimney Fabrication and Erection work 50 ft', site: 'BMM ISPATH, Hospete', location: 'Hospete, Karnataka' },
  { description: 'Oxygen Plant Erection and Installation', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Crusher Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Nitrogen Plant Erection and Installation', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Dedusting Unit Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Pipe Line Fabrication and Erection of Blast Furnace Project', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Equipment Erection and Alignment Services', site: 'Multiple Sites', location: 'Karnataka' },
];

// 16 Completed Projects
const completedProjects = [
  { description: 'Pumps and Motor Installation at Blast Furnace Plant', site: 'BMM ISPATH, Hospete', location: 'Hospete, Karnataka' },
  { description: 'Commissioning of PCI Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Dedusting Unit Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Pipe Line Fabrication and Erection of Blast Furnace Project', site: 'BMM ISPATH, Hospete', location: 'Hospete, Karnataka' },
  { description: 'Chimney Fabrication and Erection work 50 ft', site: 'BMM ISPATH, Hospete', location: 'Hospete, Karnataka' },
  { description: 'Oxygen Plant Erection and Installation', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Crusher Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Nitrogen Plant Erection and Installation', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Nitrogen Plant Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Linner plate Fixing work at Coke Oven Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Pusher car and Charging car refurbishment at Coke Oven', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Chimney Fabrication and Erection work 50 ft', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Operation and Maintenance of Sinter Plant 1500 TPA', site: 'KIRLOSKAR, Hiriyur', location: 'Chitradurga, Karnataka' },
  { description: 'Capital shutdown work at MBF 1', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Capital shutdown work at MBF 2', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Capital shutdown work at Sinter Plant', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Projects</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Successfully executing major industrial projects across Karnataka and beyond. 
            From plant operations to complex fabrication and erection works.
          </p>
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">36+</p>
              <p className="text-sm text-primary-foreground/70">Ongoing Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">16+</p>
              <p className="text-sm text-primary-foreground/70">Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Chimney Fabrication & Erection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title-center mb-8">Chimney Fabrication & Erection</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-muted-foreground text-center text-lg">
              Our team specializes in the complete fabrication and erection of industrial chimneys up to 50 feet in height. 
              This project at BMM ISPATH, Hospete showcases our expertise in steel plate rolling, precision welding, 
              structural assembly, and safe erection using specialized lifting equipment. The chimney serves as a critical 
              component for exhaust gas dispersion in the blast furnace operations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={chimney1} alt="Chimney Fabrication - Base Assembly" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-primary-foreground text-sm">Base Assembly</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={chimney2} alt="Chimney Fabrication - Welding Work" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-primary-foreground text-sm">Welding Work</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={chimney3} alt="Chimney Erection - Lifting" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-primary-foreground text-sm">Erection Process</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={chimney4} alt="Chimney - Final Installation" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-primary-foreground text-sm">Final Installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Nitrogen Plant Erection */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title-center mb-8">Nitrogen Plant Erection & Installation</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-muted-foreground text-center text-lg">
              Complete erection and installation of nitrogen generation plant at KIRLOSKAR, Koppal. This project involved 
              installation of cryogenic separation units, compressors, storage tanks, and associated piping systems. 
              Our team handled the precision alignment of rotating equipment, electrical connections, and successful 
              commissioning to achieve specified nitrogen purity levels for steel making operations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={nitrogen1} alt="Nitrogen Plant - Equipment Setup" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-accent-foreground text-sm">Equipment Setup</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={nitrogen2} alt="Nitrogen Plant - Piping Work" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-accent-foreground text-sm">Piping Installation</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={nitrogen3} alt="Nitrogen Plant - Assembly" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-accent-foreground text-sm">Plant Assembly</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={nitrogen4} alt="Nitrogen Plant - Commissioning" className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-accent-foreground text-sm">Commissioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title-center mb-8">Safety First Initiative</h2>
          <div className="max-w-4xl mx-auto text-center">
            <img src={safety} alt="Safety Pledge Ceremony" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-6" />
            <p className="text-muted-foreground text-lg">
              Our commitment to workplace safety is demonstrated through regular safety pledge ceremonies, 
              toolbox talks, and strict adherence to PPE protocols across all project sites.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects - Full List */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-3 rounded-full">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground">Ongoing Projects</h2>
              <p className="text-muted-foreground">36 Active Projects</p>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold w-12">#</th>
                    <th className="text-left p-4 font-semibold">Project Description</th>
                    <th className="text-left p-4 font-semibold">Client / Site</th>
                    <th className="text-left p-4 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingProjects.map((project, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="p-4 font-bold text-primary">{index + 1}</td>
                      <td className="p-4">{project.description}</td>
                      <td className="p-4 font-medium text-primary">{project.site}</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          {project.location}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects - Full List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-accent p-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground">Completed Projects</h2>
              <p className="text-muted-foreground">16 Successfully Delivered Projects</p>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent text-accent-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold w-12">#</th>
                    <th className="text-left p-4 font-semibold">Project Description</th>
                    <th className="text-left p-4 font-semibold">Client / Site</th>
                    <th className="text-left p-4 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {completedProjects.map((project, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="p-4 font-bold text-accent">{index + 1}</td>
                      <td className="p-4">{project.description}</td>
                      <td className="p-4 font-medium text-accent">{project.site}</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          {project.location}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industrial project requirements. Our team of experts is ready to deliver excellence.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
