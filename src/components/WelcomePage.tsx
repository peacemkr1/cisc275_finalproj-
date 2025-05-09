import React from 'react';
import { Button, Form } from 'react-bootstrap';
import MovingHen from '../MovingHen.gif';

interface WelcomePageProps {
  onSubmit: () => void;
  onKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onSubmit, onKeyChange }) => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to Peck-Your-Path</h1>
        <p className="welcome-description">
          Unlock personalized carrer interests and career goals. Enter your API key below to begin your journey with Peck-Your-Path.
        </p>
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
      <img src={MovingHen} alt="Moving Hen" className="moving-hen" />
    </div>
  );
};

export default WelcomePage;
