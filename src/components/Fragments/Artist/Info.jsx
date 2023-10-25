import React from "react";
import { BiCopy } from "react-icons/bi";
import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlinePlus,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FiTwitter } from "react-icons/fi";
import Button from "../../Elements/Button/Button";
import Additional from "../../Elements/Additional/Additional";

export default function Info() {
  return (
    <>
      <section className="grid gap-8">
        <div className="grid grid-cols-1 gap-8 xl:flex xl:justify-between xl:w-full xl:items-center">
          <h1 className="text-xl font-semibold capitalize leading-6 lg:text-2xl xl:text-5xl	">
            Animakid
          </h1>
          <div className="grid gap-8 lg:flex ">
            <Button className='bg-purple py-3 rounded-2xl' text="0xc0E3...B79C" icon={<BiCopy size={24} />} />
            <Button
            className='border border-purple py-3 rounded-2xl'
              text="Follow"
              icon={<AiOutlinePlus size={24} color="#A259FF" />}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:max-w-md">
          <Additional
            n1={"240k+"}
            n2={"100k+"}
            n3={"3000+"}
            trending={"Volume"}
            top={"NFTs Sold"}
            info={"Follower"}
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-base font-spaceMono leading-6 text-gray lg:text-base">
            Bio
          </h1>
          <p className="text-sm text-start leading-6 lg:text-base">
            The internet's friendliest designer kid.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-base font-spaceMono leading-6 text-gray lg:text-base">
            Links
          </h1>
          <div className="flex gap-2 text-gray">
            <AiOutlineGlobal size={24} />
            <RxDiscordLogo size={24} />
            <AiOutlineYoutube size={24} />
            <FiTwitter size={24} />
            <AiOutlineInstagram size={24} />
          </div>
        </div>
      </section>
    </>
  );
}
