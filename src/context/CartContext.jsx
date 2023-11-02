import React, { createContext, useContext, useState, useEffect } from 'react';
import CartDataService from '../services/firebase.cart';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartItemsData = await CartDataService.getAllCartItems();
        const items = [];
    
        // Loop through the cart items data and push each item to the 'items' array
        cartItemsData.forEach((itemDoc) => {
          const item = itemDoc.data();
          items.push(item);
        });
    
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    
    fetchCartItems();    
  }, [cartItems]);

  const addToCart = async (item) => {
    try {
      await CartDataService.addToCart(item);
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await CartDataService.deleteCartItem(itemId);
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      // Loop through and delete each item from the cart
      await Promise.all(cartItems.map((item) => CartDataService.deleteCartItem(item.id)));
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing the cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
