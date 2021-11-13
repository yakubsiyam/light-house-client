import React from "react";
import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeLamps from "../HomeLamps/HomeLamps";
import HomeReviews from "../HomeReviews/HomeReviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeLamps></HomeLamps>
      <HomeReviews></HomeReviews>
      <HomeAbout></HomeAbout>
    </div>
  );
};

export default Home;
