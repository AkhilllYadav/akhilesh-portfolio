import React from 'react';
import { Card } from 'react-bootstrap';
import './styles/SkillComponent.css'; // Custom CSS for skill card

const SkillComponent = ({ title, image }) => {
  return (
    <Card className="skill-card">
      <Card.Img variant="top" src={image} className="skill-image" />
      {/* <Card.Body>
        <Card.Title className="skill-title">{title}</Card.Title>
      </Card.Body> */}
    </Card>
  );
};

export default SkillComponent;
