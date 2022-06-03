import React from "react";

// Add OperatorComponent Component Style file(CSS)
import "./OperatorComponent.css";

const OperatorComponent = () => {
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="OperatorComponent">
      {operators.map((el, i) => {
        return (
          <div key={i} value={el}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default OperatorComponent;
