// JohnnyPortfolio/frontend/src/components/ProjectCard/ProjectCard.tsx

import type { Project } from "../../types";
import "./ProjectCard.css";

function ProjectCard({
  title,
  problem,
  solution,
  role,
  technologies,
  outcome,
  liveUrl,
  repoUrl,
  logo,
}: Project) {
  return (
    <article className="project-card">
      <div className="project-card__heading">
        {logo && liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__logo-link"
          >
            <img
              src={logo}
              alt={`${title} logo`}
              className="project-card__logo"
            />
          </a>
        )}

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__title-link"
          >
            <h3>{title}</h3>
          </a>
        ) : (
          <h3>{title}</h3>
        )}
      </div>

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
            <a
              className="project-card__link project-card__link--primary"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          )}

          {repoUrl && (
            <a
              className="project-card__link project-card__link--secondary"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;