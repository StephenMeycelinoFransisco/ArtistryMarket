import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "artistry-marketplace.firebaseapp.com",
  projectId: "artistry-marketplace",
  storageBucket: "artistry-marketplace.appspot.com",
  messagingSenderId: "374040788225",
  appId: "1:374040788225:web:cb7ad1119521cd8e632f00"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
