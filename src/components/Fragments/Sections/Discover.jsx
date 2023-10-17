import React from "react";
import Title from "../Title/Title";
import Button from "../../Common/Button/Button";
import { AiOutlineEye } from 'react-icons/ai' 
import NFT from '../../Common/Card/NFT'

export default function Discover() {
  return (
    <section className="grid gap-5">
      <Title
        title={"Discover More NFTs"}
        desc={"Explore new trending NFTs"}
        button={
          <Button
            colorRounded="bg-purple rounded-xl"
            style="p-4"
            text="Get Started"
            icon={<AiOutlineEye />}
          />
        }
      />
	  <div className="grid mt-5 gap-5 md:grid-cols-2 lg:grid-cols-3">
		<NFT />
		<NFT />
		<NFT />
	  </div>
    </section>
  );
}
