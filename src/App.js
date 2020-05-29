import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import MediaBar from "./components/MediaBar";
import Rules from "./components/Rules";
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
  speed: 500,
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
    const generation = state.generation ? state.generation + 1 : 1;
    // const speed = state.speed ? state.speed : 500;
    setState({
      ...state,
      squares,
      generation,
    });
    // setState({ ...state, squares, generation, speed });
  };
  /**
   * toggle the value of state.isPlaying
   * between 1 (true).
   * and zero (false).
   */
  const playHandler = () => {
    setState({ ...state, isPlaying: !state.isPlaying });
  };
  const resetGame = () => {
    const squares = firstGen(squareCount);
    setState({
      ...initialState,
      squares,
      speed: state.speed ? state.speed : 500,
    });
    // const speed = state.speed ? state.speed : 500; // milliseconds
    // setState({ ...initialState, squares, speed });
  };
  const randomGame = () => {
    const squares = randomGen(squareCount);
    setState({
      ...initialState,
      squares,
      speed: state.speed ? state.speed : 500,
    });
    // const speed = state.speed ? state.speed : 500; // milliseconds
    // setState({ ...initialState, squares, speed });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Rules />
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
          // handleStop={stopHandler}
          handlePlay={playHandler}
          isPlaying={state.isPlaying}
          animSpeed={state.speed}
          speedlimit={state.speed}
          changeSpeed={(e) =>
            setState({ ...state, speed: 1001 - Number(e.target.value) })
          }
        />
      </header>
    </div>
  );
}

export default App;
