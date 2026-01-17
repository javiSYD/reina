import { useState } from 'react';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import MissionSection from '@/components/MissionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

type ActiveSection = 'none' | 'about' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('none');

  const handleNavigate = (section: string) => {
    if (section === 'login') {
      // Handle investor login - could open modal or redirect
      return;
    }
    
    // Toggle section - if same section clicked, close it
    if (section === activeSection) {
      setActiveSection('none');
    } else {
      setActiveSection(section as ActiveSection);
    }
  };

  const hasActiveContent = activeSection !== 'none';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 md:mb-10 animate-fade-in">
          <Logo />
        </div>

        {/* Navigation */}
        <div className="animate-fade-in animate-fade-in-delay-1 mb-8 sm:mb-10 md:mb-12">
          <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
        </div>

        {/* Dynamic Content Area */}
        {hasActiveContent && (
          <div className="w-full max-w-4xl animate-fade-in-up">
            {activeSection === 'about' && <MissionSection />}
            {activeSection === 'contact' && <ContactSection />}
          </div>
        )}
      </div>

      {/* Footer - Always visible at bottom */}
      <div className="px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
