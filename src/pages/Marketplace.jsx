import React, { useState } from "react";
import Headline from "../components/Elements/Headline/Headline";
import Nft from "../components/Elements/Card/Nft";
import Tab from "../components/Fragments/Artist/Tab";

export default function MarketPlace() {
  const tabList = ["NFTs", "Collection"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="grid ">
        <div className="grid max-w-[17.5rem] mx-auto lg:max-w-4xl lg:mx-0 lg:justify-center xl:max-w-5xl">
          <Headline />
        </div>
        <div className="grid max-w-full">
          <Tab
            tabs={tabList}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        </div>
        <div className="my-10 ">
          <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
            {activeTab === 0 && (
              <>
                <Nft className="bg-black-secondary" />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
