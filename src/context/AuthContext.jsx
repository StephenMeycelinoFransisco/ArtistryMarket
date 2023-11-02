import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { auth } from "../config/firebase.config";

// Inisialisasi state awal
const INITIAL_STATE = {
  currentUser: null,
  loading: true,
};

// Membuat konteks Autentikasi
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  // Menggunakan useReducer untuk mengelola state
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Mengeksekusi efek ketika status otentikasi berubah
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    // Unsubscribe dari efek sebelumnya saat komponen unmount
    return () => unsubscribe();
  }, []);

  // Menyimpan data pengguna ke localStorage ketika currentUser berubah
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  // Fungsi untuk mendaftarkan pengguna
  const registerUser = (user) => {
    dispatch({ type: "REGISTER", payload: user });
  };

  // Fungsi untuk logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Tampilan spinner untuk loading
  const loadingSpinner = (
    <div className="flex justify-center items-center h-screen">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <p>Loading...</p>
    </div>
  );

  return (
    <AuthContext.Provider
      value={{ currentUser: state.currentUser, dispatch, registerUser, logout }}
    >
      {/* Tampilkan loading spinner jika masih loading, jika tidak, tampilkan children */}
      {state.loading ? loadingSpinner : children}
    </AuthContext.Provider>
  );
};
