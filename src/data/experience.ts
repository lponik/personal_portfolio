export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Axe.ai',
    role: 'Software Development Intern',
    location: 'Remote',
    period: 'June 2025 - August 2025',
    highlights: [
      'Contributed to frontend development of a desktop application using React, Tauri, and Docker, including reintegration of toast notifications from a legacy system.',
      'Prototyped and implemented a dynamic React Flow interface to visualize system processes in real time, improving usability and team collaboration.',
    ],
  },
];
