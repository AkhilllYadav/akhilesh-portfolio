// src/components/CardComponent.jsx
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './styles/CardComponent.css'; // Custom CSS for card styling

const CardComponent = ({ title, image, text }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card className="my-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" onClick={handleShow}>View Certificate</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt={title} className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardComponent;
