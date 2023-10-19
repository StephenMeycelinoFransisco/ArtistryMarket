import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../Common/Button/Button";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const routes = [
    { path: "/market", label: "Marketplace" },
    { path: "/ranking", label: "Rankings" },
    { path: "/wallet", label: "Connect to wallet" },
  ];

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-[1.875rem] py-[0.938rem] md:px-[3.125rem] bg-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between font-poppins">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/home"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <div className="flex gap-5 items-center">
                <AiOutlineShop size={24} color="#A259FF" />
                <h1 className="text-2xl">Artisty</h1>
              </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <FaTimes /> : <FaBarsStaggered />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center font-workSans gap-3">
              {routes.map((route, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={route.path}
                    className="transition-transform transform-gpu px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75 hover:scale-90 "
                  >
                    <span className="ml-2">{route.label}</span>
                  </Link>
                </li>
              ))}
              <Link to={"/register"}>
                <Button
                  colorRounded="bg-purple rounded-xl"
                  style="p-2"
                  icon={<AiOutlineUser size={16} />}
                  text="Sign Up"
                />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
