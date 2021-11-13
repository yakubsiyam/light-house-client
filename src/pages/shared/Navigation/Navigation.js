import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand text-color fw-bold" to="/home">
          <img
            className="img-fluid me-2 pb-1"
            width="40px"
            src={logo}
            alt="Logo here"
          />{" "}
          <span className="text-prime text-shadow">light house</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item my-auto">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item my-auto">
              <Link className="nav-link" to="/lamps">
                Lamps
              </Link>
            </li>

            {user?.email && (
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

            {user?.email && (
              <li className="nav-item my-auto">
                <span className="nav-link  text-dark">
                  Hi, {user.displayName}
                </span>
              </li>
            )}

            {user?.email ? (
              <li className="nav-item my-auto" onClick={logout}>
                <Link className="nav-link" to="/home">
                  <span className="btn btn-border-main">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </span>
                </Link>
              </li>
            ) : (
              <li className="nav-item my-auto">
                <Link className="nav-link my-auto" to="/login">
                  <span className="btn btn-border-main">
                    Login <i className="fas fa-sign-in-alt"></i>
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
