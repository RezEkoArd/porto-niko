import React from "react";
import "../styles/topbar.scss";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
            <img src="./assets/logo.png" alt="logo" />
            </a>
            <div className="itemContainer">
              Niko el Hakim
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"> </span>
              <span className="line2"> </span>
              <span className="line3"> </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar