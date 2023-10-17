import React from "react";

export default function Artist() {
  return (
    <div className="relative rounded-lg bg-black-secondary p-[1.25rem] lg:w-[15rem] text-white mx-auto">
      <div className="flex gap-[1.25rem] lg:grid lg:justify-center lg:text-center">
        <div className="relative">
          <span className="absolute -top-2 -left-1 bg-black rounded-full text-gray text-xs lg:text-base font-bold p-2">
            1
          </span>
          <img
            className="w-[3.75rem] rounded-full lg:mx-auto lg:w-[7.5rem]"
            src="https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1698019200&Signature=FiHnAJZKY73GFAzDYsVl~FATzhmFQLMHo-ELmemvii~55KiZlqsEjDMUF-0ulyHlylrybHS1F-bWtMHx7kbo6J9XHetIO9tfRk1JGCqqs8ILHtS3a6jpfafeYOG~wlK0FYFOLUJXMZAqxhrREk67n-lvvL1WydSPQdfXDseI94d45JDoxJME9wNbQ2SmIGF~WPPUrmWXdeMviX8YdrihWKv17VHHRSJMlrcGIKPZDLSud~mZLctuwJ8iBh9N~tMVd1BBJRkU5N0RolNEPuxeTs3us5xBkA33VJKRqsLvVfgCfMrTqw90IwNJQmeIItLPtT50bUA24IFdBSpu4dd1gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="grid items-center">
          <h1 className="m-0 p-0 lg:mb-2">Dish Studio</h1>
          <div className="flex gap-1 items-center">
            <p className="text-gray text-[1rem]">Total Sales: </p>
            <caption className="text-[1rem] font-spaceMono leading-[140%]">
              34.53 ETH
            </caption>
          </div>
        </div>
      </div>
    </div>
  );
}
