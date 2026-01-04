import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Building2, CheckCircle, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import safety from '@/assets/safety.jpg';

const ongoingProjects = [
  { description: 'Operation of Ore Beneficiation Plant 70,000 TPD (OBP-2)', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Mechanical Maintenance of EOT Crane HSM2', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Mechanical Maintenance of EOT Crane CRM2', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Mechanical Maintenance of EOT Crane HSM3', site: 'JVML Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Operation and Maintenance of OBP-III Wet Grinding Area', site: 'JSW Toranagallu', location: 'Bellary, Karnataka' },
  { description: 'Manpower supply for Commando Group for JVML, JSW', site: 'JVML Toranagallu', location: 'Bellary, Karnataka' },
];

const completedProjects = [
  { description: 'Oxygen Plant Erection and Installation', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Crusher Installation and Commissioning', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Nitrogen Plant Erection and Installation', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
  { description: 'Chimney Fabrication and Erection work 50\'', site: 'BMM ISPATH, Hospete', location: 'Hospete, Karnataka' },
  { description: 'Operation and Maintenance of Sinter Plant 1500 TPA', site: 'KIRLOSKAR, Hiriyur', location: 'Chitradurga, Karnataka' },
  { description: 'Capital shutdown work at MBF 1 & MBF 2', site: 'KIRLOSKAR, Koppal', location: 'Koppal, Karnataka' },
];

const projectGallery = [
  { src: project1, title: 'Chimney Fabrication & Erection', description: 'Steel chimney fabrication and erection work at BMM ISPATH, Hospete' },
  { src: project2, title: 'Industrial Plant Erection', description: 'Heavy industrial equipment erection and installation services' },
  { src: project3, title: 'Nitrogen Plant Installation', description: 'Complete nitrogen plant erection and commissioning at KIRLOSKAR, Koppal' },
  { src: safety, title: 'Safety First Initiative', description: 'Our commitment to workplace safety - Safety pledge ceremony' },
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
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title-center mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectGallery.map((img, index) => (
              <div key={index} className="group bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{img.title}</h3>
                  <p className="text-muted-foreground">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-3 rounded-full">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-foreground">Ongoing Projects</h2>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold">#</th>
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
                          <MapPin className="w-4 h-4" />
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

      {/* Completed Projects */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-accent p-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-foreground">Completed Projects</h2>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent text-accent-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold">#</th>
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
                          <MapPin className="w-4 h-4" />
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
