import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', imageUrl: 'path-to-image-1.jpg', demoUrl: '#', repoUrl: '#' },
    { title: 'Project 2', imageUrl: 'path-to-image-2.jpg', demoUrl: '#', repoUrl: '#' },
    { title: 'Project 3', imageUrl: 'path-to-image-3.jpg', demoUrl: '#', repoUrl: '#' },
    { title: 'Project 4', imageUrl: 'path-to-image-4.jpg', demoUrl: '#', repoUrl: '#' },
    { title: 'Project 5', imageUrl: 'path-to-image-5.jpg', demoUrl: '#', repoUrl: '#' },
    { title: 'Project 6', imageUrl: 'path-to-image-6.jpg', demoUrl: '#', repoUrl: '#' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          demoUrl={project.demoUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </section>
  );
}

export default Portfolio;
