import React, { useState } from "react";
import COFFEE_LIST from "../../constant/content";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BrewStyle.css";
import { toast } from "react-toastify";

const BrewCoffee = () => {
  const [cart, setCart] = useState([]);

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

  return (
    <div className="container">
      <h1 className="my-4 text-center">Coffee Menu</h1>
      <div className="row">
        {COFFEE_LIST.map((coffee) => (
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
      <h2 className="my-4 text-center">Cart</h2>
      <ul className="list-group">
        {cart.map((coffee, index) => (
          <li key={index} className="list-group-item">
            {coffee.name} - ${coffee.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrewCoffee;
