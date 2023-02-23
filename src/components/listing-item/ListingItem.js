import React from "react";
import "./ListingItem.css";
function ListingItem() {
  return (
    <div className="listing-item">
      <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div className="listing-details">
        <div className="listing-catogories">catogories</div>
      </div>
    </div>
  );
}

export default ListingItem;
