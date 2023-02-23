import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-section">
      <div className="hero-text">
        <span className="hero-text-title">Marketplace</span>
        <span className="hero-text-subtitle">Property Listing </span>
      </div>
      <img
        className="hero-img"
        src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg"
      />
    </div>
  );
}

export default Header;
