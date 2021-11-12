import React from "react";
import about from "../../../images/about.jpg";

const HomeAbout = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-prime text-shadow fw-bold">About Us</h1>
      <div className="row justify-content-between align-items-center my-5">
        <div className="col-md-6">
          <img className="img-fluid" src={about} alt="banner" />
        </div>
        <div className="col-md-6">
          <div>
            <p className="text-prime mb-4">Welcome to Light House</p>
            <h1 className=" fw-bold mt-4 banner-text-shadow">
              How to Use Lighting to Pull a Room Together
            </h1>

            <small className="text-secondary">
              We could have the most modern furniture, the loveliest carpets and
              curtains, beautifully painted walls, and countless fashionable
              home accessories, but if the lighting in our home is poor, all of
              that won’t matter.Believe it or not, the lights in our home play a
              major role in decoration.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
