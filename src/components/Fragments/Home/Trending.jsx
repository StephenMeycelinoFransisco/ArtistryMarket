import React, { useEffect, useState } from "react";
import Title from "../../Elements/Title/Title";
import Collection from "./Collection";
import DesignDataService from "../../../api/firebase.design.service";
import UserDataService from "../../../api/firebase.user.service";
import { Link } from "react-router-dom";

export default function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDesign();
  }, []);

  const getDesign = async () => {
    try {
      const dataDesign = await DesignDataService.getAllDesign();
      const designData = dataDesign.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      // Ambil semua data pengguna
      const userData = await UserDataService.getAllUser();
      const users = userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      // Loop through users and create random data
      const randomData = users.map((user) => {
        const userDesigns = designData.filter((design) => design.userId === user.uid);
        const randomImage = userDesigns[Math.floor(Math.random() * userDesigns.length)].img;
        const designTotal = userDesigns.length;

        return {
          id: user.id,
          img: randomImage,
          total: designTotal, 
          category: "Category", 
          username: user.username,
          artistAvatar: user.avatar, 
        };
      });

      setData(randomData);
    } catch (error) {
      console.error("Error fetching designs:", error);
    }
  }

  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Trending Collection"}
          desc={"Checkout our weekly updated trending collection."}
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {data.map((item) => (
            <Link to={`/nft/${item.id}`} key={item.id}>
              <Collection
                designImage={item.img}
                designTotal={item.total}
                designCollection={item.category}
                designArtist={item.username}
                artistAvatar={item.artistAvatar}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
