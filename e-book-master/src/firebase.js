import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuBEctrJz5BmMbOmIbYHa9bXjr-lWPV4A",
  authDomain: "react-e-book-hub.firebaseapp.com",
  projectId: "react-e-book-hub",
  storageBucket: "react-e-book-hub.appspot.com",
  messagingSenderId: "956624398826",
  appId: "1:956624398826:web:8bbd61c102d018aa46aa93",
  measurementId: "G-7M09ETTTNN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
