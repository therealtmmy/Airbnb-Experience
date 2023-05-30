import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";


const Card = (props) => {
  let badgeText 
  if (props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.item.location === "online"){
    badgeText = "ONLINE"
  } 

  return (
    <div className="Card-Container">
      <div>
      {badgeText && <p className="SoldOut">{badgeText}</p>}
        <img className="Card-Img" src={props.item.coverImg} />
      </div>
      <div className="Icon-Container">
        <p className="Icon-Number">
          <FaStar color="#FE395C" fontSize="15px" /> {props.item.stats.rating}
          <span className="Icon-Details"> ({props.item.stats.reviewCount}). </span>
          <span className="Icon-Details">
          {props.item.location}
          </span>
        </p>
      </div>
      <p className="Icon-Text">{props.item.title}</p>
      <p className="Price">
        <span className="Price-tag">From ${props.item.price}</span> / person
      </p>
    </div>
  );
};


export default Card;
