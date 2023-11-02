import React, { useState, useEffect } from 'react';
import CartDataService from '../../services/firebase.cart';
import { FiTrash2 } from 'react-icons/fi';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

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
      console.error('Error loading cart items: ', error);
    }
  };

  const handleRemoveItem = async (cartItemId) => {
    try {
      await CartDataService.deleteCartItem(cartItemId);
      loadCartItems();
    } catch (error) {
      console.error('Error removing item from cart: ', error);
    }
  };

  const totalPayment = cartItems.reduce(
    (total, item) => total + item.designData.price * item.quantity,
    0
  );

  const handlePayment = () => {
    console.log('Payment logic goes here');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FiTrash2 />
              </button>
            </div>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Price: Rp. {item.designData.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded-md">
        <h2 className="text-lg font-semibold">Total Payment</h2>
        <p className="text-2xl font-bold text-green-600">Rp. {totalPayment}</p>
        <button
          className="mt-4 bg-purple text-white px-4 py-2 rounded-md hover:bg-purple-dark"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;
