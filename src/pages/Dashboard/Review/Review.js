import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const Review = () => {
  const { user } = useAuth();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://fierce-meadow-98744.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const refReview = useRef();
  const refRating = useRef();

  const history = useHistory();

  const handleReview = (e) => {
    const userName = user.displayName;
    const review = refReview.current.value;
    const rating = refRating.current.value;

    const reviews = {
      userName,
      review,
      rating,
    };

    axios
      .post("https://fierce-meadow-98744.herokuapp.com/reviews", reviews)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review Added Successfully");
          history.push("/home");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden">
      <div className="row">
        <DashboardDrawer></DashboardDrawer>
        <div className="col-md-5 mx-auto my-5 p-5 shadow box radius">
          <h2 className="text-center fw-bold text-shadow">Review</h2>
          <form onSubmit={handleReview}>
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
              />
            </div>
            <div className="my-3">
              <label htmlFor="exampleFormControlTextarea1" class="form-label">
                Review
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Review"
                ref={refReview}
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
                min="1"
                max="5"
                ref={refRating}
                required
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
