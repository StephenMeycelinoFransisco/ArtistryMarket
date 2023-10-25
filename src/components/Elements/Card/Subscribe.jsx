import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Subscribe() {
  return (
    <>
      <section className="grid lg:bg-black-secondary rounded-xl ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:px-8 lg:py-10 xl:p-16">
          <img
            className="object-cover object-center rounded-2xl w-full h-[255px] mx-auto lg:h-full xl:h-[310px]"
            src="https://s3-alpha-sig.figma.com/img/9f1a/3ec9/5772f9d568933f15578613e18c5adb73?Expires=1698624000&Signature=MTYHz5Fx~flT5~dJoJlfqN5kjW3QRzlD9Cp2w8omszxItTf7-4NKjdraGMPMvGaKI4o8DTN23iPVNP~eexzt-IQOrqUPC4NeHPlffUFEQtCEDJrjNEd-Q7k6o-Kbdsj1GA1nnWFV3LVREozmROVO4~BWVW4jA4E8PR0DMYKmBqYzgVw8BObgHU4UCnN8Ny1H72-9LrBadLmQBAhxUp5K1JNs99vKmHuKxNvhd8wsir~CN9P0YsNLz1fM1EzDkWqZjcrft0wcdefpRHODFv8ScywWHXDk6~uNsAMu0GcIR6DrvecMvbaTEynBbWySt9z1YHr~i~~O9VH9wlVGV24BUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="grid gap-8">
            <div className="grid gap-3 mb-2">
              <h1 className="font-semibold text-3xl capitalize leading-8 xl:text-5xl">
                Join Our Weekly Digest
              </h1>
              <caption className="text-base leading-6 xl:text-2xl">
                Get exclusive promotions & updates straight to your inbox.
              </caption>
            </div>
            <div className="grid gap-4 lg:rounded-full xl:flex xl:bg-white xl:justify-between xl:rounded-3xl xl:h-[60px] ">
              <Input
                placeholder="Enter Your Email Address"
                type="email"
                name="email"
                className="rounded-full lg:w-full xl:rounded-3xl"
              />
              <Button
                className="bg-purple rounded-full py-3 xl:rounded-3xl xl:w-36"
                text="Subscribe"
                icon={<AiOutlineMail size={24} />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
