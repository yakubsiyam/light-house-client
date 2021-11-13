// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const MyCart = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useAuth();

  const currentUserEmail = user.email;

  useEffect(() => {
    fetch(
      `https://fierce-meadow-98744.herokuapp.com/carts?email=${currentUserEmail}`
    )
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const cancelLamps = (id) => {
    const proceed = window.confirm(
      "Are You Sure, you want to delete this lamp?"
    );
    if (proceed) {
      const url = `https://fierce-meadow-98744.herokuapp.com/carts/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount) {
          alert("Lamps Cancel Successfully");
          const remainingLamps = carts.filter((cart) => cart._id !== id);
          setCarts(remainingLamps);
        }
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="row">
        <DashboardDrawer></DashboardDrawer>
        <div className="col-md-10 my-3">
          <h1 className="text-color text-center banner-text-shadow">
            My Lamps
          </h1>
          <section>
            <div className="row g-4 my-3">
              {carts.map((cart) => (
                <div className="col-lg-4 col-md-6 text-start" key={cart._id}>
                  <div className="shadow box radius h-100 card p-4">
                    <h5>
                      <h5 className="banner-text-shadow">Lamp Name:</h5>{" "}
                      {cart.name}
                    </h5>
                    <h5 className="fw-bold my-2">Price: ${cart.price}</h5>

                    <h5 className="text-prime">My Info: </h5>
                    <div>
                      <h6>Name: {cart.userName}</h6>
                      <p className="text-secondary">Email: {cart.email}</p>
                      <p className="text-secondary">Address: {cart.address}</p>
                      <p className="text-secondary">Phone: {cart.phone}</p>
                      <p className="text-secondary">
                        Status:{" "}
                        <span className="text-color">{cart.status}</span>
                      </p>
                    </div>
                    <div className="my-3">
                      <Link
                        onClick={() => cancelLamps(cart._id)}
                        className="btn btn-warning"
                        to="/mycart"
                      >
                        Cancel Carts
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
