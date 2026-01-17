interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection = 'about' }: NavigationProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'login', label: 'Investor Login' },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'login') {
      // Could be replaced with actual login functionality
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center gap-6 md:gap-10">
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
