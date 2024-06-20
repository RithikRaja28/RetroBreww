import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Auth"; // Ensure this path is correct
import "./navbar.css"; // Custom CSS for Navbar styling

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const isAuthPage =
    location.pathname === "/user-login" || location.pathname === "/user-signup";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand m-1"
        style={{ fontFamily: "fancy", fontSize: "25px", fontWeight: "bold" }}
        to="/retrobrew"
      >
        <img
          src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-shop-clipart-images-34.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Brand Logo"
        />
        <span style={{ color: "#A0522D" }}>R</span>etro
        <span style={{ color: "#A0522D" }}>B</span>rew
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/retrobrew">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Brew
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      {user && !isAuthPage && (
        <div className="navbar-text d-flex align-items-center ml-2 m-1">
          <div className="btn-group dropup">
            <button
              type="button"
              className="btn btn-outline rounded-pill dropdown-toggle d-flex align-items-center m-1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {user.displayName}
              <img
                src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png"
                alt="avatar"
                className="avatar ms-2"
              />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item m-1" to="/dashboard">
                Dashboard
              </Link>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item m-1" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      {!user && !isAuthPage && (
        <div>
          <Link className="btn btn-outline-success" to="/user-login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
