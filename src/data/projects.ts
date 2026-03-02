export type Project = {
  title: string;
  slug: string;
  description: string;
  liveUrl: string;
  techIcons: string[];
  isUnderDevelopment?: boolean;
};

export const projects: Project[] = [
    {
    title: 'Terris',
    slug: 'terris',
    description:
      'A full-stack environmental screening app that computes a transparent, deterministic 0–10 risk score from public geospatial datasets.',
    liveUrl: 'https://terris-theta.vercel.app/',
    techIcons: ['nextjs', 'fastapi', 'scikitlearn'],
  },
  {
    title: 'Foliage (Building)',
    slug: 'foliage',
    description:
      'A full-stack resume-to-portfolio platform that converts uploaded resumes into structured profile content and portfolio-ready pages.',
    liveUrl: 'https://fragile-paradox.vercel.app/home',
    techIcons: ['nextjs', 'supabase', 'fastapi',],
  },
  {
    title: 'Nutrify',
    slug: 'nutrify',
    description:
      'A Flask-based nutrition analysis app using Google Gemini multimodal AI to analyze food via text and image input in real time.',
    liveUrl: 'https://devpost.com/software/nutrify-y1htqm',
    techIcons: ['flask', 'javascript', 'html', 'css', 'gemini'],
  },
  {
    title: 'MilaClassifier',
    slug: 'mila-classifier',
    description:
      'A binary image classifier that distinguishes my cat from other cats using transfer learning with EfficientNet-B0 and class-weighted loss.',
    liveUrl: 'https://github.com/lponik/Mila-Classifier',
    techIcons: ['python', 'pytorch',],
  },
    {
    title: 'PhishTriage',
    slug: 'PhishTriage',
    description:
      ' PhishTriage is an explainable, offline phishing triage CLI for raw .eml files. It’s built to surface suspicious patterns quickly and produce analyst-readable findings with a simple risk score.',
    liveUrl: 'https://github.com/lponik/phishTriage',
    techIcons: ['python',],
  },

 
];
