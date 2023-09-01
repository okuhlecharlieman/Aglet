import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.scss";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="container-fluid py-5 ">
        <hr />
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="d-flex">
              <img
                src="https://i.ibb.co/Prxnbrz/3.png"
                alt="project-management"
                className="carousel-image"
              />
              <img
                src="https://i.ibb.co/T2YV92b/2.png"
                alt="project-management"
                className="carousel-image"
              />
              <img
                src="https://i.ibb.co/Prxnbrz/3.png"
                alt="project-management"
                className="carousel-image"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <img
                src="https://i.ibb.co/T2YV92b/2.png"
                alt="project-management"
                className="carousel-image"
              />
              <img
                src="https://i.ibb.co/Prxnbrz/3.png"
                alt="project-management"
                className="carousel-image"
              />
              <img
                src="https://i.ibb.co/T2YV92b/2.png"
                alt="project-management"
                className="carousel-image"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <img
                src="https://i.ibb.co/Prxnbrz/3.png"
                alt="project-management"
                className="carousel-image"
              />
              <img
                src="https://i.ibb.co/T2YV92b/2.png"
                alt="project-management"
                className="carousel-image"
              />
              <img
                src="https://i.ibb.co/Prxnbrz/3.png"
                alt="project-management"
                className="carousel-image"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
