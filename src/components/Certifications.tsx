const certifications = [
  { name: 'CPTS - Hack The Box Certified Penetration Testing Specialist', year: '2025' },
  { name: 'Offsec Certified Professional+ (OSCP+)', year: '2025' },
  { name: 'eJPT - eLearnSecurity Junior Penetration Tester', year: '2023' },
  { name: 'PCNSA - Palo Alto Networks Certified Network Security Administrator', year: '2024' },
  { name: 'ISC² Certified in Cybersecurity (CC)', year: '2023' },
  { name: 'CNSP - Certified Network Security Practitioner', year: '2024' },
];

export const Certifications = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">Certifications</h2>
      
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
          >
            <span className="text-sm text-foreground">{cert.name}</span>
            <span className="text-xs text-muted-foreground ml-4">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
