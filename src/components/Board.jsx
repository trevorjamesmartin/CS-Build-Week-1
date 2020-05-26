import React, { useEffect } from "react";
import Square, { findNeighbors } from "./Square";
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
  /**
   * toggle neighboring squares
   * @param {Number} i square index
   */
  const toggleNeighbors = ({ i }) => {
    const hood = get.squares[i].neighbors; // get square by index
    for (const nbr of hood) {
      toggle({ i: nbr });
    }
  };
  const toggler = ({ i }) => {
    const fx = get.clickEffect ? 0 : 1;
    if (fx === 1) {
      toggle({ i });
    } else {
      toggleNeighbors({ i });
    }
  };
  useEffect(() => {
    const squares = [];
    for (let i = 0; i < squareCount; i++) {
      for (let j = 0; j < squareCount; j++) {
        const neighbors = findNeighbors(squareCount, j, i);
        squares.push({ x: j, y: i, z: 0, neighbors });
      }
    }
    set({ squares });
    console.log("hello world");
  }, [set]);
  return (
    <div className="life-board">
      {get.squares.map((props, key) =>
        Square({ ...props, toggler, squareCount, key })
      )}
    </div>
  );
};

export default Board;
