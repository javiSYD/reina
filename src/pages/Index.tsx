import { useState } from 'react';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import MissionSection from '@/components/MissionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showContact, setShowContact] = useState(false);

  const handleNavigate = (section: string) => {
    if (section === 'contact') {
      setShowContact(!showContact);
    } else if (section === 'about') {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full viewport height with centered content */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-12 animate-fade-in">
            <Logo />
          </div>

          {/* Navigation */}
          <div className="animate-fade-in animate-fade-in-delay-1">
            <Navigation onNavigate={handleNavigate} showContact={showContact} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <main className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <MissionSection />
        </div>
      </main>

      {/* Contact Section - Shown when clicked */}
      {showContact && (
        <div className="px-6 md:px-12 animate-fade-in-up">
          <div className="max-w-6xl mx-auto">
            <ContactSection />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
