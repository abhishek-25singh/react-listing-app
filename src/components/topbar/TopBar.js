import React from "react";
import "./TopBar.css";

//react components returns JSX kind of markup
function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter"></i>
        </div>
        <div className="topbar-center">Center</div>
        <div className="topbar-right">Right</div>
      </div>
    </>
  );
}
export default TopBar;
