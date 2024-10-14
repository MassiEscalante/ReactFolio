import React from 'react';
import { Container } from 'react-bootstrap';
import { GitHub, Linkedin, Twitter } from 'react-feather';

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <Container fluid className="py-3 d-flex justify-content-start">
        <p className="mb-0">
          Connect with me on: 
          <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} />
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
