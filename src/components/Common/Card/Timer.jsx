import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(59);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  // 	setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
  // 	setMinutes((prevMinutes) => (prevMinutes + Math.floor((seconds + 1) / 60)) % 60);
  // 	setHours((prevHours) => prevHours + Math.floor((minutes + 1) / 60));
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [seconds, minutes]);

  return (
    <div className="bg-background-secondary/70 rounded-xl text-white">
      <div className="text-center mx-auto items-center justify-center p-[1.875rem]">
        <h1 className="font-spaceMono text-[1rem] leading-[110%] mb-4">
          Auction ends in:
        </h1>
        <div className="flex items-center space-x-4 justify-center">
          <div className="">
            <div className="text-[2.375rem] font-bold leading-[120%] capitalize">
              {hours}
            </div>
            <div className="text-[1rem] leading-[110%] font-spaceMono">
              Hours
            </div>
          </div>

		<caption className="text-[2.375rem] font-bold leading-[120%] capitalize">:</caption>

          <div className="">
            <div className="text-[2.375rem] font-bold leading-[120%] capitalize">
              {minutes}
            </div>
            <div className="text-[1rem] leading-[110%] font-spaceMono">
              Minutes
            </div>
          </div>

		  <caption className="text-[2.375rem] font-bold leading-[120%] capitalize">:</caption>


          <div className="">
            <div className="text-[2.375rem] font-bold leading-[120%] capitalize">
              {seconds}
            </div>
            <div className="text-[1rem] leading-[110%] font-spaceMono">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
