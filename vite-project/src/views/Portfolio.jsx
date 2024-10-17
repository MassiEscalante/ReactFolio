import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { 
      title: 'WeatherQuest', 
      imageUrl: 'src/assets/weatherquest.png', 
      demoUrl: 'https://weatherquest2.onrender.com', 
      repoUrl: 'https://github.com/MassiEscalante/WeatherQuest2' 
    },
    { 
      title: 'Birdle Word Game', 
      imageUrl: 'src/assets/Birdle.png', 
      demoUrl: 'https://kenhie94.github.io/Birdle/', 
      repoUrl: 'https://github.com/Kenhie94/Birdle' 
    },
    { 
      title: 'RideLab', 
      imageUrl: 'src/assets/Ridelabpic.png', 
      demoUrl: 'https://app.screencastify.com/v3/watch/G2EY1tsw1xZFGBhuRoWP', 
      repoUrl: 'https://github.com/MassiEscalante/RideLab' 
    },
    { 
      title: 'ReadMEmagic (Automatic ReadME Generator)', 
      imageUrl: 'src/assets/readmemagicpic.png', 
      demoUrl: 'https://app.screencastify.com/v3/watch/wgkoaQG9Lc8Fg6nGUaIw', 
      repoUrl: 'https://github.com/MassiEscalante/READMEmagic' 
    },
    { 
      title: 'CrewControl', 
      imageUrl: 'src/assets/CrewControlpic.png', 
      demoUrl: 'https://drive.google.com/file/d/14qt-jM6r3uuaPOHfZ1pXUU6ct50HdUFr/view?pli=1', 
      repoUrl: 'https://github.com/MassiEscalante/CrewControl' 
    },
  ];

  return (
    <section className="portfolio">
      <h2>Projects</h2> {/* Clearer title */}
      <div className="project-grid"> {/* Grid layout for projects */}
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
