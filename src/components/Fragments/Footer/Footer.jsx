import React from "react";
import {
  AiOutlineShop,
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FiTwitter } from "react-icons/fi";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";

export default function Footer() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="grid gap-5 my-4">
          <div className="flex items-center gap-3">
            <AiOutlineShop color="#A259FF" size={24} />
            <h1 className="font-spaceMono font-semibold text-xl">Artisty</h1>
          </div>
          <p className="text-gray text-base">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className="grid gap-4">
            <p className="text-gray text-base">Join our community</p>
            <div className="flex gap-3 text-gray">
              <RxDiscordLogo size={24} />
              <AiOutlineYoutube size={24} />
              <AiOutlineInstagram size={24} />
              <FiTwitter size={24} />
            </div>
          </div>
        </div>
        <div className="grid gap-5 my-4">
          <h1 className="font-bold font-spaceMono text-xl">Explore</h1>
          <div className="grid gap-5 text-gray text-base">
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Rankings</a>
            </li>
            <li>
              <a href="#">Connect to wallet</a>
            </li>
          </div>
        </div>
        <div className="grid gap-5 my-4">
          <h1 className="text-xl font-bold font-spaceMono capitalize">
            Join Our Weekly Digest
          </h1>
          <p className="text-base text-gray">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="grid gap-4 lg:flex lg:bg-white lg:rounded-full lg:justify-between lg:mr-48 lg:gap-1 xl:mr-0 xl:rounded-2xl">
            <Input
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              rounded="rounded-full lg:rounded-2xl lg:w-full"
            />
            <Button
              colorRounded="bg-purple rounded-full lg:rounded-2xl xl:w-28"
              style="p-3"
              text="Subscribe"
              icon={<AiOutlineMail size={24} />}
            />
          </div>
        </div>
        <div className="grid gap-5 my-4">
          <hr className="text-gray" />
          <p className="text-base text-gray">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </section>
  );
}
