import { MapPin } from 'lucide-react';

interface Office {
  city: string;
  address: string[];
  mapUrl: string;
}

const offices: Office[] = [
  {
    city: 'Silicon Valley',
    address: ['2550 Sand Hill Road,', 'Suite 150', 'Menlo Park, CA 94025'],
    mapUrl: 'https://goo.gl/maps/9B5wMDxmr132',
  },
  {
    city: 'Boston',
    address: ['One International Place,', 'Suite 4610', 'Boston, MA 02110'],
    mapUrl: 'https://goo.gl/maps/CwDzqeVGFUK2',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {offices.map((office, index) => (
            <div 
              key={office.city} 
              className={`text-center animate-fade-in-up ${index === 0 ? 'animate-fade-in-delay-1' : 'animate-fade-in-delay-2'}`}
            >
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {office.city}
              </h3>
              <address className="not-italic text-body leading-relaxed mb-4">
                {office.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < office.address.length - 1 && <br />}
                  </span>
                ))}
              </address>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-1 text-sm"
              >
                <MapPin size={14} />
                View Map
              </a>
            </div>
          ))}
        </div>

        <div className="text-center text-body animate-fade-in-up animate-fade-in-delay-3">
          <p className="mb-2">
            For more information, please call{' '}
            <a href="tel:+16173106180" className="text-link">
              (617) 310-6180
            </a>{' '}
            or email{' '}
            <a href="mailto:ir@altimeter.com" className="text-link">
              IR@altimeter.com
            </a>
          </p>
          <p>
            For media inquiries, please contact{' '}
            <a href="mailto:press@altimeter.com" className="text-link">
              press@altimeter.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
