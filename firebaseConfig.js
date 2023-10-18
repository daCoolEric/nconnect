// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import "dotenv/config";
const API_KEY = process.env.API_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "nconnect-b9c97.firebaseapp.com",
  projectId: "nconnect-b9c97",
  storageBucket: "nconnect-b9c97.appspot.com",
  messagingSenderId: "207231046975",
  appId: "1:207231046975:web:71ef66213b04461613ef8a",
  measurementId: "G-0ZEY0Q7FPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
