import React from "react";

// Add Equal Component Style file(CSS)
import "./Equal.css";

const Equal = () => {
  const clickedEqual = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="equal" onClick={clickedEqual}>
      =
    </div>
  );
};

export default Equal;
