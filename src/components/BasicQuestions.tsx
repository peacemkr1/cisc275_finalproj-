import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

export function BasicQuestions(): JSX.Element {


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

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                3. How comfortable are you with public speaking?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                4. What is your preferred way of communicating?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"   />
              <Form.Check type="radio"   />
              <Form.Check type="radio"   />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                5. What equipment do you like to work with?
              </Form.Label>
              <Form.Check type="radio"   />
              <Form.Check type="radio"   />
              <Form.Check type="radio"  />
              <Form.Check type="radio" />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                6. How would you describe yourself when dealing with stress or pressure?
              </Form.Label>
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"  />
              <Form.Check type="radio"   />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                7. When working in a group, what role do you take?
              </Form.Label>
                <Form.Check type="radio"   />
                <Form.Check type="radio"  />
                <Form.Check type="radio"   />
                <Form.Check type="radio" />
            </Form.Group>
          </Form>
        </div>
      </div>

    
    </div>
  );
};

export default BasicQuestions;
