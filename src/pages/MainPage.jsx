import React from "react";
import "./style/MainPage.scss";
import Slider from "./slider";
import dataSlider from "./dataSlider";


export default function MainPage() {
  return (
    <div className="mainpageBody">
      <div className="textSect">
        <h2 style={{color:'#806044'}}>Welcome to my portfolio page</h2>
        <h3 style={{color:'#806044'}}>My name is Akbika</h3>
        <p style={{color:'#806044'}}>
          I'm an artist from Bishkek <br />
          here is my works
        </p>
      </div>
        <div className="slides">
          <Slider slides={dataSlider}/>
        </div>
        
    </div>
  );
}
