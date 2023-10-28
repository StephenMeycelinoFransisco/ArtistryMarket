import React from "react";

export default function Collection({
  designImage,
  designTotal,
  designCollection,
  designArtist,
  artistAvatar,
}) {
  return (
    <section className="grid gap-4">
      <img
        className="rounded-2xl hover:scale-95 duration-200"
        alt=""
        src={designImage}
      />
      <div className="grid grid-cols-3 gap-4">
        <img
          className="rounded-2xl hover:scale-95 duration-200"
          alt=""
          src={designImage}
        />
        <img
          className="rounded-2xl hover:scale-95 duration-200"
          alt=""
          src={designImage}
        />
        <div className="bg-purple rounded-2xl items-center flex hover:scale-95 duration-200">
          <h1 className="text-base font-bold font-spaceMono leading-6 mx-auto">
            {designTotal}
          </h1>
        </div>
      </div>
      <div className="grid gap-3">
        <h1 className="text-xl font-semibold capitalize leading-6">
          {designCollection}
        </h1>
        <div className="flex gap-3">
          <img className="w-6 h-6 rounded-full" src={artistAvatar} alt="" />
          <p className="text-base leading-6">{designArtist}</p>
        </div>
      </div>
    </section>
  );
}
