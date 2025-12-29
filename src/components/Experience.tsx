const experiences = [
  {
    date: 'Oct 2024 - Present',
    title: 'Security Consultant - MENA Region',
    company: 'Paratus Cybersecurity',
    location: 'Dubai, UAE',
    description: 'Lead red teaming and full-scope offensive security assessments across cloud, network, web, and social engineering vectors, delivering clear exploitation paths and remediation guidance to technical and executive stakeholders. Manage client engagements including POCs, security assessments, and technical demos for various security tools. I also run phishing simulations, awareness reporting, and tailored security training to strengthen organizational resilience.',
    tags: ['Red Teaming', 'Pentesting', 'Client Engagement', 'Threat Exposure', 'Security Consulting'],
  },
  {
    date: 'Dec 2022 - Oct 2024',
    title: 'Bug Hunter & Vulnerability Specialist',
    company: 'Freelance',
    location: 'Remote',
    description: 'Discovered and responsibly disclosed vulnerabilities across global programs. Achieved Top 200 on YesWeHack and Top 20 on Bug Bounty Switzerland in 2023. Recognized by Oracle, Huawei, DBS Bank, Air Asia, Swisscom, L\'Oréal, Swiggy, ADB, and VFS Global for impactful, high-severity reports.',
    tags: ['Bug Bounty', 'Responsible Disclosure', 'Advanced Recon', 'Web Security'],
  },
  {
    date: 'Jan 2024 - Mar 2024',
    title: 'Infosec Analyst Intern',
    company: 'Scrut Automation',
    location: 'Bangalore, India',
    description: 'Conducted security audits for ISO 27001, SOC 2, HIPAA, and GDPR compliance. Worked closely with CTOs to assess infrastructure and recommend security hardening. Developed and implemented information security policies for global clients.',
    tags: ['Compliance', 'ISO 27001', 'SOC 2', 'GRC'],
  },
  {
    date: 'Jul 2023 - Dec 2023',
    title: 'SOC Intern',
    company: 'Tata Communications',
    location: 'Pune, India',
    description: 'Assisted in security incident investigations, managed Palo Alto firewall configurations, Zscaler deployments, and cloud-delivered security profiles. Strengthened client security posture through configuration audits and log analysis.',
    tags: ['SOC', 'Palo Alto', 'Zscaler', 'Incident Response'],
  },
];

export const Experience = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
            <div className="experience-date">{exp.date}</div>
            <div>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company} - {exp.location}</p>
              <p className="experience-description">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
