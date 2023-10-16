import React from "react";
import InputGroup from '../../Elements/Input/index'

export default function Subscribe() {
  return (
    <section className="">
      <div className="bg-black rounded-xl md:bg-black-secondary ">
        <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 md:px-[1.875rem] md:py-[2.5rem] md:items-center xl:p-[3.75rem]">
          <img
            className="w-full h-[15.938rem] object-center object-cover rounded-xl mx-auto md:w-[18.75rem] md:h-[17.5rem] xl:h-[19.375rem] xl:w-[26.563rem]"
            src="https://s3-alpha-sig.figma.com/img/9f1a/3ec9/5772f9d568933f15578613e18c5adb73?Expires=1698624000&Signature=MTYHz5Fx~flT5~dJoJlfqN5kjW3QRzlD9Cp2w8omszxItTf7-4NKjdraGMPMvGaKI4o8DTN23iPVNP~eexzt-IQOrqUPC4NeHPlffUFEQtCEDJrjNEd-Q7k6o-Kbdsj1GA1nnWFV3LVREozmROVO4~BWVW4jA4E8PR0DMYKmBqYzgVw8BObgHU4UCnN8Ny1H72-9LrBadLmQBAhxUp5K1JNs99vKmHuKxNvhd8wsir~CN9P0YsNLz1fM1EzDkWqZjcrft0wcdefpRHODFv8ScywWHXDk6~uNsAMu0GcIR6DrvecMvbaTEynBbWySt9z1YHr~i~~O9VH9wlVGV24BUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="grid gap-[2.5rem]">
            <div className="grid mb-2 text-white">
              <h1 className="font-workSans font-semibold leading-[140%] capitalize text-[1.75rem] mb-2 xl:text-[2.375rem] xl:leading-[120%]">
                Join our weekly digest
              </h1>
              <caption className="font-workSans text-[1rem] leading-[140%] xl:text-[1.375rem] xl:leading-[160%]">
                Get exclusive promotions & updates straight to your inbox.
              </caption>
            </div>
            <InputGroup />
          </div>
        </div>
      </div>
    </section>
  );
}
