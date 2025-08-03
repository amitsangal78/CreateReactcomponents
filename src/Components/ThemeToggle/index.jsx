import React, { useEffect, useState } from "react";
import "./style.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target.checked);
              setDarkMode(e.target.checked);
            }}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text"></span>
      </div>
    </div>
  );
}

export default ThemeToggle;
