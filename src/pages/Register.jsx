import React from "react";
import logo from "../Assets/logos/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="app__login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="login__logo text-center mt-5">
              <Link to="/">
                <img src={logo} className="img-fluid w-25" alt="" />
              </Link>
            </div>
            <div className="register__form">
              <form>
                <h2 className="mb-4">Register as a Volunteer</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Eamil Address"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                  />
                </div>

                <div className="form-group">
                  <select name="" className="form-control">
                    <option disabled selected>
                      {" "}
                      Select Any Event{" "}
                    </option>
                  </select>
                </div>
                <button className="btn btn-primary btn-block">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
