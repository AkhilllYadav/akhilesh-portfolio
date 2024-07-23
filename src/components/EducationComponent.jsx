import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/EducationComponent.css';

const EducationComponent = ({ education }) => {
  // Debugging output to check if the data is being passed correctly
  console.log(Array.isArray(education)); // Should be true
  console.log(education); // Check the actual value

  // Handle case where education data is not an array
  if (!Array.isArray(education)) {
    return <div>Data is not available</div>;
  }

  return (
    <section className="education-section">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h2>Education</h2>
          </Col>
          {education.map((edu, index) => (
            <Col md={6} sm={12} key={index} className="mb-4">
              <Card className="education-card">
                <Row noGutters>
                  <Col md={4} className="text-center">
                    <Card.Img src={edu.logoUrl} className="university-logo" />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title className="card-title">{edu.university}</Card.Title>
                      <Card.Subtitle className="card-subtitle mb-2">{edu.year}</Card.Subtitle>
                      <Card.Text className="card-text">{edu.courses}</Card.Text>
                      <Card.Text><small className="text-muted">{edu.place}</small></Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EducationComponent;
