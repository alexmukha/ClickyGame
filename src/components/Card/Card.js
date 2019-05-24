import React from "react";
import "./Card.css";


const Card = props => (
  <div className="cards" onClick={() => props.clickCount(props.id)}>
    {/* <div className="img-container"> */}
    <div className="click-item" style = {{ backgroundImage: 'url(' + props.image + ')', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
}} >
      {/* <img alt={props.name} src={props.image} /> */}
      
    </div>
  </div>
);

export default Card;
