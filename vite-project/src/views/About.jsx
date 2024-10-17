import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    // Load the Lottie player script when the component is mounted
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section style={{ padding: '20px', marginTop: '-40px' }}>  {/* Move the entire section up by 1 inch */}
      <h2>About Me</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>
          Hi, I'm a front-end developer with a passion for creating interactive, dynamic, and user-friendly web applications.
          I specialize in modern web technologies, focusing on delivering optimized and responsive experiences.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Profile Picture */}
        <div style={{ flex: '1', marginLeft: '50px', marginRight: '20px', marginTop: '-140px', textAlign: 'left' }}> 
          <img
            src="/src/assets/marlopic.PNG"
            alt="Profile Picture"
            style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }}
          />
        </div>

        {/* Qualification Text */}
        <div style={{ flex: '2', textAlign: 'center', padding: '0 20px' }}>
          <h3>My Qualifications</h3>
          <p>
            This project demonstrates my ability to work with modern frameworks like React and development tools like Vite. 
            From setting up the environment to implementing reusable components, I have focused on performance, responsive design, and a smooth user experience.
          </p>
          <p>
            Key qualifications:
            <ul style={{ textAlign: 'left' }}>
              <li>Experience with React for building dynamic single-page applications</li>
              <li>Proficient in Vite for fast project setup and optimized builds</li>
              <li>Expertise in managing component states and routing with React Router</li>
              <li>Familiar with integrating animations (e.g., Lottie) to enhance user interactions</li>
              <li>Strong understanding of responsive design principles</li>
              <li>Experienced in version control with Git and deployment of web applications</li>
            </ul>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="lottie-container" style={{ flex: '1', display: 'flex', justifyContent: 'center', marginTop: '-140px' }}>
          <dotlottie-player 
            src="https://lottie.host/5c222528-ebc9-463e-9c1d-5efa2bc925e8/ubkeGDyszi.json" 
            background="transparent" 
            speed="1" 
            style={{ width: '300px', height: '300px' }} 
            loop 
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </section>
  );
}

export default About;
