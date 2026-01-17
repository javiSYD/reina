interface NavigationProps {
  onNavigate: (section: string) => void;
  showContact: boolean;
}

const Navigation = ({ onNavigate, showContact }: NavigationProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'login', label: 'Investor Login' },
  ];

  return (
    <nav className="flex items-center gap-4 md:gap-8">
      {navItems.map((item, index) => (
        <span key={item.id} className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => onNavigate(item.id)}
            className={`nav-link ${item.id === 'contact' && showContact ? 'nav-link-active' : ''}`}
          >
            {item.label}
          </button>
          {index < navItems.length - 1 && (
            <span className="text-muted-foreground/40 text-sm">|</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Navigation;
