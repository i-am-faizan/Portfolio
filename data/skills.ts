export interface SkillCategory {
  id: string;
  label: string;
  note: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Development",
    note: "Interactive, modern & high-performance user interfaces",
    skills: [
      "React.js",
      "Redux.js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 & CSS3",
      "Embedded JavaScript (EJS)",
      "User Experience (UX)",
      "Front-End Architecture",
    ],
  },
  {
    id: "backend",
    label: "Backend & AI Engineering",
    note: "Scalable web applications, APIs & AI-driven systems",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Django",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "REST APIs",
      "WebSockets",
      "Server-Side Development",
    ],
  },
  {
    id: "database",
    label: "Databases & Data Systems",
    note: "Document, relational & vector databases",
    skills: ["MongoDB", "PostgreSQL", "Vector Databases", "Databases & Data Modeling"],
  },
  {
    id: "tools",
    label: "Tools, DevOps & Languages",
    note: "Deployment pipelines, version control & core programming",
    skills: [
      "Docker",
      "Git & GitHub",
      "Render",
      "C & C++",
      "Software Development",
      "Debugging & Troubleshooting",
      "Problem Solving",
    ],
  },
];
