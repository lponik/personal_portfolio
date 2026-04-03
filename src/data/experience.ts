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
      'Developed front-end features for a production desktop app (React, Tauri, Docker), including re-engineering a legacy notification system to restore real-time toast alerts for end users.',
      'Designed and shipped an interactive real-time flow diagram (React Flow) to visualize system architecture, reducing onboarding friction and improving cross-team alignment during sprint reviews.',
      'Collaborated in an Agile environment with weekly sprints, contributing to code reviews and maintaining component documentation for a cross-functional engineering team.',
    ],
  },
];
