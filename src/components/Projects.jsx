import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectComponent from './ProjectComponent';
import './styles/Projects.css'; // Custom CSS for Projects section

const Projects = () => {
  const projects = [
    {
      title: 'Indeed Clone',
      description: 'A clone of Indeed built with React, Spring Boot, Hibernate, and MongoDB. Provides job listings, user profiles, and application functionality.',
      liveUrl: 'https://career-connection-1.netlify.app/',
      githubUrl: 'https://github.com/AkhilllYadav/Career-Connection-Frontend',
      imageUrl: 'https://www.trymintly.com/_next/image?url=https%3A%2F%2Fwww.blog1.trymintly.com%2F%2Fhow-to-use-indeed-to-search-a-job%2Findeed%2F&w=3840&q=75'
    },
    {
      title: '  Drum Kit',
      description: 'the Drum Kit project offers a fun and interactive way for users to explore their musical creativity by simulating a drum set through a web-based interface. With its combination of HTML, CSS, and JavaScript, this project provides an accessible platform for anyone to enjoy the art of drumming and rhythm creation.',
      liveUrl: 'https://akhilllyadav.github.io/Drum-kit/',
      githubUrl: 'https://github.com/AkhilllYadav/Drum-kit',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAHpLsW_g6bSs3RMfH7STkJeOO43fwk1WOw&s'
    },
    {
      title: 'Digital Project + Razor pay',
      description: 'Integration of Razorpay with product card with but button',
      liveUrl: 'https://akhilllyadav.github.io/1099-ChatGPT-Marketing-Prompt/',
      githubUrl: 'https://github.com/AkhilllYadav/1099-ChatGPT-Marketing-Prompt',
      imageUrl: 'https://akhilllyadav.github.io/1099-ChatGPT-Marketing-Prompt/1090%20a%C4%B1%20prompts%20(1).png'
    },
    {
      title: 'Netflix-title-image-API',
      description: 'Fetching Images related with titles of Netflix Movies, TV Shows and many more',
      liveUrl: 'https://title-images-j6x24vjfs-akhilll-yadavs-projects.vercel.app/',
      githubUrl: 'https://github.com/AkhilllYadav/title-images-API',
      imageUrl: 'https://github.com/AkhilllYadav/title-images-API/blob/main/Project-ss-Netflix-title-images.png'
    },
    
  ];

  return (
    <div className="projects-section-wrapper" id='projects' >
      <Container className="projects-section">
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <ProjectComponent
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
