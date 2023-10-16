import React from "react";

export default function Collection() {
  return (
    <div className="w-full rounded-2xl bg-black text-white">
      <img
        className="object-cover w-full rounded-2xl h-[19.688rem] xl:h-[20.625rem] "
        src="https://s3-alpha-sig.figma.com/img/8baa/8473/38fb05f3af173d2fe841ef434a65828b?Expires=1698019200&Signature=CB0h4Q9M2ESsuJHLbzF0B3jkiiJoysBq2Cb14xcpzu593lXXIYK~AHvokFhaSlicz3Tl5QQ7avo~twNr6nCrjCzX~el7HUGxosb3P9HBlC4qRZraj45f1NG7T4e6NtXPAmfAKZaEFRSwFjPMQznAJnwHqQO64f46M3aDKbzWr141Sz1J2XuZDGys~781rGSjkGa4iDKTrTJOvqF0n02J1nXwk0CQE5CUHTbaZqQuXoyD0qQuBRtesI5biL5FGYwTgNh~pwcVVbLWygRRMuCeF0q81wiIHuoSuhAT8aQtMPcuWC67sFZg5-60hudKcr1ocZJTFBXfxspC1Jn~AYlo3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="image"
      />
      <div className="grid grid-cols-3 gap-[0.938rem] my-[0.938rem]">
        <img
          className="rounded-2xl"
          src="https://s3-alpha-sig.figma.com/img/328f/b484/057512c67778021c44f11098e8d812d5?Expires=1698019200&Signature=l1nvsdjJykOn1W6G-2vv8ssPptwBT7pxJxSBIhTXdua8X2WaVViWgqxykeIdMnf1JiQSEGzB7IfKhePcTPkDVlxzDzuHUnHWk5FOkoFY4dwEtyhTdiafWC-Z1nXeVQ7TGqFTGV0sfUO~8UUWBtOGZ2aBGs6s~BBxz5BLAldvr7O2mpIMzP7-joDhqetuHEgMuHougozpRCUlNLaLrPz75WB-c0Ox963JiRnec629MRpKJD6l4tVqUSMSBrIqwKlfdFUHcdinBJiWuqbPoUAgc-B5jMC8SGbbWlRaJ8w027kL-oTuOKoW11qogfQHvmtkX~7rUIE19znsYgMh5CioYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />

        <img
          className="rounded-2xl"
          src="https://s3-alpha-sig.figma.com/img/fe80/fb00/9d833af99068c64c9f229700bbd8eb69?Expires=1698019200&Signature=YNj6uKOHEJSj9k~7sYZIdbZNWnt3UbTh6oXUp7jJZZYGA45767azF~6Wf0r3PpKVykYijMiMdP0tOMT~FcTmU16gZuqVNJBXQ-1ZhC5oL8PFbxmho5vrB-TwEaWeb7Gca5bt65Jeg0vDnAgIMazbksAWxecB79m7FPXa9OLN3vAUuqsnGpyMQEaNM1BH-eMxnVP0kbAqYm0dt~LEKVUIEimd8cTLq57lLqy2WO-jOoCHc7iLW3MpTEOf-EfrAmiJ7rHdJF5gE711kEbFOtw0q-iSweWoo4fV3eGqJbUYmTzognaEg1Z5lAATsm1jwBSokUNpLeJ7HOfbG963J9hHvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />

        <div className="text-center items-center justify-center bg-purple flex rounded-2xl">
          <h1 className="font-spaceMono text-[1rem] font-bold leading-[140%]">
            1025+
          </h1>
        </div>
      </div>
      <div className="grid gap-[0.625rem]">
        <h1 className="text-[1.375rem] font-semibold leading-[140%] capitalize font-workSans">
          Happy Robots
        </h1>
        <div className="flex gap-[0.75rem] items-center">
          <img
            className="w-[1.rem] h-[1.5rem] rounded-full"
            src="https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1698019200&Signature=FiHnAJZKY73GFAzDYsVl~FATzhmFQLMHo-ELmemvii~55KiZlqsEjDMUF-0ulyHlylrybHS1F-bWtMHx7kbo6J9XHetIO9tfRk1JGCqqs8ILHtS3a6jpfafeYOG~wlK0FYFOLUJXMZAqxhrREk67n-lvvL1WydSPQdfXDseI94d45JDoxJME9wNbQ2SmIGF~WPPUrmWXdeMviX8YdrihWKv17VHHRSJMlrcGIKPZDLSud~mZLctuwJ8iBh9N~tMVd1BBJRkU5N0RolNEPuxeTs3us5xBkA33VJKRqsLvVfgCfMrTqw90IwNJQmeIItLPtT50bUA24IFdBSpu4dd1gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <caption className="font-workSans text-[1rem] leading-[140%]">
            @Robotica
          </caption>
        </div>
      </div>
    </div>
  );
}
