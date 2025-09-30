import React from 'react';

// This component will eventually fetch data from a database
function ProjectsList({ projects }) {
  return (
    <div className="projects-list">
      {projects && projects.length > 0 ? (
        <ul>
          {projects.map((project, idx) => (
            <li key={idx} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects to display yet.</p>
      )}
    </div>
  );
}

export default ProjectsList;
