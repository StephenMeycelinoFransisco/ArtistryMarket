import React from "react";
import { PiRocketLaunchLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Additional from "../../Elements/Additional/Additional";
import Hightlight from "../../Elements/Card/Hightlight";
import Button from "../../Elements/Button/Button";

export default function Hero() {
  return (
    <div className="grid">
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-8 lg:justify-center lg:items-center">
        <div className="grid gap-5">
          <h1 className="font-semibold capitalize text-2xl leading-10 lg:text-4xl xl:text-[67px] xl:leading-none">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-base leading-6 xl:text-xl">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Link to="/register">
            <Button
              className={"bg-purple rounded-2xl py-3 lg:py-4 hidden lg:flex"}
              text="Get Started"
              icon={<PiRocketLaunchLight size={24} />}
            />
          </Link>
          <Additional
            n1="240k+"
            n2="100k+"
            n3="240k+"
            a
            trending="Top Sales"
            top="Auctions"
            info="Artist"
          />
        </div>
        <div className="grid gap-10 mt-7 lg:mt-0">
          <Hightlight />
          <div className="grid gap-10 lg:hidden">
            <Link to="/login">
              <Button
                className={"bg-purple rounded-2xl py-3 lg:py-4 lg:hidden flex"}
                text="Get Started"
                icon={<PiRocketLaunchLight size={24} />}
              />
            </Link>
            <Additional
              n1="240k+"
              n2="100k+"
              n3="240k+"
              trending="Top Sales"
              top="Auctions"
              info="Artist"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
