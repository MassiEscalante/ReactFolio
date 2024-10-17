import React from 'react';
import { FaDownload } from 'react-icons/fa';  // Adding an icon for the download button

function Resume() {
  return (
    <section className="resume-container">
      <h2>Resume</h2>
      
      {/* Polished "Download Resume" button */}
      <a href="path-to-your-resume.pdf" download="Resume.pdf" className="download-button">
        <FaDownload /> Download Resume
      </a>

      <h3>Proficiencies</h3>
      <ul className="proficiency-list">
        <li>JavaScript</li>
        <li>React & Redux</li>
        <li>RESTful APIs</li>
        <li>Node.js & Express</li>
        <li>MongoDB & SQL</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;
