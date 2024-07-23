import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/FooterComponent.css'; // Custom CSS for Footer component

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="mb-4 mb-md-0">
            <h5>About Me</h5>
            <p>
              I’m Akhilesh Kumar Yadav, a passionate developer with a love for creating beautiful and functional applications. Explore my work and feel free to get in touch!
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certificate">Certificate</a></li>

            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:example@example.com">akhilyadawa@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+918948890610</a></p>
            <div className="social-media">
              <a href="https://x.com/Akhilll_yad" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/akhilesh-kumar-yadav-61501b1b2/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/AkhilllYadav/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/akhilll_yad/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Akhilesh Kumar Yadav. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
