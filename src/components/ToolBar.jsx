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
        <button onClick={props.cleanLife}>clear</button>
        <button onClick={props.randomLife}>random</button>
      </div>
    </span>
  );
};

export default ToolBar;
