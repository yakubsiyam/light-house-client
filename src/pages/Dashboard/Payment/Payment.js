import React from "react";
import payment from "../../../images/payment.png";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const Payment = () => {
  return (
    <div className="overflow-hidden">
      <div className="row">
        <DashboardDrawer></DashboardDrawer>
        <div className="col-md-10">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <h1 className="text-center text-prime banner-text-shadow mt-3">
                Payment system coming soon...
              </h1>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={payment} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
