import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Design({
  className,
  name,
  artist,
  price,
  img,
  avatar,
  isCurrentUserNFT,
  handleEditDesign,
  handleDeleteDesign,
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleEditDesignClick = (event) => {
    event.preventDefault(); // Prevent navigation
    handleEditDesign(); // Call the prop function
  };

  const handleDeleteDesignClick = (event) => {
    event.preventDefault(); // Prevent navigation
    handleDeleteDesign(); // Call the prop function
  };

  return (
    <section className={`${className} rounded-2xl relative`}>
      <img
        className="rounded-t-2xl h-[295px] object-cover object-center w-full"
        src={img}
        alt={artist}
      />
      <div className="grid p-5 gap-1">
        <div className="flex justify-between">
          <div className="grid gap-1">
            <h1 className="text-xl font-semibold capitalize leading-6">
              {name}
            </h1>
            <div className="flex gap-3 items-center">
              <img className="w-6 h-6 rounded-full object-cover object-center" alt="" src={avatar} />
              <p className="font-spaceMono text-base leading-6">{artist}</p>
            </div>
          </div>
          {isCurrentUserNFT && (
            <div className="relative">
              <div className="cursor-pointer" onClick={toggleDropdown}>
                <Link>
                  <BsThreeDots size={20} />
                </Link>
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 top-0 mt-10 p-2 bg-black border-none shadow-lg">
                  <div className="flex gap-3">
                    <button className="block" onClick={handleEditDesignClick}>
                      <FaEdit />
                    </button>
                    <button className="block" onClick={handleDeleteDesignClick}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between mt-6">
          <div className="grid gap-2 text-start">
            <h1 className="text-gray text-sm leading-3 font-spaceMono">
              Price
            </h1>
            <p className="text-sm leading-3 font-spaceMono">{price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
