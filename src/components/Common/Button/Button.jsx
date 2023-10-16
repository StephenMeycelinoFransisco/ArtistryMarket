import React from "react";

export default function Button({ colorRounded, style, size, icon, text }) {
  return (
    <button
      className={`${colorRounded} border-2 font-workSans leading-[140%] font-semibold text-center border-purple text-white`}
    >
      <div
        className={`${style} px-12 flex gap-3 justify-center items-center`}
      >
        {icon}
        <div className={`${size}`}>{text}</div>
      </div>
    </button>
  );
}
