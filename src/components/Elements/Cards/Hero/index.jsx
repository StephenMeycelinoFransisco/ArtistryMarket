import React from "react";

export default function HeroCart({
  className,
  name,
  artist,
  img,
  avatar,
}) {

  return (
    <section className={`${className} mx-auto rounded-2xl relative h-[315px] lg:h-[330px] xl:h-[510px]`}>
      <img
        className="rounded-t-2xl object-cover object-center h-[206px] w-[315px] lg:[330px] lg:h-[221px] xl:w-[510px] xl:h-[410px]"
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
              <img className="w-6 h-6 rounded-full" alt="" src={avatar} />
              <p className="font-spaceMono text-base leading-6">{artist}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
