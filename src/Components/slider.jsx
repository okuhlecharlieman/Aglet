import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.scss";
import video1 from "../Assets/Videos/vid1.mp4";
import video2 from "../Assets/Videos/vid2.mp4";
import video3 from "../Assets/Videos/vid3.mp4";
import video4 from "../Assets/Videos/vid4.mp4";
import video5 from "../Assets/Videos/vid5.mp4";
import video6 from "../Assets/Videos/vid6.mp4";
import video7 from "../Assets/Videos/vid7.mp4";
import video8 from "../Assets/Videos/vid8.mp4";
import video9 from "../Assets/Videos/vid9.mp4";
import video10 from "../Assets/Videos/vid10.mp4";
import video11 from "../Assets/Videos/vid11.mp4";
import video12 from "../Assets/Videos/vid12.mp4";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleVideoHover = (videoElement) => {
    videoElement.play(); // Play the video when hovering
  };

  const handleVideoLeave = (videoElement) => {
    videoElement.pause(); // Pause the video when not hovering
  };
  return (
    <div>
      <div className="container-fluid mb">
        <hr />
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="d-md-flex">
              <div className="col-md-4">
                <video
                  src={video12}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">One</div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video1}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">Two</div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video2}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">
                  Three
                </div>
                <div className="col text-secondary">djjd</div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex">
              <div className="col-md-4">
                <video
                  src={video3}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">Four</div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video4}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">Five</div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video5}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">Six</div>
                <div className="col text-secondary">djjd</div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex">
              <div className="col-md-4">
                <video
                  src={video6}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">
                  Seven
                </div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video7}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">
                  Eight
                </div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video8}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">Nine</div>
                <div className="col text-secondary">djjd</div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex">
              <div className="col-md-4">
                <video
                  src={video9}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">Ten</div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video10}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">
                  Eleven
                </div>
                <div className="col text-secondary">djjd</div>
              </div>
              <div className="col-md-4">
                <video
                  src={video11}
                  alt="project-management"
                  className="carousel-image img-fluid"
                  muted
                  onMouseEnter={(e) => handleVideoHover(e.target)}
                  onMouseLeave={(e) => handleVideoLeave(e.target)}
                />
                <div className="col text-white font-weight-bold my-2">
                  Twelve
                </div>
                <div className="col text-secondary">djjd</div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
