import React from "react";
import "./style/aboutme.scss";
import bika from "../assets/bika.jpg";

function AboutMe() {
  return (
    <div className="aboutme">
      <div>
        <h1>About Me</h1>
      </div>
      <div className="biography">
        <div className="imgSection">
          <img src={bika} alt="" />
        </div>
        <div className="textSection">
          <h2>I am Asylbasheva Akbika</h2>
          <p className='painter'>painter</p>
          <p className="bioText">I was born and live in bishkek. Having realized that I have certain skills and my own vision, I left school No. 12 after 9th grade and wanted to support it with appropriate education. I entered the Chuikov Art College, where I have been studying for 3 years now.
            <br /> For me it's not just a hobby. It's a way of expressing myself. I'm also into tiktok.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
