import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="row justify-content-between mb-5">
        <div className="col-md-5 row align-items-center justify-content-between">
          <div>
            <p className="text-prime mb-4">Welcome to Light House</p>
            <h1 className=" fw-bold mt-4 banner-text-shadow">Table Lamp</h1>

            <small className="text-secondary">
              Add contemporary lighting to your living space or bedroom with
              this matching pair of table lamps
            </small>
            <br />
            <Link className="btn rounded-pill mb-3 btn btn-bg mt-5" to="/lamps">
              Shop Now{" "}
              <i
                className="fas fa-chevron-right"
                style={{ fontSize: "12px" }}
              ></i>
            </Link>
          </div>
        </div>
        <div className="col-md-7">
          <img className="img-fluid" src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
