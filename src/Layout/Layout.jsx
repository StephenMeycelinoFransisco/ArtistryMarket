import React from "react";
import Routes from "../routes/Router";
import Header from "../components/Template/Header";
import Footer from "../components/Template/Footer";

export default function Layout() {
  return (
    <>
      <Header />
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
