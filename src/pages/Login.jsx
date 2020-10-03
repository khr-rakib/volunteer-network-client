import React from "react";
import logo from "../Assets/logos/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
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
              <form>
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
