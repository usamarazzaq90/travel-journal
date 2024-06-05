import React from "react";
import logo from "./assets/fill.png";

function Header() {
  return (
    <header>
      <div className="content">
        <img src={logo} />
        <p>my travel journal.</p>
      </div>
    </header>
  );
}

export default Header;
