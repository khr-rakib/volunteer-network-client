import React from "react";
import Navbar from "../components/Navbar/Navbar";
import extraVolunteer from "../Assets/images/extraVolunteer.png";

const EventTasks = () => {
  return (
    <div className="event__tasks">
      <div className="container">
        <Navbar />
        <div className="row mt-5 pt-5">
          <div className="col-md-6">
            <div className="event__tasks__Box">
              <div style={{ marginRight: "20px" }}>
                <img src={extraVolunteer} className="img-fluid" alt="" />
              </div>
              <div style={{ width: "100%" }}>
                <h4>Humanity More</h4>
                <p>29 sep, 2020</p>
                <button>Cancel</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="event__tasks__Box">
              <div style={{ marginRight: "20px" }}>
                <img src={extraVolunteer} className="img-fluid" alt="" />
              </div>
              <div style={{ width: "100%" }}>
                <h4>Humanity More</h4>
                <p>29 sep, 2020</p>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTasks;
