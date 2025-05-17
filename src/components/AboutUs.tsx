// AboutUs.tsx: Displays an informational page introducing the team behind the Peck-Your-Path app.
// Includes individual team member profiles with personal and academic details.

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import MovingHen from '../MovingHen.gif';
import AymanPic from '../AymanPic.jpg';
import DavidPic from '../DavidPic.jpg'
import RahulPic from '../RahulPic.jpg'

  //Note: 
        //How to Create Card Body: https://react-bootstrap.netlify.app/docs/components/cards/

// Functional React component that renders the About Us page
const AboutUs: React.FC = () => {
  return (
    // Container for the full About Us content section
    <Container fluid className="about-us-container">
      {/* Page title introducing the section */}
      <h1 className="about-us-title">About Us</h1>
      {/* Brief introductory paragraph describing the project and its purpose */}
      <p className="about-us-intro-text">
        Welcome to Peck-Your-Path! We’re a small team passionate about helping
        students discover and shape their future careers. Using personalized quizzes,
        we guide you toward paths that suit your skills, values, and goals.
      </p>

      {/* Animated mascot image to add visual interest and branding */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={MovingHen}
          alt="Animated Chicken"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>
      {/* Subheading introducing the team member section */}
      <h2 className="text-center mb-4">Meet the Team</h2>
      {/* Responsive layout row to hold team member cards side by side */}
      <Row className="justify-content-center"> {/* justify content center = team cards will be centered */}
        <Col md={4} className="mb-4">
          {/* Individual team member profile card */}
          <Card className="team-card h-100 shadow-sm">
            <div className="text-center mt-3"> {/* this allows margin spacing and centered content */}
              {/* Profile photo of the team member */}
              <Card.Img
                variant="top"
                src={DavidPic}
                alt="David Cardenas"
                style={{ objectFit: 'cover', width: '250px', height: '350px', borderRadius: '8px' }}
              />
            </div>
            <Card.Body>
              {/* Team member's name displayed as card title */}
              <Card.Title className="team-member-name"> <strong>David Cardenas</strong></Card.Title>
              {/* List of academic and contact details for the team member */}
              <ul className="list-unstyled"> {/* removes list bullets */}
                <li><strong>Age:</strong> 22</li>
                <li><strong>Year:</strong> Senior</li>
                <li><strong>Major:</strong> Computer Engineering</li>
                <li><strong>Minor:</strong> Computer Science</li>
                <li><strong>Email:</strong> davidcar@udel.edu</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          {/* Individual team member profile card */}
          <Card className="team-card h-100 shadow-sm">
          <div className="text-center mt-3"> 
            {/* Profile photo of the team member */}
            <Card.Img
              variant="top"
              src={AymanPic}
              alt="Ayman Tayeb"
              style={{ objectFit: 'cover', width: '250px', height: '350px', borderRadius: '8px' }}
            />
          </div>

            <Card.Body>
              {/* Team member's name displayed as card title */}
              <Card.Title className="team-member-name"><strong>Ayman Tayeb</strong></Card.Title>
              {/* List of academic and contact details for the team member */}
              <ul className="list-unstyled">
                <li><strong>Age:</strong> 21</li>
                <li><strong>Year:</strong> Junior</li>
                <li><strong>Major:</strong> Computer Science</li>
                <li><strong>Concentration:</strong> Bioinformatics</li>
                <li><strong>Email:</strong> atayeb@udel.edu</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          {/* Individual team member profile card */}
          <Card className="team-card h-100 shadow-sm">
            <div className="text-center mt-3">
              {/* Profile photo of the team member */}
              <Card.Img
                variant="top"
                src={RahulPic}
                alt="Rahul Davu"
                style={{ objectFit: 'cover', width: '250px', height: '350px', borderRadius: '8px' }}
              />
            </div>
            <Card.Body>
              {/* Team member's name displayed as card title */}
              <Card.Title className="team-member-name"><strong>Rahul Davu</strong></Card.Title>
              {/* List of academic and contact details for the team member */}
              <ul className="list-unstyled">
                <li><strong>Age:</strong> 20</li>
                <li><strong>Year:</strong> Junior</li>
                <li><strong>Major:</strong> Computer Science</li>
                <li><strong>Minor:</strong> Cybersecurity</li>
                <li><strong>Email:</strong> davur@udel.edu</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
