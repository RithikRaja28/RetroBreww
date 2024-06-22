// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCx1Hv2bfz0dRgoYwqoFG0-scQ0pvi_gu8",
  authDomain: "vintage-java.firebaseapp.com",
  projectId: "vintage-java",
  storageBucket: "vintage-java.appspot.com",
  messagingSenderId: "202794637575",
  appId: "1:202794637575:web:3d7f034e44e3f98f0b0da2",
  measurementId: "G-V1Q5EL66JG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Firestore
