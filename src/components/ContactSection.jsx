import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles/ContactSection.css'; // Custom CSS for Contact section

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
    // Reset form data
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="contact-section" id='contact'>
      <h2 className='contact-heading'>Contact Me</h2>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="contact-details">
            
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out to me through the contact form or use the details below to get in touch:</p>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:akhilyadawa@gmail.com">akhilyadawa@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+918948890610">+91 8948890610</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>110017, Panchsheel Vihar, New Delhi, India</span>
              </li>
            </ul>
          </Col>
          <Col md={6} className="form-container">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject of your message"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
