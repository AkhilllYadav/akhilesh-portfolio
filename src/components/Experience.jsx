import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/Experience.css'; // Custom CSS for Experience section

const Experience = () => {
  const experiences = [
    {
      position: 'Web Development',
      jobType: 'Internship',
      role: 'Developed and maintained web applications using React, Node.js, and MongoDB.',
      technology: 'React, Node.js, MongoDB',
      place: 'New Delhi, India',
      company: 'Redcube Digital Media Pvt Ltd',
      startDate: 'March 2024',
      endDate: 'May 2024',
      imageUrl: 'https://www.redcubedigital.com/images/logo.svg'
    },
    {
      position: 'Mobile App Developer',
      jobType: 'Internship',
      role: 'Assisted in building user interfaces for Mobile applications using XML, Kotlin, and Firebase.',
      technology: 'XML, Kotlin, Android SDK, Firebase',
      place: 'New Delhi, India',
      company: 'Wemonde Pvt Ltd.',
      startDate: 'July 2023',
      endDate: 'September 2023',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKV7KVacZUGuNTIsY6XeSwSY2WzezJPTrFww&s'
    },
    // Add more experiences as needed
  ];

  return (
    <Container fluid className="experience-section" id='experience'>
      <h2 className="text-center mb-4">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <Row key={index} className={`experience-card-container ${index % 2 === 0 ? 'left' : 'right'}`}>
            <Col md={5} className="d-flex justify-content-center">
              {index % 2 === 0 && (
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>{experience.position}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                    {experience.imageUrl && (
                      <img src={experience.imageUrl} alt={experience.company} className="company-logo" />
                    )}
                    <Card.Text>
                      <strong>Job Type:</strong> {experience.jobType}<br />
                      <strong>Role:</strong> {experience.role}<br />
                      <strong>Technology:</strong> {experience.technology}<br />
                      <strong>Place:</strong> {experience.place}<br />
                      <strong>Date:</strong> {experience.startDate} - {experience.endDate}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}
            </Col>
            <Col md={2} className="timeline-line-container">
              <div className="timeline-line"></div>
            </Col>
            <Col md={5} className="d-flex justify-content-center">
              {index % 2 !== 0 && (
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>{experience.position}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                    {experience.imageUrl && (
                      <img src={experience.imageUrl} alt={experience.company} className="company-logo" />
                    )}
                    <Card.Text>
                      <strong>Job Type:</strong> {experience.jobType}<br />
                      <strong>Role:</strong> {experience.role}<br />
                      <strong>Technology:</strong> {experience.technology}<br />
                      <strong>Place:</strong> {experience.place}<br />
                      <strong>Date:</strong> {experience.startDate} - {experience.endDate}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
