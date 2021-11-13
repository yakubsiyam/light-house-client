import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const AddNewLamp = () => {
  const refName = useRef();
  const refImage = useRef();
  const refDescription = useRef();
  const refPrice = useRef();
  const refColor = useRef();
  const refBulbWatt = useRef();
  const refSize = useRef();
  const refMaterial = useRef();
  const refNumberOfLight = useRef();
  const refStyle = useRef();
  const refManufacturer = useRef();

  const history = useHistory();

  const handleNewLamp = (e) => {
    const name = refName.current.value;
    const img = refImage.current.value;
    const description = refDescription.current.value;
    const price = parseInt(refPrice.current.value);
    const color = refColor.current.value;
    const bulb_watt = refBulbWatt.current.value;
    const size = refSize.current.value;
    const material = refMaterial.current.value;
    const number_of_lights = refNumberOfLight.current.value;
    const style = refNumberOfLight.current.value;
    const manufacturer = refManufacturer.current.value;

    const newLamp = {
      name,
      img,
      description,
      price,
      color,
      bulb_watt,
      size,
      material,
      number_of_lights,
      style,
      manufacturer,
    };

    axios
      .post("https://fierce-meadow-98744.herokuapp.com/lamps", newLamp)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Lamp Added Successfully");
          history.push("/lamps");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="overflow-hidden">
      <div className="row">
        <DashboardDrawer></DashboardDrawer>
        <div className="col-md-10">
          <form
            onSubmit={handleNewLamp}
            className="row g-3 bg-light shadow p-3 my-5 rounded"
          >
            <h1 className="fw-bold text-center text-prime">Add New Lamp</h1>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Lamp Name"
                required
                ref={refName}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">
                Image(url)
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                placeholder="Lamp Img URL"
                required
                ref={refImage}
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Description"
                ref={refDescription}
                required
              ></textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Lamp Price"
                required
                ref={refPrice}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Lamp Color"
                required
                ref={refColor}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="bulb_watt" className="form-label">
                Bulb Watt
              </label>
              <input
                type="text"
                className="form-control"
                id="bulb_watt"
                placeholder="Bulb Watt"
                required
                ref={refBulbWatt}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="size" className="form-label">
                Lamp Size
              </label>
              <input
                type="text"
                className="form-control"
                id="duration"
                placeholder="Lamp Size/weight"
                required
                ref={refSize}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="material" className="form-label">
                Lamp Material
              </label>
              <input
                type="text"
                className="form-control"
                id="material"
                placeholder="Lamp Material"
                required
                ref={refMaterial}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="number_of_lights" className="form-label">
                Number Of Lights
              </label>
              <input
                type="text"
                className="form-control"
                id="number_of_lights"
                placeholder="Number Of Lights"
                required
                ref={refNumberOfLight}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="style" className="form-label">
                Lamp Style
              </label>
              <input
                type="text"
                className="form-control"
                id="style"
                placeholder="Lamp Style"
                required
                ref={refStyle}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="manufacturer" className="form-label">
                Lamp Manufacturer
              </label>
              <input
                type="text"
                className="form-control"
                id="manufacturer"
                placeholder="Manufacturer"
                required
                ref={refManufacturer}
              />
            </div>

            <button
              type="submit"
              className="btn btn-bg w-50 mx-auto my-3 rounded-pill"
            >
              Add A New Lamp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewLamp;
