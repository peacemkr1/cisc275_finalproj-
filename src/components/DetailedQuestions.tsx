import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

interface DetailedQuestionsProps {
  onProgressUpdate: (progress: number) => void;
}

const DetailedQuestions = ({ onProgressUpdate }: DetailedQuestionsProps): JSX.Element => {

  /*
    Referencing the TOME: https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
  */

  // 4. Add state hooks for each question:
  const [Question1, setQuestion1] = useState<string>('');
  const [Question2, setQuestion2] = useState<string>('');
  const [Question3, setQuestion3] = useState<string>('');
  const [Question4, setQuestion4] = useState<string>('');
  const [Question5, setQuestion5] = useState<string>('');
  const [Question6, setQuestion6] = useState<string>('');
  const [Question7, setQuestion7] = useState<string>('');

  // 5. Add a useEffect hook to calculate progress whenever an answer changes:
  useEffect(() => {
    const totalQuestions = 7;
    const answeredQuestions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7]
      .filter(answer => answer !== '').length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    onProgressUpdate(progressPercentage);
  }, [Question1, Question2, Question3, Question4, Question5, Question6, Question7, onProgressUpdate]);

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Centered heading section */}
      

      {/* Centered container, left-aligned content */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '700px' }}>
          <Form>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>1. *** Question #1 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question1} onChange={(e) => setQuestion1(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>2. *** Question #2 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question2} onChange={(e) => setQuestion2(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>3. *** Question #3 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question3} onChange={(e) => setQuestion3(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>4. *** Question #4 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question4} onChange={(e) => setQuestion4(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>5. *** Question #5 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question5} onChange={(e) => setQuestion5(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>6. *** Question #6 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question6} onChange={(e) => setQuestion6(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>7. *** Question #7 ***</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question7} onChange={(e) => setQuestion7(e.target.value)} />
            </Form.Group>
          </Form>
        </div>
      </div>

    
    </div>
  );
};

export default DetailedQuestions;
