import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import MediaBar from "./components/MediaBar";

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
    console.log("toggle mode");
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
        <MediaBar />
      </header>
    </div>
  );
}

export default App;
