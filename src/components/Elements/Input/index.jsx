import React from "react";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import { PiRocketLaunchLight, PiUser } from "react-icons/pi";

export default function InputGroup() {
  return (
    <>
      <div className="grid md:flex">
        <div className="grid gap-4 md:justify-between md:flex md:w-full md:rounded-xl md:bg-white">
          <Input
            type="text"
            // value=""
            name="username"
            placeholder="username"
            rounded="rounded-3xl md:rounded-xl w-full"
            icon={<PiUser />}
          />
          <Button
            colorRounded="bg-purple rounded-3xl md:rounded-xl"
            text="Button"
            style="py-3 px-1"
            icon={<PiRocketLaunchLight />}
            size="text-[1.375rem]"
          />
        </div>
          
      </div>
    </>
  );
}
