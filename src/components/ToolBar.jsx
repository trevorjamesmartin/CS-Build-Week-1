import React from "react";
import ToggleSwitch from "./Toggle";
const ToolBar = (props) => {
  return (
    <span className="tool-bar">
      <ToggleSwitch handleOnClick={props.toggleMode} id={props.id} />
      <label className="tool-bar-label">
        Generation {props.generation | 0}
      </label>
    </span>
  );
};

export default ToolBar;
