import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <div className={props.className}>
      <img src={props.imgUrl} alt="heroImage" />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.btnUrl} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
}
