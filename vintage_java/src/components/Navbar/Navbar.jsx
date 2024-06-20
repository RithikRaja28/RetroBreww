import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Auth"; // Ensure this path is correct

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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
            <Link className="nav-link active" to="/retrobrew">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Brew
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-text d-flex align-items-center">
          {user.displayName}
          <img
            src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png"
            alt="avatar"
            className="avatar m-2"
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
          />
          <button
            className="btn btn-outline-secondary ml-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link className="btn btn-outline-primary" to="/user-login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
