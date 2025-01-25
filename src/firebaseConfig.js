// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBLSoNKbnqN7X1U5RjnFr6rjC1VuphT-E",
  authDomain: "my-portfolio-e7158.firebaseapp.com",
  projectId: "my-portfolio-e7158",
  storageBucket: "my-portfolio-e7158.firebasestorage.app",
  messagingSenderId: "935909238465",
  appId: "1:935909238465:web:f8830a3fbfd77752cbd640",
  measurementId: "G-MJYK67XM48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
export const db = getFirestore(app); // Export Firestore instance
const analytics = getAnalytics(app);
