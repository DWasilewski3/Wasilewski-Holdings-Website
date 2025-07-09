export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  status: string;
  timeline: string;
  category: string;
}

export interface Investment {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  ownership: string;
  industry: string;
  founded: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Smart City Infrastructure',
    description: 'Revolutionizing urban living through connected infrastructure and sustainable solutions.',
    imageUrl: '/images/placeholder.svg',
    link: '/projects/smart-city',
    status: 'In Progress',
    timeline: '2024-2025',
    category: 'Urban Development'
  },
  {
    id: '2',
    title: 'Renewable Energy Grid',
    description: 'Building the future of energy distribution with advanced renewable technology.',
    imageUrl: '/images/placeholder.svg',
    link: '/projects/energy-grid',
    status: 'Planning',
    timeline: '2024-2026',
    category: 'Energy'
  },
  {
    id: '3',
    title: 'AI Research Lab',
    description: 'Pushing the boundaries of artificial intelligence and machine learning.',
    imageUrl: '/images/placeholder.svg',
    link: '/projects/ai-lab',
    status: 'Active',
    timeline: '2023-2025',
    category: 'Technology'
  }
];

export const investments: Investment[] = [
  {
    id: '1',
    title: 'DayDream Technologies',
    description: 'Specializing in custom application, website, and software development services designed to modernize businesses.',
    imageUrl: '/images/placeholder.svg',
    link: 'https://daydreamtechnologies.net/',
    ownership: 'Minority Stake',
    industry: 'Software Development',
    founded: '2024',
    location: 'Michigan'
  },
  {
    id: '2',
    title: 'PowerShade',
    description: 'Innovative solar-powered umbrella company providing sustainable outdoor solutions.',
    imageUrl: '/images/placeholder.svg',
    link: '/investments/powershade',
    ownership: 'Minority Stake',
    industry: 'Solar Technology',
    founded: '2025',
    location: 'Michigan'
  },
  {
    id: '3',
    title: 'Kloud Technologies',
    description: 'Revolutionizing digital networking with NFC-enabled Cloud Cards for seamless contact sharing.',
    imageUrl: '/images/placeholder.svg',
    link: 'https://www.cloud-cards.link/',
    ownership: 'Minority Stake',
    industry: 'Digital Networking',
    founded: '2025',
    location: 'Michigan'
  }
]; 