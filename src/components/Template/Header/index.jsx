import React, { useContext, useEffect, useState } from "react";
// ICONS
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import {
  AiFillProfile,
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// SERVICES
import { AuthContext } from "../../../context/AuthContext";
import UserDataService from "../../../services/firebase.user";
import CartDataService from "../../../services/firebase.cart";
// ASSETS
import noUser from "../../../assets/Images/nouser.jpg";
// COMPONENTS
import CartItem from "../../Elements/CartItem";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownCartOpen, setDropdownCartOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const toggleDropdownCart = () => {
    setDropdownCartOpen(!isDropdownCartOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const routes = [
    { path: "/marketplace", label: "Marketplace" },
    { path: "/ranking", label: "Rankings" },
    { path: "/ai", label: "Our AI" },
  ];

  useEffect(() => {
    // Mengambil data profil pengguna jika ada pengguna yang masuk
    if (currentUser) {
      UserDataService.getUser(currentUser.uid)
        .then((userDoc) => {
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserProfile(userData);
          }
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [currentUser]);

  // Fetch cart items from Firestore
  useEffect(() => {
    // Fetch cart items when the user is logged in
    if (currentUser) {
      CartDataService.getAllCartItems()
        .then((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });
          setCartItems(items);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }
  }, [currentUser]);

  const decrementQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  const incrementQuantity = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      setCartQuantity(newValue);
    }
  };

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
            <div className="relative">
              {currentUser ? (
                <div className="flex gap-5">
                  <div
                    onClick={toggleDropdown}
                    className="ml-4 lg:ml-0 flex gap-5 items-center"
                  >
                    <img
                      src={userProfile.avatar || noUser}
                      alt="User Avatar"
                      className="rounded-full w-8 h-8 cursor-pointer"
                    />
                  </div>
                  <div
                    className="relative inline-block"
                    onClick={toggleDropdownCart}
                  >
                    <span className="text-whiterounded-full p-1">
                      <AiOutlineShoppingCart size={24} />
                    </span>
                    <span className="absolute top-4 -right-2 h-4 w-4 bg-purple text-white text-xs flex items-center justify-center rounded-full">
                      {cartItems.length}
                    </span>
                  </div>
                </div>
              ) : (
                <Link to="/register">
                  <button className="inline-flex px-12 justify-center items-center gap-3 flex-shrink-0 text-white bg-purple h-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-90">
                    <AiOutlineUser size={20} />
                    <p className="font-semibold">Sign In</p>
                  </button>
                </Link>
              )}

              {isDropdownCartOpen && (
                <div className="absolute top-10 right-0 bg-black-secondary border border-gray-300 rounded-md w-[17.5rem] h-fit mx-2 my-6 z-10 p-2">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      decrementQuantity={decrementQuantity}
                      incrementQuantity={incrementQuantity}
                      handleQuantityChange={handleQuantityChange}
                      value={cartQuantity}
                      avatar={item.designData.file}
                      name={item.designData.name}
                      price={item.designData.price}
                    />
                  ))}
                </div>
              )}

              {isDropdownOpen && (
                <div className="absolute top-10 right-0 bg-black-secondary border border-gray-300 rounded-md w-36 mx-2 my-6 z-10">
                  <ul>
                    <Link
                      to={`/artist/${currentUser.uid}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="flex items-center space-x-2 p-2 cursor-pointer">
                        <AiFillProfile />
                        <span>Profile</span>
                      </li>
                    </Link>
                    <Link
                      to={`/artist/setting/${currentUser.uid}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <li className="flex items-center space-x-2 p-2 cursor-pointer">
                        <AiFillSetting />
                        <span>Setting</span>
                      </li>
                    </Link>
                    <li
                      className="flex items-center space-x-2 p-2 cursor-pointer"
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                    >
                      <AiOutlineLogout />
                      <span>Log Out</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
