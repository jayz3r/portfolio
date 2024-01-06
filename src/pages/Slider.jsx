import React, { useState } from "react";
import "./style/Slider.scss";
import dataSlider from "./dataSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({slides}) =>{

  const [current, setCurrent] = useState(0);
  const timeoutRef = React.useRef(null);
  const length = slides.length;
  const delay = 5500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="left-arrow"
        onClick={prevSlide}
      />
      {dataSlider.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img className="slideImg" src={slide.image} alt="" />)}
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="right-arrow"
        onClick={nextSlide}
      />
    </div>
  );
}

export default Slider;