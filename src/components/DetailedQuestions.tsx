import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { generateDetailedCareer } from './ChatGPT';
import loadingGif from '../loadingScreen.gif';

// List of detailed questions
const questions = [
  "Describe a time when you solved a problem creatively. What was the outcome?",
  "What motivates you more: recognition, salary, growth opportunities, or making a difference? Why?",
  "If given a blank check to build your ideal workday from 9 to 5, how would you structure it?",
  "Which subjects or topics have consistently caught your interest over the years?",
  "Think about a time when you had to collaborate with others to meet a goal. What was your role, and how did the process go?",
  "Describe your ideal team dynamic. Do you prefer leading, collaborating as an equal, or working independently with occasional input? Explain why.",
  "Reflect on a past experience (school, work, or personal) where you felt highly engaged and motivated. What were you doing, and what factors contributed to that feeling?"
];

// Export the count of detailed questions for external use
export const DETAILED_QUESTION_COUNT = questions.length;

interface DetailedQuestionsProps {
  onProgressUpdate: (progress: number) => void;
}

const DetailedQuestions = ({ onProgressUpdate }: DetailedQuestionsProps): JSX.Element => {

  /*
    Referencing the TOME: https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
  */
  
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [showButton, setShowButton] = useState<boolean>(false); // set to false
  const [loading, setLoading] = useState<boolean>(false);
  const [careerResult, setCareerResult] = useState<string>(''); 
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [careerData, setCareerData] = useState<any[]>([]);
    


  async function handleGetAnswer() {
    setLoading(true);
    const result = await generateDetailedCareer(answers);
    setCareerResult(result || 'No result found. Please try again.');
    setLoading(false);
  }  

  // 5. Add a useEffect hook to calculate progress whenever an answer changes:
  useEffect(() => {
    const totalQuestions = questions.length;
    const answeredQuestions = answers.filter(answer => answer !== '').length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    onProgressUpdate(progressPercentage);

    if (progressPercentage === 100) {
      setShowButton(true);
      setShowPopup(true);
    } else {
      setShowButton(false);
    }
  }, [answers, onProgressUpdate]);


  useEffect(() => {
    if (careerResult) {
      try {
        let jsonString = careerResult.trim();
        if (jsonString.startsWith('```')) {
          jsonString = jsonString.replace(/^```.*\r?\n/, '');
          jsonString = jsonString.replace(/\r?\n```$/, '');
        }
        const parsed = JSON.parse(jsonString);
        parsed.sort((a: any, b: any) => {
          const aMatch = parseInt(a.match.replace('%',''), 10);
          const bMatch = parseInt(b.match.replace('%',''), 10);
          return bMatch - aMatch;
        });
        setCareerData(parsed);
      } catch {
        setCareerData([]);
      }
    } else {
      setCareerData([]);
    }
  }, [careerResult]);

  useEffect(() => {
    if (careerResult) setShowResults(true);
  }, [careerResult]);

    

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Centered heading section */}

      {/* Centered container, left-aligned content */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '700px' }}>
          <Form>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                {currentQuestion + 1}. {questions[currentQuestion]}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Answer Here"
                value={answers[currentQuestion]}
                onChange={(e) => {
                  const updated = [...answers];
                  updated[currentQuestion] = e.target.value;
                  setAnswers(updated);
                }}
              />
            </Form.Group>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <Button disabled={currentQuestion === 0} onClick={() => setCurrentQuestion(q => q - 1)}>
              Previous
            </Button>
            {currentQuestion < questions.length - 1 ? (
              <Button disabled={!answers[currentQuestion]} onClick={() => setCurrentQuestion(q => q + 1)}>
                Next
              </Button>
            ) : (
              <Button
                disabled={!answers[currentQuestion]}
                onClick={handleGetAnswer}
              >
                Get Answer
              </Button>
            )}
          </div>
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Career Name</th>
                <th>Education</th>
                <th>Experience</th>
                <th>Salary</th>
                <th>Match</th>
              </tr>
            </thead>
            <tbody>
              {careerData.map((job: any, idx: number) => (
                <tr key={idx}>
                  <td>{job.career}</td>
                  <td>{job.education}</td>
                  <td>{job.experience}</td>
                  <td>{job.salary}</td>
                  <td>{job.match}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
