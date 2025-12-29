import { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

const COMMANDS = {
  help: `
Available commands:
  help      - Show this help message
  about     - Display about information
  skills    - List technical skills
  projects  - Show featured projects
  certs     - Display certifications
  contact   - Show contact information
  whoami    - Display current user
  clear     - Clear terminal
  neofetch  - Display system info
`,
  about: `
┌───────────────────────────────────────────────────────────┐
│  SECURITY CONSULTANT                                      │
├───────────────────────────────────────────────────────────┤
│  I use offensive security to help customers make          │
│  better security decisions, assessing risk, validating    │
│  security controls, and supporting the adoption           │
│  of solutions that fit real-world environments.           │
│                                                           │
│  "Breaking systems to make them stronger."                │
└───────────────────────────────────────────────────────────┘
`,
  skills: `
[+] Offensive Security: Red Teaming, Adversary Simulation, Pentesting, Mobile Security
[+] Tooling: Burp Suite, Metasploit, Impacket, BloodHound, Mimikatz, Responder
[+] Recon & Automation: Nmap, Amass, Nuclei, RustScan, Gobuster, FFUF
[+] Mobile & RE: MobSF, Frida, JADX, APKTool, ADB
[+] Security Awareness: Phishing Simulations, KnowBe4, CanIPhish
[+] Governance: ISO 27001, SOC 2, HIPAA, GDPR, Risk Assessment
[+] Platforms: Kali Linux, Parrot OS, Windows, HTB / Proving Grounds
[+] Consulting: Client Communication, Technical Reporting, Executive Briefings
`,
  projects: `
[01] Security Research & Writeups
     └─ Technical blogs on HTB, CVE PoCs, exploitation methodology
     └─ medium.com/@prathameshbagul
     
[02] Bug Bounty Findings
     └─ Acknowledged vulnerabilities across global programs
     └─ linkedin.com/in/prathameshbagul
`,
  certs: `
╔════════════════════════════════════════════════════════════════════════════════╗
║  [✓] CPTS - Hack The Box Certified Penetration Testing Specialist (2025)       ║
║  [✓] OSCP+ - Offsec Certified Professional+ (2025)                             ║
║  [✓] eJPT - eLearnSecurity Junior Penetration Tester (2023)                    ║
║  [✓] PCNSA - Palo Alto Networks Certified Network Security Admin (2024)        ║
║  [✓] ISC² Certified in Cybersecurity (CC) (2023)                               ║
║  [✓] CNSP - Certified Network Security Practitioner (2024)                     ║
╚════════════════════════════════════════════════════════════════════════════════╝
`,
  contact: `
┌─ SECURE CHANNELS ─────────────────────────────────────────────┐
│                                                            │
│  [>] Email:    bagulprath@gmail.com                        │
│  [>] GitHub:   github.com/prath-10                         │
│  [>] LinkedIn: linkedin.com/in/prathameshbagul             │
│  [>] Twitter:  @prath_10                                   │
│                                                            │
└────────────────────────────────────────────────────────────────┘
`,
  whoami: 'root@kali:~# prathamesh_bagul',
  neofetch: `
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       ██ ▄▄▄▄▄ █▄ ▄▄▄█ ▄▄▄▄▄ ██    root@security-research
       ██ █   █ ██▄█ ▄██ █   █ ██   ----------------------
       ██ █▄▄▄█ █ ▄▄▄▄ █ █▄▄▄█ ██   OS: Bolt OS
       ██▄▄▄▄▄▄▄█ █▄█ █▄▄▄▄▄▄▄██    Host: Prathamesh Bagul
       ██ ▄▄▄ ▄▄▄▄▄█ ▄▄ ▄▄▄ ████    Role: Cybersecurity Consultant
       ██▄█▄█▄▄▄▄▄▄█▄██▄█▄█▄████    Location: Dubai, UAE
       ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀    Shell: /bin/hack
                                    Focus: Security Consulting
                                    Theme: Dark [Always]
`,
};

export const Terminal = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to the Security Research Terminal v1.0' },
    { type: 'output', content: 'Type "help" for available commands.\n' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'input', content: `┌──(root㉿kali)-[~]\n└─$ ${cmd}` }]);

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd in COMMANDS) {
      setHistory(prev => [...prev, { type: 'success', content: COMMANDS[trimmedCmd as keyof typeof COMMANDS] }]);
    } else if (trimmedCmd === '') {
      // Do nothing for empty command
    } else {
      setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-window scanlines" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-primary" />
        <span className="ml-4 text-sm text-muted-foreground">root@kali: ~/portfolio</span>
      </div>
      <div ref={terminalRef} className="terminal-body font-mono text-sm">
        {history.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap mb-1 ${
              line.type === 'error' ? 'text-destructive' :
              line.type === 'success' ? 'text-primary' :
              line.type === 'input' ? 'text-secondary' :
              'text-muted-foreground'
            }`}
          >
            {line.content}
          </div>
        ))}
        <div className="text-secondary">┌──(root㉿kali)-[~]</div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-secondary">└─$ </span>
          <span className="cursor-blink text-primary">▌</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-primary caret-transparent ml-1"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};
