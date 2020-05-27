import React from "react";

const ToggleSwitch = (props) => {
  const { handleOnClick, id } = props;
  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="checkbox"
        onClick={handleOnClick}
      />
      <label htmlFor={id} className="switch" />
    </>
  );
};

export default ToggleSwitch;
