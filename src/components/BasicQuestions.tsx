import React from 'react';
import { Form } from 'react-bootstrap';

const BasicQuestions = () => {
  return (
    <div style={{ backgroundColor: "lightgray", minHeight: "100vh", padding: "2rem" }}>
      {/* Centered heading section */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Basic Questions Page</h1>
        <p>***Please answer the questions below***</p>
      </div>

      {/* Left-aligned form section */}
      <div style={{ textAlign: "left", maxWidth: "700px" }}>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              1. What was your favorite subject in school?
            </Form.Label>
            <Form.Check type="radio" label="Mathematics" name="q1" />
            <Form.Check type="radio" label="English" name="q1" />
            <Form.Check type="radio" label="Science" name="q1" />
            <Form.Check type="radio" label="Social Studies" name="q1" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              2. How would you describe your level of talkativeness?
            </Form.Label>
            <Form.Check type="radio" label="Very Talkative" name="q2" />
            <Form.Check type="radio" label="Moderately Talkative" name="q2" />
            <Form.Check type="radio" label="Slightly Talkative" name="q2" />
            <Form.Check type="radio" label="Quiet" name="q2" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              3. How comfortable are you with public speaking?
            </Form.Label>
            <Form.Check type="radio" label="Very Comfortable" name="q3" />
            <Form.Check type="radio" label="Slightly Comfortable" name="q3" />
            <Form.Check type="radio" label="Not Very Comfortable" name="q3" />
            <Form.Check type="radio" label="Avoid at All Costs" name="q3" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              4. What is your preferred way of communicating?
            </Form.Label>
            <Form.Check type="radio" label="Face-to-Face (in Person)" name="q4" />
            <Form.Check type="radio" label="Phone Call" name="q4" />
            <Form.Check type="radio" label="Video Call (FaceTime / Zoom)" name="q4" />
            <Form.Check type="radio" label="Writing (Text Message / Email)" name="q4" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              5. What equipment do you like to work with?
            </Form.Label>
            <Form.Check type="radio" label="Computer / Software / Technology" name="q5" />
            <Form.Check type="radio" label="Pen / Paper" name="q5" />
            <Form.Check type="radio" label="Hands-On" name="q5" />
            <Form.Check type="radio" label="Tools" name="q5" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              6. How would you describe yourself when dealing with stress or pressure?
            </Form.Label>
            <Form.Check type="radio" label="I stay calm and focused" name="q6" />
            <Form.Check type="radio" label="I feel stressed but I persevere" name="q6" />
            <Form.Check type="radio" label="I do NOT like it at all" name="q6" />
            <Form.Check type="radio" label="Depends on the circumstances" name="q6" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>
              7. When working in a group, what role do you take?
            </Form.Label>
            <Form.Check type="radio" label="Leader" name="q7" />
            <Form.Check type="radio" label="Supporter" name="q7" />
            <Form.Check type="radio" label="Idea Generator" name="q7" />
            <Form.Check type="radio" label="Organizer" name="q7" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default BasicQuestions;
