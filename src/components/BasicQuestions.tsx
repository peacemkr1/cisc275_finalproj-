import React, { useState } from 'react';
import { Form, ProgressBar, Button, Alert } from 'react-bootstrap';

const BasicQuestions = (): JSX.Element => {
  const totalQuestions = 7;
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswerChange = (question: string, value: string): void => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);
  const allAnswered = answeredCount === totalQuestions;

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Basic Questions Page</h1>
        <p>***Please answer the questions below***</p>
        <ProgressBar
          now={progress}
          label={`${progress}%`} // displays percentage
          variant="success" // this makes the progress bar green 
          style={{ height: '25px', marginTop: '1rem' }}
        />
      </div>

      {/* Question Form - Left aligned */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ width: '100%', maxWidth: '700px', textAlign: 'left' }}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                1. What was your favorite subject in school?
              </Form.Label>
              <Form.Check type="radio" label="Mathematics" name="q1" value="Mathematics" onChange={(e) => handleAnswerChange("q1", e.target.value)} />
              <Form.Check type="radio" label="English" name="q1" value="English" onChange={(e) => handleAnswerChange("q1", e.target.value)} />
              <Form.Check type="radio" label="Science" name="q1" value="Science" onChange={(e) => handleAnswerChange("q1", e.target.value)} />
              <Form.Check type="radio" label="Social Studies" name="q1" value="Social Studies" onChange={(e) => handleAnswerChange("q1", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                2. How would you describe your level of talkativeness?
              </Form.Label>
              <Form.Check type="radio" label="Very Talkative" name="q2" value="Very Talkative" onChange={(e) => handleAnswerChange("q2", e.target.value)} />
              <Form.Check type="radio" label="Moderately Talkative" name="q2" value="Moderately Talkative" onChange={(e) => handleAnswerChange("q2", e.target.value)} />
              <Form.Check type="radio" label="Slightly Talkative" name="q2" value="Slightly Talkative" onChange={(e) => handleAnswerChange("q2", e.target.value)} />
              <Form.Check type="radio" label="Quiet" name="q2" value="Quiet" onChange={(e) => handleAnswerChange("q2", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                3. How comfortable are you with public speaking?
              </Form.Label>
              <Form.Check type="radio" label="Very Comfortable" name="q3" value="Very Comfortable" onChange={(e) => handleAnswerChange("q3", e.target.value)} />
              <Form.Check type="radio" label="Slightly Comfortable" name="q3" value="Slightly Comfortable" onChange={(e) => handleAnswerChange("q3", e.target.value)} />
              <Form.Check type="radio" label="Not Very Comfortable" name="q3" value="Not Very Comfortable" onChange={(e) => handleAnswerChange("q3", e.target.value)} />
              <Form.Check type="radio" label="Avoid at All Costs" name="q3" value="Avoid at All Costs" onChange={(e) => handleAnswerChange("q3", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                4. What is your preferred way of communicating?
              </Form.Label>
              <Form.Check type="radio" label="Face-to-Face (in Person)" name="q4" value="Face-to-Face" onChange={(e) => handleAnswerChange("q4", e.target.value)} />
              <Form.Check type="radio" label="Phone Call" name="q4" value="Phone Call" onChange={(e) => handleAnswerChange("q4", e.target.value)} />
              <Form.Check type="radio" label="Video Call (FaceTime / Zoom)" name="q4" value="Video Call" onChange={(e) => handleAnswerChange("q4", e.target.value)} />
              <Form.Check type="radio" label="Writing (Text Message / Email)" name="q4" value="Writing" onChange={(e) => handleAnswerChange("q4", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                5. What equipment do you like to work with?
              </Form.Label>
              <Form.Check type="radio" label="Computer / Software / Technology" name="q5" value="Tech" onChange={(e) => handleAnswerChange("q5", e.target.value)} />
              <Form.Check type="radio" label="Pen / Paper" name="q5" value="Pen" onChange={(e) => handleAnswerChange("q5", e.target.value)} />
              <Form.Check type="radio" label="Hands-On" name="q5" value="Hands-On" onChange={(e) => handleAnswerChange("q5", e.target.value)} />
              <Form.Check type="radio" label="Tools" name="q5" value="Tools" onChange={(e) => handleAnswerChange("q5", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                6. How would you describe yourself when dealing with stress or pressure?
              </Form.Label>
              <Form.Check type="radio" label="I stay calm and focused" name="q6" value="Calm" onChange={(e) => handleAnswerChange("q6", e.target.value)} />
              <Form.Check type="radio" label="I feel stressed but I persevere" name="q6" value="Persevere" onChange={(e) => handleAnswerChange("q6", e.target.value)} />
              <Form.Check type="radio" label="I do NOT like it at all" name="q6" value="Dislike" onChange={(e) => handleAnswerChange("q6", e.target.value)} />
              <Form.Check type="radio" label="Depends on the circumstances" name="q6" value="Depends" onChange={(e) => handleAnswerChange("q6", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>
                7. When working in a group, what role do you take?
              </Form.Label>
              <Form.Check type="radio" label="Leader" name="q7" value="Leader" onChange={(e) => handleAnswerChange("q7", e.target.value)} />
              <Form.Check type="radio" label="Supporter" name="q7" value="Supporter" onChange={(e) => handleAnswerChange("q7", e.target.value)} />
              <Form.Check type="radio" label="Idea Generator" name="q7" value="Ideas" onChange={(e) => handleAnswerChange("q7", e.target.value)} />
              <Form.Check type="radio" label="Organizer" name="q7" value="Organizer" onChange={(e) => handleAnswerChange("q7", e.target.value)} />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Centered Feedback and Button */}
      {allAnswered && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Alert variant="info" style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: "white", borderColor: "green" }}>
            Thank you for answering all the questions! Please click "Get Answer" to view your career results.
          </Alert>
          <Button variant="success" style={{ marginTop: '1rem' }}>
            Get Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default BasicQuestions;
