import React from "react";
import "./App.css";

import DisplayedComponent from "./components/DisplayedComponent";
import KeypadsComponent from "./components/KeypadsComponent";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="calculator">
          <DisplayedComponent />
          <KeypadsComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
