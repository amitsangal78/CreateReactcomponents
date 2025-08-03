import React, { useState } from "react";
import "./style.css";

function EvenOrOddChecker() {
  const [result, setResult] = useState("Result appears here");
  const [input, setInput] = useState();

  const evaluateResult = () => {
    setTimeout(() => {
      if (!input || isNaN(input) || input.includes(".")) {
        setResult("Please enter a valid number.");
      } else if (parseInt(input) % 2 === 0) {
        setResult(`The number ${input} is even.`);
      } else {
        setResult(`The number ${input} is odd.`);
      }
    }, 1000);
    setResult("checking");
  };

  return (
    <div className="even-odd-container-wrapper">
      <div className="even-odd-container">
        <h1 className="title">Even or Odd Checker</h1>

        <input
          className="number-input"
          type="text"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="check-button" onClick={() => evaluateResult()}>
          Check
        </button>

        <div className="result-area">
          <div className={`${result === "checking" ? "loading" : "result"}`}>
            {result === "checking" ? "checking..." : result}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
