import React from "react";
import Artist from "../../Common/Card/Artist";
import Title from "../../Common/Title/Title";
import Button from "../../Common/Button/Button";
import { PiRocketLaunchLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Creator() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Trending Collection"}
          desc={"Checkout our weekly updated trending collection."}
          button={
            <Button
              colorRounded="bg-transparent rounded-2xl mb-3 lg:mb-5"
              text="View Rankings"
              style="p-3"
              icon={<PiRocketLaunchLight size={24} color="#A259FF" />}
            />
          }
        />
        <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
          <Link to={'/artist'}>
            <Artist />
          </Link>
          <Artist />
          <Artist />
          <Artist />
        </div>
        <Button
          colorRounded="bg-transparent rounded-2xl mb-3 lg:mb-5 lg:hidden"
          text="View Rankings"
          style="p-3"
          icon={<PiRocketLaunchLight size={24} color="#A259FF" />}
        />
      </section>
    </>
  );
}
