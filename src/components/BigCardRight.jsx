import React from "react";
import "./styles/BigCardRight.css";

// Minor edit for September 19th, 2025 commit 4

function BigCardRight(props) {
  return (
    <div className="bigcardright-container">
      <div className="location-icon-right">
        <img src={props.location} />
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
      <div className="image-container">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default BigCardRight;
