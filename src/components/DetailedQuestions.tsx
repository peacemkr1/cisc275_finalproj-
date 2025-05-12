import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { generateDetailedCareer } from './ChatGPT';
import loadingGif from '../loadingScreen.gif';

// List of detailed questions
const questions = [
  "Describe a time when you solved a problem creatively. What was the outcome?",
  "What motivates you more: recognition, salary, growth opportunities, or making a difference? Why?",
  "If given a blank check to build your ideal workday from 9 to 5, how would you structure it?",
  "Describe a time you felt deeply accomplished after completing a task. What were you doing, and why did it feel meaningful to you?",
  "When facing a high-pressure situation, do you prefer to lead a team, work independently, or support someone else's leadership? Why?",
  "What kind of long-term impact do you want your career to have—on people, society, technology, or something else? Why is that important to you?",
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

  const [loading, setLoading] = useState<boolean>(false);
  const [careerResult, setCareerResult] = useState<string>(''); 
  const [showResults, setShowResults] = useState<boolean>(false);
  const [careerData, setCareerData] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
    

  async function handleGetAnswer() {
    setLoading(true);
    const result = await generateDetailedCareer(answers);
    setCareerResult(result || 'No result found. Please try again.');
    setLoading(false);
    setShowResults(true);
  }  

  // 5. Add a useEffect hook to calculate progress whenever an answer changes:
  useEffect(() => {
    const totalQuestions = questions.length;
    const answeredQuestions = answers.filter(answer => answer !== '').length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    onProgressUpdate(progressPercentage);
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
    <div className="detailed-questions-container">
      {/* Centered heading section */}

      {/* Centered container, left-aligned content */}
      <div className="detailed-questions-inner">
          <Form>
            <Form.Group className="question-group">
              <Form.Label className="question-label">
                {questions[currentQuestion]}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="detailed-textarea"
                placeholder="Answer here (press Enter when done)"
                value={answers[currentQuestion]}
                onChange={(e) => {
                  const updated = [...answers];
                  updated[currentQuestion] = e.target.value;
                  setAnswers(updated);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    // If not last question, move to next
                    if (currentQuestion < questions.length - 1 && answers[currentQuestion].trim() !== '') {
                      setCurrentQuestion(q => q + 1);
                    } 
                    // If last question and non-empty, show popup
                    else if (currentQuestion === questions.length - 1 && answers[currentQuestion].trim() !== '') {
                      setShowPopup(true);
                    }
                  }
                }}
              />
            </Form.Group>
          </Form>

          <div className="completion-popup">
            <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>All Questions Answered!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Great job! You've completed all the quiz questions. If you'd like to review or revise your answers, feel free to scroll up and make changes. When you're ready, click <strong>'Get Answer'</strong> to view your personalized career suggestions!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={() => setShowPopup(false)}>
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div className="nav-buttons-detailed">
            <Button disabled={currentQuestion === 0} onClick={() => setCurrentQuestion(q => q - 1)}>
              Previous
            </Button>
            {currentQuestion < questions.length - 1 ? (
              <Button disabled={!answers[currentQuestion]} onClick={() => setCurrentQuestion(q => q + 1)}>
                Next
              </Button>
            ) : (
              <>
                <Button
                  disabled={!answers[currentQuestion]}
                  onClick={handleGetAnswer}
                >
                  Get Answer
                </Button>
              </>
            )}
          </div>
          {careerResult && (
            <div className="toggle-button-container">
              <Button
                className="toggle-results-btn-detailed"
                onClick={() => setShowResults(prev => !prev)}
              >
                {showResults ? 'Hide Career Results' : 'View Career Results'}
              </Button>
            </div>
          )}
          {showResults && careerResult && (
            <div className="results-card-detailed">
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
        <Modal.Body className="loading-modal-body-detailed">
          <img src={loadingGif} alt="Loading..." className="loading-spinner-detailed" />
          <div className="loading-text-detailed">Generating results...</div>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default DetailedQuestions;
