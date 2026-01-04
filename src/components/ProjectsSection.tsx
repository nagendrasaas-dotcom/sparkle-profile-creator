import { MapPin, Building2, ArrowRight } from 'lucide-react';
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

const projectImages = [
  { src: project1, title: 'Chimney Fabrication' },
  { src: project2, title: 'Industrial Erection' },
  { src: project3, title: 'Nitrogen Plant' },
  { src: safety, title: 'Safety Pledge' },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title-center">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Successfully executing major industrial projects across Karnataka and beyond
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 mt-4 text-accent font-semibold hover:underline"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {projectImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-primary-foreground font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Tables */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ongoing Projects */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary text-primary-foreground p-4">
              <h3 className="font-heading font-bold text-xl flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Ongoing Projects
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 font-semibold">Description</th>
                    <th className="text-left p-3 font-semibold">Site</th>
                    <th className="text-left p-3 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingProjects.map((project, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="p-3">{project.description}</td>
                      <td className="p-3 font-medium text-primary">{project.site}</td>
                      <td className="p-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Completed Projects */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="bg-accent text-accent-foreground p-4">
              <h3 className="font-heading font-bold text-xl flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Completed Projects
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 font-semibold">Description</th>
                    <th className="text-left p-3 font-semibold">Site</th>
                    <th className="text-left p-3 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {completedProjects.map((project, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="p-3">{project.description}</td>
                      <td className="p-3 font-medium text-accent">{project.site}</td>
                      <td className="p-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
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
      </div>
    </section>
  );
};
