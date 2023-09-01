import React from "react";
import "./home.scss";
import Anavbar from "./navbar";
import Slider from "./slider";
import Afooter from "./footer";

const home = () => {
  return (
    <>
      {" "}
      <Anavbar />
      <Slider />
      <Afooter />
    </>
  );
};

export default home;
