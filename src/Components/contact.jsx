import React from "react";
import "./contact.scss";
import Anavbar from "./navbar";
// import Afooter from "./footer";

const contact = () => {
  return (
    <>
      <Anavbar />
      <div className="container d-lg-flex  align-items-end index-1 position-relative ">
        <div className="col-md-4 col-6 ">
          <img
            className="img-fluid"
            src="https://i.ibb.co/1GKKsL4/contact-image.jpg"
            alt="contact"
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
              <a href="tel:0634516432"> tel: 063 451 6432</a>
              <br />
              <a href="mailto: okuhlecharlieman72@gmail.com">
                {" "}
                email: okuhlecharlieman72@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-5 ">
            <span className="m-5 d-flex text-white">
              Share:
              <img
                className="m-1"
                width="30"
                height="30"
                src="https://img.icons8.com//windows/32/FFFFFF/facebook-new.png"
                alt="facebook-new"
              />
              <img
                className="m-1"
                width="30"
                height="30"
                src="https://img.icons8.com/windows/32/FFFFFF/twitter.png"
                alt="twitter-circled--v1"
              />
              <img
                className="m-1"
                width="30"
                height="30"
                src="https://img.icons8.com/windows/32/FFFFFF/google-plus.png"
                alt="google-plus"
              />
            </span>
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
