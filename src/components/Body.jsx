import React from "react";
import RestaurantCard from "./Card";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search
      {/* <input >Search your food here</input> */}
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />

      </div>
    </div>
  );
};

export default Body;
