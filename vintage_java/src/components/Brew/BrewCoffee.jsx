import React, { useState } from "react";
import COFFEE_LIST from "../../constant/content";

const BrewCoffee = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
  };

  return (
    <div>
      <h1>Coffee Menu</h1>
      <ul>
        {COFFEE_LIST.map((coffee) => (
          <li key={coffee.id}>
            <h2>{coffee.name}</h2>
            <img
              src={coffee.imageUrl}
              alt={coffee.name}
              style={{ width: "100px", height: "100px" }}
            />
            <p>Price: ${coffee.price.toFixed(2)}</p>
            <button onClick={() => addToCart(coffee)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((coffee, index) => (
          <li key={index}>
            {coffee.name} - ${coffee.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrewCoffee;
