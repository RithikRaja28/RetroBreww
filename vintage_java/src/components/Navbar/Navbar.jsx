import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        
      >
        <a class="m-1" href="/retrobrew">
          <img
            src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-shop-clipart-images-34.png"
            width="30"
            height="30"
            alt="Brand Logo"
          />
        </a>
        <a
          class="navbar-brand m-1 mt-2"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            textDecoration: "none",
            fontStyle: "italic",
            fontFamily: "serif",
          }}
          href="#"
        >
          <span style={{ color: "#A0522D" }}>R</span>etro
          <span style={{ color: "#A0522D" }}>B</span>rew
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center">
            <li class="nav-item">
              <Link class="nav-link active" to="/retrobrew">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Brew
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
