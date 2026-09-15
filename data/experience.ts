export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  stack: string[];
  achievement: string;
  highlightBadge?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "professional-freelancer",
    role: "Professional Freelancer",
    company: "Self-Employed",
    duration: "2023 — Present",
    highlightBadge: "Freelance & Consulting",
    responsibilities: [
      "Architecting and delivering bespoke full-stack applications, RESTful services, and modern web products for clients",
      "Managing end-to-end engineering lifecycles from requirement discovery to production cloud deployment",
      "Consulting founders and teams on MERN stack architecture, state management, and high-performance UI rendering",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
    achievement: "Delivered multiple production web products with high client satisfaction and uptime",
  },
  {
    id: "vortexcubes-assistant-manager",
    role: "Assistant Manager",
    company: "Vortexcubes",
    duration: "Sep 2026 — Present",
    responsibilities: [
      "Leading full-stack engineering initiatives, architectural decisions, and project delivery",
      "Managing technical workflows, code reviews, and cross-functional team execution",
      "Architecting high-performance web applications and backend systems",
    ],
    stack: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Express"],
    achievement: "Promoted to Assistant Manager after leading core full-stack initiatives",
  },
  {
    id: "vortexcubes-fullstack-dev",
    role: "Full Stack Developer",
    company: "Vortexcubes",
    duration: "Mar 2025 — Sep 2026",
    responsibilities: [
      "Designed and built end-to-end web applications using the MERN stack and Next.js",
      "Developed secure REST APIs, scalable MongoDB schemas, and efficient state management",
      "Optimized frontend components for responsiveness, speed, and modern UX standards",
    ],
    stack: ["MERN Stack", "React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    achievement: "Delivered multiple production-grade web applications with optimized UX and speed",
  },
  {
    id: "vortexcubes-mern-intern",
    role: "MERN-Stack Intern",
    company: "Vortexcubes",
    duration: "Dec 2024 — Feb 2025",
    responsibilities: [
      "Implemented responsive UI components and backend endpoints in MERN stack applications",
      "Participated in code reviews, bug fixes, and database optimizations",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "Tailwind CSS"],
    achievement: "Transitioned into a full-time Full Stack Developer role following exemplary performance",
  },
];
