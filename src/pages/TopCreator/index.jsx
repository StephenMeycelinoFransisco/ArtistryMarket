import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
// COMPONENTS
import Creator from "../Home/Creator";
// SERVICES
import UserDataService from "../../services/firebase.user";
// ASSETS
import avatar from "../../assets/Images/noUser.jpg";

export default function TopCreator() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const getUserInfo = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user || { username: "Unknown User", avatar };
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const fetchData = async () => {
    try {
      const userData = await UserDataService.getAllUser();
      const usersData = userData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setUsers(shuffleArray(usersData));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="grid max-w-[17.5rem] mx-auto lg:max-w-4xl xl:max-w-6xl mb-10 xl:mb-20">
      <div className="grid gap-8 my-10">
        <div className="grid gap-3">
          <h1 className="text-2xl font-semibold capitalize leading-10 lg:text-4xl xl:text-5xl">
            Top Creators
          </h1>
          <p className="text-base leading-6 xl:text-2xl">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
      </div>
      <div className="grid gap-5">
        <hr className="text-gray" />
        <h1 className="text-center text-gray text-base leading-6 xl:text-2xl border-b-2 border-gray mx-20 pb-3 lg:mx-56 xl:mx-72">
          Creator
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center my-5">
          <RotatingLines
            strokeColor="#A259FF"
            strokeWidth={5}
            animationDuration={750}
            width={96}
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4 my-10">
          {users.map((user, index) => (
            <Link to={`/artist/${user.id}`} key={user.id}>
              <Creator
                number={index + 1}
                artist={getUserInfo(user.id).username}
                avatar={getUserInfo(user.id).avatar}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
