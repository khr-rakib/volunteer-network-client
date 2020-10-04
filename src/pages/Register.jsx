import React, { useContext, useEffect, useState } from "react";
import logo from "../Assets/logos/logo.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { userContext } from "../App";
import { toast } from "react-toastify";

const Register = () => {
  const { _id } = useParams();
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [singleEvent, setSingleEvent] = useState();

  const { name, bannerURL } = singleEvent ? singleEvent[0] : [];

  useEffect(() => {
    fetch("http://localhost:5000/singleEvent/" + _id)
      .then((res) => res.json())
      .then((singleData) => setSingleEvent(singleData))
      .catch((err) => toast.error("Something went wrong !!!"));
  }, []);

  const [registerUser, setRegisterUser] = useState({
    name: loggedInUser.displayName,
    email: loggedInUser.email,
    date: "",
    description: "",
    selectedEvent: "",
  });

  const handleInputChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
  };

  registerUser.banner = bannerURL;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/registerVolunteer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerUser),
    })
      .then((res) => res.json())
      .then((data) => {
        history.replace("/eventTasks");
        toast.success("Registration completed !!!");
      })
      .catch((err) => toast.error("Something went wrong !!!"));
  };

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
              <form onSubmit={handleRegisterSubmit}>
                <h2 className="mb-4">Register as a Volunteer</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={loggedInUser.displayName}
                    name="name"
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Eamil Address"
                    name="email"
                    onChange={handleInputChange}
                    value={loggedInUser.email}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date"
                    name="date"
                    value={registerUser.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={registerUser.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Selected Event"
                    name="selectedEvent"
                    value={name}
                    autoFocus
                    onBlur={handleInputChange}
                  />
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
