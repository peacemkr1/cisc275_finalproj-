// WelcomePage component: Displays the initial screen for users to enter an API key and begin
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import MovingHen from '../MovingHen.gif';

// Props definition for the WelcomePage component
interface WelcomePageProps {
  onSubmit: () => void;
  onKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Functional component that renders the welcome UI, accepts API submission handlers as props
const WelcomePage: React.FC<WelcomePageProps> = ({ onSubmit, onKeyChange }) => {
  return (
    <>
      {/* Outer container for welcome screen layout */}
      <div className="welcome-wrapper">
        {/* Box container holding the title, instructions, and input form */}
        <div className="welcome-box">
        <h1 className="welcome-title">Peck-Your-Path</h1>
        <h2 className="welcome-subtitle">
          Creators: Ayman Tayeb, David Cardenas, Rahul Davu
        </h2>

        <p className="welcome-description">
          Unlock personalized carrer interests and career goals. Enter your API key below to begin your journey with Peck-Your-Path.
        </p>
          {/* Form section for user to input API key */}
          <Form>
          <h2 className="welcome-subtitle">Insert your API Key:</h2>
          <Form.Control
            type="password"
            placeholder="API Key"
            onChange={onKeyChange}
            className="api-input"
          />
          <Button
            onClick={onSubmit}
            className="submit-button"
          >
            Submit
          </Button>
        </Form>
        </div>
        {/* Animated image for visual effect */}
        <img src={MovingHen} alt="Moving Hen" className="moving-hen" />
      </div>
    </>
  );
};

export default WelcomePage;
