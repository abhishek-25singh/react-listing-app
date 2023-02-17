import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-section">
      <div className="hero-text">
        <span className="hero-text-title">Listings</span>
        <span className="hero-text-subtitle">Listing Application</span>
      </div>
      <img
        className="hero-img"
        src="https://images.pexels.com/photos/889930/pexels-photo-889930.jpeg"
      />
    </div>
  );
}

export default Header;
