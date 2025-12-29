import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 h-screen flex flex-col justify-center p-8 lg:p-12">
      <div className="space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded-full text-xs">
          <span className="status-indicator" />
          <span className="text-primary">0xSecurity</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Prathamesh<br />Bagul
        </h1>

        {/* Title */}
        <p className="text-lg text-muted-foreground">
          Cybersecurity Consultant
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
          I help organizations and people strengthen their security.
          <br />
          And yes, I'll help you avoid getting phished ;)
        </p>

        {/* CTA Button */}
        <Button 
          onClick={scrollToContact}
          className="mt-4"
          variant="outline"
        >
          Contact me
        </Button>

        {/* Meta Info */}
        <div className="space-y-2 pt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">Based in:</span>
            <span className="text-foreground">Dubai, UAE</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">Focus:</span>
            <span className="text-foreground">Security Consulting, Research, and Awareness</span>
          </div>
        </div>
      </div>
    </div>
  );
};
