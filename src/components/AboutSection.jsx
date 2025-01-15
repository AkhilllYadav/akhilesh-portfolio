import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/AboutSection.css'; // Custom CSS for About section

const AboutSection = () => {
  return (
    <section id='about' className="about-section">
      <Container>
        <h2>About Me</h2>
        <Row className="align-items-center">
          <Col md={6} className="text-container">
            <Card className="text-item">
              <p>
                Experienced AI and ML developer skilled in designing, training, and deploying machine learning models to solve complex problems. Proficient in leading machine learning frameworks such as TensorFlow, Scikit-Learn, and Keras, with hands-on expertise in data preprocessing, feature engineering, and model optimization. Strong foundation in data analysis, exploratory data analysis (EDA), and data visualization using NumPy, Pandas, Matplotlib, and Seaborn to derive actionable insights from large datasets.
              </p>
              <p>
                Expert in working with MongoDB, SQL, and back-end development, applying object-oriented programming (OOP) principles to build scalable, efficient solutions. Passionate about leveraging cutting-edge AI and ML technologies to enhance decision-making processes, automate workflows, and optimize business operations. Continuously advancing skills in artificial intelligence, machine learning, and data science to deliver impactful results and stay ahead of industry trends.
              </p>
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Problems Solved</Card.Title>
                    <Card.Text>
                      <span className="stat-number">74</span> problems solved on platforms including LeetCode, GeeksforGeeks, and HackerRank.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>AI/ML Projects</Card.Title>
                    <Card.Text>
                      <span className="stat-number">8+</span> AI and machine learning projects involving model development and deployment.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Data Analysis Projects</Card.Title>
                    <Card.Text>
                      <span className="stat-number">5+</span> data analysis projects utilizing tools like NumPy, Pandas, and Matplotlib.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="stat-card">
                  <Card.Body>
                    <Card.Title>Backend Development</Card.Title>
                    <Card.Text>
                      <span className="stat-number">3+</span> backend development projects with MongoDB and SQL databases.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
