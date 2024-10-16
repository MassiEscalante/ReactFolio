import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import feather from 'feather-icons';
import './Navbar.css';  // Ensure your CSS is linked properly

function Navigation() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i data-feather="home"></i>
            <span>About Me</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i data-feather="briefcase"></i>
            <span>Projects</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i data-feather="phone-call"></i>
            <span>Contact</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/resume" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i data-feather="file-text"></i>
            <span>Resume</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
