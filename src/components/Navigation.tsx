interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: 'none' | 'about' | 'contact';
}

const Navigation = ({ onNavigate, activeSection }: NavigationProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'login', label: 'Investor Login' },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
      {navItems.map((item, index) => (
        <span key={item.id} className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <button
            onClick={() => onNavigate(item.id)}
            className={`nav-link text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-foreground font-medium' 
                : ''
            }`}
          >
            {item.label}
          </button>
          {index < navItems.length - 1 && (
            <span className="text-muted-foreground/40 text-xs sm:text-sm">|</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Navigation;
