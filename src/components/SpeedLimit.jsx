import React from "react";

const SpeedLimit = ({ changeSpeed, speedlimit }) => {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="1000"
        speedlimit={speedlimit}
        className="slider"
        id="myRange"
        onChange={changeSpeed}
      />
    </div>
  );
};

export default SpeedLimit;
