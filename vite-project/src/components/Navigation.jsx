import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About Me</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Portfolio</NavLink>
      <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
      <NavLink to="/resume" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Resume</NavLink>
    </nav>
  );
}

export default Navigation;
