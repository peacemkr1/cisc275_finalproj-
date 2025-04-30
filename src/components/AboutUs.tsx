// src/components/AboutUs.tsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs: React.FC = () => {
  return (
    <Container style={{ padding: '2rem 0' }}>
      <h1 className="mb-4">About Us</h1>
      <p>
        Welcome to Peck-Your-Path! We’re a small team passionate about helping
        students discover and shape their future careers. Using personalized quizzes,
        we guide you toward paths that suit your skills, values, and goals.
      </p>

      <h2 className="mt-5 mb-3">Meet the Team</h2>
      <Row>
        <Col md={4}>
          <h4>David Cardenas</h4>
          <p>
            David here
          </p>
        </Col>
        <Col md={4}>
          <h4>Rahul Davu</h4>
          <p>
            Rahul here
          </p>
        </Col>
        <Col md={4}>
          <h4>Ayman Tayeb</h4>
          <p>
            Ayman here
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;