import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const LampDetails = () => {
  const { lampId } = useParams();
  const [lamp, setLamp] = useState([]);

  const { user } = useAuth();
  const {
    name,
    img,
    description,
    price,
    color,
    bulb_watt,
    size,
    material,
    number_of_lights,
    style,
    manufacturer,
  } = lamp;

  useEffect(() => {
    fetch(`https://fierce-meadow-98744.herokuapp.com/lamps/${lampId}`)
      .then((res) => res.json())
      .then((data) => setLamp(data));
  }, []);

  const refAddress = useRef();
  const refPhone = useRef();

  const history = useHistory();

  const handleBuy = (e) => {
    const userName = user.displayName;
    const email = user.email;
    const address = refAddress.current.value;
    const phone = refPhone.current.value;
    const status = "pending";

    const carts = {
      userName,
      email,
      address,
      phone,
      name,
      img,
      price,
      status,
    };

    axios
      .post("https://fierce-meadow-98744.herokuapp.com/carts", carts)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Cart Added Successfully");
          history.push("/mycart");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-shadow fw-bold text-prime mb-3">
        Lamp Details
      </h1>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-7">
          <img
            className="img-fluid d-flex mx-auto"
            src={img}
            alt="details_img"
          />
          <h3 className="text-center my-2">{name}</h3>
          <small className="d-block text-secondary my-3">{description}</small>
          <h4 className="text-prime fw-bold">Price: $ {price}</h4>

          <h5 className="text-center my-2">Lamp Specifications</h5>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Color
            </li>
            <li className="list-group-item flex-fill">{color}</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Bulb Watt
            </li>
            <li className="list-group-item flex-fill">{bulb_watt}</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Size/Weight
            </li>
            <li className="list-group-item flex-fill">{size}</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Number Of Lights
            </li>
            <li className="list-group-item flex-fill">{number_of_lights}</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Material
            </li>
            <li className="list-group-item flex-fill">{material}</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Style
            </li>
            <li className="list-group-item flex-fill">{style}</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill bg-light fw-bold">
              Manufactured By
            </li>
            <li className="list-group-item flex-fill">{manufacturer}</li>
          </ul>
        </div>

        <div className="col-md-5 shadow box radius p-3 p-md-5 my-md-0 my-3">
          <h3 className="text-dark text-center banner-text-shadow">
            Please Fill Up This Form
          </h3>
          <form onSubmit={handleBuy}>
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={user.displayName}
                required
                disabled
              />
            </div>
            <div className="my-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                defaultValue={user.email}
                required
                disabled
              />
            </div>
            <div className="my-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                ref={refAddress}
                className="form-control"
                id="address"
                placeholder="Your Address here"
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="inputPassword1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                ref={refPhone}
                className="form-control"
                id="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <button className="btn btn-prime mb-2 col-12">
              {" "}
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LampDetails;
