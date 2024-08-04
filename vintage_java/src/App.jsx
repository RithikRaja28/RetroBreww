import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPAge/LandingPage";
import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./components/Authentication/Auth";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BrewCoffee from "./components/Brew/BrewCoffee";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./components/Contact/ContactUs";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/User Dashboard/Dashboard";
import DailySalesReport from "./components/utils/DisplaySales";
import SalesReport from "./components/SalesReport/SalesReport";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./components/Authentication/Auth";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("User state changed: ", currentUser);
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        try {
          console.log("Current User UID:", currentUser.uid);

          // Create a reference to the role document
          const roleDocRef = doc(db, "roles", currentUser.uid);
          console.log("Role Document Path:", roleDocRef.path);

          // Fetch the role document
          const userRoleDoc = await getDoc(roleDocRef);
          console.log("User role document data:", userRoleDoc.data());

          if (userRoleDoc.exists()) {
            const data = userRoleDoc.data();
            console.log("Document exists and data:", data);

            // Set isAdmin based on the fetched role document
            setIsAdmin(data.isAdmin === true);
          } else {
            console.log("No such document!");
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Error checking admin status:", error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <img
          src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-shop-clipart-images-34.png"
          alt="Loading..."
          className="spinner"
        />
      </div>
    ); // Show a loading indicator while checking auth status
  }

  return (
    <>
      <ToastContainer />
      <Navbar user={user} isAdmin={isAdmin}/>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/retrobrew" /> : <Login />}
        />
        <Route
          path="/user-login"
          element={user ? <Navigate to="/retrobrew" /> : <Login />}
        />
        <Route
          path="/user-signup"
          element={user ? <Navigate to="/retrobrew" /> : <Signup />}
        />
        <Route
          path="/retrobrew"
          element={user ? <LandingPage /> : <Navigate to="/" />}
        />
        <Route
          path="/brewcoffeee"
          element={user ? <BrewCoffee /> : <Navigate to="/" />}
        />
        <Route
          path="/contact"
          element={user ? <ContactUs /> : <Navigate to="/" />}
        />
        <Route
          path="/retrobrew-checkout"
          element={user ? <Checkout user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/retrobrew-user-dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
        {isAdmin && (
          <Route
            path="/report"
            element={<SalesReport user={user} />} // Admin route
          />
        )}
       
      </Routes>
    </>
  );
};

export default App;
