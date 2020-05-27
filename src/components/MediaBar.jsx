import React from "react";

const MediaBar = (props) => {
  return (
    <span className="media-bar">
      <button className="media-button">Play</button>
      <button className="media-button">Pause</button>
      <button className="media-button">Stop</button>
    </span>
  );
};

export default MediaBar;
