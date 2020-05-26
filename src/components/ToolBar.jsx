import React from "react";
import ToggleSwitch from "./Toggle";
const ToolBar = (props) => {
  return (
    <>
      <ToggleSwitch handleOnClick={props.toggleMode} id={props.id} />
      <label>Generation {props.generation | 0}</label>
    </>
  );
};

export default ToolBar;
