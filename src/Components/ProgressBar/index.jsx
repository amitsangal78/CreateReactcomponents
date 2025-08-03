import React from "react";
import "./style.css";

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  const handleProgressBar = (value) => {
    setProgress((prev) => prev + value);
  };

  return (
    <div className="container">
      <h2>ProgressBar</h2>
      <div className="progressBar">
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            backgroundColor: `${
              progress < 40 ? "red" : progress < 80 ? "orange" : "green"
            }`,
          }}
        >
          {progress}
        </div>
      </div>
      <div>
        <button disabled={progress <= 0} onClick={() => handleProgressBar(-10)}>
          -10%
        </button>
        <button
          disabled={progress >= 100}
          onClick={() => handleProgressBar(10)}
        >
          +10%
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
