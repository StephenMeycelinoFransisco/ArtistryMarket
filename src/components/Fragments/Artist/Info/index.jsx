import React from "react";
import { AiOutlineCopy, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import Stats from "../../../Elements/Stats";

export default function Info({
  id,
  username,
  value1,
  value2,
  value3,
  bio,
  isCurrentUserProfile,
  openPopup,
  editProfile,
  toggleFollow,
}) {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Show a success alert message
        alert("Copied to clipboard: " + text);
      })
      .catch((error) => {
        // Handle the error if copying fails.
        console.error("Copy to clipboard failed:", error);
      });
  };

  return (
    <>
      <section className="mt-24 mb-10 max-w-[17.5rem] mx-auto lg:mt-20 lg:max-w-3xl xl:max-w-6xl xl:mt-28">
        <div className="grid gap-8">
          <div className="grid gap-8 xl:flex xl:justify-between">
            <h1 className="text-2xl font-semibold leading-10 capitalize lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-[110%]">
              {username}
            </h1>
            <div className="grid gap-5 lg:flex">
              <button
                className="h-14 px-12 py-3 bg-purple flex gap-3 items-center rounded justify-center"
                onClick={() => {
                  copyToClipboard(id);
                }}
              >
                <AiOutlineCopy size={20} />
                {id}
              </button>
              {isCurrentUserProfile ? (
                <button
                  className="h-14 px-12 py-3 bg-transparent border-2 border-purple flex gap-3 items-center rounded justify-center"
                  onClick={openPopup}
                >
                  <AiOutlinePlus size={20} color="#A259FF" />
                  New Design
                </button>
              ) : (
                <button
                  className="h-14 px-12 py-3 bg-transparent border-2 border-purple flex gap-3 items-center rounded justify-center"
                  onClick={toggleFollow}
                >
                  {value3 ? "Following" : "Follow"}
                </button>
              )}
              {isCurrentUserProfile && (
                <button
                  className="h-14 px-4 py-3 bg-purple flex gap-3 items-center rounded justify-center"
                  onClick={editProfile}
                >
                  <AiOutlineEdit size={20} color="#fff" />
                </button>
              )}
            </div>
          </div>
          <Stats
            value1={value1}
            value2={value2}
            value3={value3}
            text1={"Volume"}
            text2={"Design Sold"}
            text3={"Followers"}
          />
          <div className="grid gap-3">
            <h5 className="font-spaceMono text-base leading-6 text-gray xl:text-xl xl:font-bold xl:leading-10 xl:capitalize">
              Bio
            </h5>
            <p className="leading-6 text-base xl:text-xl xl:leading-10 xl:capitalize">
              {bio}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
