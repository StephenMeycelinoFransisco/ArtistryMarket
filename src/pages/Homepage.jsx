import React from "react";
import Hero from "../components/Fragments/Home/Hero";
import Trending from "../components/Fragments/Home/Trending";
import Creator from "../components/Fragments/Home/Creator";
import BrowseCategory from "../components/Fragments/Home/BrowseCategory";
import DiscoverMore from "../components/Fragments/Home/DiscoverMore";
import HowItWork from "../components/Fragments/Home/HowItWork";
import Subscribe from "../components/Elements/Card/Subscribe";

export default function Homepage() {
  return (
    <section className="grid gap-10 my-10 max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
      <Hero />
      <Trending />
      <Creator />
      <BrowseCategory />
      <DiscoverMore />
      <HowItWork />
      <Subscribe />
    </section>
  );
}
