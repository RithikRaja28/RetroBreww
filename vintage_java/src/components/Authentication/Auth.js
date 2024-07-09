// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration for the new project
const firebaseConfig = {
  apiKey: "AIzaSyCMpIZoZXyFFVunu2QT_BIiwjQzOG0Q238",
  authDomain: "retrobreww.firebaseapp.com",
  projectId: "retrobreww",
  storageBucket: "retrobreww.appspot.com",
  messagingSenderId: "992371765246",
  appId: "1:992371765246:web:bcc1099030afff3d92daaf",
  measurementId: "G-KHHD78WXM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

// Export Firebase services
export { auth, db };
