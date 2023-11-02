import React from "react";

export default function Info({ img, title, description }) {
  return (
    <section className="grid bg-black-secondary rounded-2xl">
      <div className="p-5 flex justify-center items-center lg:grid lg:px-5 lg:pt-3 lg:pb-8 xl:p-8">
        <img className="w-24 h-24 lg:mx-auto lg:w-40 lg:h-40 xl:w-64 xl:h-64" src={img} alt="" />
        <div className="grid gap-3 lg:text-center">
          <h1 className="text-base font-semibold leading-6 xl:text-xl">{title}</h1>
          <p className="text-xs leading-4 lg:text-center xl:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
