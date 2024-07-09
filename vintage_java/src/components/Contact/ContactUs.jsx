import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../components/Authentication/Auth"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import "./ContactForm.css";
import Footer from "../Footer/Footer";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import React Icons
import { Link } from "react-router-dom"; // Import Link component for navigation

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
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container my-5"
      >
        <ToastContainer />
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-5 text-uppercase display-6 text-dark font-weight-bold"
        >
          Expand your horizons with us!
        </motion.p>
        <div className="row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-md-6"
          >
            <div className="card contactcard shadow-sm">
              <div className="card-body contactcardbody">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3 contactformgroup">
                    <label htmlFor="name">Name</label>
                    <motion.input
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
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
                    <motion.input
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
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
                    <motion.textarea
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="form-control contactformcontrol"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></motion.textarea>
                    <label htmlFor="message" className="mt-3">
                      Follow us:
                    </label>
                    <div className="d-flex justify-content-center mb-3">
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/rithik-raja-s/"
                        className="m-2"
                      >
                        <FaLinkedin size={24} />
                      </Link>
                      <Link
                        target="_blank"
                        to="https://github.com/RithikRaja28"
                        className="m-2"
                      >
                        <FaGithub size={24} className="text-dark" />
                      </Link>
                    </div>
                  </div>
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    type="submit"
                    className="btn btn-coffee btn-block mt-3"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-md-6 d-flex align-items-center"
          >
            <img
              src="/images/coffee.jpg" // Replace this with your desired image URL
              alt="Contact Us"
              className="img-fluid w-100 h-100 contactimg"
            />
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactForm;

