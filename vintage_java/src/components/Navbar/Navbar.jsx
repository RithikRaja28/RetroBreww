import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Auth"; // Ensure this path is correct
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          {["/retrobrew", "/brewcoffeee", "/contact"].map((path, index) => (
            <motion.li
              key={index}
              className="nav-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link className="nav-link" to={path}>
                {path === "/retrobrew"
                  ? "Home"
                  : path === "/brewcoffeee"
                  ? "Brew"
                  : "Contact Us"}
              </Link>
            </motion.li>
          ))}
        </ul>
        {user && !isAuthPage && (
          <div className="navbar-text d-flex align-items-center ml-2 m-1">
            <div className="btn-group dropup">
              <motion.button
                type="button"
                className="btn btn-outline rounded-pill dropdown-toggle d-flex align-items-center m-1 rounded shadow-sm"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  fontWeight: "normal",
                  borderRadius: "0.25rem",
                  backgroundColor: "#d2a679",
                  borderColor: "#d2a679",
                  color: "#fff",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {user.displayName}
                <img
                  src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png"
                  alt="avatar"
                  className="avatar ms-2 rounded-circle shadow-sm"
                />
              </motion.button>
              <AnimatePresence>
                <motion.div
                  className="dropdown-menu dropdown-menu-right m-1 p-1 bg-light rounded shadow"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    className="dropdown-item m-1"
                    to="/retrobrew-user-dashboard"
                  >
                    Dashboard
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item m-1" onClick={handleLogout}>
                    Logout
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
      {!user && !isAuthPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="btn btn-outline-success" to="/user-login">
            Login
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
