import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFirestore, doc, updateDoc, getDoc , collection, addDoc} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";

const GST_RATE = 0.05; // 5% GST
const POINTS_THRESHOLD = 100;
const POINTS_REWARD = 10;

const Checkout = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };
  const db = getFirestore();

  const calculateGST = (price) => price * GST_RATE;
  const calculateTotal = (cart) =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const total = calculateTotal(cart);
  const gst = calculateGST(total);
  const grandTotal = total + gst;

  const handlePlaceOrder = async () => {
    const userRef = doc(db, "users", user.uid);
    const ordersCollection = collection(db, "data");

    try {
      // Fetch latest user data from Firestore
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        throw new Error("User document not found");
      }

      const userData = userSnap.data();
      let updatedPoints = userData.points || 0;

      if (grandTotal > POINTS_THRESHOLD) {
        updatedPoints += POINTS_REWARD;

        // Update points in Firestore
        await updateDoc(userRef, {
          points: updatedPoints,
        });

        toast.success(`${POINTS_REWARD} points added!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      // Store order data in Firestore
      const orderData = {
        userId: user.uid,
        items: cart,
        totalAmount: total,
        gst: gst,
        grandTotal: grandTotal,
        timestamp: new Date().toISOString(),
      };
      await addDoc(ordersCollection, orderData);

      toast.success("Order placed successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redirect to homepage after 4 seconds
      setTimeout(() => {
        navigate("/retrobrew");
      }, 4000);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="ch-container p-3 mx-auto w-75 shadow rounded">
      <ToastContainer />
      <h2 className="my-4 text-center">Checkout</h2>
      {cart.length === 0 ? (
        <p className="mt-5 text-center text-muted font-weight-bold">
          Your cart is empty.
        </p>
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
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mb-2 font-weight-bold text-uppercase">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2 font-weight-bold text-uppercase">
            <span>GST (5%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between font-weight-bold">
            <span>Grand Total</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
          <button
            className="btn btn-coffee btn-block mt-4 font-weight-bold"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
