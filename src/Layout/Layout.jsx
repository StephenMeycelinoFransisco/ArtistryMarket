import React from "react";
import Routes from "../routes/Router";
import Header from "../components/Template/Header";
import Footer from "../components/Template/Footer";
import { CartProvider } from "../context/CartContext";

export default function Layout() {
  return (
    <>
      <CartProvider>
        <Header />
      </CartProvider>
      <main>
        <Routes />
      </main>
      <footer className="bg-black-secondary">
        <div className="max-w-[17.5rem] mx-auto lg:max-w-4xl xl:max-w-6xl">
          <Footer />
        </div>
      </footer>
    </>
  );
}
