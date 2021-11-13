import React, { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);

  //   const { user } = useAuth();
  //   console.log(user);
  useEffect(() => {
    fetch("https://fierce-meadow-98744.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="fw-bold text-shadow text-center text-prime">
        What Our Client Says
      </h1>
      <div
        id="carouselExampleIndicators"
        className="my-3 py-3 col-md-8 mx-auto carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {reviews.map((review) => (
            <ReviewDetails key={review._id} review={review}></ReviewDetails>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeReviews;
