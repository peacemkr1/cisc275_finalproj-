import React from "react";

interface ProgressBarProps {
  progress: number; // Progress value from 0 to 100
}

// Define inline styles for the progress bar container
const containerStyle: React.CSSProperties = {
  position: "sticky", // ensures the progress bar stays at the top as you scroll
  top: 0,
  width: "100%", // reduced width
  margin: "0 auto", // centers the bar horizontally
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
//styling for the percentage number of the progress bar
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Define inline style for the progress text
  const textStyle: React.CSSProperties = {
    position: "absolute",
    width: "98%",
    top: "58%", // moved down further
    transform: "translateY(-50%)",
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  };
// math for the rounded progress
  const roundedProgress = Math.round(progress);
  return (
    <div style={containerStyle}>
      <div
        style={{ ...fillStyle, width: `${roundedProgress}%` }}
      />
      <span style={textStyle}>{roundedProgress}%</span>
    </div>
  );
};

export default ProgressBar;
