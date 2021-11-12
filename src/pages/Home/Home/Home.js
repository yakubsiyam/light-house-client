import React from "react";
import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeLamps from "../HomeLamps/HomeLamps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeLamps></HomeLamps>
      <HomeAbout></HomeAbout>
    </div>
  );
};

export default Home;
