import React from 'react';
import { Form} from 'react-bootstrap';

const DetailedQuestions = (): JSX.Element => {

  /*
    Referencing the TOME: https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
  */

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Centered heading section */}
      

      {/* Centered container, left-aligned content */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '700px' }}>
          <Form>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>1. Describe a time when you solved a problem creatively. What was the outcome?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>2. What motivates you more: recognition, salary, growth opportunities, or making a difference? Why?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>3. If given a blank check to build your ideal workday from 9 to 5, how would you structure it?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>4. Which subjects or topics have consistently caught your interest over the years?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>5. Think about a time when you had to collaborate with others to meet a goal. What was your role, and how did the process go?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>6. Describe your ideal team dynamic. Do you prefer leading, collaborating as an equal, or working independently with occasional input? Explain why.</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>7. Reflect on a past experience (school, work, or personal) where you felt highly engaged and motivated. What were you doing, and what factors contributed to that feeling?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" />
            </Form.Group>
          </Form>
        </div>
      </div>

    
    </div>
  );
};

export default DetailedQuestions;
