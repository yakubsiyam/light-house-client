import React from "react";
import { Link } from "react-router-dom";

const Lamp = ({ lamp }) => {
  const { name, img, material, size, price, manufacturer } = lamp;
  return (
    <div className="col-lg-4 col-md-6 mt-5">
      <div className="box radius h-100 px-3 shadow justify-content-between d-flex flex-column">
        <div>
          <img className="img-fluid d-block mx-auto my-1" src={img} alt="" />
        </div>
        <div className="my-2">
          <h5>{name}</h5>
          <span className="d-flex my-1">Material: {material}</span>
          <span className="d-flex my-1">Size: {size}</span>
          <span className="d-flex my-1">Manufactured By: {manufacturer}</span>
          <span className="d-flex my-1">
            Price: <span className="fw-bold"> ${price}</span>
          </span>
          <Link
            to="/lampdetails"
            className="btn btn-border-main d-block mx-auto shadow-lg border-2 rounded-pill w-50"
          >
            See Details <i class="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lamp;
