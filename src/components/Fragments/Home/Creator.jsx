import React from "react";
import { PiRocketLaunchLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Title from "../../Elements/Title/Title";
import Button from "../../Elements/Button/Button";
import Artist from "../../Elements/Card/Artist";

export default function Creator() {
  return (
    <>
      <section className="grid gap-10">
        <Title
          title={"Trending Collection"}
          desc={"Checkout our weekly updated trending collection."}
          button={
            <Button
              className={"border-2 border-purple py-3 rounded-2xl hidden  lg:flex"}
              text="View Rankings"
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
          className={"border-2 border-purple py-3 rounded-2xl flex lg:hidden"}
          text="View Rankings"
          icon={<PiRocketLaunchLight size={24} color="#A259FF" />}
        />
      </section>
    </>
  );
}
