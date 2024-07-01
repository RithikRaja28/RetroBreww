import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import { db } from "../Authentication/Auth"; // Adjust path if needed
import { motion } from "framer-motion";
import "./Dashboard.css"; // Adjust CSS path as needed

const Dashboard = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserData(userData);
          setFormValues({
            displayName: userData.displayName,
            email: userData.email,
          });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user) {
      fetchUserData();
    } else {
      navigate("/user-login"); // Redirect to login if no user is logged in
    }
  }, [user, navigate]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        displayName: formValues.displayName,
        email: formValues.email,
      });
      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.", {
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

  const handleCancel = () => {
    setFormValues({
      displayName: userData.displayName,
      email: userData.email,
    });
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  if (!userData) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner-container">
        <img
          src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-shop-clipart-images-34.png"
          alt="Loading..."
          className="spinner"
        />
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <ToastContainer />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="dashboard-card">
                <Card.Body>
                  <Row className="mb-4">
                    <Col>
                      <motion.h1
                        className="text-center"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        Welcome, {userData.displayName}!
                      </motion.h1>
                    </Col>
                  </Row>

                  {!editMode ? (
                    <>
                      <ListGroup className="mb-4">
                        <ListGroup.Item className="dashboard-list-item">
                          <strong>Email:</strong> {userData.email}
                        </ListGroup.Item>
                        <ListGroup.Item className="dashboard-list-item">
                          <strong>Points:</strong> {userData.points || 0}{" "}
                          {/* Ensure points display correctly */}
                        </ListGroup.Item>
                      </ListGroup>

                      <div className="text-center">
                        <motion.button
                          className="btn"
                          style={{ backgroundColor: "#d2a679" }}
                          onClick={handleEdit}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          Edit Profile
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <Form>
                      <Form.Group controlId="formDisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <motion.input
                          type="text"
                          className="form-control"
                          placeholder="Enter display name"
                          name="displayName"
                          value={formValues.displayName}
                          onChange={handleChange}
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        />
                      </Form.Group>

                      <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <motion.input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </Form.Group>

                      <div className="text-center">
                        <motion.button
                          style={{ backgroundColor: "#d2a679" }}
                          onClick={handleSave}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          Save
                        </motion.button>
                        <motion.button
                          variant="secondary"
                          onClick={handleCancel}
                          className="ms-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="mt-4 dashboard-widget">
                <Card.Body>
                  <h2 className="text-center">Your Recent Activity</h2>
                  <ul className="activity-list">
                    <li className="activity-item">
                      <strong>12 June 2024:</strong> Uploaded new content
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
