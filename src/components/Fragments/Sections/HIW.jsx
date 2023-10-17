import React from "react";
import Title from "../Title/Title";
import Info from "../../Common/Card/Info";
import img from "../../../assets/img/CreateCollectionIcon.png";

export default function HIW() {
  return (
    <section className="grid my-10">
      <div className="grid gap-10">
        <Title title={"How It Works"} desc={"Find out how to get started"} />
        <div className="grid gap-5 md:grid-cols-3 md:gap-8 ">
          <Info img={img} />
          <Info img={img} />
          <Info img={img} />
        </div>
      </div>
    </section>
  );
}
