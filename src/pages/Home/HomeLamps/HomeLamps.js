import React, { useEffect, useState } from "react";
import HomeLamp from "../HomeLamp/HomeLamp";

const HomeLamps = () => {
  const [lamps, setLamps] = useState([]);

  useEffect(() => {
    fetch("https://fierce-meadow-98744.herokuapp.com/lamps")
      .then((res) => res.json())
      .then((data) => setLamps(data));
  }, []);

  const topSales = lamps.slice(0, 6);

  return (
    <div className="container">
      <h1 className="text-center text-prime fw-bold text-shadow">
        Featured Lamps
      </h1>
      <div className="row justify-content-between g-4">
        {topSales.map((lamp) => (
          <HomeLamp key={lamp._id} lamp={lamp}></HomeLamp>
        ))}
      </div>
    </div>
  );
};

export default HomeLamps;
