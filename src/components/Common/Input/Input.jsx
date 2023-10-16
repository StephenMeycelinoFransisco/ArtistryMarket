import React from "react";

export default function Input({ type, value, name, placeholder, icon, rounded }) {
  return (
    <section className={`flex gap-3 px-5 py-4 bg-white items-center ${rounded}`}>
      {icon}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className= "text-black-secondary w-full outline-none"
      />
    </section>
  );
}
