import React from "react";
import Button from "../../Common/Button/Button";
import { PiCopyLight } from "react-icons/pi";
import {
  AiOutlinePlus,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import Additional from "../../Common/Additional/Additional";
import { FaConnectdevelop } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { FiTwitter } from "react-icons/fi";

export default function Info() {
  return (
    <section className="grid gap-8">
      <div className="grid gap-8 lg:flex lg:justify-between">
        <h1 className="font-semibold text-3xl capitalize leading-10">
          Animakid
        </h1>
        <div className="grid gap-5 md:flex">
          <Button
            colorRounded="bg-purple rounded-xl"
            style="p-4"
            text="0xc0E3...B79C"
            icon={<PiCopyLight />}
          />
          <Button
            colorRounded="bg-transparent rounded-xl"
            style="p-4"
            text="Follow"
            icon={<AiOutlinePlus color="#A259FF" />}
          />
        </div>
      </div>
      <Additional
        number1={"250k+"}
        number2={"50k+"}
        number3={"3000+"}
        caption1={"Volume"}
        caption2={"NFTs Sold"}
        caption3={"Followers"}
      />
      <div className="text-base leading-6 font-spaceMono grid gap-3">
        <h3 className="text-gray">Bio</h3>
        <caption className="text-white">
          The internet's friendliest designer kid.
        </caption>
      </div>
      <div className="text-base font-spaceMono leading-6 grid gap-3 text-gray">
        <h3 className="text-gray">Links</h3>
        <div className="flex gap-3">
          <FaConnectdevelop size={24} />
          <RxDiscordLogo size={24} />
          <AiOutlineYoutube size={24} />
          <FiTwitter size={24} />
          <AiOutlineInstagram size={24} />
        </div>
      </div>
    </section>
  );
}
