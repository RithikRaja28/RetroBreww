import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../components/Authentication/Auth"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contact"), formData);
      toast.success("Your message has been sent!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error sending message: " + error.message, {
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
    <div className="container my-5">
      <ToastContainer />
      <p className="text-center mb-5 text-uppercase display-6 text-dark font-weight-bold">Expand your horizons with us !</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card contactcard shadow-sm">
            <div className="card-body contactcardbody">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 contactformgroup">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control contactformcontrol"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3 contactformgroup">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control contactformcontrol"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3 contactformgroup">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control contactformcontrol"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-coffee btn-block mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img
            src="/images/coffee.jpg" // Replace this with your desired image URL
            alt="Contact Us"
            className="img-fluid w-100 h-100 contactimg" 
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
