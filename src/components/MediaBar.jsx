import React from "react";

const MediaBar = ({ handleNext }) => {
  return (
    <span className="media-bar">
      {/* <button className="media-button">Play</button>
      <button className="media-button">Stop</button> */}
      <button className="media-button" onClick={handleNext}>
        Next
      </button>
    </span>
  );
};

export default MediaBar;
