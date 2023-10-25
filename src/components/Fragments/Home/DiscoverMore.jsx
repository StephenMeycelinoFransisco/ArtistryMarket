import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import Title from "../../Elements/Title/Title";
import Nft from '../../Elements/Card/Nft'
import Button from "../../Elements/Button/Button";

export default function DiscoverMore() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Discover More NFTs"}
          desc={"Explore new trending NFTs"}
          button={
            <Button
              className="border-2 border-purple py-3 rounded-2xl mb-3 lg:mb-5"
              text="See All"
              icon={<AiOutlineEye size={24} color="#A259FF" />}
            />
          }
        />
        <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Nft className={"bg-black-secondary"} />
          <Nft className={"bg-black-secondary"} />
          <Nft className={"bg-black-secondary"} />
        </div>
        <div className="grid lg:hidden">
          <Button
            className="border-2 border-purple py-3 rounded-2xl mb-3 lg:mb-5"
            text="See All"
            icon={<AiOutlineEye size={24} color="#A259FF" />}
          />
        </div>
      </section>
    </>
  );
}
