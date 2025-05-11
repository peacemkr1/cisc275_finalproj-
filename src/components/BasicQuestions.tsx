import React, { useState, useEffect } from 'react';
//import { Form } from 'react-bootstrap';
import { Button, Form, Modal } from 'react-bootstrap';
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
  
  function updateQuestion1(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion1(event.target.value);
  }

  function updateQuestion2(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion2(event.target.value);
  }

  function updateQuestion3(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion3(event.target.value);
  }

  function updateQuestion4(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion4(event.target.value);
  }

  function updateQuestion5(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion5(event.target.value);
  }

  function updateQuestion6(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion6(event.target.value);
  }

  function updateQuestion7(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion7(event.target.value);
  }

  function updateQuestion8(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion8(event.target.value);
  }

  function updateQuestion9(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion9(event.target.value);
  }
  

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

          <Form>
            {/* Question 1 */}
            {currentQuestion === 0 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  1. What was your favorite subject in school?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q1" 
                  onChange={updateQuestion1} 
                  id="q1-math" 
                  label="Math" 
                  value="Math" 
                  checked={Question1 === "Math"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q1" 
                  onChange={updateQuestion1}  
                  id="q1-science" 
                  label="Science" 
                  value="Science" 
                  checked={Question1 === "Science"} 
                  />
                <Form.Check 
                  type="radio" 
                  name="q1" 
                  onChange={updateQuestion1} 
                  id="q1-english" 
                  label="English" 
                  value="English" 
                  checked={Question1 === "English"} 
                  />
                <Form.Check 
                  type="radio" 
                  name="q1" 
                  onChange={updateQuestion1} 
                  id="q1-history" 
                  label="History" 
                  value="History" 
                  checked={Question1 === "History"} 
                  />
              </Form.Group>
            )}

            {/* Question 2 */}
            {currentQuestion === 1 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  2. How would you describe your level of talkativeness?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q2" 
                  onChange={updateQuestion2} 
                  id="q2-very" 
                  label="Very Talkative" 
                  value="Very Talkative" 
                  checked={Question2 === "Very Talkative"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q2" 
                  onChange={updateQuestion2} 
                  id="q2-somewhat" 
                  label="Somewhat Talkative" 
                  value="Somewhat Talkative" 
                  checked={Question2 === "Somewhat Talkative"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q2" 
                  onChange={updateQuestion2} 
                  id="q2-quiet" 
                  label="Quiet" 
                  value="Quiet" 
                  checked={Question2 === "Quiet"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q2" 
                  onChange={updateQuestion2} 
                  id="q2-depends" 
                  label="Depends on Situation" 
                  value="Depends on Situation" 
                  checked={Question2 === "Depends on Situation"} 
                />
              </Form.Group>
            )}

            {/* Question 3 */}
            {currentQuestion === 2 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  3. How comfortable are you with public speaking?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q3" 
                  onChange={updateQuestion3} 
                  id="q3-very" 
                  label="Very Comfortable" 
                  value="Very Comfortable" 
                  checked={Question3 === "Very Comfortable"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q3" 
                  onChange={updateQuestion3} 
                  id="q3-somewhat" 
                  label="Somewhat Comfortable" 
                  value="Somewhat Comfortable" 
                  checked={Question3 === "Somewhat Comfortable"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q3" 
                  onChange={updateQuestion3} 
                  id="q3-uncomfortable" 
                  label="Uncomfortable" 
                  value="Uncomfortable" 
                  checked={Question3 === "Uncomfortable"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q3" 
                  onChange={updateQuestion3} 
                  id="q3-avoid" 
                  label="Prefer To Avoid It" 
                  value="Prefer To Avoid It" 
                  checked={Question3 === "Prefer To Avoid It"} 
                />
              </Form.Group>
            )}

            {/* Question 4 */}
            {currentQuestion === 3 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  4. What is your preferred way of communicating?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q4" 
                  onChange={updateQuestion4} 
                  id="q4-person" 
                  label="In Person" 
                  value="In Person" 
                  checked={Question4 === "In Person"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q4" 
                  onChange={updateQuestion4} 
                  id="q4-phone" 
                  label="Phone Call" 
                  value="Phone Call" 
                  checked={Question4 === "Phone Call"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q4" 
                  onChange={updateQuestion4} 
                  id="q4-text" 
                  label="Text" 
                  value="Text" 
                  checked={Question4 === "Text"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q4" 
                  onChange={updateQuestion4} 
                  id="q4-email" 
                  label="Email" 
                  value="Email" 
                  checked={Question4 === "Email"} 
                />
              </Form.Group>
            )}

            {/* Question 5 */}
            {currentQuestion === 4 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  5. What equipment do you like to work with?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q5" 
                  onChange={updateQuestion5} 
                  id="q5-computers" 
                  label="Computers" 
                  value="Computers" 
                  checked={Question5 === "Computers"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q5" 
                  onChange={updateQuestion5} 
                  id="q5-tools" 
                  label="Tools" 
                  value="Tools" 
                  checked={Question5 === "Tools"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q5" 
                  onChange={updateQuestion5} 
                  id="q5-instruments" 
                  label="Instruments" 
                  value="Instruments" 
                  checked={Question5 === "Instruments"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q5" 
                  onChange={updateQuestion5} 
                  id="q5-art" 
                  label="Art Supplies" 
                  value="Art Supplies" 
                  checked={Question5 === "Art Supplies"} 
                />
              </Form.Group>
            )}

            {/* Question 6 */}
            {currentQuestion === 5 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  6. How would you describe yourself when dealing with stress or pressure?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q6" 
                  onChange={updateQuestion6} 
                  id="q6-calm" 
                  label="Stay Calm" 
                  value="Stay Calm" 
                  checked={Question6 === "Stay Calm"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q6" 
                  onChange={updateQuestion6} 
                  id="q6-focused" 
                  label="Get Focused" 
                  value="Get Focused" 
                  checked={Question6 === "Get Focused"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q6" 
                  onChange={updateQuestion6} 
                  id="q6-overwhelmed" 
                  label="Feel Overwhelmed" 
                  value="Feel Overwhelmed" 
                  checked={Question6 === "Feel Overwhelmed"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q6" 
                  onChange={updateQuestion6} 
                  id="q6-avoid" 
                  label="Avoid the Situation" 
                  value="Avoid the Situation" 
                  checked={Question6 === "Avoid the Situation"} 
                />
              </Form.Group>
            )}

            {/* Question 7 */}
            {currentQuestion === 6 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  7. When working in a group, what role do you take?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q7" 
                  onChange={updateQuestion7} 
                  id="q7-leader" 
                  label="Leader" 
                  value="Leader" 
                  checked={Question7 === "Leader"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q7" 
                  onChange={updateQuestion7} 
                  id="q7-organizer" 
                  label="Organizer" 
                  value="Organizer" 
                  checked={Question7 === "Organizer"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q7" 
                  onChange={updateQuestion7} 
                  id="q7-contributor" 
                  label="Contributor" 
                  value="Contributor" 
                  checked={Question7 === "Contributor"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q7" 
                  onChange={updateQuestion7} 
                  id="q7-supporter" 
                  label="Supporter" 
                  value="Supporter" 
                  checked={Question7 === "Supporter"} 
                />
              </Form.Group>
            )}

            {/* Question 8 */}
            {currentQuestion === 7 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  8. Which work environment do you prefer?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q8" 
                  onChange={updateQuestion8} 
                  id="q8-office" 
                  label="In an office with others" 
                  value="In an office with others" 
                  checked={Question8 === "In an office with others"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q8" 
                  onChange={updateQuestion8} 
                  id="q8-hybrid" 
                  label="Hybrid (home and office)" 
                  value="Hybrid (home and office)" 
                  checked={Question8 === "Hybrid (home and office)"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q8" 
                  onChange={updateQuestion8} 
                  id="q8-remote" 
                  label="Fully remote" 
                  value="Fully remote" 
                  checked={Question8 === "Fully remote"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q8" 
                  onChange={updateQuestion8} 
                  id="q8-outdoors" 
                  label="Hands-on/outdoors" 
                  value="Hands-on/outdoors" 
                  checked={Question8 === "Hands-on/outdoors"} 
                />
              </Form.Group>
            )}

            {/* Question 9 */}
            {currentQuestion === 8 && (
              <Form.Group style={{ marginBottom: '1.5rem' }}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  9. Which career field are you most drawn to?
                </Form.Label>
                <Form.Check 
                  type="radio" 
                  name="q9" 
                  onChange={updateQuestion9} 
                  id="q9-healthcare" 
                  label="Healthcare" 
                  value="Healthcare" 
                  checked={Question9 === "Healthcare"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q9" 
                  onChange={updateQuestion9} 
                  id="q9-business" 
                  label="Business" 
                  value="Business" 
                  checked={Question9 === "Business"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q9" 
                  onChange={updateQuestion9} 
                  id="q9-law" 
                  label="Law" 
                  value="Law" 
                  checked={Question9 === "Law"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q9" 
                  onChange={updateQuestion9} 
                  id="q9-engineering" 
                  label="Engineering" 
                  value="Engineering" 
                  checked={Question9 === "Engineering"} 
                />
                <Form.Check 
                  type="radio" 
                  name="q9" 
                  onChange={updateQuestion9} 
                  id="q9-theatre" 
                  label="Theatre" 
                  value="Theatre" 
                  checked={Question9 === "Theatre"} 
                />
              </Form.Group>
            )}
          </Form>
          
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button
          variant="secondary"
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        {currentQuestion < 8 && (
          <Button
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
