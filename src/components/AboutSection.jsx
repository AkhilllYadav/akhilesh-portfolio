import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/AboutSection.css'; // Custom CSS for About section

const AboutSection = () => {
  return (
    <section id='about' className="about-section">
       <h2>About Me</h2>
      <Container>
      
        <Row className="align-items-center">
          <Col md={6} className="text-container">
            {/* <h2>About Me</h2> */}
            <Card className="text-item">
            <p>
            Computer Science Engineer with expertise in web development, Android app development, and Java. Skilled in managing projects and implementing effective marketing and branding strategies. Possess a strong motivation to excel and thrive in a team-oriented environment.
            Passionate about leveraging marketing techniques to enhance brand recognition and drive growth. Demonstrated ability to collaborate with diverse teams and foster effective communication. Committed to achieving shared objectives and contributing to team success. Eager to utilize my skills and motivated mindset to make a meaningful impact.
            </p>
            {/* <p>
              Throughout my career, I have tackled numerous problems across various platforms, and my projects range from frontend applications to full-stack solutions. I am always eager to learn and grow, continuously seeking ways to enhance my expertise and make a meaningful impact in the tech world.
            </p> */}
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Problems Solved</Card.Title>
                    <Card.Text>
                      <span className="stat-number">150+</span> problems solved on different platforms including LeetCode, Geekforgeeks, and Codeforces.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Frontend Projects</Card.Title>
                    <Card.Text>
                      <span className="stat-number">10+</span> projects developed with technologies like React, HTML,Bootstrap and Tailwind CSS.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Fullstack Projects</Card.Title>
                    <Card.Text>
                      <span className="stat-number">5+</span> full-stack projects involving both frontend and backend technologies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Mobile Projects</Card.Title>
                    <Card.Text>
                      <span className="stat-number">3+</span> mobile applications developed with Kotlin and Java.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
