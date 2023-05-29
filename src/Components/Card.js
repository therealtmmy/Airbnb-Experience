import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";


const Card = (props) => {
  return (
    <div className="Card-Container">
      <div>
        <p className="SoldOut">{props.status}</p>
        <img className="Card-Img" src={props.img} />
      </div>
      <div className="Icon-Container">
        <p className="Icon-Number">
          <FaStar color="#FE395C" fontSize="15px" /> {props.rating}
          <span className="Icon-Details"> ({props.reviewCount}). </span>
          <span className="Icon-Details">
          {props.place}
          </span>
        </p>
      </div>
      <p className="Icon-Text">{props.title}</p>
      <p className="Price">
        <span className="Price-tag">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
