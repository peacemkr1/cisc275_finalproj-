import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button} from 'react-bootstrap';
import BasicQuestions from './components/BasicQuestions'; // /Users/aymantayeb/cisc275_finalproj-/src/components/BasicQuestions.tsx
import DetailedQuestions from './components/DetailedQuestions'; // /Users/aymantayeb/cisc275_finalproj-/src/components/DetailedQuestions.tsx 
import ProgressBar from './components/ProgressBar'; 
import AboutUs from './components/AboutUs';
//import ChatGPT from './components/ChatGPT';
import ChickenLogo from './ChickenLogo.png';
import ChickenBackground from './chickenBackground1.png'
import WelcomePage from './components/WelcomePage';



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
  const [showAbout, setShowAbout] = useState(false);
  const [quizProgress, setQuizProgress] = useState<number>(0);
  const [keySubmitted, setKeySubmitted] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState(true);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    setKeySubmitted(true);
    setShowWelcome(false);
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

  function switchToBasicQuestions() {
    setShowDetailedQuestions(false);
    setShowBasicQuestions(true);
  }

  function switchToDetailedQuestions() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(true);
  }

  function goToAboutUs() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
    setShowAbout(true);
  }

  function goBackHome() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
    setShowAbout(false);
    /*
      when clicking the "Home" button at the top right, 
      both values are set to false to determine that 
      you are no  longer on those pages and you are 
      back to the main page. values remain false while
      on the home page, and values remain true while 
      on the given page
    */
  }

  if (showWelcome) {
    return <WelcomePage onSubmit={handleSubmit} onKeyChange={changeKey} />;
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
        {/*<h2 style={{ margin: 0 }}>Q&A App</h2>*/}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img
          src={ChickenLogo}
          alt="Hen Logo"
          style={{ height: "68px", width: "68px", objectFit: "contain" }}
        />


          <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.75rem', color: "coral" }}>Peck-Your-Path</h2>
        </div>

        {!showBasicQuestions && !showDetailedQuestions && !showAbout && (
          <Button
            variant="light"
            onClick={goToAboutUs}
            style={{
              fontSize: "1rem",
              padding: "0.4rem 1rem",
              color: "white",
              backgroundColor: "purple",
            }}
          >
            About Us
          </Button>
        )}

        {(showBasicQuestions || showDetailedQuestions || showAbout) && (
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              variant="light"
              onClick={goBackHome}
              style={{
                fontSize: '1rem',
                padding: '0.4rem 1rem',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              Home
            </Button>
            {showDetailedQuestions && (
              <Button
                variant="light"
                onClick={switchToBasicQuestions}
                style={{
                  fontSize: '1rem',
                  padding: '0.4rem 1rem',
                  color: 'white',
                  backgroundColor: 'teal',
                }}
              >
                Switch to Basic
              </Button>
            )}
            {showBasicQuestions && (
              <Button
                variant="light"
                onClick={switchToDetailedQuestions}
                style={{
                  fontSize: '1rem',
                  padding: '0.4rem 1rem',
                  color: 'white',
                  backgroundColor: 'orange',
                }}
              >
                Switch to Detailed
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Home Page */}
      {!showBasicQuestions && !showDetailedQuestions && !showAbout ? (
        <>
          <header
            className="App-header"
            style={{
              backgroundImage: `url(${ChickenBackground})`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "normal",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            {/* Optional author section */}
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
              {/* <div>David Cardenas</div>
              <div>Rahul Davu</div>
              <div>Ayman Tayeb</div> */}
            </div>

            {/* Welcome Title */}
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "2rem",
                borderRadius: "12px",
                marginBottom: "2rem",
                textAlign: "center",
                width: "90%",
                maxWidth: "600px",
              }}
            >
              <h1 style={{ color: "white", fontWeight: "bold", textDecoration: "underline" }}>
                Welcome to the Peck Your Path!
              </h1>
            </div>


            {/* Box around Basic and Detailed Questions */}
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
                  //border: "3px solid white",
                  borderRadius: "10px",
                  padding: "2rem",
                  //backgroundColor: "teal"
                  backgroundColor: "rgba(0, 128, 128, 1)"
                  //backgroundColor: "rgba(255,255,255,0.05)",
                  
                }}
              >
                <h2 style={{ fontFamily: "Arial", fontSize: "2.5rem", color: "white" }}>Basic Questions</h2>
                <p style={{ fontSize: "1.25rem" }}>Start with a quick quiz to discover your general career interests based on your personality and preferences. Perfect if you're looking for a fast overview!</p>
                <Button 
                  onClick={goToBasicQuestions} 
                  style={{ 
                    backgroundColor: "white", 
                    border: "none", 
                    color: "teal",
                    opacity: keySubmitted ? 1 : 0.5,
                    cursor: keySubmitted ? "pointer" : "not-allowed"
                  }}
                  disabled={!keySubmitted}
                >
                  Go to Basic Questions
                </Button>

              </div>

              {/* Box around Detailed Questions */}
              <div
                style={{
                  width: "45%",
                  textAlign: "center",
                  //border: "3px solid white",
                  borderRadius: "10px",
                  padding: "2rem",
                  //backgroundColor: "orange"
                  backgroundColor: "rgba(255, 165, 0, 1)"
                  //backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <h2 style={{ fontFamily: "Arial", fontSize: "2.5rem" }}>Detailed Questions</h2>
                <p style={{ fontSize: "1.25rem" }}>Take a more in-depth quiz that dives into your values, skills, and goals to provide a more tailored and insightful career path suggestion.</p>
                <Button 
                  onClick={goToDetailedQuestions} 
                  style={{ 
                    backgroundColor: "white", 
                    border: "none", 
                    color: "orange",
                    opacity: keySubmitted ? 1 : 0.5,
                    cursor: keySubmitted ? "pointer" : "not-allowed"
                  }}
                  disabled={!keySubmitted}
                >
                  Go to Detailed Questions
                </Button>

              </div>
            </div>
          </header>
        </>
      ) : showBasicQuestions ? (
        <>
          <ProgressBar progress={quizProgress} /> {/* Progress bar added */}
          <BasicQuestions onProgressUpdate={setQuizProgress} /> {/* Pass handler to BasicQuestions */}
        </>
      ) : showDetailedQuestions ? (
        <>
          <ProgressBar progress={quizProgress} /> {/* Progress bar added */}
          <DetailedQuestions onProgressUpdate={setQuizProgress} /> {/* Pass handler to DetailedQuestions */}
        </>
      ) : showAbout ? (
        <AboutUs />
      ) : null}
    </div>
  );
}

export default App;
