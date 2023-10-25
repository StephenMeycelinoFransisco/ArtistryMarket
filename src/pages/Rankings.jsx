import React, { useState } from "react";
import Tab from "../components/Fragments/Artist/Tab";
import Header from "../components/Fragments/Ranking/Header";
import Item from "../components/Fragments/Ranking/Item";

export default function Rankings() {
  const tabList = ["1d", "7d", "30d", "All Time"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="grid">
      <div className="grid gap-3 my-8 max-w-[17.5rem] mx-auto lg:max-w-2xl lg:w-full lg:justify-start xl:max-w-5xl">
        <h1 className="text-2xl font-semibold leading-6 capitalize">
          Top Creator
        </h1>
        <caption className="text-base leading-6">
          Check out top ranking NFT artists on the NFT Marketplace.
        </caption>
      </div>
      <div className="grid max-w-full">
        <Tab tabs={tabList} activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="grid my-10">
        <div className="grid gap-5 max-w-[17.5rem] mx-auto w-full lg:max-w-2xl xl:max-w-5xl">
          {activeTab === 0 && (
            <div className="grid gap-5 my-10">
              <Header />
              <Item />
              <Item />
            </div>
          )}
          {activeTab === 1 && (
            <div className="grid gap-5 my-10">
              <Header />
              <Item />
              <Item />
            </div>
          )}
          {activeTab === 2 && (
            <div className="grid gap-5 my-10">
              <Header />
              <Item />
              <Item />
            </div>
          )}
          {activeTab === 3 && (
            <div className="grid gap-5 my-10">
              <Header />
              <Item />
              <Item />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
