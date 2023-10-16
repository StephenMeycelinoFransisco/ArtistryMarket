import React from "react";

export default function Highlight() {
  return (
    <div className="w-full rounded-2xl bg-black-secondary">
      <img
        className="object-cover w-full rounded-t-2xl h-[12.875rem] md:h-[13.813rem] xl:h-[25.063rem]"
        src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1698019200&Signature=bY9aqeO0KzcVCmAgeBXk3j~dYottBB1BWN6lpk8Mbm7XX6YcxnEevhZAFD-HhE3bIqtaC1T9G0BAzaL-Z6I3LEVsluJti8HrwEa6KRl003gSHM4BO6twjLdVVtrxzXWCMQ7R5dQ5Llr~R5TxrA8CL~H8ZPRGjcDNw54rK6i~l-9izFisf4laW9u9UIQqKOJki~7ZP2rn79xjzxXTnM4u6yiPErigo4UkOvv8jjnMNX-NzY9on4ngNBWHtyAJ5kFgpInWyS8SvwcSYzUnj53X9HZ5L4LZ2LvXOZcFDuR4errkKFfnnPMCBOCTGnr0oaS3WONkDcgUMzuD1x-kX7MpDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="image"
      />
      <div className="p-[1.25rem] text-white">
        <h4 className="font-workSans text-[1.375rem] font-bold capitalize mb-[0.625rem] ">
          Space Walking
        </h4>
        <caption className="flex items-center gap-x-[0.75rem]">
          <div className="w-[1.5rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1698019200&Signature=pmd-RUOpLuzQSAWLWVtwEw9I-vXsG~TQXRK7H4SpkbAYzjf37TwEUycY~J2TTG6~CN-zq~VRS6ABt5oJrBhOaAk6qs2FpHUw~V0B02VbwO7elg2U49tN-xcSAInfL5vEcX0pThM7BPEBFkgtIYoGUCH5ZkV8JiCCNcY7y-SQhVUijrHbZQvvXG3fKufH4TAu32oGVk7Y6zJEnCGDzMZKCMofVZH4jL2Qx9yU97m3hj7uyMp8i5QWJ58uQNtN9qlCM3v6PhTWmmlGkOwWC~Dg~HQyX7yYC9Vnmmfv7k-3Yc7my3H~LDfJdufUjKxBFn~sxdMtTjrsYeqdBzO9km8-qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Animakid"
              className="rounded-full"
            />
          </div>
          <div className="">
            <p className="font-workSans text-[1rem] leading-[140%]">Animakid</p>
          </div>
        </caption>
      </div>
    </div>
  );
}
