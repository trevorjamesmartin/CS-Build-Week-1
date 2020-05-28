import React, { useEffect, useCallback, useRef } from "react";

const MediaBar = ({
  animSpeed,
  isPlaying,
  handleNext,
  handleStop,
  handlePlay,
}) => {
  const cbNextHandler = useCallback(() => {
    isPlaying && handleNext();
  }, [handleNext, isPlaying]);
  const speed = useRef(undefined);
  useEffect(() => {
    if (isPlaying) {
      if (!speed.current) {
        speed.current = animSpeed;
      }
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
      <button className="media-button" onClick={handleStop}>
        Stop
      </button>
      <button className="media-button" onClick={handleNext}>
        Next
      </button>
    </span>
  );
};

export default MediaBar;
