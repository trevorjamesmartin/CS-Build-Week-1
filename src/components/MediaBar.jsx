import React, { useEffect, useCallback, useRef } from "react";
import SpeedLimit from "./SpeedLimit";
const MediaBar = ({
  animSpeed,
  isPlaying,
  handleNext,
  handlePlay,
  speedLimit,
  changeSpeed,
}) => {
  const cbNextHandler = useCallback(() => {
    isPlaying && handleNext();
  }, [handleNext, isPlaying]);
  const speed = useRef(undefined);
  useEffect(() => {
    if (isPlaying) {
      speed.current = animSpeed;
      // if (!speed.current) {
      //   speed.current = animSpeed;
      // }
      const nextGenTimer = setTimeout(() => {
        cbNextHandler();
      }, speed.current);
      return () => clearTimeout(nextGenTimer);
    }
  }, [cbNextHandler, isPlaying, animSpeed]);
  return (
    <span className="media-bar">
      <button
        className={`media-button${isPlaying ? " is-playing" : ""}`}
        onClick={handlePlay}
      >
        Play
      </button>
      <button className="media-button" onClick={handleNext}>
        Next
      </button>
      <SpeedLimit changeSpeed={changeSpeed} speedLimit={speedLimit} />
    </span>
  );
};

export default MediaBar;
