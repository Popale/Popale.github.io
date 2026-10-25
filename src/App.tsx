import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscordSimulator } from './components/DiscordSimulator';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Interactive Canvas */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar onOpenSimulator={scrollToSimulator} />

      {/* Main Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Hero onOpenSimulator={scrollToSimulator} />
        <DiscordSimulator />
        <ProjectsSection />
        <TechStackSection />
        <ArchitectureSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      <ToastNotification 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
};

export default App;
