import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartItem({name, price, avatar, qty}) {
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
        <div className="flex">
          <p className="text-sm text-gray">QTY: {qty}</p>
        </div>
      </div>
    </section>
  );
}
