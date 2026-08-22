// JohnnyPortfolio/frontend/src/data/projects.ts

import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Surface Clean",
    problem:
      "Customers know they need commercial cleaning equipment, but choosing the right machine for the job can be difficult without understanding the differences between products.",
    solution:
      "I designed and built a full-stack B2B platform that helps Surface Clean manage its equipment while giving customers a clearer path to finding the machine that fits their needs.",
    role: "I designed and developed the application end to end, from the database and API to the customer-facing experience and business workflows.",
    technologies: [
      "React",
      "Redux",
      "React Router",
      "Vite",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Cloudinary",
    ],
    outcome:
      "Surface Clean now has a purpose-built platform that supports its business while making equipment selection simpler and more approachable for its customers.",
    liveUrl: "https://surfacecleanmachines.com",
    repoUrl: "https://github.com/paredez11/surfaceClean",
    logo: "/images/SCLogo.png",
  },

  {
    title: "FinSight",
    problem:
      "Retail investors have access to enormous amounts of market and portfolio data, but raw information does not automatically make investment decisions clearer.",
    solution:
      "Our team built a full-stack investment intelligence platform that combines portfolio tracking, market data, and AI-assisted insights to help users better understand their investments.",
    role: "I worked as a frontend developer, building React and TypeScript interfaces, managing application state with Redux, integrating backend APIs, implementing authentication flows, improving mobile usability, and collaborating with backend developers across the application.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "FastAPI",
      "Auth0",
      "Tailwind CSS",
    ],
    outcome:
      "FinSight was deployed as a working full-stack application where users can track portfolios, view market information, and interact with portfolio-aware AI features in one interface.",
    liveUrl: "https://fin-sight-a-five.vercel.app/",
    repoUrl: "https://github.com/Coding-Temple-Tech-Residency/FinSight-A",
    logo: "/images/FinSightLogo.png",
  },
];
