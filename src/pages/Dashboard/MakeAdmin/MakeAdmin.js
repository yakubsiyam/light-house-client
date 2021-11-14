import React, { useState } from "react";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const MakeAdmin = () => {
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const [email, setEmail] = useState("");

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://fierce-meadow-98744.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Admin added Sucessfully");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden">
      <div className="row">
        <DashboardDrawer></DashboardDrawer>
        <div className="col-md-6 mx-auto shadow box radius p-3 p-md-5 my-3">
          <form onSubmit={handleAdminSubmit}>
            <h3 className="text-prime text-center fw-bold text-shadow">
              Make Admin
            </h3>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleFormControlInput1"
                placeholder="Your email"
                name="email"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <button type="submit" className="btn btn-bg">
              Make Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
