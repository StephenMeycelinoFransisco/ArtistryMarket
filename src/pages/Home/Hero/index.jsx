import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// ASSETS
import avatar from "../../../assets/Images/nouser.jpg";
// COMPONENTS
import HeroCart from "../../../components/Elements/Cards/Hero";
import Stats from "../../../components/Elements/Stats";
// SERVICES
import DesignDataService from "../../../services/firebase.design";
import UserDataService from "../../../services/firebase.user";
// CONTEXT
import { AuthContext } from "../../../context/AuthContext";

export default function Hero({ value1, value2, value3 }) {
  const [nft, setNft] = useState([]);
  const [randomNft, setRandomNft] = useState(null);
  const { id } = useParams()

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getDesign();
  }, []);

  const getDesign = async () => {
    try {
      const dataDesign = await DesignDataService.getAllDesign();
      const designData = dataDesign.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const userData = await UserDataService.getAllUser();
      const users = userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const combinedData = designData.map((item) => {
        const user = users.find((user) => user.uid === item.userId);
        return { ...item, username: user ? user.username : "Unknown User" };
      });

      setNft(combinedData);

      // Memilih satu data secara acak
      if (combinedData.length > 0) {
        const randomIndex = Math.floor(Math.random() * combinedData.length);
        setRandomNft(combinedData[randomIndex]);
      }
    } catch (error) {
      console.error("Error fetching designs:", error);
    }
  };

  return (
    <div className="grid my-10">
      <div className="grid gap-3 lg:grid-cols-2 lg:justify-center lg:items-center">
        <div className="grid gap-5">
          <h1 className="font-semibold capitalize text-3xl leading-10 lg:text-6xl xl:text-[76px] xl:leading-none">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-base leading-6 xl:text-2xl">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Link to="/register">
            <div className="hidden lg:flex ">
              <button className="h-14 px-12 py-3 bg-purple flex gap-3 items-center rounded-2xl justify-center">
                Get Started
              </button>
            </div>
          </Link>
          <div className="hidden lg:flex">
            <Stats
              value1={value1}
              value2={value2}
              value3={value3}
              text1={"Total Sales"}
              text2={"Design"}
              text3={"Artist"}
            />
          </div>
        </div>
        <div className="grid">
          {randomNft && (
            <HeroCart
              className={"bg-black-secondary"}
              name={randomNft.name}
              artist={randomNft.username}
              img={randomNft.file}
              avatar={randomNft.file || avatar}
            />
          )}
        </div>
        <div className="grid gap-10 mt-7 lg:mt-0">
          <div className="grid gap-10 lg:hidden">
            <Link to={`/artist/${currentUser.uid}`}>
              <div className="grid">
                <button className="h-14 px-12 py-3 bg-purple flex gap-3 items-center rounded-2xl justify-center">
                  Get Started
                </button>
              </div>
            </Link>
            <div className="flex lg:hidden">
              <Stats
                value1={value1}
                value2={value2}
                value3={value3}
                text1={"Total Sales"}
                text2={"Design"}
                text3={"Artist"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
