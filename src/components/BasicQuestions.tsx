import React from 'react';
import { Form } from 'react-bootstrap';

const BasicQuestions = (): JSX.Element => {
  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Header */}


      {/* 7 Questions */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ width: '100%', maxWidth: '700px', textAlign: 'left' }}>

        {/* 
          Note: 
            Radio = 1 Multiple Choice Option
            Checkbox = Select All that Apply
            
            Reference Site Used: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
          
          */}

          <Form>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                1. What was your favorite subject in school?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio" />
              <Form.Check type="radio" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                2. How would you describe your level of talkativeness?
              </Form.Label>
              <Form.Check type="radio" />
              <Form.Check type="radio" />
              <Form.Check type="radio" />
              <Form.Check type="radio"/>
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                3. How comfortable are you with public speaking?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                4. What is your preferred way of communicating?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"   />
              <Form.Check type="radio"   />
              <Form.Check type="radio"   />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                5. What equipment do you like to work with?
              </Form.Label>
              <Form.Check type="radio"   />
              <Form.Check type="radio"   />
              <Form.Check type="radio"  />
              <Form.Check type="radio" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                6. How would you describe yourself when dealing with stress or pressure?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"   />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                7. When working in a group, what role do you take?
              </Form.Label>
                <Form.Check type="radio"   />
                <Form.Check type="radio"  />
                <Form.Check type="radio"   />
                <Form.Check type="radio" />
            </Form.Group>
          </Form>
        </div>
      </div>

    
    </div>
  );
};

export default BasicQuestions;
