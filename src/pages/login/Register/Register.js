import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(location, history);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      location,
      history
    );
    e.preventDefault();
  };

  return (
    <div className="container mt-3">
      <div className="col-md-6 mx-auto shadow box radius p-3 p-md-5">
        <h3 className="text-prime text-center fw-bold text-shadow">Register</h3>
        <form onSubmit={handleRegisterSubmit}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name"
              name="name"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
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
          <div className="my-3">
            <label htmlFor="inputPassword1" className="form-label">
              Retype Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Your retype password"
              name="password2"
              onBlur={handleOnBlur}
            />
          </div>
          <button className="btn btn-prime mb-2 col-12">
            <i className="fas fa-sign-in-alt"></i> Register
          </button>
          <p className="my-3">
            Already Registered?{" "}
            <Link className="text-decoration-none text-color" to="/login">
              Login
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
              Registered Successfully
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

export default Register;
