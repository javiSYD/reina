const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          Altimeter Capital Management, LP is a registered investment adviser with the Securities 
          and Exchange Commission. Registration does not imply a certain level of skill or training 
          nor does it imply endorsement by the SEC. This is not an offer or solicitation for the 
          purchase or sale of any security and should not be construed as such. References to 
          specific securities and issuers are for illustrative purposes only and are not intended 
          to be, and should not be interpreted as, recommendations to purchase or sell such securities.
        </p>
        <p className="text-xs text-muted-foreground text-center mt-6">
          © {currentYear} Altimeter Capital Management, LP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
