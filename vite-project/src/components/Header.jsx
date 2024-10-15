import React from 'react';
import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Database, Briefcase, PhoneCall, FileText } from 'react-feather';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Massiel's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto to move links to the right */}
            {/* Tooltip for About Me */}
            <OverlayTrigger
              placement="bottom"  // Tooltip will appear at the bottom
              overlay={<Tooltip id="about-tooltip">About Me</Tooltip>}
            >
              <Nav.Link as={Link} to="/">
                <Database size={20} />
              </Nav.Link>
            </OverlayTrigger>

            {/* Tooltip for Portfolio */}
            <OverlayTrigger
              placement="bottom"  // Tooltip will appear at the bottom
              overlay={<Tooltip id="portfolio-tooltip">Portfolio</Tooltip>}
            >
              <Nav.Link as={Link} to="/portfolio">
                <Briefcase size={20} />
              </Nav.Link>
            </OverlayTrigger>

            {/* Tooltip for Contact */}
            <OverlayTrigger
              placement="bottom"  // Tooltip will appear at the bottom
              overlay={<Tooltip id="contact-tooltip">Contact</Tooltip>}
            >
              <Nav.Link as={Link} to="/contact">
                <PhoneCall size={20} />
              </Nav.Link>
            </OverlayTrigger>

            {/* Tooltip for Resume */}
            <OverlayTrigger
              placement="bottom"  // Tooltip will appear at the bottom
              overlay={<Tooltip id="resume-tooltip">Resume</Tooltip>}
            >
              <Nav.Link as={Link} to="/resume">
                <FileText size={20} />
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;