import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface WelcomePageProps {
  onSubmit: () => void;
  onKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onSubmit, onKeyChange }) => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to Peck-Your-Path</h1>
        <Form>
          <h2 className="welcome-subtitle">Insert your API Key:</h2>
          <Form.Control
            type="password"
            placeholder="API Key"
            onChange={onKeyChange}
            style={{ marginBottom: "1rem" }}
          />
          <Button
            onClick={onSubmit}
            className="submit-button"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default WelcomePage;
