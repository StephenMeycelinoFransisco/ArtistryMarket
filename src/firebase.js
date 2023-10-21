import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "artisty-marketplace.firebaseapp.com",
  projectId: "artisty-marketplace",
  storageBucket: "artisty-marketplace.appspot.com",
  messagingSenderId: "300685246749",
  appId: "1:300685246749:web:0929f12844398ace71a1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
