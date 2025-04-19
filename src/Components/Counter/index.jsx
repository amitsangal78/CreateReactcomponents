import React, { useEffect, useRef, useState } from "react";
import styles from "./counter.module.css";

// Counter Component
export const Counter = () => {
  const [counter, setCounter] = useState(10);
  const counterRef = useRef(null);

  useEffect(() => {
    if(counter === 0){
      invalidateInterval();
      setCounter(10);
    }
  }, [counter])

  const invalidateInterval = () => {
    if(counterRef.current){
      clearInterval(counterRef.current);
    }
  }
  const reset = () => {
    invalidateInterval();
    setCounter(10);
  }
  const resume = () => {
    invalidateInterval();
    counterRef.current = setInterval(() => {
      setCounter((counter) => counter - 1)
    }, 1000)
  }
  const start = () => {
    resume()
  }
  const stop = () => {
    invalidateInterval()
  }

  return (
    <>
      <h1>Counter</h1>
      counter: {counter}
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => resume()}>Resume</button>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
    </>
  );
};
