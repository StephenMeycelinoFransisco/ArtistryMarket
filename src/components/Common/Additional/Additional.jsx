import React from "react";

export default function Additional({number1, number2, number3, caption1, caption2, caption3}) {
  return (
    <div className="grid grid-cols-3 gap-[1.875rem] text-white">
      <div className="">
        <h1 className="text-[1.375rem] lg:text-[1.75rem] font-bold">{number1}</h1>
        <caption className="text-[1rem] lg:text-[1.5rem] font-workSans flex">{caption1}</caption>
      </div>
      <div className="">
        <h1 className="text-[1.375rem] lg:text-[1.75rem] font-bold">{number2}</h1>
        <caption className="text-[1rem] lg:text-[1.5rem] font-workSans flex">{caption2}</caption>
      </div>
      <div className="">
        <h1 className="text-[1.375rem] lg:text-[1.75rem] font-bold">{number3}</h1>
        <caption className="text-[1rem] lg:text-[1.5rem] font-workSans flex">{caption3}</caption>
      </div>
    </div>
  );
}
