import React from "react";
import Title from "../../Common/Title/Title";
import Collection from "../../Common/Card/Collection";

export default function Trending() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Trending Collection"}
          desc={"Checkout our weekly updated trending collection."}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          <Collection />
          <Collection />
          <Collection />
        </div>
      </section>
    </>
  );
}
