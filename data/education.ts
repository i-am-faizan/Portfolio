export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Chamelidevi Institute of Technology and Management, Indore",
    year: "2021 — May 2025",
    detail: "Focused on Computer Science, software engineering principles, algorithms, and full-stack development.",
  },
];

export const certifications: string[] = [
  "Full Stack Development Certification",
  "MERN Stack & Web Engineering",
];
