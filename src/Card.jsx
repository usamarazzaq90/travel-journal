import React from "react";
import map_icon from "./assets/map-icon.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="image" />
      <div className="info">
        <div className="address">
          <img src={map_icon} className="icon" />
          <h3 className="country">{props.location}</h3>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="location">{props.title}</h2>
        <p className="duration">
          {props.startDate} - {props.endDate}
        </p>
        <p className="detail">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
