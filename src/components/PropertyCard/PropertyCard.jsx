import React, { useEffect } from "react";
import "./PropertyCard.css"




const PropertyCard = ({card}) => {
  // console.log(card);
 
  
  return (
    <div className="flexColStart r-card">
      <img src={card.img} alt="home" />
       
      <span className="primaryText">{card.heading}</span>   
      <span className="secondaryText">{card.info}</span>
    </div>
  );
};

export default PropertyCard;