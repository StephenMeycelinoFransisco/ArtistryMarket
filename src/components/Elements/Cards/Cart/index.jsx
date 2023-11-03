import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart({
  addToCart,
  handleQuantityChange,
  incrementQuantity,
  decrementQuantity,
  value,
}) {
  return (
    <>
      <h5 className="text-white text-lg mb-4">Add to cart:</h5>
      <div className="grid grid-cols-3 gap-3 w-56 mx-auto">
        <button
          onClick={decrementQuantity}
          className="text-white text-xl border rounded p-2 mx-auto"
        >
          <AiOutlineMinus />
        </button>
        <input
          type="number"
          value={value}
          onChange={handleQuantityChange}
          className="text-gray text-xl border rounded p-2 lg:text-sm w-full text-center"
        />
        <button
          onClick={incrementQuantity}
          className="text-white text-xl border rounded p-2 mx-auto"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <button
        onClick={addToCart}
        className="bg-purple justify-center text-white text-xl py-2 px-4 mt-4 rounded flex items-center gap-3"
      >
        <AiOutlineShoppingCart /> Add to Cart
      </button>
    </>
  );
}
