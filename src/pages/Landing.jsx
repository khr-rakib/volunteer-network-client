import React from "react";
import Navbar from "../components/Navbar/Navbar";
import refuseShelter from "../Assets/images/refuseShelter.png";
import { Link } from "react-router-dom";

const Landing = () => {
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
            <div className="col-md-3">
              <Link to="/akdjf">
                <div className="event__box">
                  <img src={refuseShelter} className="img-fluid" alt="" />
                  <h4>Child Support</h4>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="event__box">
                <img src={refuseShelter} className="img-fluid" alt="" />
                <h4>Child Support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
