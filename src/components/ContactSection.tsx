interface Office {
  city: string;
  address: string[];
  mapUrl: string;
}

const offices: Office[] = [
  {
    city: 'Australia',
    address: ['241 Arthur Street,', 'Teneriffe QLD 4005'],
    mapUrl: 'https://maps.google.com/?q=241+Arthur+Street+Teneriffe+QLD+4005+Australia',
  },
  {
    city: 'Colombia',
    address: ['Cra. 6 Este, 1a-60.', 'Cajica, Cundinamarca 250240'],
    mapUrl: 'https://maps.google.com/?q=Cra+6+Este+1a-60+Cajica+Cundinamarca+Colombia',
  },
  {
    city: 'Japan',
    address: ['〒105-0004', '東京都港区新橋2-4-5'],
    mapUrl: 'https://maps.google.com/?q=東京都港区新橋2-4-5',
  },
];

const ContactSection = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10">
      <div className="max-w-4xl mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 md:gap-14 mb-8 sm:mb-10">
          {offices.map((office) => (
            <div key={office.city} className="text-center">
              <h3 className="font-serif text-base sm:text-lg md:text-xl font-medium text-foreground mb-2 sm:mb-3">
                {office.city}
              </h3>
              <address className="not-italic text-body text-xs sm:text-sm leading-relaxed">
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
                className="inline-block mt-2 text-link text-xs sm:text-sm hover:underline"
              >
                map››
              </a>
            </div>
          ))}
        </div>

        <div className="text-center text-body text-xs sm:text-sm">
          <p>
            For more information email{' '}
            <a href="mailto:IR@jrreina.com" className="text-link">
              IR@jrreina.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
