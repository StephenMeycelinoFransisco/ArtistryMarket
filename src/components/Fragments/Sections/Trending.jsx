import React from "react";
import Title from "../Title/Title";
import Collection from "../../Common/Card/Collection";

export default function Trending() {
  return (
    <section className="grid my-10 gap-10">
      <Title title={"Trending Collection"} desc={"Checkout our weekly updated trending collection."}/>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Collection />
        <Collection />
        <Collection />
      </div>
    </section>
  );
}
