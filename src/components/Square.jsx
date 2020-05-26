import React from "react";
const Square = (props) => {
  const { x, y, z, toggle, key } = props;
  const i = props.squareCount * y + x;
  return (
    <button
      key={key}
      className={z === 0 ? "life-cell-dead" : "life-cell-alive"}
      onClick={() => toggle({ i })}
    />
  );
};

export default Square;
