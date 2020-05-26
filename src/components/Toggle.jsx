import React from "react";

const ToggleSwitch = (props) => {
  const { handleOnClick, id } = props;
  return (
    <>
      <input type="checkbox" id={id} class="checkbox" onClick={handleOnClick} />
      <label for={id} class="switch" />
    </>
  );
};

export default ToggleSwitch;
