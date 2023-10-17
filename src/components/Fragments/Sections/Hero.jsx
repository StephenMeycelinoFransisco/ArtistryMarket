import React from "react";
import Highlight from "../../Common/Card/Highlight";
import Button from "../../Common/Button/Button";
import Additional from "../../Common/Additional/Additional";

import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-7 my-10 md:my-20">
        <div className="grid">
          <h1 className="mb-2 text-3xl font-semibold leading-10 capitalize md:text-4xl md:mb-5 lg:text-6xl lg:leading-[110%] xl:text-7xl">
            Discover digital art & Collect NFTs
          </h1>
          <caption className="text-base leading-5 lg:text-base lg:leading-9 xl:text-xl ">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </caption>
          <div className="gap-5 mt-5 hidden md:grid ">
            <div className="flex">
              <Button
                colorRounded="bg-purple rounded-xl"
                style="p-4"
                text="Get Started"
                icon={<AiOutlineMail />}
              />
            </div>
            <Additional />
          </div>
        </div>
        <div className="grid gap-10 mt-10 md:mt-0 ">
          <Highlight />
          <div className="grid gap-10 md:hidden">
            <Button
              colorRounded="bg-purple rounded-xl md:hidden"
              style="p-4"
              text="Get Started"
              icon={<AiOutlineMail />}
            />
            <Additional />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
