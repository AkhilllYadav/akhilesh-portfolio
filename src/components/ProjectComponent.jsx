// src/components/ProjectComponent.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/ProjectComponent.css'; // Custom CSS for project styling

const ProjectComponent = ({ title, description, liveUrl, githubUrl, imageUrl }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="project-buttons">
          <Button variant="primary" href={liveUrl} target="_blank" rel="noopener noreferrer">Live</Button>
          <Button variant="secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectComponent;
