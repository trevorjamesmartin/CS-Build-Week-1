import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import MediaBar from "./components/MediaBar";
import {
  nextGen,
  randomGen,
  squareCount,
  firstGen,
} from "./components/engine/Generation";

const initialState = {
  squares: [],
  clickEffect: 0,
  generation: 0,
  speed: 1,
  isPlaying: false,
};
function App() {
  const [state, setState] = useState(initialState);
  const stateHooks = { get: state, set: setState };
  const toggleMode = () => {
    setState({ ...state, clickEffect: state.clickEffect ? 0 : 1 });
  };
  /**
   * Generate the next state, then update our current state with the results.
   */
  const nextHandler = () => {
    const squares = nextGen(state.squares);
    const speed = state.speed ? state.speed : 500;
    const generation = state.generation ? state.generation + 1 : 1;
    setState({ ...state, squares, generation, speed });
  };
  /**
   * set the value of state.isPlaying
   * to zero (false).
   */
  const stopHandler = () => {
    setState({ ...state, isPlaying: 0 });
  };
  /**
   * set the value of state.isPlaying
   * to 1 (true).
   */
  const playHandler = () => {
    setState({ ...state, isPlaying: 1 });
  };
  const resetGame = () => {
    const squares = firstGen(squareCount);
    const speed = state.speed ? state.speed : 500; // milliseconds
    setState({ ...initialState, squares, speed });
  };
  const randomGame = () => {
    const squares = randomGen(squareCount);
    const speed = state.speed ? state.speed : 500; // milliseconds
    setState({ ...initialState, squares, speed });
  };
  return (
    <div className="App">
      <header className="App-header">
        <ToolBar
          toggleMode={toggleMode}
          id="toggle"
          generation={state.generation}
          animSpeed={state.speed}
          cleanLife={resetGame}
          randomLife={randomGame}
        />
        <Board stateHooks={stateHooks} clickEffect={state.clickEffect} />
        <MediaBar
          handleNext={nextHandler}
          handleStop={stopHandler}
          handlePlay={playHandler}
          isPlaying={state.isPlaying}
          animRate={state.speed}
        />
      </header>
    </div>
  );
}

export default App;
