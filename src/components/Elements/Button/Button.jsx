import React from "react";

const Button = ({ text, onClick, icon, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex px-12 justify-center items-center gap-3 flex-shrink-0 text-white ${className} transition-transform duration-300 ease-in-out transform hover:scale-90`}
    >
      {icon}
      <p className="font-semibold">{text}</p>
    </button>
  );
};

export default Button;
