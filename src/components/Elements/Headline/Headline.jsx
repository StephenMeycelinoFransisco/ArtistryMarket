import React from "react";
import Input from "../Input/Input";
import { AiOutlineSearch } from "react-icons/ai";

export default function Headline() {
  return (
    <section className="grid gap-8 my-10">
      <div className="grid gap-3">
        <h1 className="text-2xl font-semibold capitalize leading-6 lg:text-3xl xl:text-5xl xl:leading-[110%]">
          Browse Marketplace
        </h1>
        <caption className="text-base leading-6 xl:text-xl">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </caption>
      </div>
    <div className="grid">
        <Input
          icon={<AiOutlineSearch size={24} color="#2B2B2B"/>}
          placeholder="Search your favourite NFTs"
          type="text"
          name="search"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
