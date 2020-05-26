import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

const initialState = {
  squares: [],
};

function App() {
  const [state, setState] = useState(initialState);
  const stateHooks = { get: state, set: setState };
  return (
    <div className="App">
      <header className="App-header">
        <Board stateHooks={stateHooks} />
      </header>
    </div>
  );
}

export default App;
