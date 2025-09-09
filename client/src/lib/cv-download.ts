export function downloadCV() {
  // Create a mock CV download
  // In a real implementation, this would link to an actual PDF file
  const cvData = {
    name: "Hassan Kazmouhi",
    title: "Technicien en développement informatique",
    email: "Kazmouhi.malak@gmail.com",
    phone: "+212 652 57 12 13",
    location: "Tanger, Maroc"
  };

  const cvText = `
HASSAN KAZMOUHI
Technicien en développement informatique

Contact:
Email: ${cvData.email}
Téléphone: ${cvData.phone}
Localisation: ${cvData.location}

EXPÉRIENCE PROFESSIONNELLE:
• Programmeur - APTIV Tanger (Juin 2022 - Présent)
• Technicien Programmeur - APTIV Kénitra (Avril - Octobre 2021)

FORMATION:
• Licence professionnelle - Modélisation Statistique Informatique (2020 - En cours)
• Technicien Spécialisé - Développement Informatique (2018 - 2020)

COMPÉTENCES:
• Langages: C, C#, Python, SQL, JavaScript
• Outils: TIA Portal, Cognex, Keyence
• Domaines: Automatisation, Analyse de données, Vision industrielle
  `;

  const blob = new Blob([cvText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Hassan-Kazmouhi-CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
