import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Security Research & Writeups',
    link: 'https://medium.com/@prathameshbagul',
    linkText: 'Medium',
    subtitle: 'Blogs',
    description: 'Technical blogs covering Hack The Box write-ups, Linux debugging, CVE proof-of-concept replications, and real-world exploitation methodology.',
    tags: ['XSS', 'SQLi', 'Training Lab'],
  },
  {
    title: 'Bug Bounty Findings',
    link: 'https://www.linkedin.com/in/prathameshbagul',
    linkText: 'LinkedIn',
    subtitle: 'Private targets • Public Programs',
    description: 'A brief showcase of my bug bounty acknowledgments, documented through LinkedIn posts featuring recognized vulnerabilities across global programs.',
    tags: ['Security Testing', 'Offensive Security', 'Bug Bounty'],
  },
  {
    title: 'OpenRedire Injectbolt',
    link: 'https://github.com/prath-10/Inject-Bolt',
    linkText: 'GitHub',
    subtitle: 'Python • Web • CLI Tooling',
    description: 'An automation-focused open-redirect fuzzer designed to detect unsafe redirect flows across large target scopes. Supports custom payloads, injection points, and automated reporting.',
    tags: ['Python', 'Recon', 'Automation'],
  },
];

export const Projects = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{project.subtitle}</p>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-primary hover:underline shrink-0"
              >
                {project.linkText}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
