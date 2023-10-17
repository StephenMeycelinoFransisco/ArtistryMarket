import React from "react";
import Cover from "../components/Common/Cover/Cover";
import Info from "../components/Elements/Artist/Info";
import Tab from "../components/Common/Tab/Tab";
import NFT from "../components/Common/Card/NFT";

export default function Artist() {
  return (
    <>
      <Cover />
      <div className="max-w-sm mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-7xl">
        <Info />
        <Tab />
      </div>
      <div className="py-20 bg-black-secondary ">
        <div className="max-w-sm mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-7xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <NFT />
          <NFT />
          <NFT />
        </div>  
      </div>
    </>
  );
}
