import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Avatar from "../../../assets/img/avatar1.png";
import Background from "../../../assets/img/bg1.png";

export default function Profile({onChange, onClick}) {

  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <section className="relative">
        <img
          className="w-full h-[250px] object-cover object-center lg:h-[280px] xl:h-[320px]"
          alt=""
          src={Background}
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-40 xl:left-52">
          {isEditing ? (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={onChange}
                className="mb-2"
              />
              <button
                onClick={onClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="relative">
              <img
                className="rounded-xl border border-black-secondary w-32 h-32"
                src={ Avatar}
                alt=""
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <button onClick={() => setIsEditing(true)}>
                  <BiEdit size={34} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
