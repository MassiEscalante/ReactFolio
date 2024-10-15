import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Database, Briefcase, PhoneCall, FileText } from 'react-feather';  // Import Feather icons

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Massiel's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto to move links to the right */}
            <Nav.Link as={Link} to="/">
              <Database size={20} />  {/* About Me Icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              <Briefcase size={20} />  {/* Portfolio Icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <PhoneCall size={20} />  {/* Contact Icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <FileText size={20} />  {/* Resume Icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;