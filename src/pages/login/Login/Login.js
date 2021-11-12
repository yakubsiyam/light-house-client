import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(location, history);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div className="container mt-3">
      <div className="col-md-6 mx-auto shadow box radius p-3 p-md-5">
        <h3 className="text-prime text-center fw-bold text-shadow">Login</h3>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your email"
              name="email"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="my-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Your password"
              name="password"
              onBlur={handleOnBlur}
            />
          </div>
          <button className="btn btn-prime mb-2 col-12">
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
          <p className="my-3">
            new to light house?{" "}
            <Link className="text-decoration-none text-color" to="/register">
              Create Account
            </Link>
          </p>
          <p className="text-secondary text-center">or</p>
          <button
            className="btn btn-google d-block mx-auto shadow-lg border-2"
            onClick={handleGoogleLogin}
          >
            <i className=" fab fa-google"></i> Login with Google
          </button>

          {/* spinner */}
          {isLoading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* user login success */}
          {user?.email && (
            <div
              className="alert alert-success alert-dismissible fade show my-3"
              role="alert"
            >
              Login Successfully
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}

          {/* error show */}
          {authError && (
            <div
              className="alert alert-danger alert-dismissible fade show my-3"
              role="alert"
            >
              {authError}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
