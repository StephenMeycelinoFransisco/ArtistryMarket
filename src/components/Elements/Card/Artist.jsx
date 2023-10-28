import React from "react";

export default function Artist({artist, avatar, number}) {
  return (
    <section className="bg-black-secondary p-5 rounded-2xl hover:scale-95 duration-200">
      <div className="flex gap-5 xl:grid">
        <span className="bg-black w-6 h-6 absolute rounded-full xl:w-8 xl:h-8">
          <p className="relative top-1.5 left-2.5 text-gray xl:left-3 xl:text-sm">
            {number}
          </p>
        </span>
        <img
          className="w-16 h-16 rounded-full xl:mx-auto xl:w-32 xl:h-32 "
          alt=""
          src={avatar}
        />
        <div className="grid gap-1 xl:text-center">
          <h1 className="text-xl font-semibold capitalize leading-6">
            {artist}
          </h1>
        </div>
      </div>
    </section>
  );
}
