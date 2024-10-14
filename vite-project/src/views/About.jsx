import React from 'react';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img
        src="/src/assets/marlopic.PNG"
        alt="Profile Picture"
        style={{ width: '150px', borderRadius: '50%' }} // Circular image
      />
      <p>
        Your bio goes here. Briefly describe your background, experiences, and skills.
      </p>
    </section>
  );
}

export default About;
