import React from "react";
import Avatar from "../../../Elements/Avatar";

export default function Profile({cover, profile}) {
  return (
    <>
      <section className="relative">
        <img
          className="w-full h-[250px] object-cover object-center lg:h-[280px] xl:h-[320px]"
          alt={"cover"}
          src={cover}
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-40 xl:left-52">
          <Avatar
            src={profile }
            alt={"profile"}
            className={"w-24 h-24 lg:h-32 lg:w-32 rounded"}
          />
        </div>
      </section>
    </>
  );
}
