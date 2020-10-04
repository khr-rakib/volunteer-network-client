import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import bgColors from "../bgColors";
import { toast } from "react-toastify";

const Landing = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetch("https://infinite-temple-84022.herokuapp.com/getAllEvents")
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data);
      })
      .catch((err) => toast.error("Data can not load successfully !!!"));
  }, []);

  return (
    <>
      <div className="app__landing">
        <div className="container">
          <Navbar />

          <div className="row">
            <div className="col-md-12 d-flex justify-content-center flex-column align-items-center mt-5">
              <div className="w-50">
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app__events">
        <div className="container pb-5">
          <div className="row pb-5">
            {allEvents.map((singleEvent, index) => (
              <div key={singleEvent._id} className="col-md-3">
                <Link to={`/register/${singleEvent._id}`}>
                  <div
                    className="event__box"
                    style={{
                      backgroundColor: bgColors[Math.round(Math.random() * 4)],
                    }}
                  >
                    <img
                      src={singleEvent.bannerURL}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>{singleEvent.name}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
