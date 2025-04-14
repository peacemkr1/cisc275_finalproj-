import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  progress: number; // Progress value from 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
