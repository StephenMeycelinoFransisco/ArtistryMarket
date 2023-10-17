import React from "react";


export default function Title({button, title, desc}) {
  return (
    <>
      <section className="flex justify-between">
        <div className="grid gap-2">
          <h1 className="text-3xl leading-10 capitalize font-semibold">
            {title}
          </h1>
          <caption className="text-base leading-6">
            {desc}
          </caption>
        </div>
        <div className="hidden md:flex">
          {button}
        </div>
      </section>
    </>
  );
}
