import React, { useEffect, useState } from "react";
import Lamp from "../Lamp/Lamp";

const Lamps = () => {
  const [lamps, setLamps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/lamps")
      .then((res) => res.json())
      .then((data) => setLamps(data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-between g-4">
        {lamps.map((lamp) => (
          <Lamp key={lamp.id} lamp={lamp}></Lamp>
        ))}
      </div>
    </div>
  );
};

export default Lamps;
