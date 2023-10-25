import React, { useEffect, useState } from "react";
import Tab from "../components/Fragments/Artist/Tab";
import Info from "../components/Fragments/Artist/Info";
import Profile from "../components/Fragments/Artist/Profile";
import Nft from "../components/Elements/Card/Nft";
import Popup from "../components/Elements/Popup/Popup";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Artistpage() {
  const tabList = ["Created", "Owned", "Collection"];
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsQuery = await getDocs(collection(db, "products"));
        const usersQuery = await getDocs(collection(db, "users"));
  
        const productsData = [];
        const usersData = [];
  
        // Ambil data dari koleksi "products"
        productsQuery.forEach((productDoc) => {
          const productData = productDoc.data();
          productsData.push(productData);
        });
  
        // Ambil data dari koleksi "users"
        usersQuery.forEach((userDoc) => {
          const userData = userDoc.data();
          usersData.push(userData);
        });
  
        // Gabungkan data berdasarkan Id 
        const combinedData = productsData.map((product) => {
          // Pengecekan uid dari user === userId dari product
          const user = usersData.find((user) => user.uid === product.userId);
          return { ...product, user };
        });
  
        setData(combinedData);
      } catch (err) {
        console.log(err);
      }
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
