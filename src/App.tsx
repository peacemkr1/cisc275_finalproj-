import React, { useState } from 'react';
// Import React and useState for building components and managing state
// Import CSS styling, images, and external component modules
//import logo from './logo.svg';
import './App.css';
import { Button} from 'react-bootstrap';
import BasicQuestions from './components/BasicQuestions'; // /Users/aymantayeb/cisc275_finalproj-/src/components/BasicQuestions.tsx
import DetailedQuestions from './components/DetailedQuestions'; // /Users/aymantayeb/cisc275_finalproj-/src/components/DetailedQuestions.tsx 
import ProgressBar from './components/ProgressBar'; 
import AboutUs from './components/AboutUs';
//import ChatGPT from './components/ChatGPT';
import ChickenLogo from './ChickenLogo.png';
import WelcomePage from './components/WelcomePage';

import { BASIC_QUESTION_COUNT } from './components/BasicQuestions';
import { DETAILED_QUESTION_COUNT } from './components/DetailedQuestions';



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


// Initialize keyData by checking local storage for saved API key
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

// Main App component - this is the core of the application
function App() {
  // State variables used to control navigation and application flow
  // Declare a state variable to hold the API key
  const [key, setKey] = useState<string>(keyData); // API key
  // Controls which page (basic questions, detailed questions, about, or welcome) is shown
  const [showBasicQuestions, setShowBasicQuestions] = useState(false); // determines whether or not you are on this given page
  const [showDetailedQuestions, setShowDetailedQuestions] = useState(false); // determines whether or not you are on this given page
  const [showAbout, setShowAbout] = useState(false);
  const [quizProgress, setQuizProgress] = useState<number>(0); // Track quiz progress as a percentage or count
  const [keySubmitted, setKeySubmitted] = useState<boolean>(false); // Flag to check if the user has submitted their API key
  const [showWelcome, setShowWelcome] = useState(true);

  // Store the API key and proceed to the main application
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    setKeySubmitted(true);
    setShowWelcome(false);
  }

  // Handle changes to the input where user enters API key
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value); // API key 
  }

  // Navigation handler to show Basic Questions view
  function goToBasicQuestions() {
    setShowBasicQuestions(true); // changes to true when you click on Basic Ques. button
  }

  // Navigation handler to show Detailed Questions view
  function goToDetailedQuestions() {
    setShowDetailedQuestions(true); // changes to true when you click on Detailed Ques. button
  }

  // Navigation handler to switch from Detailed to Basic Questions
  function switchToBasicQuestions() {
    setShowDetailedQuestions(false);
    setShowBasicQuestions(true);
  }

  // Navigation handler to switch from Basic to Detailed Questions
  function switchToDetailedQuestions() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(true);
  }

  // Navigation handler to show About Us page
  function goToAboutUs() {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
    setShowAbout(true);
  }

  // Navigation handler to return to Home screen
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

  // If welcome screen is active, render WelcomePage component
  if (showWelcome) {
    return <WelcomePage onSubmit={handleSubmit} onKeyChange={changeKey} />;
  }

  // Main application render - displays top bar and selected view
  return (
    // This is the main wrapper div for the whole app layout
    <div className="App">
      {/* Top navigation/header bar, always visible */}
      <div className="top-header">
        {/* App title and logo */}
        {/*<h2 style={{ margin: 0 }}>Q&A App</h2>*/}
        <div className="logo-container">
        <img
          src={ChickenLogo}
          alt="Hen Logo"
          className="logo-img"
        />


          <h2 className="logo-title">Peck-Your-Path</h2>
        </div>

        {/* Navigation buttons: Back, About Us, Home, Switch */}
        <div className="button-group">
        <Button
          variant="light"
          onClick={() => {
            setShowWelcome(true);
            setShowBasicQuestions(false);
            setShowDetailedQuestions(false);
            setShowAbout(false);
          }}
          className="btn-back"
          style={{
            opacity: keySubmitted ? 1 : 0.5,
            cursor: keySubmitted ? "pointer" : "not-allowed"
          }}
          disabled={!keySubmitted}
        >
          Back to API Page
        </Button>
        
        {!showBasicQuestions && !showDetailedQuestions && !showAbout && (
          <Button
            variant="light"
            onClick={goToAboutUs}
            className="btn-about"
          >
            About Us
          </Button>
        )}

        {(showBasicQuestions || showDetailedQuestions || showAbout) && (
<>
            <Button
              variant="light"
              onClick={goBackHome}
              className="btn-home"
            >
              Home
            </Button>
            {showDetailedQuestions && (
              <Button
                variant="light"
                onClick={switchToBasicQuestions}
                className="btn-basic"
              >
                Switch to Basic
              </Button>
            )}
            {showBasicQuestions && (
              <Button
                variant="light"
                onClick={switchToDetailedQuestions}
                className="btn-detailed"
              >
                Switch to Detailed
              </Button>
            )}
          </>
        )}
      </div>

      </div>

      {/* Home screen view with intro and question selection */}
      {/* The landing page layout when not taking a quiz or viewing About Us */}
      {/* Includes logo, welcome message, and question selection boxes */}
      {!showBasicQuestions && !showDetailedQuestions && !showAbout ? (
        <>
          <header
            className="home-header"
          >
            {/* Optional author section */}
            <div className="author-section">
              {/* <div>David Cardenas</div>
              <div>Rahul Davu</div>
              <div>Ayman Tayeb</div> */}
            </div>

            {/* Welcome Title */}
            <div className="welcome-title">
              <h1 style={{ color: "white", fontWeight: "bold", textDecoration: "underline" }}>
                Welcome to the Peck Your Path!
              </h1>
            </div>


            {/* Box around Basic and Detailed Questions */}
            <div className="question-boxes">
              {/* Basic Questions box with description and button */}
              <div className="box-basic">
                <h2 className="box-title">Basic Questions</h2>
                <p className="box-desc">Start with a quick quiz to discover your general career interests based on your personality and preferences. Perfect if you're looking for a fast overview!</p>
                <Button 
                  onClick={goToBasicQuestions} 
                  className="btn-go-basic"
                  style={{ 
                    opacity: keySubmitted ? 1 : 0.5,
                    cursor: keySubmitted ? "pointer" : "not-allowed"
                  }}
                  disabled={!keySubmitted}
                >
                  Go to Basic Questions
                </Button>

              </div>

              {/* Detailed Questions box with description and button */}
              <div className="box-detailed">
                <h2 className="box-title">Detailed Questions</h2>
                <p className="box-desc">Take a more in-depth quiz that dives into your values, skills, and goals to provide a more tailored and insightful career path suggestion.</p>
                <Button 
                  onClick={goToDetailedQuestions} 
                  className="btn-go-detailed"
                  style={{ 
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
        // Render Basic Questions view with progress bar
        <>
          <ProgressBar progress={quizProgress} totalQuestions={BASIC_QUESTION_COUNT} /> {/* Progress bar added */}
          <BasicQuestions onProgressUpdate={setQuizProgress} /> {/* Pass handler to BasicQuestions */}
        </>
      ) : showDetailedQuestions ? (
        // Render Detailed Questions view with progress bar
        <>
          <ProgressBar progress={quizProgress} totalQuestions={DETAILED_QUESTION_COUNT} /> {/* Progress bar added */}
          <DetailedQuestions onProgressUpdate={setQuizProgress} /> {/* Pass handler to DetailedQuestions */}
        </>
      ) : showAbout ? (
        // Render About Us page
        <AboutUs />
      ) : null}
    </div>
  );
}

export default App;
