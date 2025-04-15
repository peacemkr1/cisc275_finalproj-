// to import use "Copy Path"
// don't use "relative path"


import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import BasicQuestions from './components/BasicQuestions'; // /Users/aymantayeb/cisc275_finalproj-/src/components/BasicQuestions.tsx
import DetailedQuestions from './components/DetailedQuestions'; // /Users/aymantayeb/cisc275_finalproj-/src/components/DetailedQuestions.tsx 
import ProgressBar from './components/ProgressBar';
//import ChatGPT from './components/ChatGPT';


      /* 
      Note: We created a Components Folder containing:
        -BasicQuestions.tsx
        -ChatGPT.tsx
        -DetailedQuestions.tsx
        -Navbar.tsx
        -ProgressBar.tsx

      We used imports (above) to reference those elements of code into our App.tsx file.
      This allows the App.tsx file to be more organized and more efficient.
      I was initally writing my code in the App.tsx file so I moved my code to the 
      components folder and I used ChatGPT to help me import the 
      BasicQuestions.tsx & DetailedQuestions.tsx files. 
      */



let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); // API key
  const [showBasicQuestions, setShowBasicQuestions] = useState(false); // determines whether or not you are on this given page
  const [showDetailedQuestions, setShowDetailedQuestions] = useState(false); // determines whether or not you are on this given page
  const [quizProgress, setQuizProgress] = useState<number>(0);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value); // API key 
  }

  function goToBasicQuestions() {
    setShowBasicQuestions(true); // changes to true when you click on Basic Ques. button
  }

  function goToDetailedQuestions() {
    setShowDetailedQuestions(true); // changes to true when you click on Detailed Ques. button
  }

  function goBackHome() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
    /*
      when clicking the "Home" button at the top right, 
      both values are set to false to determine that 
      you are no  longer on those pages and you are 
      back to the main page. values remain false while
      on the home page, and values remain true while 
      on the given page
    */
  }

  return (
    <div className="App">
      {/* Always visible top header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <h2 style={{ margin: 0 }}>Q&A App</h2>
        {(showBasicQuestions || showDetailedQuestions) && (
          <Button
            variant="light"
            onClick={goBackHome}
            style={{
              fontSize: "1rem",
              padding: "0.4rem 1rem",
              color: "white",
              backgroundColor: "black",
            }}
          >
            Home
          </Button>
        )}
      </div>

      {/* Home Page */}
      {!showBasicQuestions && !showDetailedQuestions ? (
        <>
          <header
              className="App-header"
              
            >

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "1rem",
                position: "absolute",
                top: 0,
                left: 0,
                color: "black",
              }}
            >
              {/* Optional author section */}
              {/* <div>David Cardenas</div>
              <div>Rahul Davu</div>
              <div>Ayman Tayeb</div> */}
            </div>
          
            {/*<div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1vh", 
                  paddingBottom: "50rem"
                }}
              ></div> */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  width: "500px", 
                  textAlign: "center",
                  border: "3px solid white",
                  borderRadius: "10px",
                  padding: "2rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <Form>
                  <h2 style={{ fontFamily: "Arial", fontSize: "2.5rem", color: "white" }}>API Key:</h2>
                  <Form.Control
                    type="password"
                    placeholder="Insert API Key Here"
                    onChange={changeKey}
                    style={{ marginTop: "1rem" }}
                  />
                  <br />
                  <Button className="Submit-Button" onClick={handleSubmit} style={{ backgroundColor: "blue", border: "none" }}>
                    Submit
                  </Button>
                </Form>
              </div>
            </div>


            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4rem",
                  color: "white",
                  width: "100%",
                }}
              >

              {/* Box around Basic Questions */}
              <div
                style={{
                  width: "45%",
                  textAlign: "center",
                  border: "3px solid white",
                  borderRadius: "10px",
                  padding: "2rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  //backgroundColor:"pink"
                }}
              >
                <h2 style={{ fontFamily: "Arial", fontSize: "2.5rem", color:"white" }}>Basic Questions</h2>
                <p style={{fontSize:"1.25rem"}}>Start with a quick quiz to discover your general career interests based on your personality and preferences. Perfect if you're looking for a fast overview!</p>
                <Button onClick={goToBasicQuestions} style={{ backgroundColor: "teal", border: "none" }}>
                  Go to Basic Questions
                </Button>
              </div>

              {/* Box around Detailed Questions */}
              <div
                style={{
                  width: "45%",
                  textAlign: "center",
                  border: "3px solid white",
                  borderRadius: "10px",
                  padding: "2rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <h2 style={{ fontFamily: "Arial", fontSize: "2.5rem" }}>Detailed Questions</h2>
                <p style={{fontSize:"1.25rem"}}>Take a more in-depth quiz that dives into your values, skills, and goals to provide a more tailored and insightful career path suggestion.</p>
                <Button onClick={goToDetailedQuestions} style={{ backgroundColor: "orange", border: "none" }}>
                  Go to Detailed Questions
                </Button>
              </div>
            </div>
          </header>
        
        {/*
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
          */}
        </>
      ) : showBasicQuestions ? (
        <>
          <ProgressBar progress={quizProgress} /> {/* Progress bar added */}
          <BasicQuestions onProgressUpdate={setQuizProgress} /> {/* Pass handler to BasicQuestions */}
        </>
      ) : (
        <>
          <ProgressBar progress={quizProgress} /> {/* Progress bar added */}
          <DetailedQuestions onProgressUpdate={setQuizProgress} /> {/* Pass handler to DetailedQuestions */}
        </>
      )}
    </div>
  );
}

export default App;
