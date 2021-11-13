import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-light">
      <div className="container pb-2">
        <div className="row justify-content-between">
          <div className="col-md-4 pt-4">
            <Link className="navbar-brand text-color" to="/home">
              <img
                className="img-fluid me-2 pb-1"
                width="30"
                src={logo}
                alt="Logo here"
              />
              <span className="text-prime text-shadow">Light House</span>
            </Link>
            <br />
            <small className="py-2 text-secondary">
              Add contemporary lighting to your living space or bedroom with
              this matching pair of table lamps.
            </small>
            <br />
            <div className="mt-5">
              <span className="text-secondary">
                All rights reserved. <br />
                &copy; 2021
                <span className="text-color"> Siyam Ali.</span>
              </span>
            </div>
          </div>
          <div className="col-md-4 pt-4">
            <span className="text-color fs-5 pb-3">Quick Shop</span>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/about"
            >
              <i className="fas fa-arrow-circle-right"></i> About
            </Link>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/lamps"
            >
              <i className="fas fa-arrow-circle-right"></i> Lamps
            </Link>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/notfound"
            >
              <i className="fas fa-arrow-circle-right"></i> Contact
            </Link>

            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/notfound"
            >
              <i className="fas fa-arrow-circle-right"></i> Privacy Policy
            </Link>
          </div>
          <div className="col-md-4 pt-4">
            <span className="text-color fs-5">Get Us</span>
            <span className="d-block text-secondary mt-2">
              <i className="fas fa-map-marker-alt"></i>{" "}
              Dhanmondi,Dhaka-1219,Bangladesh
            </span>
            <span className="d-block text-secondary mt-2">
              <i className="fas fa-phone-alt"></i> +880 1813729060
            </span>
            <span className="d-block text-secondary mt-2">
              <i className="fas fa-envelope"></i> siyam7178@gmail.com
            </span>
            <div className="mt-3">
              <span className="text-color pt-3">Follow Us</span>
              <div className="fs-5 pt-0">
                <Link to="/notfound">
                  <i className="fab fa-facebook-f text-dark icon-color pe-4"></i>
                </Link>{" "}
                <Link to="/notfound">
                  <i className="fab fa-twitter text-dark icon-color pe-4"></i>
                </Link>
                <Link to="/notfound">
                  <i className="fab fa-youtube text-dark icon-color pe-4"></i>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
