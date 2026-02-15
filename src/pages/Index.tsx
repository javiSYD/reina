import { useState } from 'react';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import MissionSection from '@/components/MissionSection';
import ContactSection from '@/components/ContactSection';
import InvestorLogin from '@/components/InvestorLogin';
import Footer from '@/components/Footer';

type ActiveSection = 'none' | 'about' | 'contact' | 'login';

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('none');

  const handleNavigate = (section: string) => {
    
    // Toggle section - if same section clicked, close it
    if (section === activeSection) {
      setActiveSection('none');
    } else {
      setActiveSection(section as ActiveSection);
    }
  };

  const hasActiveContent = activeSection !== 'none';

  return (
    <div className="bg-background">
      {/* Hero Section - Full viewport height */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 md:mb-10 animate-fade-in">
          <Logo onClick={() => setActiveSection('none')} />
        </div>

        {/* Navigation */}
        <div className="animate-fade-in animate-fade-in-delay-1 mb-8 sm:mb-10 md:mb-12">
          <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
        </div>

        {/* Dynamic Content Area */}
        {hasActiveContent && (
          <div className="w-full max-w-4xl animate-fade-in-up mt-8 sm:mt-10 md:mt-12">
            {activeSection === 'about' && <MissionSection />}
            {activeSection === 'contact' && <ContactSection />}
            {activeSection === 'login' && <InvestorLogin />}
          </div>
        )}
      </div>

      {/* Footer - Below the fold, requires scrolling */}
      <div className="px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
