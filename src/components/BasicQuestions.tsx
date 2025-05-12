import { useState, useEffect } from 'react';
//import { Form } from 'react-bootstrap';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { generateBasicCareer } from './ChatGPT';
import loadingGif from '../loadingScreen.gif';
import '../App.css';

// Props for BasicQuestions component
interface BasicQuestionsProps {
  onProgressUpdate?: (progress: number) => void;
}

const QUESTIONS = [
  { prompt: 'What was your favorite subject in school?', options: ['Math','Science','English','History'] },
  { prompt: 'How would you describe your level of talkativeness?', options: ['Very Talkative','Somewhat Talkative','Quiet','Depends on Situation'] },
  { prompt: 'How comfortable are you with public speaking?', options: ['Very Comfortable','Somewhat Comfortable','Uncomfortable','Prefer To Avoid It'] },
  { prompt: 'What is your preferred way of communicating?', options: ['In Person','Phone Call','Text','Email'] },
  { prompt: 'What equipment do you like to work with?', options: ['Computers','Tools','Instruments','Art Supplies'] },
  { prompt: 'How would you describe yourself when dealing with stress or pressure?', options: ['Stay Calm','Get Focused','Feel Overwhelmed','Avoid the Situation'] },
  { prompt: 'When working in a group, what role do you take?', options: ['Leader','Organizer','Contributor','Supporter'] },
  { prompt: 'Which work environment do you prefer?', options: ['In an office with others','Hybrid (home and office)','Fully remote','Hands-on/outdoors'] },
  { prompt: 'Which career field are you most drawn to?', options: ['Healthcare','Business','Law','Engineering','Theatre'] }
];
export const BASIC_QUESTION_COUNT = QUESTIONS.length;

export function BasicQuestions({ onProgressUpdate }: BasicQuestionsProps): JSX.Element {


  /*
    Note: 
      The value, useState<string>(''), is telling you that
      the answer choices will not be pre-selected when you load
      up the questionaire. For example, if I had useState<string>('Math'),
      this would mean that the answer choice "Math" would already be pre-selected
      before I chose an answer. 

      I referenced the TOME to complete this section: 
        https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
  */
  const [answers, setAnswers] = useState<string[]>(Array(QUESTIONS.length).fill(''));
  const showButton = answers.every(a => a !== '');

  // New state for current question index
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);


  //const [showFeedbackMech, setFeedbackMech] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [hasShownPopup, setHasShownPopup] = useState<boolean>(false);




  useEffect(() => {
    const answeredCount = answers.filter(a => a !== '').length;
    onProgressUpdate && onProgressUpdate((answeredCount / QUESTIONS.length) * 100);
    if (answeredCount === QUESTIONS.length && !hasShownPopup) {
      setShowPopup(true);
      setHasShownPopup(true);
    }
  }, [answers, hasShownPopup, onProgressUpdate]);
  
  

  const [careerResult, setCareerResult] = useState<string>('');

  async function handleGetAnswer() {
    setLoading(true);
    const result = await generateBasicCareer(answers);
    setCareerResult(result || 'No result found. Please try again.');
    setLoading(false);
  }


  const [careerData, setCareerData] = useState<any[]>([]);


  /*
    Note: 
      The useEffect hook is used to perform side effects in function components.
      It takes a function as an argument and runs it after the component renders.
      The second argument is an array of dependencies. If any of the dependencies change,
      the effect will run again. If you pass an empty array, the effect will only run once
      when the component mounts. This part was AI generated from ChatGPT. 
   */
  useEffect(() => {
    if (careerResult) {
      try {
        // Remove markdown code fences if present
        let jsonString = careerResult.trim();
        if (jsonString.startsWith('```')) {
          // Remove opening fence line
          jsonString = jsonString.replace(/^```.*\r?\n/, '');
          // Remove closing fence
          jsonString = jsonString.replace(/\r?\n```$/, '');
        }
        const parsed = JSON.parse(jsonString);
        // Sort careers by match percentage descending
        parsed.sort((a: any, b: any) => {
          const aMatch = parseInt(a.match.replace('%', ''), 10);
          const bMatch = parseInt(b.match.replace('%', ''), 10);
          return bMatch - aMatch;
        });
        setCareerData(parsed);
        console.log('Parsed careerData:', parsed);
      } catch (err) {
        console.error('Failed to parse careerResult:', err, careerResult);
        setCareerData([]);
      }
    } else {
      setCareerData([]);
    }
  }, [careerResult]);

  useEffect(() => {
    if (careerResult) {
      setShowResults(true);
    }
  }, [careerResult]);


  return (
    <div className="basic-questions-container">
      {/* Header */}


      {/* 7 Questions */}
      <div className="basic-questions-wrapper">
        <div className="basic-questions-inner">

        {/* 
          Note: 
            Radio = 1 Multiple Choice Option
            Checkbox = Select All that Apply
            
            React Radio Information: https://primereact.org/radiobutton/
            Referencing the TOME: https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
          
          */}

          <Form className="basic-form" onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="form-group-custom">
              <Form.Label>{QUESTIONS[currentQuestion].prompt}</Form.Label>
              <ListGroup className="listgroup-fullwidth">
                {QUESTIONS[currentQuestion].options.map(option => (
                  <ListGroup.Item
                    key={option}
                    action
                    active={answers[currentQuestion] === option}
                    onClick={() => {
                      const newAnswers = [...answers];
                      newAnswers[currentQuestion] = option;
                      setAnswers(newAnswers);
                    }}
                  >
                    {option}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Form.Group>
          </Form>
          
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={`nav-buttons ${currentQuestion === 8 ? 'single-nav' : ''}`}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>

        {showButton && (
          <Button
            type="button"
            variant="secondary"
            onClick={handleGetAnswer}
          >
            Get Answer
          </Button>
        )}

        {currentQuestion < QUESTIONS.length - 1 && (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            disabled={!answers[currentQuestion]}
          >
            Next
          </Button>
        )}
      </div>

      {showButton && (
        <> 
        {/*https://react-bootstrap.netlify.app/docs/components/modal/ */}
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
    
            {careerResult && (
              <Button
                className="toggle-results-btn"
                onClick={() => setShowResults(prev => !prev)}
              >
                {showResults ? 'Hide Career Results' : 'View Career Results'}
              </Button>
            )}
            {showResults && careerResult && (
              <div className="results-card">
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
    
          <Modal show={loading} centered backdrop="static" keyboard={false}>
            <Modal.Body className="loading-modal-body">
              <img src={loadingGif} alt="Loading..." className="loading-spinner" />
              <div className="loading-text">Generating results...</div>
            </Modal.Body>
          </Modal>
        </>
      )}
</div>    
  );
} 

export default BasicQuestions;
