import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const handleCloseView = (): void => {
    window.alt.emit("close_greeting");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleCloseView}>Close this page</button>
      </header>
    </div>
  );
};

export default App;
