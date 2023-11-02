import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import DetailArtist from "../pages/Artist/DetailArtist";
import Artist from "../pages/Artist";
import DetailDesign from "../pages/DetailDesign";
import Marketplace from "../pages/Marketplace";
import TopCreator from "../pages/TopCreator";
import ChatOpenAI from "../pages/Chat";
import Checkout from "../pages/Checkout";
import { CartProvider } from "../context/CartContext";

export default function Router() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <CartProvider >
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/artist/:id"
        element={
          <RequireAuth>
            <Artist />
          </RequireAuth>
        }
      />
      <Route
        path="/artist/setting/:id"
        element={
          <RequireAuth>
            <DetailArtist />
          </RequireAuth>
        }
      />
      <Route
        path="/artist/design-detail/:id"
        element={
          <RequireAuth>
            <DetailDesign />
          </RequireAuth>
        }
      />
      <Route
        path="/marketplace"
        element={
          <RequireAuth>
            <Marketplace />
          </RequireAuth>
        }
      />
      <Route
        path="/ranking"
        element={
          <RequireAuth>
            <TopCreator />
          </RequireAuth>
        }
      />
      <Route
        path="/ai"
        element={
          <RequireAuth>
            <ChatOpenAI />
          </RequireAuth>
        }
      />
      <Route
        path="/checkout/:id"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </CartProvider>
  );
}
