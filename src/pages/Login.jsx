import React, { useContext } from "react";
import firebase from "firebase";
import logo from "../Assets/logos/logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import auth from "../firebase.config";
import { userContext } from "../App";
import { toast } from "react-toastify";

const Login = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        const { email, displayName } = result.user;
        setLoggedInUser({ email: email, displayName: displayName });
        history.replace(from);
        toast.success("You have successfully logged In !!!");
      })
      .catch((err) => toast.error(err.message));
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
            <div className="login__form">
              <form onSubmit={handleGoogleLogin}>
                <h2>Login With</h2>
                <button>
                  <img
                    src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"
                    alt=""
                  />
                  Contine With Google
                </button>
                <p>
                  Don't have an account? <a href="#">Create an account.</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
