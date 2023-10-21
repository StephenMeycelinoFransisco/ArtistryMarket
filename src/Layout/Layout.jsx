import React from 'react';
import Header from '../components/Fragments/Header/Header';
import Footer from '../components/Fragments/Footer/Footer';
import Routes from '../routes/Router';

export default function Layout() {
  return (
    <>
      <Header />
      <section className="grid">
        <div className="grid">
          <Routes />
        </div>
        <div className="bg-black-secondary">
          <div className="max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
