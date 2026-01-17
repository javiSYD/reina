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
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-10 sm:mb-12">
          {offices.map((office) => (
            <div key={office.city} className="text-center">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-3 sm:mb-4">
                {office.city}
              </h3>
              <address className="not-italic text-body text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
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
                className="text-link text-xs sm:text-sm"
              >
                Map »
              </a>
            </div>
          ))}
        </div>

        <div className="text-center text-body text-xs sm:text-sm space-y-1 sm:space-y-2">
          <p>
            For more information, please call{' '}
            <a href="tel:+16173106180" className="text-link whitespace-nowrap">
              (617) 310-6180
            </a>{' '}
            or email{' '}
            <a href="mailto:ir@altimeter.com" className="text-link">
              IR@altimeter.com
            </a>.
          </p>
          <p>
            For media inquiries, please contact{' '}
            <a href="mailto:press@altimeter.com" className="text-link">
              press@altimeter.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
