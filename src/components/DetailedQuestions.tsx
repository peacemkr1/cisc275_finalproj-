import React, { useState } from 'react';
import { Form, ProgressBar, Button } from 'react-bootstrap';

const DetailedQuestions = (): JSX.Element => {
  const totalQuestions = 7;
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswerChange = (question: string, value: string): void => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const answeredCount: number = Object.values(answers).filter((a) => a.trim() !== '').length;
  const progress: number = Math.round((answeredCount / totalQuestions) * 100);
  const allAnswered: boolean = answeredCount === totalQuestions;

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Centered heading section */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Detailed Questions Page</h1>
        <p>***Please answer the questions below***</p>
        <ProgressBar
          now={progress}
          label={`${progress}%`}
          variant="success"
          style={{ height: '20px', marginTop: '1rem' }}
        />
      </div>

      {/* Centered container, left-aligned content */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '700px' }}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>1. *** Question #1 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q1", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>2. *** Question #2 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q2", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>3. *** Question #3 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q3", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>4. *** Question #4 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q4", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>5. *** Question #5 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q5", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>6. *** Question #6 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q6", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>7. *** Question #7 ***</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => handleAnswerChange("q7", e.target.value)} />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Conditionally show button only if all questions are answered */}
      {allAnswered && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button variant="success">Get Answer</Button>
        </div>
      )}
    </div>
  );
};

export default DetailedQuestions;
