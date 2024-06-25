import React, { useState } from "react";
import COFFEE_LIST from "../../constant/content";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./BrewStyle.css";
import { Navigate } from "react-router";

const BrewCoffee = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
    toast.success(`${coffee.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const filteredCoffees = COFFEE_LIST.filter((coffee) =>
    coffee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <ToastContainer />
      <div className="d-flex justify-content-between align-items-center my-3">
        <p className="h6">Coffee Menu</p>
        <div className="d-flex">
          <div className="input-group mr-2">
            <input
              type="text"
              className="form-control rounded-pill border-1 shadow-sm py-2 px-4"
              placeholder="Search Coffee"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append rounded-pill border-0 py-2 px-4 bg-white">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div>
            <button
              className="btn btn-secondary position-relative rounded-pill border-0 py-2 px-4"
              type="button"
              data-toggle="modal"
              data-target="#cartModal"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              {cart.length > 0 && (
                <span className="badge badge-dark position-absolute top-0 start-100 translate-middle rounded-pill text-dark mt-1 ms-1">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredCoffees.map((coffee) => (
          <div key={coffee.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={coffee.imageUrl}
                alt={coffee.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body cardbody">
                <h5 className="card-title cardtitle">{coffee.name}</h5>
                <p className="card-text cardtext">
                  Price: ${coffee.price.toFixed(2)}
                </p>
                <button
                  className="btn btn-coffee"
                  onClick={() => addToCart(coffee)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className="list-group">
                  {cart.map((coffee, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {coffee.name}
                      <span className="badge badge-primary badge-pill">
                        ${coffee.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-coffee" >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrewCoffee;
