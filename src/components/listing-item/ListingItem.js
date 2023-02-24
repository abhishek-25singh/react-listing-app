import React from "react";
import "./ListingItem.css";
function ListingItem() {
  return (
    <div className="listing-item">
      <img
        className="listing-img"
        src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="listing-details">
        <div className="listing-categories">
          <span className="listing-category">Buy</span>
          <span className="listing-category">Sell</span>
        </div>
        <span className="listing-title">Awesome Property Available</span>
        <hr />
        <span className="listing-time">2 days ago</span>
        <p className="listing-description">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. Lorem ipsum, or lipsum as it
          is sometimes known, is dummy text used in laying out print, graphic or
          web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs. Lorem ipsum, or
          lipsum as it is sometimes known, is dummy text used in laying out
          print, graphic or web designs.
        </p>
      </div>
    </div>
  );
}

export default ListingItem;
