import React from "react";

const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        background: "#f0f0f0",
      }}
    >
        <img className="res-logo"
        src="http://meghanafoods.co.in/photo/Meghana%20special%20biryani.jpg" />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>36 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
