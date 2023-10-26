import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Title from "../../Elements/Title/Title";
import Button from "../../Elements/Button/Button";
import Nft from "../../Elements/Card/Nft";
import { Link } from "react-router-dom";

export default function MoreNft() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Discover More NFTs"}
          desc={"Explore new trending NFTs"}
          button={
            <Link to={'/artist/:id'}>
              <Button
              className="bg-transparent py-3 rounded-2xl mb-3 lg:mb-5 border-2 border-purple"
              text="Go To Artist Page"
              icon={<HiArrowRight size={24} color="#A259FF" />}
            />
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Nft className={"bg-black-secondary"} />
          <Nft className={"bg-black-secondary"} />
          <Nft className={"bg-black-secondary"} />
        </div>
        <div className="grid lg:hidden">
          <Button
            className="bg-transparent py-3 rounded-2xl mb-3 lg:mb-5"
            text="Go To Artist Page"
            icon={<HiArrowRight size={24} color="#A259FF" />}
          />
        </div>
      </section>
    </>
  );
}
