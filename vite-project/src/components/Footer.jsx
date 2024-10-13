import React from 'react';
import { Container } from 'react-bootstrap';  // Correctly importing Container from 'react-bootstrap'

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container className="py-3">
        <p className="text-center mb-0">
          Connect with me on 
          <a href="https://github.com" className="text-white"> GitHub</a>, 
          <a href="https://linkedin.com" className="text-white"> LinkedIn</a>, or 
          <a href="https://twitter.com" className="text-white"> Twitter</a>.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

