import React from "react";
// import data from "../../data";
import locationLogo from "../../images/location.svg";
import "./Card.css";

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img className="card--image" src={props.location.image} alt={props.location.title}></img>
      <div className="card--info">
        <div className="card--location">
          <img src={locationLogo} alt="location icon" />
          <span>{props.location.location}</span>
          <a href={props.location.mapsHref}>View on Google Maps</a>
        </div>
        <h2>{props.location.title}</h2>
        <h3>{props.location.startDate} - {props.location.endDate}</h3>
        <p>{props.location.description}</p>
      </div>
    </div>
  );
}

export default Card;
