// Before
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './styles/HeaderComponent.css';

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false); // Unused variable
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">Akhilesh</Navbar.Brand>
        <Button variant="primary" className="custom-button d-lg-none">
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#certificate">Certificate</Nav.Link>
          </Nav>
          <Button variant="primary" className="custom-button d-none d-lg-inline-block">
            <Nav.Link href="#contact" className="text-white">Contact Me</Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
