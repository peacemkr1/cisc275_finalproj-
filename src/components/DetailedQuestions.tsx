import React from 'react';
import { Form} from 'react-bootstrap';

const DetailedQuestions = (): JSX.Element => {

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Centered heading section */}
      

      {/* Centered container, left-aligned content */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '700px' }}>
          <Form>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>1. *** Question #1 ***</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>2. *** Question #2 ***</Form.Label>
              <Form.Control  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>3. *** Question #3 ***</Form.Label>
              <Form.Control  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>4. *** Question #4 ***</Form.Label>
              <Form.Control  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>5. *** Question #5 ***</Form.Label>
              <Form.Control  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>6. *** Question #6 ***</Form.Label>
              <Form.Control  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>7. *** Question #7 ***</Form.Label>
              <Form.Control  />
            </Form.Group>
          </Form>
        </div>
      </div>

    
    </div>
  );
};

export default DetailedQuestions;
