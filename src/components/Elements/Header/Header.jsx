import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { AuthContext } from "../../../context/AuthContext";

import Avatar from "../../../assets/img/avatar1.png";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const routes = [
    { path: "/marketplace", label: "Marketplace" },
    { path: "/rankings", label: "Rankings" },
    { path: "/wallet", label: "Connect to wallet" },
  ];

  return (
    <nav className="bg-black px-[1.875rem] py-[0.938rem] md:px-[3.125rem] flex flex-wrap items-center justify-between">
      <div className="container mx-auto flex flex-wrap items-center justify-between font-poppins">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/home"
            className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
            <div className="flex items-center gap-5">
              <AiOutlineShop size={24} color="#A259FF" />
              <h5 className="text-2xl">Artisty</h5>
            </div>
          </Link>
          <button
            className="block lg:hidden text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent text-white cursor-pointer outline-none focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
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
                  className="text-white text-sm font-bold leading-snug px-3 py-2 flex items-center hover:opacity-75 hover:scale-90 transition-transform transform-gpu"
                >
                  <span className="ml-2">{route.label}</span>
                </Link>
              </li>
            ))}
            {currentUser ? (
              <Link to={"/artist"}>
                <img
                  src={Avatar}
                  alt="User Avatar"
                  className="rounded-full w-8 h-8"
                />
              </Link>
            ) : (
              <Link to="/register">
                <Button
                  className="bg-purple rounded-2xl h-14"
                  text="Sign Up"
                  icon={<AiOutlineUser />}
                />
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
