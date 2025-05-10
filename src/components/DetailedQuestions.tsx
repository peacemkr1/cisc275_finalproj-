import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { generateDetailedCareer } from './ChatGPT';
import loadingGif from '../loadingScreen.gif';


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

  const [showButton, setShowButton] = useState<boolean>(false); // set to false
  const [loading, setLoading] = useState<boolean>(false);
  const [careerResult, setCareerResult] = useState<string>(''); 
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);


  async function handleGetAnswer() {
    setLoading(true);
    const answers = [Question1, Question2, Question3, Question4, Question5, Question6, Question7];
    const result = await generateDetailedCareer(answers);
    setCareerResult(result || 'No result found. Please try again.');
    setLoading(false);
  }  

  // 5. Add a useEffect hook to calculate progress whenever an answer changes:
  useEffect(() => {
    const totalQuestions = 7;
    const answeredQuestions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7]
      .filter(answer => answer !== '').length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    onProgressUpdate(progressPercentage);

    if (progressPercentage === 100) {
      setShowButton(true);
      setShowPopup(true);
    } else {
      setShowButton(false);
    }
  }, [Question1, Question2, Question3, Question4, Question5, Question6, Question7, onProgressUpdate]);

    

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Centered heading section */}
      

      {/* Centered container, left-aligned content */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '700px' }}>
          <Form>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>1. Describe a time when you solved a problem creatively. What was the outcome?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question1} onChange={(e) => setQuestion1(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>2. What motivates you more: recognition, salary, growth opportunities, or making a difference? Why?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question2} onChange={(e) => setQuestion2(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>3. If given a blank check to build your ideal workday from 9 to 5, how would you structure it?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question3} onChange={(e) => setQuestion3(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>4. Which subjects or topics have consistently caught your interest over the years?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question4} onChange={(e) => setQuestion4(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>5. Think about a time when you had to collaborate with others to meet a goal. What was your role, and how did the process go?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question5} onChange={(e) => setQuestion5(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>6. Describe your ideal team dynamic. Do you prefer leading, collaborating as an equal, or working independently with occasional input? Explain why.</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question6} onChange={(e) => setQuestion6(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>7. Reflect on a past experience (school, work, or personal) where you felt highly engaged and motivated. What were you doing, and what factors contributed to that feeling?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer Here" value={Question7} onChange={(e) => setQuestion7(e.target.value)} />
            </Form.Group>
          </Form>
        </div>
      </div>
      
      {(showButton === true) && (
  <>
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>All Questions Answered!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontWeight: 'bold' }}>
          Great job! You've completed all the quiz questions. If you'd like to review or revise your answers, feel free to scroll up and make changes. When you're ready, click <strong>'Get Answer'</strong> to view your personalized career suggestions!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowPopup(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
        <Button 
          style={{ backgroundColor: "green", border: "none" }} 
          onClick={handleGetAnswer}
        >
          Get Answer
        </Button>

        {careerResult && (
          <Button 
            onClick={() => setShowResults(prev => !prev)}
            style={{ backgroundColor: 'LightSalmon', border: 'none' }}
          >
            {showResults ? 'Hide Career Results' : 'View Career Results'}
          </Button>
        )}
      </div>

      {showResults && careerResult && (
        <div style={{ marginTop: '2rem', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <h4>Career Suggestions:</h4>
          <div style={{ whiteSpace: 'pre-wrap' }}>{careerResult}</div>
        </div>
      )}
    </div>

    <Modal show={loading} centered backdrop="static" keyboard={false}>
      <Modal.Body style={{ textAlign: 'center', padding: '2rem' }}>
        <img src={loadingGif} alt="Loading..." style={{ width: '80px', marginBottom: '1rem' }} />
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Generating results...</div>
      </Modal.Body>
    </Modal>
  </>
)}

    </div>
  );
};

export default DetailedQuestions;
