// JohnnyPortfolio/frontend/src/components/ProjectCard/ProjectCard.tsx

import type { Project } from "../../types";

function ProjectCard({
  title,
  problem,
  solution,
  role,
  technologies,
  outcome,
  liveUrl,
  repoUrl,
}: Project) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <div className="project-card__details">
        <div>
          <h4>Problem</h4>
          <p>{problem}</p>
        </div>

        <div>
          <h4>Solution</h4>
          <p>{solution}</p>
        </div>

        <div>
          <h4>My Role</h4>
          <p>{role}</p>
        </div>

        <div>
          <h4>Outcome</h4>
          <p>{outcome}</p>
        </div>
      </div>

      <ul className="project-card__technologies">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      {(liveUrl || repoUrl) && (
        <div className="project-card__links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live Site
            </a>
          )}

          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;