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
import Navbar from "./components/Navbar/Navbar"; // Ensure this path is correct
import { auth } from "./components/Authentication/Auth"; // Ensure this path is correct
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User state changed: ", currentUser); // Add logging to debug
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  return (
    <>
      <Navbar user={user} />
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
      </Routes>
    </>
  );
};

export default App;
