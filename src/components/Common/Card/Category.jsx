import React from "react";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export default function Category() {
  return (
    <div className="overflow-hidden bg-black-secondary rounded-lg max-w-[8.875rem] lg:max-w-[15rem] text-white mx-auto">
      <div className="relative">
        <img
          className="w-[142px] h-[142px] object-cover object-center mx-auto blur-sm lg:w-[15rem] lg:h-[15rem]"
          src="https://s3-alpha-sig.figma.com/img/17c7/4acd/5b5ba867000004883ee7944815a839d4?Expires=1698019200&Signature=aQIVLm9G7IZBA5P35KliV2i9hCLtQFyabuKd8ikrOeyilXaoq3HOBwrob9v43MfRiaIavvP74zgnsnW1MeTkmksrscLnae2RXaIT5CCA8vQW0hoUMs9Ze6lOzuWLg1buik4vkOu85EjuROXWPpLgtg5GtnTCy3RZ0UkVxb0xP9iDUADuFpqIO5lH1QMPC6XG4jJrE-bzy2Q1N~erIGYK14-F3kqfSOPAkksMN8i9mRs2x0nLc36h9O9P3vOvsg1dIUGrYkyuOUEtpjSircI9LZp3OSmZtnf5bnR~JX0pA-5RaSYnMJkOxc2~SZsCIgpZi1xd9R81VxmYj5Ec-JbPUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Card"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-3lg">
            <HiOutlinePaintBrush size={54} />
          </span>
        </div>
      </div>
      <div className="p-[1.25rem] mb-2">
        <h1 className="font-semibold leading-[140%] text-[1rem] font-workSans lg:text-[1.375rem] ">
          Category
        </h1>
      </div>
    </div>
  );
}
