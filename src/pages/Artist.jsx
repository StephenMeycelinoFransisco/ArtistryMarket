import React from "react";
import Cover from "../components/Common/Cover/Cover";
import ArtistInfo from "../components/Fragments/Sections/ArtistInfo";
import TabBar from "../components/Common/TabBar/TabBar";
import Nft from "../components/Common/Card/Nft";

export default function Artist() {
  return (
    <>
      <section className="grid gap-10">
        <div className="my-8">
          <Cover />
        </div>
        <div className="w-full my-8 max-w-[17.5rem] mx-auto lg:max-w-4xl lg:justify-center xl:max-w-6xl">
          <ArtistInfo />
        </div>
        <div className="grid">
          <TabBar />
        </div>
        <div className="my-20 max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
          <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Nft className={"bg-black-secondary"} />
            <Nft className={"bg-black-secondary"} />
            <Nft className={"bg-black-secondary"} />
          </div>
        </div>
      </section>
    </>
  );
}
