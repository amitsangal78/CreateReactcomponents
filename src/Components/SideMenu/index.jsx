import React, { useState } from "react";
import "./style.css";

function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`sidebar ${openMenu ? "open" : ""}`}>
      <button
        className={`toggle-btn ${openMenu ? "change" : ""}`}
        onClick={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)}
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>

      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
