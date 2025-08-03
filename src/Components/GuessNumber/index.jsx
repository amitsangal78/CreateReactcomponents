import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const guessResult = {
  correct: "Congratulations! You guessed the number in X attempts.",
  tooLow: "Too low! Try again.",
  tooHigh: "Too high! Try again.",
  invalidInput: "Please enter a number between 1 and 100.",
};

function GuessTheNumber() {
  const secretNumber = useRef(Math.round(Math.random() * 100));
  const [guessCount, setGuessCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log(secretNumber.current);
  }, []);

  // Function to handle guess checking
  const handleGuess = () => {
    if (guess < 1 || guess > 100 || !guess || isNaN(guess)) {
      setResult(guessResult.invalidInput);
      return;
    }
    if (guess < secretNumber.current) {
      setResult(guessResult.tooLow);
    } else if (guess > secretNumber.current) {
      setResult(guessResult.tooHigh);
    } else {
      setResult(`Congratulations! You guessed the number in ${guessCount + 1} attempts.`);
    }
    setGuessCount((guessCount) => guessCount + 1);
    setGuess("");
  };

  // Function to reset the game
  const resetGame = () => {
    secretNumber.current = Math.round(Math.random() * 100);
    setGuessCount(0);
    setGuess("");
    setResult("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={resetGame}>Reset</button>
      <p id="result">{result && result}</p>
    </div>
  );
}

export default GuessTheNumber;
