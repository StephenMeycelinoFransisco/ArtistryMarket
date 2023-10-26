import React, { useState } from "react";
// import { BsThreeDots } from "react-icons/bs";

export default function Nft({ className, title, artist, price, img }) {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <section className={`${className} rounded-2xl hover:scale-95 duration-200`}>
      <img
        className="rounded-t-2xl h-[295px] object-cover object-center w-full"
        src={img}
        alt={artist}
      />
      <div className="grid p-5 gap-1">
        <div className="flex justify-between">
          <div className="grid gap-1">
            <h1 className="text-xl font-semibold capitalize leading-6">
              {title}
            </h1>
            <div className="flex gap-3 items-center">
              <img
                className="w-6 h-6 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/6f2d/fe69/21b6620c5678c5b0215637f93ef42f6f?Expires=1698624000&Signature=qFFXi7bAz0pRsrTBzkWaitAMVP2pvhB5PYEqMKdhtcyB4Za3PSA8JyB3EK-lVaeWXxufZx~OwoLhZXuyMvwocb8m5kuSr6RYtdg3JlHPL2mJIU1fSXr4jdkIR1pBG04ucZ1hah6i56zu5P4W-jlY3zPhDHaYj2Uw2CzjGYkSMVD1vty~3AfjGUwQe46N8JmIz-IewVwVXP3HOUMLJDF0yrdUQzG4BLnB8~TMPNld3iiNHUCYJewVYdDwAy4GFBH6Skj0vi7M7mWKRf-gm2c88TCX6qKHzlvaSg7xreSB98cSCf4RzAhnXwlEjU2ARKQYagMXk8P9XoVRDMUtRH3hCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <p className="font-spaceMono text-base leading-6">{artist}</p>
            </div>
          </div>
          {/* <div className="grid">
            <div className="relative">
              <BsThreeDots onClick={toggleDropdown} />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-black-secondary border border-black rounded-md shadow-lg">
                  <ul>
                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                      Edit
                    </li>
                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div> */}
        </div>
        <div className="flex justify-between mt-6">
          <div className="grid gap-2 text-start">
            <h1 className="text-gray text-sm leading-3 font-spaceMono">
              Price
            </h1>
            <p className="text-sm leading-3 font-spaceMono">{price}</p>
          </div>
          <div className="grid gap-2 text-end">
            <h1 className="text-gray text-sm leading-3 font-spaceMono">
              Highest Bid
            </h1>
            <p className="text-sm leading-3 font-spaceMono">{price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
