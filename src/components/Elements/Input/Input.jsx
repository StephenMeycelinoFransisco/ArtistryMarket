import React from "react";

export default function Input({ type, value, name, placeholder, icon, onChange, className }) {
  return (
    <div
      className={`flex gap-3 px-5 py-4 bg-white items-center ${className}`}
    >
      {icon}
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className="text-black-secondary w-full outline-none"
      />
    </div>
  );
}
