import React from "react";
import OperatorComponent from "./OperatorComponent";
import Numbers from "./Numbers";
import Equal from "./Equal";

// Add KeypadsComponent Style file(CSS)
import "./KeypadsComponent.css";

const KeypadsComponent = () => {
  return (
    <div className="buttons">
      <OperatorComponent />
      <Numbers />
      <Equal />
    </div>
  );
};

export default KeypadsComponent;
