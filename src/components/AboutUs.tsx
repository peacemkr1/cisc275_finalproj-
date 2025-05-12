import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import MovingHen from '../MovingHen.gif';
import AymanPic from '../AymanPic.jpg';
import DavidPic from '../DavidPic.jpg'
import RahulPic from '../RahulPic.jpg'

  //Note: 
        //How to Create Card Body: https://react-bootstrap.netlify.app/docs/components/cards/

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
      <h2 className="text-center mb-4">Meet the Team</h2>
      <Row className="justify-content-center"> {/* justify content center = team cards will be centered */}
        <Col md={4} className="mb-4">
          <Card className="team-card h-100 shadow-sm">
            <div className="text-center mt-3"> {/* this allows margin spacing and centered content */}
              <Card.Img
                variant="top"
                src={DavidPic}
                alt="David Cardenas"
                style={{ objectFit: 'cover', width: '250px', height: '350px', borderRadius: '8px' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="team-member-name"> <strong>David Cardenas</strong></Card.Title>
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
          <Card className="team-card h-100 shadow-sm">
          <div className="text-center mt-3"> 
            <Card.Img
              variant="top"
              src={AymanPic}
              alt="Ayman Tayeb"
              style={{ objectFit: 'cover', width: '250px', height: '350px', borderRadius: '8px' }}
            />
          </div>

            <Card.Body>
              <Card.Title className="team-member-name"><strong>Ayman Tayeb</strong></Card.Title>
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
          <Card className="team-card h-100 shadow-sm">
            <div className="text-center mt-3">
              <Card.Img
                variant="top"
                src={RahulPic}
                alt="Rahul Davu"
                style={{ objectFit: 'cover', width: '250px', height: '350px', borderRadius: '8px' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="team-member-name"><strong>Rahul Davu</strong></Card.Title>
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
