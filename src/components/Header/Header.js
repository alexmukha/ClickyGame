import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">Highscore: {props.highscore}</div>
        <div className="result">Score: {props.score} </div>
  </div>
);

export default Header;
