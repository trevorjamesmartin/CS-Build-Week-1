import React, { useEffect } from "react";
import Square from "./Square";
const squareCount = 20;
/**
 * 20x20 grid of life-cells
 * @param {*} props
 */
const Board = ({ stateHooks }) => {
  const { get, set } = stateHooks;
  /**
   * toggle cell state
   * @param {*} i square index
   */
  const toggle = ({ i }) => {
    const xy = get.squares[i]; // get square by index
    const z = xy.z === 0 ? 1 : 0; // dead ? alive : dead
    const squares = get.squares; // make copy
    squares[i] = { ...xy, z }; // update copy
    set({ ...get, squares }); // set state
  };

  useEffect(() => {
    const squares = [];
    for (let i = 0; i < squareCount; i++) {
      for (let j = 0; j < squareCount; j++) {
        squares.push({ x: j, y: i, z: 0 });
      }
    }
    set({ squares });
    console.log("hello world");
  }, [set]);
  return (
    <div className="life-board">
      {get.squares.map((props, key) =>
        Square({ ...props, toggle, squareCount, key })
      )}
    </div>
  );
};

export default Board;
