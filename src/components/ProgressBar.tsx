// ProgressBar component: visually displays user's progress through a quiz
import React from "react";
import '../App.css';

// Props for the ProgressBar component: includes progress percentage and total number of questions
interface ProgressBarProps {
  progress: number; // Progress value from 0 to 100
  totalQuestions: number;
}

// Functional component that renders a progress bar and current question count
const ProgressBar: React.FC<ProgressBarProps> = ({ progress, totalQuestions }) => {
  // Calculate the number of completed questions based on progress percentage
  const currentCount = Math.round((progress * totalQuestions) / 100);
  return (
    <>
      {/* Container for the full progress bar */}
      <div className="progress-container">
        {/* Visual indicator of progress fill width */}
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
        {/* Text showing current question count out of total */}
        <span className="progress-text">{currentCount}/{totalQuestions}</span>
      </div>
    </>
  );
};

export default ProgressBar;
