import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
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
      </div>
    </div>
  );
};

export default ContactForm;
