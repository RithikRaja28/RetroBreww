import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";

const GST_RATE = 0.05; // 5% GST

const Checkout = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  const calculateGST = (price) => price * GST_RATE;
  const calculateTotal = (cart) =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const total = calculateTotal(cart);
  const gst = calculateGST(total);
  const grandTotal = total + gst;

  return (
    <div className="ch-container p-3 mx-auto w-75 shadow rounded">
      <h2 className="my-4 text-center">Checkout</h2>
      {cart.length === 0 ? (
        <p className="mt-5 text-center text-muted font-weight-bold">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4 mt-3 p-1 rounded shadow bg-white">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center text-capitalize"
              >
                <span>{item.name}</span>
                <span className="badge badge-primary badge-pill mr-3 p-2 font-weight-bold text-capitalize">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mb-2 font-weight-bold text-uppercase">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2 font-weight-bold text-uppercase">
            <span>GST (5%)</span>
            <span>${gst.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between font-weight-bold">
            <span>Grand Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
          <button className="btn btn-coffee btn-block mt-4 font-weight-bold">Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
