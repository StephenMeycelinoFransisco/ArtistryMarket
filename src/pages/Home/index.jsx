import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// SERVICES
import DesignDataService from "../../services/firebase.design";
import UserDataService from "../../services/firebase.user";
// ICONS
import { BsArrowRight } from "react-icons/bs";
// COMPONENTS
import Email from "./Email";
import Hero from "./Hero";
import Creator from "./Creator";
import Design from "../../components/Elements/Cards/Design";
import Information from "./Information";

export default function Home() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [topUsers, setTopUsers] = useState([]);
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    getValues();
    getDesign();
  }, []);

  const getValues = async () => {
    try {
      // Mengambil data pembelian dari semua user
      const userData = await UserDataService.getAllUser();
      const users = userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const totalPurchases = users.reduce(
        (acc, user) => acc + (user.purchases || 0),
        0
      );
      setValue1(totalPurchases);

      // Mengambil data desain
      const dataDesign = await DesignDataService.getAllDesign();
      const totalDesigns = dataDesign.docs.length;
      setValue2(totalDesigns);

      // Menghitung total data artist
      const totalArtists = new Set(
        dataDesign.docs.map((doc) => doc.data().userId)
      ).size;
      setValue3(totalArtists);

      // Ambil 6 user teratas
      const topSixUsers = users.slice(0, 6);
      setTopUsers(topSixUsers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDesign = async () => {
    try {
      const dataDesign = await DesignDataService.getAllDesign();
      const designData = dataDesign.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const userData = await UserDataService.getAllUser();
      const users = userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      console.log(userData);

      const combinedData = designData.map((item) => {
        const user = users.find((user) => user.uid === item.userId);
        return { ...item, username: user ? user.username : "Unknown User" };
      });

      setDesigns(combinedData);
    } catch (error) {
      console.error("Error fetching designs:", error);
    }
  };

  const handleSubmitEmail = () => {};

  return (
    <div className="grid max-w-[17.5rem] mx-auto lg:max-w-4xl xl:max-w-6xl mb-10 xl:mb-20">
      <div className="grid gap-5">
        <Hero value1={value1} value2={value2} value3={value3} />
        <section className="grid gap-5 my-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold capitalize leading-10 xl:text-4xl">
              Top Creators
            </h1>
            <Link
              to="/ranking"
              className="hidden lg:flex gap-3 h-16 px-5 justify-center items-center rounded-2xl border-2 border-purple text-base font-semibold leading-6"
            >
              <BsArrowRight size={20} color="#A259FF" />
              View Rankings
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {topUsers.map((user, index) => (
              <Link to={`/artist/${user.id}`} key={user.id}>
                <Creator
                  key={user.id}
                  number={index + 1}
                  artist={user.username}
                  avatar={user.avatar}
                />
              </Link>
            ))}
          </div>
        </section>
        <section className="grid gap-5 my-10">
          <div className="flex justify-between items-center">
            <div className="grid">
              <h1 className="text-2xl font-semibold capitalize leading-10 xl:text-4xl">
                Discover More NFTs
              </h1>
              <p className="text-xl capitalize leading-10">
                Explore new trending NFTs
              </p>
            </div>
            <Link
              to="/ranking"
              className="hidden lg:flex gap-3 h-16 px-5 justify-center items-center rounded-2xl border-2 border-purple text-base font-semibold leading-6"
            >
              <BsArrowRight size={20} color="#A259FF" />
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {designs.map((design) => (
              <Link to={`/artist/design-detail/${design.id}`}>
                <Design
                  className={"bg-black-secondary"}
                  key={design.id}
                  name={design.name}
                  artist={design.username}
                  price={design.price}
                  img={design.file}
                  avatar={design.avatar || design.file}
                />
              </Link>
            ))}
          </div>
        </section>
        <section className="grid gap-5 my-10">
          <div className="grid">
            <h1 className="text-2xl font-semibold capitalize leading-10 xl:text-4xl">
              How It Works
            </h1>
            <p className="text-xl capitalize leading-10">
              Find out how to get started
            </p>
          </div>
          <Information />
        </section>
        <section>
          <Email onClick={handleSubmitEmail} />
        </section>
      </div>
    </div>
  );
}
