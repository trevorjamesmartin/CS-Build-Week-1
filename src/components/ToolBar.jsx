import React from "react";
import ToggleSwitch from "./Toggle";

const ToolBar = (props) => {
  return (
    <span className="tool-bar">
      <div>
        <label className="tool-bar-label">o</label>
        <ToggleSwitch handleOnClick={props.toggleMode} id={props.id} />
      </div>
      <label className="tool-bar-label">
        Generation {props.generation | 0}
      </label>
      <div>
        <button className="death-button" onClick={props.cleanLife}>
          <i class="fas fa-skull"></i>
        </button>
        <button className="random-button" onClick={props.randomLife}>
          <i class="fas fa-random"></i>
        </button>
      </div>
    </span>
  );
};

export default ToolBar;
