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
          <p className="bioText">I was born and live in Bishkek. Realizing that I had certain skills and my own vision, I left school No. 12 after 9th grade and wanted to back it up with an appropriate education. I entered the Chuikov Art College, where I have been studying for 3 years now.
            <br /> For me this is not just a hobby. it's a way of expressing yourself. I'm also into tiktok
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
