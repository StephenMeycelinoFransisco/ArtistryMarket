import React from "react";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export default function Category() {
  return (
    <section className="relative bg-black-secondary rounded-xl overflow-hidden">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <HiOutlinePaintBrush size={64} />
      </div>
      <img
        className="rounded-xl blur-sm"
        src="https://s3-alpha-sig.figma.com/img/17c7/4acd/5b5ba867000004883ee7944815a839d4?Expires=1698624000&Signature=Igk-RW-w2NFzgEVIV9MiKoIteuAnvOulKOinLUCHUKhmYIEEAICPkNq3nHPq4wwQrO3Nmy6mxVEQmGZC2RRTaeRmI8fzOIQR5MT8J8hFuwcLA~G2pWBa91r-lGXrPVhAR19TIujakNv5JP-KA5C3mXQWSvUruq6ZF7LGA2xImaRtz7vwjTU9J-Sumo-vZyJUHWsXr1hnGLFiU1AB6a3Lwwf0t~ustHRvK2NNnt5lFL2bFVFjWrZyv89l5zo34E683G5rRfsFd7gFqIjJFMsZxo96hCjWJVRfRNcFwL7dGbka4TnIeUro1jP9wr3PjJbaEk48vO4o6y1rcqbl~e1J4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <div className="p-5">
        <h1 className="font-semibold text-base leading-6 xl:text-2xl">Art</h1>
      </div>
    </section>
  );
}
