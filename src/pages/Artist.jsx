import React from "react";
import Cover from "../components/Common/Cover/Cover";
import Info from "../components/Elements/Artist/Info";
import Tab from "../components/Common/Tab/Tab";
import Discover from "../components/Fragments/Sections/Discover";

export default function Artist() {
  return (
    <div className="">
      <Cover />
      <div className="mx-10 sm:max-w-xs sm:mx-auto grid gap-8 md:max-w-2xl lg:max-w-4xl">
        <Info />
        <div className="grid border-t-gray border-t-2">
          <Tab />
        </div>
        <div className="my-20">
          <Discover />
        </div>
      </div>
    </div>
  );
}
