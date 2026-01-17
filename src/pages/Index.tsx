import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import MissionSection from '@/components/MissionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-16 md:pt-24 pb-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo */}
          <div className="mb-10 animate-fade-in">
            <Logo />
          </div>

          {/* Navigation */}
          <div className="animate-fade-in animate-fade-in-delay-1">
            <Navigation />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <MissionSection />
          <ContactSection />
        </div>
      </main>

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
