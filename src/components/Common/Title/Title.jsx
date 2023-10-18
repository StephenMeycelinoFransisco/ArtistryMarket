import React from "react";

export default function Title({ title, desc, button }) {
  return (
    <>
      <section className="grid grid-cols-1 lg:flex lg:justify-between">
        <div className="grid gap-3">
          <h1 className="text-3xl font-semibold capitalize leading-10">
            {title}
          </h1>
          <caption className="text-base leading-6">{desc}</caption>
        </div>
        <div className="hidden lg:flex">
          {button}
        </div>
       
      </section>
    </>
  );
}
