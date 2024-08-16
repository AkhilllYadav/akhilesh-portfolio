// src/components/Certificate.jsx
import React from 'react';
import CardComponent from './CardComponent';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Certificate.css'; // Import custom CSS for spacing

function Certificate() {
  const cardData = [
    {
      title: 'The Complete 2024 Web Development Bootcamp',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3aa28803-d239-41df-a37d-2225110c8a76.jpg?v=1712639310000',
      text: 'Taught by Dr. Angela Yu, Developer and Lead Instructor on Udemy.',
    },
    {
      title: 'Java 17 Masterclass',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-39dc2830-bc11-46d8-b315-41f23f2ddd54.jpg?v=1711993510000',
      text: 'Taught by Tim Buchalka, Lead Instructor on Udemy.',
    },
    {
      title: 'IBM AI Developer Professional Certificate',
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~230298V5KV39/CERTIFICATE_LANDING_PAGE~230298V5KV39.jpeg',
      text: 'Offered by IBM',
    }
   
   
  ];

  return (
    <Container id='certificate' >
      <h1 className="text-center mb-4">Certificates</h1> {/* Add some margin and center the heading */}
      <Row>
        {cardData.map((card, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <CardComponent
              title={card.title}
              image={card.image}
              text={card.text}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificate;
