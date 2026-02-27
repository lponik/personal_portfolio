export type SkillItem = {
  name: string;
};

export const languages: SkillItem[] = [
  { name: 'TypeScript' },
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'Java' },
  { name: 'SQL' },
  { name: 'C++' },
];

export const frameworks: SkillItem[] = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'FastAPI' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'PyTorch' },
  { name: 'SciKit' },
];

export const infrastructureTools: SkillItem[] = [
  { name: 'Docker' },
  { name: 'Supabase' },
  { name: 'Git' },
  { name: 'Vercel' },
  { name: 'MongoDB' },
  { name: 'Ghidra' },
];

export const skillGroups = [
  { title: 'Languages', items: languages },
  { title: 'Frameworks', items: frameworks },
  { title: 'Infrastructure & Tools', items: infrastructureTools },
];
