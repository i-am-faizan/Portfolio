export interface Repo {
  name: string;
  description: string;
  language: string;
  stars: number;
}

export const repos: Repo[] = [
  {
    name: "fabric-editor",
    description: "Interactive canvas design editor built with Fabric.js and React",
    language: "TypeScript",
    stars: 4,
  },
  {
    name: "Job-Portal",
    description: "Full-stack job portal web application with candidate management",
    language: "JavaScript",
    stars: 8,
  },
  {
    name: "Live-Chat-App-Backend",
    description: "Real-time messaging backend service supporting WebSockets & rooms",
    language: "JavaScript",
    stars: 6,
  },
  {
    name: "StackCart",
    description: "E-commerce platform featuring product search, cart and checkout flow",
    language: "JavaScript",
    stars: 5,
  },
  {
    name: "Task-Management",
    description: "Kanban-style collaborative task management & workflow application",
    language: "JavaScript",
    stars: 3,
  },
  {
    name: "photography_site",
    description: "Interactive studio showcase portfolio website for photography",
    language: "JavaScript",
    stars: 2,
  },
];

export const activityStats = {
  contributions: "500+",
  publicRepos: "13+",
  followers: "15+",
};
