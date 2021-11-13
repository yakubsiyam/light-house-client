import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

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
    <div>
      <h1>{reviews.length}</h1>
    </div>
  );
};

export default HomeReviews;
