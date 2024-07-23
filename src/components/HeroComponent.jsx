import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './styles/HeroComponent.css'; // Import your CSS

const HeroComponent = ({ title, subtitle, buttonText1, buttonText2, imageUrl, cvLink }) => {
  return (
    <section className="hero-container">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="button-group">
              <Button
                variant="primary"
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                {buttonText1}
              </Button>
              <Button variant="secondary" href='#contact'>
                {buttonText2}
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center image-container">
            <img src={imageUrl} alt="Profile" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroComponent;
