import React from "react";

export default function Nft({ className }) {
  return (
    <section className={`${className} rounded-2xl hover:scale-95 duration-200`}>
      <img
        className="rounded-t-2xl"
        src="https://s3-alpha-sig.figma.com/img/1227/9881/7c4f8936a4246f91674d47fe40c14d63?Expires=1698624000&Signature=m25tADyzFcivq0pRl6emnv5VspZwwwaiOfdRZbzS07XqJh1OWWvLMlHfBIqo5dEKczjio83Nr3K6IDM8t1wYdBZRA5UjPqWgAiaANDix3AMG8F3Suh622BQJF0zhZw1AtJtoW-vWgQiq6I2EDFP0qO09nioxoOuOf9CZjuTQpI3ARWuUDIVJjQMWBGyGoD4YK7ViHelqs9c1dl~QRcQXrnAPsyWtM49ds~STtt5PZ2F6kPb85D7JnsnqffdSp~vMZBk8Io6h5fnkUaQxj1nw40n8YfL8FmUWZh0mCKEIVEHM-jHSLC~uRP~9L4-MPTnUFiFBodk4i-QFsykEZHO3-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <div className="grid p-5 gap-1">
        <h1 className="text-xl font-semibold capitalize leading-6">
          Distant Galaxy
        </h1>
        <div className="flex gap-3 items-center">
          <img
            className="w-6 h-6 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/6f2d/fe69/21b6620c5678c5b0215637f93ef42f6f?Expires=1698624000&Signature=qFFXi7bAz0pRsrTBzkWaitAMVP2pvhB5PYEqMKdhtcyB4Za3PSA8JyB3EK-lVaeWXxufZx~OwoLhZXuyMvwocb8m5kuSr6RYtdg3JlHPL2mJIU1fSXr4jdkIR1pBG04ucZ1hah6i56zu5P4W-jlY3zPhDHaYj2Uw2CzjGYkSMVD1vty~3AfjGUwQe46N8JmIz-IewVwVXP3HOUMLJDF0yrdUQzG4BLnB8~TMPNld3iiNHUCYJewVYdDwAy4GFBH6Skj0vi7M7mWKRf-gm2c88TCX6qKHzlvaSg7xreSB98cSCf4RzAhnXwlEjU2ARKQYagMXk8P9XoVRDMUtRH3hCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <caption className="font-spaceMono text-base leading-6">
            MoonDancer
          </caption>
        </div>
        <div className="flex justify-between mt-6">
          <div className="grid gap-2 text-start">
            <h1 className="text-gray text-sm leading-3 font-spaceMono">
              Price
            </h1>
            <p className="text-sm leading-3 font-spaceMono">1.63 ETH</p>
          </div>
          <div className="grid gap-2 text-end">	
            <h1 className="text-gray text-sm leading-3 font-spaceMono">
              Highest Bid
            </h1>
            <p className="text-sm leading-3 font-spaceMono">0.63 ETH</p>
          </div>
        </div>
      </div>
    </section>
  );
}
