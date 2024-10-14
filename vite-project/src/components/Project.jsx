import React from 'react';

function Project({ title, imageUrl, demoUrl, repoUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
