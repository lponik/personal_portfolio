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
    title: 'researchpp',
    slug: 'researchpp',
    description: 'Query-to-report research automation pipeline.',
    liveUrl: 'https://github.com/lponik/researchpp',
    techIcons: ['python', 'langchain'],
  },
  {
    title: 'Terris',
    slug: 'terris',
    description: 'Geospatial app that scores environmental risk.',
    liveUrl: 'https://terris-theta.vercel.app/',
    techIcons: ['nextjs', 'fastapi', 'scikitlearn'],
  },
  {
    title: 'Foliage (Building)',
    slug: 'foliage',
    description: 'Turns resumes into polished portfolio sites.',
    liveUrl: 'https://fragile-paradox.vercel.app/home',
    techIcons: ['nextjs', 'supabase', 'fastapi'],
  },
  {
    title: 'Nutrify',
    slug: 'nutrify',
    description: 'Analyzes meal nutrition from text or photos.',
    liveUrl: 'https://devpost.com/software/nutrify-y1htqm',
    techIcons: ['flask', 'javascript', 'html', 'css', 'gemini'],
  },
  {
    title: 'MilaClassifier',
    slug: 'mila-classifier',
    description: 'Classifies my cat versus other cats.',
    liveUrl: 'https://github.com/lponik/Mila-Classifier',
    techIcons: ['python', 'pytorch'],
  },
  {
    title: 'PhishTriage',
    slug: 'PhishTriage',
    description: 'Offline CLI phishing triage for .eml files.',
    liveUrl: 'https://github.com/lponik/phishTriage',
    techIcons: ['python'],
  },
];
