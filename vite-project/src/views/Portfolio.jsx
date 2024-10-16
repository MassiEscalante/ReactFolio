import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { 
      title: 'WeatherQuest', 
      imageUrl: '/assets/weatherquest.png',  // Updated path
      demoUrl: 'https://weatherquest2.onrender.com', 
      repoUrl: 'https://github.com/MassiEscalante/WeatherQuest2' 
    },
    { 
      title: 'Birdle Word Game', 
      imageUrl: '/assets/Birdle.png',  // Updated path
      demoUrl: 'https://kenhie94.github.io/Birdle/', 
      repoUrl: 'https://github.com/Kenhie94/Birdle' 
    },
    { 
      title: 'RideLab', 
      imageUrl: '/assets/Ridelabpic.png',  // Updated path
      demoUrl: 'https://app.screencastify.com/v3/watch/G2EY1tsw1xZFGBhuRoWP', 
      repoUrl: 'https://github.com/MassiEscalante/RideLab' 
    },
    { 
      title: 'ReadMEmagic (Automatic ReadME Generator)', 
      imageUrl: '/assets/readmemagicpic.png',  // Updated path
      demoUrl: 'https://app.screencastify.com/v3/watch/wgkoaQG9Lc8Fg6nGUaIw', 
      repoUrl: 'https://github.com/MassiEscalante/READMEmagic' 
    },
    { 
      title: 'CrewControl', 
      imageUrl: '/assets/CrewControlpic.png',  // Updated path
      demoUrl: 'https://drive.google.com/file/d/14qt-jM6r3uuaPOHfZ1pXUU6ct50HdUFr/view?pli=1', 
      repoUrl: 'https://github.com/MassiEscalante/CrewControl' 
    },
  ];

  return (
    <section className="portfolio">
      <h2>Projects</h2> {/* Clearer title */}
      
      {/* Lottie Animation on the left side */}
      <div className="animation-container">
        <dotlottie-player
          src="https://lottie.host/b69881fb-3ee7-48c5-9bc9-85c2984e5fbb/9GKnuhBbnT.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>

      {/* Grid layout for projects */}
      <div className="project-grid">
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
