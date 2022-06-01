import "./App.css";

import Results from "./components/Results";
import Keypads from "./components/Keypads";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="calculator">
          <Results />
          <Keypads />
        </div>
      </div>
    </div>
  );
}

export default App;
