import React, { useState, useEffect } from 'react';
//import { Form } from 'react-bootstrap';
import { Button, Form, Modal } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { generateBasicCareer } from './ChatGPT';
import loadingGif from '../loadingScreen.gif';



interface BasicQuestionsProps {
  onProgressUpdate: (progress: number) => void;
}

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
  const [Question1, setQuestion1] = useState<string>('');
  const [Question2, setQuestion2] = useState<string>('');
  const [Question3, setQuestion3] = useState<string>('');
  const [Question4, setQuestion4] = useState<string>('');
  const [Question5, setQuestion5] = useState<string>('');
  const [Question6, setQuestion6] = useState<string>('');
  const [Question7, setQuestion7] = useState<string>('');
  const [Question8, setQuestion8] = useState<string>('');
  const [Question9, setQuestion9] = useState<string>('');

  // New state for current question index
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);


  const [showButton, setShowButton] = useState<boolean>(false); // set to false
  //const [showFeedbackMech, setFeedbackMech] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);




  useEffect(() => {
    const totalQuestions = 9;
    const answeredQuestions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9].filter(answer => answer !== '').length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    onProgressUpdate(progressPercentage);

    if (progressPercentage === 100) {
      setShowButton(true); // if all questions are answered, Get Answer button will appear 
      setShowPopup(true);
    }
    else {
      setShowButton(false);
    }

    
      
        //setFeedbackMech(false);
      

  }, [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, onProgressUpdate]);
  
  

  const [careerResult, setCareerResult] = useState<string>('');

  async function handleGetAnswer() {
    setLoading(true);
    const answers = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9];
    const result = await generateBasicCareer(answers);
    setCareerResult(result || 'No result found. Please try again.');
    setLoading(false);
  }


  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '2rem' }}>
      {/* Header */}


      {/* 7 Questions */}
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ width: '100%', maxWidth: '700px', textAlign: 'left' }}>

        {/* 
          Note: 
            Radio = 1 Multiple Choice Option
            Checkbox = Select All that Apply
            
            React Radio Information: https://primereact.org/radiobutton/
            Referencing the TOME: https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#multiline-textarea
          
          */}

          <Form
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Question 1 */}
            {currentQuestion === 0 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  1. What was your favorite subject in school?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Math','Science','English','History'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question1 === option}
                      onClick={() => setQuestion1(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 2 */}
            {currentQuestion === 1 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  2. How would you describe your level of talkativeness?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Very Talkative','Somewhat Talkative','Quiet','Depends on Situation'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question2 === option}
                      onClick={() => setQuestion2(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 3 */}
            {currentQuestion === 2 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  3. How comfortable are you with public speaking?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Very Comfortable','Somewhat Comfortable','Uncomfortable','Prefer To Avoid It'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question3 === option}
                      onClick={() => setQuestion3(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 4 */}
            {currentQuestion === 3 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  4. What is your preferred way of communicating?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['In Person','Phone Call','Text','Email'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question4 === option}
                      onClick={() => setQuestion4(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 5 */}
            {currentQuestion === 4 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  5. What equipment do you like to work with?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Computers','Tools','Instruments','Art Supplies'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question5 === option}
                      onClick={() => setQuestion5(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 6 */}
            {currentQuestion === 5 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  6. How would you describe yourself when dealing with stress or pressure?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Stay Calm','Get Focused','Feel Overwhelmed','Avoid the Situation'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question6 === option}
                      onClick={() => setQuestion6(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 7 */}
            {currentQuestion === 6 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  7. When working in a group, what role do you take?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Leader','Organizer','Contributor','Supporter'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question7 === option}
                      onClick={() => setQuestion7(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 8 */}
            {currentQuestion === 7 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  8. Which work environment do you prefer?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['In an office with others','Hybrid (home and office)','Fully remote','Hands-on/outdoors'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question8 === option}
                      onClick={() => setQuestion8(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}

            {/* Question 9 */}
            {currentQuestion === 8 && (
              <Form.Group style={{ marginBottom: '1.5rem', width: '100%' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  9. Which career field are you most drawn to?
                </Form.Label>
                <ListGroup style={{ width: '100%' }}>
                  {['Healthcare','Business','Law','Engineering','Theatre'].map(option => (
                    <ListGroup.Item
                      key={option}
                      action
                      active={Question9 === option}
                      onClick={() => setQuestion9(option)}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            )}
          </Form>
          
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        {currentQuestion < 8 && (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            disabled={
              [
                Question1, Question2, Question3, Question4,
                Question5, Question6, Question7, Question8, Question9
              ][currentQuestion] === ''
            }
          >
            Next
          </Button>
        )}
      </div>

      {(showButton === true && currentQuestion === 8) && (
        <> 
        {/*https://react-bootstrap.netlify.app/docs/components/modal/ */}
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
                type="button"
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
} 

export default BasicQuestions;
