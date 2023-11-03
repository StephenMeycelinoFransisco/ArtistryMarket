import React, { useState, useEffect } from "react";
import CartDataService from "../../services/firebase.cart";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams()

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const cartItemsSnapshot = await CartDataService.getAllCartItems();
      const cartItemsData = [];
      cartItemsSnapshot.forEach((doc) => {
        cartItemsData.push({ id: doc.id, ...doc.data() });
      });
      setCartItems(cartItemsData);
    } catch (error) {
      console.error("Error loading cart items: ", error);
    }
  };

  const handleRemoveItem = async (cartItemId) => {
    try {
      await CartDataService.deleteCartItem(cartItemId);
      loadCartItems();
    } catch (error) {
      console.error("Error removing item from the cart: ", error);
    }
  };

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    try {
      await CartDataService.updateCartItemQuantity(cartItemId, newQuantity);
      loadCartItems();
    } catch (error) {
      console.error("Error updating item quantity: ", error);
    }
  };

  const incrementQuantity = (item) => {
    handleQuantityChange(item.id, item.quantity + 1);
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      handleQuantityChange(item.id, item.quantity - 1);
    }
  };

  const totalPayment = cartItems.reduce(
    (total, item) => total + item.designData.price * item.quantity,
    0
  );

  const handlePayment = () => {
    setSelectedDesigns(cartItems);
    setShowModal(true);
  };

  const confirmPayment = () => {
    setShowModal(false);
  };

  return (
    <div className="container max-w-md mx-auto lg:max-w-4xl xl:max-w-6xl my-10 px-4 lg:px-0">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md">
            <div className="flex items-center justify-between">
              <img
                src={item.designData.file}
                alt={item.designData.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className="flex items-center">
                <button
                  onClick={() => decrementQuantity(item)}
                  className="text-red hover:text-red-800 ml-2"
                >
                  <FiMinus />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    handleQuantityChange(item.id, parseInt(e.target.value, 10));
                  }}
                  className="w-12 h-8 rounded-md text-center text-gray"
                />
                <button
                  onClick={() => incrementQuantity(item)}
                  className="text-green hover:text-green-800 ml-2"
                >
                  <FiPlus />
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red hover:text-red-800 ml-2"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
            <h2 className="text-lg font-semibold">{item.designData.name}</h2>
            <p className="text-gray">Quantity: {item.quantity}</p>
            <p className="text-gray">Price: Rp. {item.designData.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded-md">
        <h2 className="text-lg font-semibold">Total Payment</h2>
        <p className="text-2xl font-bold text-green">Rp. {totalPayment}</p>
        <button
          className="mt-4 bg-purple text-white px-4 py-2 rounded-md hover-bg-purple-dark"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>

      {showModal && selectedDesigns.length > 0 && (
        <div className="absolute top-3/4 lg:fixed lg:top-0 inset-0 flex items-center justify-center bg-black/60 gray bg-opacity-50 z-50">
          <div className="bg-black-secondary shadow-xl p-8 rounded-md">
            <button
              className="absolute top-2 right-2 text-gray hover:text-gray-800"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-xl font-semibold">Selected Designs</h2>
            <div className="grid lg:grid-cols-4 lg:gap-5 grid-cols-1 gap-1 p-2">
              {selectedDesigns.map((design) => (
                <div
                  key={design.designData.id}
                  className="bg-black px-4 py-2 rounded justify-center mx-auto text-center min-w-[10rem]"
                >
                  <h3>{design.designData.name}</h3>
                  <p className="text-gray my-1 text-center">
                    Quantity: {design.quantity}
                  </p>
                  <p className="text-green my-1 text-center">
                    Price: {design.designData.price}
                  </p>
                  <img
                    src={design.designData.file}
                    alt={design.designData.name}
                    className="w-24 h-24 rounded-full my-4 mx-auto"
                  />
                </div>
              ))}
            </div>
            <Link to={`/payment/${id}`}>
              <button
                className="bg-green text-white px-4 py-2 rounded-md hover-bg-green-dark"
                onClick={confirmPayment}
              >
                Confirm Payment
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
