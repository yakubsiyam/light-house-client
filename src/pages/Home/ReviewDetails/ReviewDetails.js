import React from "react";

const ReviewDetails = (props) => {
  const { id, userName, review, rating } = props.review;
  const reviewRating = parseInt(rating);
  let active = "";
  if (id === 0) {
    active = "active";
  }

  return (
    <div
      className={`carousel-item dashboard-bg rounded-3 shadow ${active}`}
      style={{ minHeight: "300px" }}
      data-bs-interval="2000"
    >
      <div className="text-center pt-5">
        {[...Array(reviewRating)].map((e, i) => (
          <i key={i} className="fas fa-star" style={{ color: "#ffe234" }}></i>
        ))}
      </div>
      <div className="mx-4">
        <p className="text-center text-light">{review}</p>
      </div>
      <div className="text-center">
        <h2 className="fw-bold text-white">{userName}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default ReviewDetails;
