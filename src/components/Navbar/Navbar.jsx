import React, { useContext } from "react";
import firebase from "firebase";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Assets/logos/logo.png";
import { userContext } from "../../App";
import { toast } from "react-toastify";

const Navbar = () => {
  const [loggedInUser, setLoggInUser] = useContext(userContext);
  const history = useHistory();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggInUser({
          email: "",
          displayName: "",
        });
        history.replace("/");
        toast.success("Successfully Logged Out !!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="row py-4">
      <div className="col-md-2">
        <Link to="/">
          <img src={logo} className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="col-md-10 d-flex align-items-center justify-content-end">
        <div className="app__menu">
          <Link to="/">Home</Link>
          <Link to="#">Donation</Link>
          {loggedInUser.email && <Link to="/eventTasks">Events</Link>}

          <Link to="#">Blog</Link>
          <Link to="/admin" className="app__adminBtn">
            Admin
          </Link>
          {loggedInUser.email && (
            <button onClick={handleLogout} to="#" className="app__registerBtn">
              {loggedInUser.displayName} Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
