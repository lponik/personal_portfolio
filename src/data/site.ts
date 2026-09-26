export const site = {
  url: 'https://www.loganponik.com',
  name: 'Logan Ponik',
  degree: 'B.S. Computer Science',
  graduation: 'University of Delaware · May 2026',
  certification: 'AWS Certified Solutions Architect – Associate',
  avatarPath: '/assets/lponik-headshot.jpg',
  about:
    "I'm a Computer Science graduate focused on cloud infrastructure, Linux, DevOps, and platform engineering. I enjoy building and automating reliable systems and understanding how they work.",
  contact:
    "Currently exploring entry-level cloud infrastructure, DevOps, platform, and systems engineering opportunities. I'd love to connect, please feel free to reach out by email!",
  email: 'mailto:loganponik@gmail.com',
  navigation: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  profileLinks: [
    { label: 'GitHub', href: 'https://github.com/lponik' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/logan-ponik/' },
    { label: 'Resume', href: '/assets/Lponik_Resume_2026.docx%20(10).pdf', download: true },
  ],
} as const;

export const experience = {
  company: 'Axe.ai',
  role: 'Software Development Intern',
  period: 'June 2025 — August 2025',
  highlights: [
    'Built and shipped production features for a React/Tauri desktop application, including re-engineering a legacy notification system to restore real-time alerts for end users.',
    'Developed an interactive real-time architecture visualization with React Flow and contributed through weekly sprints, code reviews, and technical documentation.',
  ],
  technologies: ['React', 'Tauri', 'Docker'],
} as const;

export const skillGroups = [
  { title: 'Infrastructure', skills: ['AWS', 'Terraform', 'Linux', 'Ansible', 'Github Actions'] },
  { title: 'Containers & Visibility', skills: ['Docker', 'Podman', 'Prometheus', 'Grafana', 'Wireshark'] },
  { title: 'Development', skills: ['Python', 'React', 'SQL', 'Git'] },
] as const;

export const projects = [
  {
    title: 'Rocky Linux Homelab',
    description:
      'Self-managed Rocky Linux environment focused on systems administration, automation, security hardening, networking, and observability.',
    githubUrl: 'https://github.com/lponik/Rocky',
    technologies: ['Rocky Linux', 'Ansible', 'Nginx', 'Podman', 'Prometheus', 'Grafana', 'systemd'],
  },
  {
    title: 'Terraform AWS Infrastructure',
    description:
      'Multi-AZ AWS architecture defined with Terraform, currently developed and tested locally with Floci ahead of deployment to AWS',
    githubUrl: 'https://github.com/lponik/terraform-arch',
    technologies: ['Terraform', 'AWS', 'VPC', 'EC2', 'ALB', 'Auto Scaling', 'IAM', 'CloudWatch'],
  },
  {
    title: 'Terris',
    description:
      'Containerized geospatial application for exploring proximity to EPA Superfund sites and landfills, backed by a deterministic data pipeline and automated CI validation.',
    githubUrl: 'https://github.com/lponik/Terris',
    liveUrl: 'https://terris-theta.vercel.app/',
    technologies: ['Next.js', 'FastAPI', 'NumPy', 'Docker', 'Github Actions'],
  },
] as const;

export const seo = {
  title: `${site.name} | Cloud Infrastructure & Linux`,
  description:
    'Logan Ponik is a Computer Science graduate and AWS Certified Solutions Architect focused on cloud infrastructure, Linux, Terraform, networking, automation, and reliability.',
  keywords: [
    'Logan Ponik',
    'Logan Ponik portfolio',
    'Cloud Infrastructure Engineer',
    'DevOps Engineer',
    'Platform Engineer',
    'Linux Systems',
    'AWS',
    'Terraform',
    'University of Delaware',
  ],
} as const;
