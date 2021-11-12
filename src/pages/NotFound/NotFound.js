import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/notfound.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8">
          <img className="img-fluid" src={notfound} alt="notfound" />
        </div>
        <div className="col-md-4">
          <div>
            <h1 className="text-color">Oopss....</h1>
            <p className="text-secondary">
              Your Requested Page is Not Found!!!
            </p>
            <Link className="btn btn-bg btn-lg my-4" to="/home">
              <i className="fas fa-arrow-right"></i> Want To Go Home ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
