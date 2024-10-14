// src/components/Navigation.jsx
import React, { useEffect } from 'react';
import feather from 'feather-icons';
import './Navbar.css';  // Ensure your CSS is linked properly

function Navigation() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="nav-link">
              <i data-feather="home"></i>
              <span>Home</span> {/* Icon and text */}
            </a>
          </li>
          <li className="navbar__item">
            <a href="/messages" className="nav-link">
              <i data-feather="message-square"></i>
              <span>Messages</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="/customers" className="nav-link">
              <i data-feather="users"></i>
              <span>Customers</span>
            </a>
          </li>
          {/* Add more items here as needed */}
        </ul>
      </nav>

      {/* SVG for the gooey effect */}
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default Navigation;
