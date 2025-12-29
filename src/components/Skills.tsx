const skillCategories = [
  {
    name: 'Offensive Security',
    skills: ['Red Teaming', 'Adversary Simulation', 'Pentesting', 'Mobile Security', 'Social Engineering'],
  },
  {
    name: 'Tooling',
    skills: ['Burp Suite', 'Metasploit', 'Impacket', 'BloodHound', 'Mimikatz', 'Responder', 'SQLmap'],
  },
  {
    name: 'Recon & Automation',
    skills: ['Nmap (NSE)', 'Amass', 'Nuclei', 'RustScan', 'Gobuster', 'FFUF', 'Python/Bash Scripting'],
  },
  {
    name: 'Mobile & Reverse Engineering',
    skills: ['MobSF', 'Frida', 'JADX / APKTool', 'ADB'],
  },
  {
    name: 'Security Awareness',
    skills: ['Phishing Simulations', 'KnowBe4', 'CanIPhish', 'Training Content'],
  },
  {
    name: 'Security Consulting & Governance',
    skills: ['ISO 27001', 'SOC 2', 'HIPAA', 'GDPR', 'Risk Assessment', 'Security Audits', 'Policy Development'],
  },
  {
    name: 'Platforms & Environments',
    skills: ['Kali Linux', 'Parrot OS', 'Windows', 'HTB / Proving Grounds'],
  },
  {
    name: 'Consulting Competencies',
    skills: ['Client Communication', 'Technical Reporting', 'Executive Briefings', 'Solution Demonstrations', 'Stakeholder Management'],
  },
];

export const Skills = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">Skills</h2>
      
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-foreground mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
