export type NavLink = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

export const profile = {
  logo: 'Portfolio.',
  name: 'Logan Ponik',
  heroDisplayName: 'Logan Ponik',
  greeting: 'Hi! my name is,',
  titleLine: "Fullstack Developer & CS Student",
  subtitleLine: 'Focused on building AI-powered systems, scalable architectures, and production-grade applications.',
  resumePath: '/assets/Lponik_Resume_2026.docx.pdf',
  avatarPath: '/assets/lponik-headshot.jpg',
  aboutTitle: 'Hey there! 👋🏻',
  aboutParagraphs: [
    "I'm a Computer Science student at the University of Delaware, concentrating in Artificial Intelligence and Robotics, with expected graduation in May 2026.",
    'I’m deeply interested in machine learning and artificial intelligence, particularly how models move from research into real-world systems. I enjoy understanding how things work under the hood from training pipelines to deployment architecture.',
    'Beyond just using AI tools, I’m interested in building the infrastructure around them: scalable APIs, data systems, and production-ready applications that make intelligent systems practical and reliable.',
  ],
  contactSubtitle:
    "Let's collaborate! Reach out if you're hiring, building, or just want to connect. 😉",
  footerTitle: 'Logan Ponik | Portfolio',
  footerInitial: 'L',
  copyright: '© 2023-2026 Logan Ponik. All rights reserved.',
};

export const heroSocialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/lponik', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/logan-ponik/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:loganponik@gmail.com', icon: 'mail' },
  { label: 'Devpost', href: 'https://devpost.com/software/nutrify-y1htqm', icon: 'trophy' },
];

export const contactCircleLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/logan-ponik/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/lponik', icon: 'github' },
  { label: 'Email', href: 'mailto:loganponik@gmail.com', icon: 'mail' },
  { label: 'Phone', href: 'tel:+17323973789', icon: 'phone' },
  { label: 'Devpost', href: 'https://devpost.com/software/nutrify-y1htqm', icon: 'trophy' },
];

export const footerSocialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/logan-ponik/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/lponik', icon: 'github' },
  { label: 'Email', href: 'mailto:loganponik@gmail.com', icon: 'mail' },
  { label: 'Devpost', href: 'https://devpost.com/software/nutrify-y1htqm', icon: 'trophy' },
];
