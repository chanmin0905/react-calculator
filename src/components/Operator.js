import React from "react";

// Add Operator Component Style file(CSS)
import "./Operator.css";

const Operator = () => {
  let operator = ["+", "-", "*", "/"];

  return (
    <div className="operators">
      {operator.map((el, i) => {
        // console.log(el);
        return <div key={i}>{el}</div>;
      })}
    </div>
  );
};

export default Operator;
