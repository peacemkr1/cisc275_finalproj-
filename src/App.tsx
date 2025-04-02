import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

// Local storage key logic
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData);
  const [showBasicQuestions, setShowBasicQuestions] = useState(false);
  const [showDetailedQuestions, setShowDetailedQuestions] = useState(false);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function goToBasicQuestions() {
    setShowBasicQuestions(true);
  }

  function goToDetailedQuestions() {
    setShowDetailedQuestions(true);
  }

  function goBackHome() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
  }

  return (
    <div className="App">
      {/* Top Header with Home Button */}
      {(showBasicQuestions || showDetailedQuestions) && (
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#282c34",
          color: "pink"
        }}>
          <h2 style={{ margin: 0 }}>Q&A App</h2>
          <Button
            variant="light"
            onClick={goBackHome}
            style={{ fontSize: "1rem", padding: "0.4rem 1rem", color: "black",backgroundColor: ""}}
            
          >
            Home
          </Button>
        </div>
      )}

      {/* Home Page */}
      {!showBasicQuestions && !showDetailedQuestions ? (
        <>
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1rem",
            position: "absolute", 
            top: 0,
            left: 0,
            color: "white"
            }}>
            <div>David Cardenas</div>
            <div>Rahul Davu</div>
            <div>Ayman Tayeb</div>
            </div>
            <div style={{
            position: "absolute",
            color: "gold"
            }}>
            <div>
            <h2 style={{ fontFamily: "Arial", fontSize: "4rem" }}>Basic Questions</h2>              
            <p>***Write Description***</p>
              <Button 
                onClick={goToBasicQuestions} 
                style={{ backgroundColor: "blue" }}
              >
                Go to Basic Questions
              </Button>

              
              <br /><br />
            </div>

            <div>
            <h2 style={{ fontFamily: "Arial", fontSize: "4rem" }}>Detailed Questions</h2>              
              <p>***Write Description***</p>
            </div>
              <Button 
                onClick={goToDetailedQuestions}
                style={{ backgroundColor: "blue" }}
                >
                  Go to Detailed Questions
              
              </Button>

              


              <br /><br />
            </div>

{/*
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            */}
          </header>

          <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insert API Key Here"
              onChange={changeKey}
            />
            <br />
            <Button className="Submit-Button" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </>
      ) : showBasicQuestions ? (
        <div className="App-header">
          <h1>Basic Questions Page</h1>
          <p>***Questions will go here***</p>
          <ol>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
          </ol>
        </div>
      ) : (
        <div className="App-header">
          <h1>Detailed Questions Page</h1>
          <p>***Questions will go here***</p>
          <ol>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;