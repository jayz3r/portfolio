import React from "react";
import "./style/MainPage.scss";
import Slider from "./slider";
import dataSlider from "./dataSlider";


export default function MainPage() {
  return (
    <div className="mainpageBody">
      <div className="textSect">
        <h2>Welcome to my portfolio page</h2>
        <h3>My name is Akbika and I`m a artist</h3>
        <p>
          I'm from city named Bishkek <br />
          here is my works
        </p>
        <div className="slides">
          <Slider slides={dataSlider}/>
        </div>
      </div>
        
    </div>
  );
}
