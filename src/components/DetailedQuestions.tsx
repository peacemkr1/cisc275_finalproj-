import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { generateDetailedCareer } from './ChatGPT';
import loadingGif from '../loadingScreen.gif';

// Array of detailed career-oriented questions presented one at a time
// List of detailed questions
const questions = [
  "Describe a time when you solved a problem creatively. What was the outcome?",
  "What motivates you more: recognition, salary, growth opportunities, or making a difference? Why?",
  "If you had complete freedom to design your ideal 9-to-5 workday, how would you structure it?",
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

// DetailedQuestions component handles a multi-step open-ended questionnaire.
// It tracks answers, updates progress, manages navigation, and renders AI-generated career results.
interface DetailedQuestionsProps {
  onProgressUpdate: (progress: number) => void;
}

const DetailedQuestions = ({ onProgressUpdate }: DetailedQuestionsProps): JSX.Element => {

  /*
    Referencing the TOME: https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
  */
  
  // Holds user answers for each question
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  // Tracks the current question index being displayed
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // Indicates whether the app is fetching results from the backend
  const [loading, setLoading] = useState<boolean>(false);
  // Stores the stringified result returned by OpenAI
  const [careerResult, setCareerResult] = useState<string>(''); 
  // Controls visibility of the results card
  const [showResults, setShowResults] = useState<boolean>(false);
  // Parsed career result array for display in a table
  const [careerData, setCareerData] = useState<any[]>([]);
  // Controls whether the "All Questions Answered" popup is shown
  const [showPopup, setShowPopup] = useState<boolean>(false);
    

  // Calls the backend to generate career suggestions based on answers
  async function handleGetAnswer() {
    setLoading(true);
    const result = await generateDetailedCareer(answers);
    setCareerResult(result || 'No result found. Please try again.');
    setLoading(false);
    setShowResults(true);
  }  

  // Updates the progress bar as answers are filled in
  useEffect(() => {
    const totalQuestions = questions.length;
    const answeredQuestions = answers.filter(answer => answer !== '').length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    onProgressUpdate(progressPercentage);
  }, [answers, onProgressUpdate]);


  // Parses and cleans the career result from OpenAI
  // Ensures the response is valid JSON, strips formatting if needed, sorts results
  useEffect(() => {
    if (careerResult) {
      try {
        console.log("CareerResult:", careerResult); // Debug log to see raw result
        let jsonString = careerResult.trim();

        // Remove triple backticks and optional language identifier
        if (jsonString.startsWith('```')) {
          jsonString = jsonString.replace(/^```[a-zA-Z]*\s*/, '');
          jsonString = jsonString.replace(/\s*```$/, '');
        }

        // Extract only the JSON array between the first '[' and last ']'
        const startIndex = jsonString.indexOf('[');
        const endIndex = jsonString.lastIndexOf(']');
        if (startIndex !== -1 && endIndex !== -1) {
          jsonString = jsonString.substring(startIndex, endIndex + 1);
        }

        const parsed = JSON.parse(jsonString);
        parsed.sort((a: any, b: any) => {
          const aMatch = parseInt(a.match.replace('%',''), 10);
          const bMatch = parseInt(b.match.replace('%',''), 10);
          return bMatch - aMatch;
        });
        setCareerData(parsed);
      } catch (err) {
        console.error("Failed to parse careerResult:", careerResult);
        console.error(err);
        setCareerData([]);
      }
    } else {
      setCareerData([]);
    }
  }, [careerResult]);

  // Auto-show results section if valid data exists
  useEffect(() => {
    if (careerResult) setShowResults(true);
  }, [careerResult]);

    

  return (
    <div className="detailed-questions-container">
      {/* Centered heading section */}

      {/* Centered container, left-aligned content */}
      <div className="detailed-questions-inner">
          {/* Textarea form where user enters answers to each question */}
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
                  // Allows pressing Enter to go to next question, or submit on last answer
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

          {/* Modal popup shown when all questions are completed */}
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

          {/* Navigation buttons to move between questions or submit */}
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
          {/* Toggle button to show/hide results */}
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
          {/* Table that displays AI-generated career suggestions */}
          {showResults && careerResult && (
            <div className="results-card-detailed">
              <h4>Career Suggestions:</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Career Name</th>
                    <th>Education</th>
                    <th>Job Growth Rate</th>
                    <th>Salary</th>
                    <th>Match</th>
                  </tr>
                </thead>
                <tbody>
                  {careerData.map((job: any, idx: number) => (
                    <tr key={idx}>
                      <td>{job.career}</td>
                      <td>{job.education}</td>
                      <td>{job.jobGrowth}</td>
                      <td>{job.salary}</td>
                      <td>{job.match}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
      </div>

      {/* Loading spinner shown while waiting for OpenAI response */}
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
