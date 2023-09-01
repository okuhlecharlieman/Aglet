import React from "react";
import "./contact.scss";
import Anavbar from "./navbar";
import Afooter from "./footer";

const contact = () => {
  return (
    <>
      <Anavbar />
      <div className="container d-flex align-items-end index-1 position-relative ">
        <div className="col-4">
          <img
            className="img-fluid"
            src="https://i.ibb.co/1GKKsL4/contact-image.jpg"
            alt="contact image"
          />
        </div>
        <div className=" col-8 ">
          <div>
            {" "}
            <p className="m-5 text-white">
              my name is Okuhle Charlieman
              <br />
              and I am currently watching
              <br />a series called My life.
              <br />
            </p>
          </div>
          <div>
            <p className="m-5  text-white">
              you can reach me on:
              <br />
              tel: 063 451 6432
              <br />
              email: okuhlecharlieman72@gmail.com
            </p>
          </div>
          <div className="mb-5">
            <p className="m-5  text-white">Share: </p>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center index-2 position-absolute top-0 start-50 translate-middle ">
        <h1 className="text-muted m-5 f-500">
          <strong>hello</strong>
        </h1>
      </div>
    </>
  );
};

export default contact;
