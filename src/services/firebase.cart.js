import { db } from "../config/firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const CartCollectionRef = collection(db, "cart");

class CartDataService {
  // Add item to cart
  addToCart = (cartItem) => {
    return addDoc(CartCollectionRef, cartItem);
  }

  // Update item in cart
  updateCartItem = (cartItemId, updatedCartItem) => {
    const cartItemDoc = doc(db, "cart", cartItemId);
    return updateDoc(cartItemDoc, updatedCartItem);
  }

  // Delete item from cart
  deleteCartItem = (cartItemId) => {
    const cartItemDoc = doc(db, "cart", cartItemId);
    return deleteDoc(cartItemDoc);
  }

  // Get all cart items
  getAllCartItems = () => {
    return getDocs(CartCollectionRef);
  }
}

export default new CartDataService();
