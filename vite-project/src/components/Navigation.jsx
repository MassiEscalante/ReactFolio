// src/components/Navigation.jsx
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import feather from 'feather-icons';
import './Navbar.css';  // Import the CSS for the gooey effect

function Navigation() {
  useEffect(() => {
    // Replace Feather icons after the component renders
    feather.replace({ color: '#FFD23F' }); // Ensure icons are yellow
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink to="/" className="nav-link">
            <i data-feather="home"></i>
            <span>About Me</span> {/* Keep text aligned next to icon */}
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/portfolio" className="nav-link">
            <i data-feather="folder"></i>
            <span>Portfolio</span> {/* Keep text aligned next to icon */}
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/contact" className="nav-link">
            <i data-feather="message-square"></i>
            <span>Contact</span> {/* Keep text aligned next to icon */}
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/resume" className="nav-link">
            <i data-feather="file-text"></i>
            <span>Resume</span> {/* Keep text aligned next to icon */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
