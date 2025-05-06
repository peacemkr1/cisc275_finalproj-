// src/components/AboutUs.tsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import MovingHen from '../MovingHen.gif';

const AboutUs: React.FC = () => {
  return (
    <Container fluid className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-intro-text">
        Welcome to Peck-Your-Path! We’re a small team passionate about helping
        students discover and shape their future careers. Using personalized quizzes,
        we guide you toward paths that suit your skills, values, and goals.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={MovingHen}
          alt="Animated Chicken"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      <h2 className="about-us-subtitle">Meet the Team</h2>
      <Row className="team-section">
        <Col md={4} className="team-member">
          <h4 className="team-member-name">David Cardenas</h4>
          <p className="team-member-role">
            David here
          </p>
        </Col>
        <Col md={4} className="team-member">
          <h4 className="team-member-name">Rahul Davu</h4>
          <p className="team-member-role">
            Rahul here
          </p>
        </Col>
        <Col md={4} className="team-member">
          <h4 className="team-member-name">Ayman Tayeb</h4>
          <p className="team-member-role">
              <li>Age: 21</li>
              <li>Year: Junior</li>
              <li>Major: Computer Science</li>
              <li>LinkedIn: www.linkedin.com/in/ayman-tayeb-9b7a12345

</li>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;