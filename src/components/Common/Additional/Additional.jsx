import React from "react";

export default function Additional() {
  return (
    <div className="grid grid-cols-3 gap-[1.875rem] text-white">
      <div className="">
        <h1 className="text-[1.375rem] lg:text-[1.75rem] font-bold">240k+</h1>
        <caption className="text-[1rem] lg:text-[1.5rem] font-workSans flex">Total Sale</caption>
      </div>
      <div className="">
        <h1 className="text-[1.375rem] lg:text-[1.75rem] font-bold">100k+</h1>
        <caption className="text-[1rem] lg:text-[1.5rem] font-workSans flex">Auctions</caption>
      </div>
      <div className="">
        <h1 className="text-[1.375rem] lg:text-[1.75rem] font-bold">240k+</h1>
        <caption className="text-[1rem] lg:text-[1.5rem] font-workSans flex">Artist</caption>
      </div>
    </div>
  );
}
