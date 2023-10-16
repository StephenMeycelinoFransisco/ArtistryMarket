import React from "react";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import { PiRocketLaunchLight, PiUser } from "react-icons/pi";

export default function InputGroup() {
  return (
    <>
      <div className="grid md:flex">
        <div className="grid gap-4 md:flex md:w-full md:rounded md:bg-white  ">
          <Input
            type="text"
            // value=""
            name="username"
            placeholder="username"
            rounded="rounded-lg"
            icon={<PiUser />}
          />
          <Button
            colorRounded="bg-purple rounded"
            text="Button"
            style="py-3"
            icon={<PiRocketLaunchLight />}
            size="text-[1.375rem]"
          />
        </div>
          
      </div>
    </>
  );
}
