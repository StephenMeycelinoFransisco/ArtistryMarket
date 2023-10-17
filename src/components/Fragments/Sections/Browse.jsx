import React from "react";
import Title from "../Title/Title";
import Category from "../../Common/Card/Category";

export default function Browse() {
  return (
    <section className="grid gap-10 lg:mb-14 my-10">
      <Title title={"Browse Categories"} />
      <div className="grid grid-cols-2 gap-5 md:gap-8 md:grid-cols-4">
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </section>
  );
}
