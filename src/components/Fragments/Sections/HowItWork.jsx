import React from "react";
import Title from "../../Common/Title/Title";
import Info from "../../Common/Card/Info";

import vector from '../../../assets/img/CreateCollectionIcon.png'

export default function HowItWork() {
  return (
    <>
      <section className="grid">
        <Title
          title={"How It Works"}
          desc={"Find out how to get started"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 my-10">
          <Info img={vector}/>
          <Info img={vector}/>
          <Info img={vector}/>
        </div>
      </section>
    </>
  );
}
