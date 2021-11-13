import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const Review = () => {
  const { user } = useAuth();
  return (
    <div className="overflow-hidden">
      <div className="row">
        <DashboardDrawer></DashboardDrawer>
        <div className="col-md-5 mx-auto my-5 p-5 shadow box radius">
          <h2 className="text-center fw-bold text-shadow">Review</h2>
          <form>
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                name="name"
                defaultValue={user.displayName}
                disabled
                //   onBlur={handleOnBlur}
              />
            </div>
            <div className="my-3 form-floating">
              <label htmlFor="floatingTextarea">Reviews</label>
              <textarea
                className="form-control"
                placeholder="Leave a review here"
                id="floatingTextarea"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <label htmlFor="inputPassword" className="form-label">
                Rating
              </label>
              <input
                type="number"
                className="form-control"
                id="inputPassword"
                placeholder="Your Rating"
                name="password"
                //   onBlur={handleOnBlur}
              />
            </div>

            <button className="btn btn-prime mb-2 col-12 fw-bold">
              Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
