import React, { useEffect, useState } from "react";
import { PiRocketLaunchLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Title from "../../Elements/Title/Title";
import Button from "../../Elements/Button/Button";
import Artist from "../../Elements/Card/Artist";
import avatar from "../../../assets/img/avatar1.png";
import UserDataService from '../../../api/firebase.user.service';

// Fungsi untuk mengacak array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Creator() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await UserDataService.getAllUser();
    const usersData = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // Acak urutan pengguna
    const shuffledUsers = shuffleArray(usersData);

    // Ambil 4 pengguna pertama
    const first4Users = shuffledUsers.slice(0, 4);

    setUserData(first4Users);
  };

  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Top Creators"}
          desc={"Checkout Top Rated Creators on the NFT Marketplace"}
          button={
            <Button
              className={
                "border-2 border-purple py-3 rounded-2xl hidden lg:flex"
              }
              text="View Rankings"
              icon={<PiRocketLaunchLight size={24} color="#A259FF" />}
            />
          }
        />
        <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {userData.map((user, i) => (
            <Link to={`/artist/${user.id}`} key={user.id}>
              <Artist number={i + 1} artist={user.username} avatar={avatar} />
            </Link>
          ))}
        </div>
        <Button
          className={"border-2 border-purple py-3 rounded-2xl flex lg:hidden"}
          text="View Rankings"
          icon={<PiRocketLaunchLight size={24} color="#A259FF" />}
        />
      </section>
    </>
  );
}
