import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// ASSETS
import noUser from "../../../assets/Images/nouser.jpg";
// CONTEXT
import { AuthContext } from "../../../context/AuthContext";
// FIREBASE STORAGE
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase.config";
// SERVICES
import UserDataService from "../../../services/firebase.user";

export default function DetailArtist() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    avatar: currentUser.photoURL,
    username: currentUser.displayName,
    email: currentUser.email,
    bio: "",
    uid: currentUser.uid,
  });

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const storageRef = ref(storage, "design/" + file.name);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        setUserData({
          ...userData,
          avatar: downloadURL,
        });
      } catch (error) {
        console.error("Error uploading avatar: ", error);
      }
    }
  };

  const handleUpdateUser = async () => {
    const userId = currentUser.uid;
    const updateUser = {
      avatar: userData.avatar,
      username: userData.username,
      bio: userData.bio,
    };

    try {
      await UserDataService.updateUser(userId, updateUser);
      alert("User data updated successfully.");
    } catch (error) {
      console.error("Error updating user data: ", error);
    }

    navigate(`/artist/${currentUser.uid}`);
  };

  return (
    <>
      <section className="grid gap-8 bg-black-secondary">
        <div className="grid max-w-[17.5rem] mx-auto lg:grid-cols-2 lg:max-w-4xl lg:gap-8 xl:max-w-6xl">
          <div className="grid gap-5 mt-8 mb-4 p-4 bg-black rounded">
            <h3>Profile Avatar</h3>
            <hr className="text-gray" />
            <div className="grid gap-3">
              <img
                src={userData.avatar || noUser}
                alt="avatar user"
                className="rounded-full w-[232px] h-[232px] object-cover object-center  mx-auto"
              />
              <p className="text-center text-gray font-spaceMono text-sm">
                JPG or PNG no larger than 10MB
              </p>
            </div>
            <div className="grid">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </div>
          </div>
          <div className="grid gap-5 mt-4 mb-8 p-4 bg-black rounded lg:mt-8">
            <h3>Account Details</h3>
            <hr className="text-gray" />
            <div className="grid gap-5">
              <input
                type="text"
                name="username"
                placeholder="Username...."
                value={userData.username}
                onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value });
                }}
                className="py-2 px-4 rounded-full text-gray"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address..."
                value={userData.email}
                disabled
                className="py-2 px-4 rounded-full text-gray"
              />
              <textarea
                name="bio"
                id="bio"
                rows="10"
                placeholder="Bio..."
                value={userData.bio}
                onChange={(e) => {
                  setUserData({ ...userData, bio: e.target.value });
                }}
                className="text-gray rounded-2xl px-4 py-2"
              />
              <div className="grid">
                <button
                  onClick={handleUpdateUser}
                  className="px-14 py-3 bg-purple border-2 border-purple rounded-full"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
