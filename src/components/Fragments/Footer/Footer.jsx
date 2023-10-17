import React from "react";
import {
  AiOutlineShop,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FiTwitter } from "react-icons/fi";
import InputGroup from '../../Elements/Input/index'

export default function Footer() {
  return (
    <section className="bg-background-secondary">
      <div className="grid max-w-xs px-2 mx-auto font-workSans md:max-w-2xl xl:max-w-6xl gap-[1.875rem]">
        <div className="grid xl:grid-cols-3 justify-center gap-[1.875rem]">
          <div className="grid gap-[1.25rem] xl:mr-[84px]">
            <div className="flex items-center gap-3">
              <AiOutlineShop color="#A259FF" size={34} />
              <h1 className="text-[1.25rem] font-semibold">Artisty</h1>
            </div>
            <div className="">
              <caption className="text-[1rem] font-workSans leading-[140%] text-label-text">
                NFT marketplace UI created with Anima for Figma.
              </caption>
            </div>
            <div className="">
              <caption className="text-[1rem] font-workSans leading-[140%] text-label-text mb-4">
                Join our community
              </caption>
              <div className="flex gap-3 text-label-text">
                <RxDiscordLogo size={28} />
                <AiOutlineYoutube size={28} />
                <FiTwitter size={28} />
                <AiOutlineInstagram size={28} />
              </div>
            </div>
          </div>
          <div className="grid gap-[1.25rem]">
            <h1 className="text-[1.375rem] font-bold leading-[160%] capitalize">
              Explore
            </h1>
            <div className="grid gap-[1.25rem]">
              <caption className="font-workSans text-[1rem] leading-[140%] text-label-text">
                Marketplace
              </caption>
              <caption className="font-workSans text-[1rem] leading-[140%] text-label-text">
                Rankings
              </caption>
              <caption className="font-workSans text-[1rem] leading-[140%] text-label-text">
                Connect to wallet
              </caption>
            </div>
          </div>
          <div className="grid gap-[1.25rem]">
            <h1 className="text-[1.375rem] font-bold leading-[160%] capitalize">
              Join Our Weekly Digest
            </h1>
            <div className="grid gap-[1.25rem]">
              <caption className="font-workSans text-[1rem] leading-[140%] text-label-text">
                Get exclusive promotions & updates straight to your inbox.
              </caption>
            </div>
            <InputGroup />
          </div>
        </div>
        <div className="grid gap-[1.25rem] mt-16 md:mt-0">
          <hr className="text-label-text" />
          <caption className="text-[0.75rem] font-workSans leading-[110%] text-label-text">
            Ⓒ NFT Market. Use this template freely.
          </caption>
        </div>
      </div>
    </section>
  );
}
