import clientJsw from '@/assets/client-jsw.jpg';
import clientBmm from '@/assets/client-bmm.png';
import clientKirloskar from '@/assets/client-kirloskar.jpg';
import clientKalyani from '@/assets/client-kalyani.jpg';

const clients = [
  { logo: clientJsw, name: 'JSW Steel' },
  { logo: clientBmm, name: 'BMM Ispat' },
  { logo: clientKirloskar, name: 'Kirloskar' },
  { logo: clientKalyani, name: 'Kalyani Steels' },
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title-center">Our Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Trusted by leading industrial giants across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
