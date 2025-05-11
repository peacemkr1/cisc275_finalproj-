import React from "react";
import '../App.css';

interface ProgressBarProps {
  progress: number; // Progress value from 0 to 100
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, totalQuestions }) => {
  const currentCount = Math.round((progress * totalQuestions) / 100);
  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{ width: `${progress}%` }}
      />
      <span className="progress-text">{currentCount}/{totalQuestions}</span>
    </div>
  );
};

export default ProgressBar;
