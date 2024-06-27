import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import "./Dashboard.css"; // Custom CSS for additional styling
import { db } from "../Authentication/Auth"; // Ensure correct path to auth and db

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
          setUserData(docSnap.data());
          setFormValues({
            displayName: docSnap.data().displayName,
            email: docSnap.data().email,
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
            <Card className="dashboard-card">
              <Card.Body>
                <Row className="mb-4">
                  <Col>
                    <h1 className="text-center">
                      Welcome, {userData.displayName}!
                    </h1>
                  </Col>
                </Row>

                {!editMode ? (
                  <>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="dashboard-list-item">
                        <strong>Email:</strong> {userData.email}
                      </ListGroup.Item>
                      <ListGroup.Item className="dashboard-list-item">
                        <strong>Points:</strong> {userData.points}
                      </ListGroup.Item>
                    </ListGroup>

                    <div className="text-center">
                      <Button
                        className="btn"
                        style={{ backgroundColor: "#d2a679" }}
                        onClick={handleEdit}
                      >
                        Edit Profile
                      </Button>
                    </div>
                  </>
                ) : (
                  <Form>
                    <Form.Group controlId="formDisplayName">
                      <Form.Label>Display Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter display name"
                        name="displayName"
                        value={formValues.displayName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        style={{ backgroundColor: "#d2a679" }}
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={handleCancel}
                        className="ms-2"
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>

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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
