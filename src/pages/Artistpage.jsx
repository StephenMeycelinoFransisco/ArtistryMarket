import React, { useEffect, useState } from "react";
import Tab from "../components/Fragments/Artist/Tab";
import Info from "../components/Fragments/Artist/Info";
import Profile from "../components/Fragments/Artist/Profile";
import Nft from "../components/Elements/Card/Nft";
import Popup from "../components/Elements/Popup/Popup";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { fetchDataFromFirestore } from "../api/FirebaseService";

export default function Artistpage() {
  const tabList = ["Created", "Owned", "Collection"];
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const combinedData = await fetchDataFromFirestore();
      setData(combinedData);
    };

    fetchData();
  }, []);
  

  console.log(data);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="grid gap-10">
        <div className="my-8">
          <Profile />
        </div>
        <div className="w-full my-8 max-w-[17.5rem] mx-auto lg:max-w-4xl lg:justify-center xl:max-w-6xl">
          <Info />
        </div>
        <div className="grid max-w-full">
          <Tab
            tabs={tabList}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        </div>
        <div className="my-10 max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
          <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {activeTab === 0 && (
              <>
                {data.map((item, index) => (
                  <Nft
                    key={index}
                    className="bg-black-secondary"
                    title={item.name}
                    artist={item.user.username}
                    price={item.price}
                    img={item.image}
                  />
                ))}

              </>
            )}
          </div>
        </div>
        <Link to="add">
          <Popup icon={<LuImagePlus size={24} />} />
        </Link>
      </section>
    </>
  );
}
