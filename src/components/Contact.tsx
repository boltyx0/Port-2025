import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:bagulprath@gmail.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/prathameshbagul' },
  { name: 'Twitter/X', icon: Twitter, href: 'https://x.com/@prath_10' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/prath-10' },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-card">
      <h2 className="section-title">Contact</h2>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        I'm open to opportunities where I can contribute to security, red teaming, vulnerability research, and improving organizational security posture. Whether you need help assessing your environment, strengthening employee awareness, or collaborating on security projects, feel free to reach out. I enjoy working on meaningful security challenges and connecting with teams who value practical, intelligence-driven approaches.
      </p>
      
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            <link.icon className="w-4 h-4" />
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};
