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
};

function App() {
  const [state, setState] = useState(initialState);
  const stateHooks = { get: state, set: setState };
  const toggleMode = () => {
    setState({ ...state, clickEffect: state.clickEffect ? 0 : 1 });
  };
  const nextHandler = () => {
    const squares = nextGen([...state.squares]);
    const generation = state.generation ? state.generation + 1 : 1;
    const clickEffect = state.clickEffect | 0;
    setState({ squares, generation, clickEffect });
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
        <MediaBar handleNext={nextHandler} />
      </header>
    </div>
  );
}

export default App;
