import React, { useEffect, useState, useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import Title from "../../Elements/Title/Title";
import Nft from "../../Elements/Card/Nft";
import Button from "../../Elements/Button/Button";
import DesignDataService from "../../../api/firebase.design.service";
import UserDataService from "../../../api/firebase.user.service";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

export default function DiscoverMore() {
  const [randomData, setRandomData] = useState([]);
  const [userData, setUserData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetchRandomData();
    fetchAllUserData();
  }, []);

  const fetchRandomData = async () => {
    try {
      const querySnapshot = await DesignDataService.getAllDesign();
      const designs = [];

      querySnapshot.forEach((doc) => {
        const designData = doc.data();
        designs.push({
          id: doc.id,
          ...designData,
        });
      });

      const shuffledData = shuffleArray(designs);
      const slicedData = shuffledData.slice(0, 6);

      setRandomData(slicedData);
    } catch (error) {
      console.error("Error fetching random designs:", error);
    }
  };

  const fetchAllUserData = async () => {
    try {
      const querySnapshot = await UserDataService.getAllUser();
      const usersData = [];

      querySnapshot.forEach((doc) => {
        usersData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setUserData(usersData);
    } catch (error) {
      console.error("Error fetching all user data:", error);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const getArtistUsername = (userId) => {
    const user = userData.find((user) => user.uid === userId);
    return user ? user.username : "Unknown Artist";
  };

  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Discover More NFTs"}
          desc={"Explore new trending NFTs"}
          button={
            <Button
              className="border-2 border-purple py-3 rounded-2xl mb-3 lg:mb-5"
              text="See All"
              icon={<AiOutlineEye size={24} color="#A259FF" />}
            />
          }
        />
        <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {randomData.map((item) => (
            <Link
              to={`/nft/${item.userId}/${item.name}`}
              key={item.id}
              className={"bg-black-secondary"}
            >
              <Nft
                title={item.name}
                artist={getArtistUsername(item.userId)}
                price={item.price}
                img={item.img}
                bidPrice={item.bidPrice ? item.bidPrice : item.price}
              />
            </Link>
          ))}
        </div>

        <div className="grid lg:hidden">
          <Button
            className="border-2 border-purple py-3 rounded-2xl mb-3 lg:mb-5"
            text="See All"
            icon={<AiOutlineEye size={24} color="#A259FF" />}
          />
        </div>
      </section>
    </>
  );
}
