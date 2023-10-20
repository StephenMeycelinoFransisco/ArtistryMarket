import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function Clock() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Waktu akhir (gantilah dengan waktu yang sesuai)
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 1); // Contoh: Menambahkan 1 jam dari waktu saat ini

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = endTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="rounded-2xl bg-black-secondary">
      <div className="p-8 grid gap-8">
        <div className="grid gap-3">
          <caption className="font-spaceMono text-sm leading-3">
            Auction end in:
          </caption>
          <div className="grid grid-cols-3 gap-2">
            <div className="gridr">
              <div className="text-3xl font-spaceMono font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-xs font-spaceMono leading-3">Hours</div>
            </div>
            <div className="gridr">
              <div className="text-3xl font-spaceMono font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-xs font-spaceMono leading-3">Minutes</div>
            </div>
            <div className="gridr">
              <div className="text-3xl font-spaceMono font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-xs font-spaceMono leading-3">Seconds</div>
            </div>
          </div>
        </div>
        <div className="grid">
          <Button
            colorRounded="bg-purple rounded-2xl"
            text="Place Bid"
            style="p-3"
          />
        </div>
      </div>
    </section>
  );
}
