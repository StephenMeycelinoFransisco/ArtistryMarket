import React from "react";
import { AiOutlineShop, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FiTwitter } from "react-icons/fi";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Footer = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-8">
        <div className="grid gap-5 my-4 xl:mr-20">
          <div className="flex items-center gap-3">
            <AiOutlineShop color="#A259FF" size={24} />
            <h5 className="font-spaceMono font-semibold text-xl">Artisty</h5>
          </div>
          <p className="text-gray text-base text-start">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className="grid gap-4">
            <p className="text-gray text-base text-start">Join our community</p>
            <div className="flex gap-3 text-gray">
              <RxDiscordLogo size={24} />
              <AiOutlineYoutube size={24} />
              <AiOutlineInstagram size={24} />
              <FiTwitter size={24} />
            </div>
          </div>
        </div>
        <div className="grid gap-5 my-4">
          <h5 className="font-bold font-spaceMono text-xl">Explore</h5>
          <div className="text-gray text-base">
            <ul className="grid gap-5">
              <li>
                <a href="/marketplace">Marketplace</a>
              </li>
              <li>
                <a href="/rankings">Rankings</a>
              </li>
              <li>
                <a href="/wallet">Connect to wallet</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-5 my-4">
          <h5 className="text-xl font-bold font-spaceMono capitalize">
            Join Our Weekly Digest
          </h5>
          <p className="text-base text-gray text-start">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="grid gap-4 lg:flex lg:bg-white lg:rounded-full lg:justify-between lg:max-w-md xl:max-w-none xl:rounded-2xl">
            <Input
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              className="rounded-full w-full lg:rounded-2xl"
            />
            <Button
              className="bg-purple rounded-full h-14 lg:rounded-2xl xl:px-4 xl:py-8"
              text="Subscribe"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-5 my-4 xl:w-full">
        <hr className="text-gray" />
        <p className="text-base text-gray text-start">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </section>
  );
};

export default Footer;
