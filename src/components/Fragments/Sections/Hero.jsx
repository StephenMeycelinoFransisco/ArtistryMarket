import React from "react";
import Hightlight from "../../Common/Card/Hightlight";
import Button from "../../Common/Button/Button";
import { PiRocketLaunchLight } from "react-icons/pi";
import AdditionalInfo from "../../Common/AdditionalInfo";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-8 lg:justify-center lg:items-center">
        <div className="grid gap-5">
          <h1 className="font-semibold capitalize text-2xl leading-10 lg:text-4xl xl:text-[67px] xl:leading-none">
            Discover digital art & Collect NFTs
          </h1>
          <caption className="text-base leading-6 xl:text-xl">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </caption>
          <div className="">
            <Link to={"/login"}>
              <Button
                colorRounded="bg-purple rounded-2xl mb-3 lg:mb-5"
                text="Get Started"
                style="p-3"
                icon={<PiRocketLaunchLight size={24} />}
              />
            </Link>
            <AdditionalInfo
              n1={"240k+"}
              n2={"100k+"}
              n3={"240k+"}
              trending={"Top Sales"}
              top={"Auctions"}
              info={"Artist"}
            />
          </div>
        </div>
        <div className="grid gap-10 mt-7 lg:mt-0">
          <Hightlight />
          <div className="grid gap-10 lg:hidden">
            <Link to={"/login"}>
              <Button
                colorRounded="bg-purple rounded-2xl"
                text="Get Started"
                style="p-3"
                icon={<PiRocketLaunchLight size={24} />}
              />
            </Link>
            <AdditionalInfo
              n1={"240k+"}
              n2={"100k+"}
              n3={"240k+"}
              trending={"Top Sales"}
              top={"Auctions"}
              info={"Artist"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
