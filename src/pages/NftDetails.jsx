import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import Clock from "../components/Fragments/NFT/Clock";
import MoreNft from "../components/Fragments/NFT/MoreNft";

export default function NftDetails() {
  return (
    <>
      <section className="">
        <img
          className="w-full object-cover object-center h-[320px]"
          src="https://s3-alpha-sig.figma.com/img/85c0/8b92/890ad3bb78d42a6892b85871b782b103?Expires=1698624000&Signature=W6GMFMAUgQDiBDS8wytrNg58eHz-gbaMsfFm4b0Y8U3BHlwiwJOGpMmmMXlYwfpRfZihVcljhAdxl2Q66GwMw4T2v9kt3r9uiH2fQkFhI0ZeUiRYEP8BGvRxn1XkpyGbS3Z7b0AGE3VMuqER1rqUU7QPyGo3fx3B-DSPAse3oNEbyCHdq-z8z~v1bNSFBv1hCgJ9JjAyaFhkgwlL-num0-DKiMO-iPD2ylaqFMz1Ng84MxAWZCQYPhp4IsxxlGlmEOUUIYaitGRA00hjiKRgCpYGBGD5Zo3Ia7taXJCHZ9x4Xgh8RGal3LpzhPkJGsepDTWasles0qhhBXseo-Z5nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="grid max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
          <div className="grid my-10 lg:grid-cols-2 lg:gap-8 xl:gap-36">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold leading-6 lg:text-2xl lg:leading-10 lg:capitalize xl:text-5xl xl:leading-[110%]">
                  The Orbitians
                </h1>
                <caption className="text-base leading-6 xl:text-2xl xl:capitalize">
                  Minted on Sep 30, 2022
                </caption>
              </div>
              <div className="grid lg:hidden">
                <Clock />
              </div>
              <div className="grid gap-2">
                <h1 className="font-spaceMono text-base leading-6 text-gray xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">Created By</h1>
                <div className="flex items-center gap-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1698624000&Signature=B9QpGxaojZUWtHk5pfj31hEUmOEM3awGPCAE64pa-7tfBkVpVTKl2~xb~ODNTNRpNBetv1uHPobYlEP6~G9IrsbqDTHXQB8N~DGhSiN8IeiAjU-IfWKpvuYVH9vG4QC2EfSteEo6F8QEa0MNGHuOQuWtc0qIDT8Buk8r74~3IWR~cuJxknRSU2HGiJmaYRQ4PYApL5BkRwmHTfT7CtIcl2i0oPin~8gvNrCC29NLRIqSYlVb8poUOHl3mf0Ht4cj4AdQa3WjR0eU2Sl4YUshWs5eaAzpIlog9Y~RP9LtdPDLXoyoWfgb9-da9zrSJRaerA326LZYlZ3nLcPJ28NT4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <caption className="text-base leading-6">Dish Studio</caption>
                </div>
              </div>
              <div className="grid gap-2">
                <h1 className="text-gray font-spaceMono text-base leading-6  xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">Description</h1>
                <caption className="text-base leading-6 xl:text-2xl">
                  The Orbitians is a collection of 10,000 unique NFTs on the
                  Ethereum blockchain, There are all sorts of beings in the NFT
                  Universe. The most advanced and friendly of the bunch are
                  Orbitians. They live in a metal space machines, high up in
                  the sky and only have one foot on Earth. These Orbitians are a
                  peaceful race, but they have been at war with a group of
                  invaders for many generations. The invaders are called
                  Upside-Downs, because of their inverted bodies that live on
                  the ground, yet do not know any other way to be. Upside-Downs
                  believe that they will be able to win this war if they could
                  only get an eye into Orbitian territory, so they've taken to
                  make human beings their target.
                </caption>
              </div>
              <div className="grid gap-5">
                <h1 className="text-gray font-spaceMono text-base leading-6  xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">Details</h1>
                <div className="flex items-center gap-3">
                  <AiOutlineGlobal size={24} />
                  <caption className="text-base leading-6 xl:text-2xl">View on Etherscan</caption>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlineGlobal size={24} />
                  <caption className="text-base leading-6 xl:text-2xl">View on Etherscan</caption>
                </div>
              </div>
              <div className="grid gap-5">
                <h1 className="text-gray font-spaceMono text-base leading-6  xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">Tags</h1>
                <div className="grid gap-5 mr-20 text-center xl:flex xl:gap-5 xl:mr-0">
                  <h1 className="bg-black-secondary p-5 text-base leading-6 font-semibold rounded-full uppercase">animation</h1>
                  <h1 className="bg-black-secondary p-5 text-base leading-6 font-semibold rounded-full uppercase">illustration</h1>
                  <h1 className="bg-black-secondary p-5 text-base leading-6 font-semibold rounded-full uppercase">moon</h1>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid lg:h-fit">
                <Clock />
              </div>
          </div>
          <div className="grid my-10">
            <MoreNft />
          </div>
        </div>
      </section>
    </>
  );
}
