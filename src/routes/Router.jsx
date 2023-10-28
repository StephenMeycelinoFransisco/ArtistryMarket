import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../Pages/Login";
import MarketPlace from "../Pages/Marketplace";
import Rankings from "../Pages/Rankings";
import AddProduct from "../pages/AddProduct";
import Register from "../pages/Register";
import NftDetails from "../pages/NftDetails";
import Artistpage from "../pages/Artistpage";
import Homepage from "../pages/Homepage";

export default function Router() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Homepage />
          </RequireAuth>
        }
      />
      <Route
        path="/artist/:id"
        element={
          <RequireAuth>
            <Artistpage />
          </RequireAuth>
        }
      />
      <Route
        path="artist/:id/add"
        element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        }
      />
      <Route
        path="marketplace"
        element={
          <RequireAuth>
            <MarketPlace />
          </RequireAuth>
        }
      />
      <Route
        path="rankings"
        element={
          <RequireAuth>
            <Rankings />
          </RequireAuth>
        }
      />
      <Route
        path="nft/:id/:name"
        element={
          <RequireAuth>
            <NftDetails />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
