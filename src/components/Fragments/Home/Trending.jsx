import React from "react";
import Title from "../../Elements/Title/Title";
import Collection from "./Collection";

export default function Trending() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Trending Collection"}
          desc={"Checkout our weekly updated trending collection."}
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          <Collection />
          <Collection />
          <Collection />
        </div>
      </section>
    </>
  );
}
