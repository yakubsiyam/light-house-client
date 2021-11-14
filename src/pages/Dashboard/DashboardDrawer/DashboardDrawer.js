import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashboardDrawer = () => {
  const { logout, admin } = useAuth();
  return (
    <div className="col-md-2">
      <div className="dashboard-bg text-start p-3 h-100">
        {admin ? (
          <span>
            <Link className="btn text-white d-block my-3" to="/makeadmin">
              Make Admin
            </Link>

            <Link className="btn text-white d-block my-3" to="/manageallcarts">
              Managed All Carts
            </Link>

            <Link className="btn text-white d-block my-3" to="/addnewlamp">
              Add Lamp
            </Link>
          </span>
        ) : (
          <span>
            <Link className="text-white btn d-block" to="/mycart">
              My Cart
            </Link>
            <Link className="btn text-white d-block my-3" to="/payment">
              Payment
            </Link>
            <Link className="btn text-white d-block my-3" to="/review">
              Review
            </Link>
          </span>
        )}
        {/* <Link className="text-white btn d-block" to="/mycart">
          My Cart
        </Link>
        <Link className="btn text-white d-block my-3" to="/payment">
          Payment
        </Link>
        <Link className="btn text-white d-block my-3" to="/review">
          Review
        </Link> */}

        {/* {admin && (
          <Link className="btn text-white d-block my-3" to="/makeadmin">
            Make Admin
          </Link>
        )} */}
        {/* <Link className="btn text-white d-block my-3" to="/makeadmin">
          Make Admin
        </Link>

        <Link className="btn text-white d-block my-3" to="/manageallcarts">
          Managed All Carts
        </Link>

        <Link className="btn text-white d-block my-3" to="/addnewlamp">
          Add Lamp
        </Link> */}
        <Link className="btn text-white d-block my-3" to="/" onClick={logout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default DashboardDrawer;
