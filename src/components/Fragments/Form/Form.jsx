import React from "react";
import Input from "../../Common/Input/Input";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Button from "../../Common/Button/Button";

export default function Form() {
  return (
    <>
      <section className="grid gap-8 ">
        <div className="grid gap-5 ">
          <h1 className="text-4xl font-semibold leading-6 capitalize xl:text-[51px] xl:leading-[110%]">Create Account</h1>
          <caption className="text-base leading-6 xl:text-xl xl:leading-9">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </caption>
        </div>
        <div className="grid gap-4 text-black-secondary xl:mr-28">
          <Input
            placeholder="Username"
            type="text"
            name="username"
            rounded="rounded-full"
            icon={<BiUser size={24} />}
          />
          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            rounded="rounded-full"
            icon={<AiOutlineMail size={24} />}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            rounded="rounded-full"
            icon={<AiOutlineLock size={24} />}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            rounded="rounded-full"
            icon={<AiOutlineLock size={24} />}
          />
        </div>
        <div className="grid xl:mr-28">
          <Button
            colorRounded="bg-purple rounded-full"
            text="Create Account"
            style="p-3"
          />
        </div>
      </section>
    </>
  );
}
