import React from 'react';

function Project({ title, imageUrl, demoUrl, repoUrl }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Project;

