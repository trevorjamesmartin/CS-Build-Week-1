import React, { useEffect } from "react";
import Square from "./Square";
import { squareCount, getNeighbors, getIndex } from "./Generation";
/**
 * 25x25 grid of cells
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
      toggle({ i: nbr }); // toggle state
    }
  };
  const toggler = ({ i }) => {
    const fx = get.clickEffect ? 0 : 1;
    if (fx === 1) {
      toggle({ i });
    } else if (fx === 0) {
      console.log(get.squares[i].neighbors);
      toggleNeighbors({ i });
    } else {
      // freeze state , run simulator before mutation.
      // call Generation function
      console.log("todo");
    }
  };
  useEffect(() => {
    const squares = [];
    for (let i = 0; i < squareCount; i++) {
      for (let j = 0; j < squareCount; j++) {
        const idx = getIndex(squareCount, j, i);
        const neighbors = getNeighbors(idx, squareCount);
        // console.log(neighbors);
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
