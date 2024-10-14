import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      {/* Original "Download Resume" link */}
      <a href="path-to-your-resume.pdf" download="Resume.pdf">Download Resume</a>
      <ul>
        <li>Proficiency in JavaScript</li>
        <li>Experience with React and Redux</li>
        <li>Understanding of RESTful APIs</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;

