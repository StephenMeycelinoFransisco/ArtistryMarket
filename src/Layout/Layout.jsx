import React from "react";
import Routes from "../routes/Router";
import Header from "../components/Elements/Header/Header";
import Footer from "../components/Elements/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="grid">
        <Routes />
      </div>
      <div className="grid max-w-[17.5rem] mx-auto lg:max-w-4xl xl:max-w-6xl">
        <Footer />
      </div>
    </>
  );
}
