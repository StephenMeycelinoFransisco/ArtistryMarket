import React, { useEffect, useState, useContext } from "react";
import Tab from "../components/Fragments/Artist/Tab";
import Info from "../components/Fragments/Artist/Info";
import Profile from "../components/Fragments/Artist/Profile";
import Nft from "../components/Elements/Card/Nft";
import Popup from "../components/Elements/Popup/Popup";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import DesignDataService from "../api/firebase.design.service";
import { AuthContext } from "../context/AuthContext";

import noDataImage from "../assets/img/noData.png";

export default function Artistpage() {
  const tabList = ["Created", "Owned", "Collection"];
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const [avatar, setAvatar] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    getDesign();
  }, [currentUser]);

  const getDesign = async () => {
    if (!currentUser) {
      return;
    }

    try {
      const userId = currentUser.uid;

      const querySnapshot = await DesignDataService.getAllDesign();
      const designs = [];

      querySnapshot.forEach((doc) => {
        const designData = doc.data();
        console.log(designData);
        if (designData.userId === userId) {
          designs.push({
            id: doc.id,
            ...designData,
          });
        }
      });

      setData(designs);
    } catch (error) {
      console.error("Error fetching designs:", error);
    }
  };

  const handleInputChange = (e) => {};

  const handleClickSubmit = (e) => {};

  return (
    <>
      <section className="grid gap-10">
        <div className="my-8">
          <Profile onChange={handleInputChange} onClick={handleClickSubmit} />
        </div>
        <div className="w-full my-8 max-w-[17.5rem] mx-auto lg:max-w-4xl lg:justify-center xl:max-w-6xl">
          <Info artistName={currentUser.displayName} id={currentUser.uid}/>
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
            {activeTab === 0 ? (
              data.length > 0 ? (
                data.map((item, index) => (
                  <Link to={`/nft/${item.userId}/${item.name}`} key={index}>
                    <Nft
                      className="bg-black-secondary"
                      title={item.name}
                      artist={currentUser.displayName}
                      price={item.price}
                      img={item.img}
                      bidPrice={item.bidPrice ? item.bidPrice : item.price}
                    />
                  </Link>
                ))
              ) : (
                <div className="text-center">
                  <img src={noDataImage} alt="No Data" />
                  <h1 className="text-2xl font-semibold">No data available.</h1>
                </div>
              )
            ) : null}
          </div>
        </div>
        <Link to="add">
          <Popup icon={<LuImagePlus size={24} />} />
        </Link>
      </section>
    </>
  );
}
