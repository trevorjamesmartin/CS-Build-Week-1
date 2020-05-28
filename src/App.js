import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import MediaBar from "./components/MediaBar";
import { nextGen } from "./components/engine/Generation";

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
    const generation = state.generation ? state.generation + 1 : 1;
    setState({ ...state, squares, generation });
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

  return (
    <div className="App">
      <header className="App-header">
        <ToolBar
          toggleMode={toggleMode}
          id="toggle"
          generation={state.generation}
        />
        <Board stateHooks={stateHooks} clickEffect={state.clickEffect} />
        <MediaBar
          handleNext={nextHandler}
          handleStop={stopHandler}
          handlePlay={playHandler}
          isPlaying={state.isPlaying}
        />
      </header>
    </div>
  );
}

export default App;
