import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "artistry-1403e.firebaseapp.com",
  projectId: "artistry-1403e",
  storageBucket: "artistry-1403e.appspot.com",
  messagingSenderId: "169578972472",
  appId: "1:169578972472:web:9c87c09129b83cd1aaadcd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
