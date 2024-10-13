import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  // Example projects data
  const projects = [
    { title: 'Project 1', imageUrl: 'path-to-image.jpg' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} imageUrl={project.imageUrl} />
      ))}
    </section>
  );
}

export default Portfolio;
