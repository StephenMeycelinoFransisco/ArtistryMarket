import React from "react";

export default function Textarea({ name, value, onChange, placeholder, className }) {
  return (
    <textarea
      className={`flex text-gray gap-3 px-5 py-4 bg-white items-center ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
