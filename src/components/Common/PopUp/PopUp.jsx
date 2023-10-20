import React from "react";

export default function PopUp({icon}) {
  return (
    <div className="bg-purple fixed rounded-full w-14 h-14 bottom-0 right-0 m-4 lg:w-20 lg:h-20 lg:m-6">
      <div className="items-center justify-center p-4 lg:p-7">
        <a href="">
          {icon}
        </a>
      </div>
    </div>
  );
}
