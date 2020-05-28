import React, { useEffect } from "react";
import Square from "./Square";
import { squareCount, firstGen } from "./engine/Generation";
/**
 * 25x25 grid of cells
 * @param {Object} `stateHooks` { get, set }
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
      toggle({ i: nbr }); // toggle neighbor state
    }
  };
  const toggler = ({ i }) => {
    switch (get.clickEffect ? 0 : 1) {
      case 1: {
        toggle({ i });
        break;
      }
      case 0: {
        toggleNeighbors({ i });
        break;
      }
      default: {
        break;
      }
    }
  };
  useEffect(() => {
    const squares = firstGen(squareCount); // the first generation
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
