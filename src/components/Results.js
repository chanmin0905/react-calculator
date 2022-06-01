import React, {useState} from "react";

// Add Results Component Style file(CSS)
import "./Results.css";

const Results = () => {
  const [results, setResults] = useState("0");

  return <div className="input">{results}</div>;
};

export default Results;
