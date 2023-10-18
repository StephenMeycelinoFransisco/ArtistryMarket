import React from "react";
import Title from "../../Common/Title/Title";
import Button from "../../Common/Button/Button";
import { PiRocketLaunchLight } from "react-icons/pi";
import Nft from "../../Common/Card/Nft";

export default function DiscoverMore() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Discover More NFTs"}
          desc={"Explore new trending NFTs"}
          button={
            <Button
              colorRounded="bg-transparent rounded-2xl mb-3 lg:mb-5"
              text="See All"
              style="p-3"
              icon={<PiRocketLaunchLight size={24} color="#A259FF" />}
            />
          }
        />
		<div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
			<Nft className={"bg-black-secondary"}/>
			<Nft className={"bg-black-secondary"}/>
			<Nft className={"bg-black-secondary"}/>
		</div>
      </section>
    </>
  );
}
