import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title">about me</span>
        <img
          className="sidebar-img"
          src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
        </p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">categories</span>
        <ul className="sidebar-categories">
          <li className="sidebar-categories">Buy</li>
          <li className="sidebar-categories">Sell</li>
          <li className="sidebar-categories">Rent</li>
          <li className="sidebar-categories">Hostel</li>
          <li className="sidebar-categories">B & B</li>
          <li className="sidebar-categories">Hotel</li>
          <li className="sidebar-categories">buy</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us on:</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-social-icon fab fa-instagram"></i>
          <i className="sidebar-social-icon fab fa-facebook"></i>
          <i className="sidebar-social-icon fab fa-linkedin"></i>
          <i className="sidebar-social-icon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
