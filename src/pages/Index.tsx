import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { TerminalSection } from '@/components/TerminalSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-0">
        {/* Left Sidebar - Sticky */}
        <aside className="lg:h-screen lg:sticky lg:top-0 border-r border-border">
          <Hero />
        </aside>

        {/* Right Content - Scrollable */}
        <main className="p-6 lg:p-8 space-y-6 lg:space-y-8">
          <TerminalSection />
          <About />
          <Experience />
          <Certifications />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
