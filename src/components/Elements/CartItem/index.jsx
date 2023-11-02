import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartItem({decrementQuantity, handleQuantityChange, incrementQuantity, value, name, price, avatar}) {
  return (
    <section className="bg-black py-1 px-2 min-h-14 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src={avatar} alt={name} className="rounded-full w-10 h-10" />
          <div className="grid gap-1">
            <h5 className="text-sm">{name}</h5>
            <p className="text-gray">Rp. {price}</p>
          </div>
        </div>
        <div className="flex rounded border">
          <button
            onClick={decrementQuantity}
            className="text-white text-sm"
          >
            <AiOutlineMinus />
          </button>
          <input
            type="number"
            value={value}
            onChange={handleQuantityChange}
            className="text-gray text-sm mx-1 w-8"
          />
          <button
            onClick={incrementQuantity}
            className="text-white text-sm "
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </section>
  );
}
