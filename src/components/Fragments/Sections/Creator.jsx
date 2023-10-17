import React from "react";
import Title from "../Title/Title";
import Button from "../../Common/Button/Button";
import { PiRocketLaunchLight } from "react-icons/pi";
import Artist from "../../Common/Card/Artist";

export default function Creator() {
  return (
    <section className="grid">
      <Title
	  	title={"Top Creators"}
		desc={"Checkout Top Rated Creators on the NFT Marketplace"}
        button={
          <Button
            colorRounded="bg-purple rounded-2xl"
            style="px-5 lg:px-8"
            text="View Ranking"
            icon={<PiRocketLaunchLight />}
          />
        }
      />
      <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10">
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </div>
      <div className="grid md:hidden">
        <Button
          colorRounded="bg-trasparent rounded-2xl"
          style="px-5 lg:px-8 py-4"
          text="View Ranking"
          icon={<PiRocketLaunchLight color="#A259FF"/>}
        />
      </div>
    </section>
  );
}
