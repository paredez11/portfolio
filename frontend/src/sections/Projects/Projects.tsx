// JohnnyPortfolio/frontend/src/sections/Projects/Projects.tsx

import { ProjectCard } from "../../components";
import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Selected Work</h2>

      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;