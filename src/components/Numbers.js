import React from "react";

// Add Numbers Component Style file(CSS)
import "./Numbers.css";

const Numbers = () => {
  return (
    <div className="leftPanel">
      <div className="numbers">
        <div className="number">7</div>
        <div className="number">8</div>
        <div className="number">9</div>
      </div>

      <div className="numbers">
        <div className="number">4</div>
        <div className="number">5</div>
        <div className="number">6</div>
      </div>

      <div className="numbers">
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>

      <div className="numbers">
        <div className="number">0</div>
        <div className="number">.</div>
        <div className="number">C</div>
      </div>
    </div>
  );
};

export default Numbers;
