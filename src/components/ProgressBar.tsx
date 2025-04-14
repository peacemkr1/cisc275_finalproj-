import React from "react";

interface ProgressBarProps {
  progress: number; // Progress value from 0 to 100
}

// Define inline styles for the progress bar container
const containerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  width: "100%",
  height: "20px",
  backgroundColor: "#e0e0e0",
  borderRadius: "10px",
  overflow: "hidden",
  zIndex: 1000

};

// Define inline styles for the progress bar fill
const fillStyle: React.CSSProperties = {
  height: "100%",
  backgroundColor: "#007bff",
  transition: "width 0.3s ease-in-out"
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={containerStyle}>
      <div
        style={{ ...fillStyle, width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
