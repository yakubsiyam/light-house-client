import React, { useEffect, useState } from "react";
import Lamp from "../Lamp/Lamp";

const Lamps = () => {
  const [lamps, setLamps] = useState([]);

  useEffect(() => {
    fetch("https://fierce-meadow-98744.herokuapp.com/lamps")
      .then((res) => res.json())
      .then((data) => setLamps(data));
  }, []);

  return (
    <div className="container mb-5">
      <h1 className="text-center fw-bold text-shadow mt-3 text-prime">
        All Lamps
      </h1>
      <div className="row justify-content-between g-4">
        {lamps.map((lamp) => (
          <Lamp key={lamp._id} lamp={lamp}></Lamp>
        ))}
      </div>
    </div>
  );
};

export default Lamps;
