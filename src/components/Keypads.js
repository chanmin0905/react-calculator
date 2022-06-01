import React from "react";
import Operator from "./Operator";
import Numbers from "./Numbers";
import Equal from "./Equal";

// Add Keypads Component Style file(CSS)
import "./Keypads.css";

const Keypads = () => {
  return (
    <div className="buttons">
      <Operator />
      <Numbers />
      <Equal />
    </div>
  );
};

export default Keypads;
