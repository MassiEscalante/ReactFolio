import React from 'react';

function Project({ title, imageUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <a href="http://google.com">Live Demo</a> | <a href="http://google.com">GitHub Repo</a>
    </div>
  );
}

export default Project;
