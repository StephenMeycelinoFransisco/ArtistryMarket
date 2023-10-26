import React from "react";

export default function Item() {
  return (
    <section className="grid bg-black-secondary rounded-2xl">
      <div className="flex gap-3 px-5 py-3 items-center lg:px-8 lg:justify-between xl:py-4">
        <div className="flex gap-3 xl:items-center">
          <span className="text-gray font-spaceMono leading-[110%] xl:rounded-full xl:bg-black xl:items-center xl:p-2.5 xl:w-8 xl:h-8">
            1
          </span>
          <img
            className="rounded-full w-6 h-6 xl:w-14 xl:h-14"
            src="https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1698624000&Signature=B9QpGxaojZUWtHk5pfj31hEUmOEM3awGPCAE64pa-7tfBkVpVTKl2~xb~ODNTNRpNBetv1uHPobYlEP6~G9IrsbqDTHXQB8N~DGhSiN8IeiAjU-IfWKpvuYVH9vG4QC2EfSteEo6F8QEa0MNGHuOQuWtc0qIDT8Buk8r74~3IWR~cuJxknRSU2HGiJmaYRQ4PYApL5BkRwmHTfT7CtIcl2i0oPin~8gvNrCC29NLRIqSYlVb8poUOHl3mf0Ht4cj4AdQa3WjR0eU2Sl4YUshWs5eaAzpIlog9Y~RP9LtdPDLXoyoWfgb9-da9zrSJRaerA326LZYlZ3nLcPJ28NT4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <h1 className="text-base leading-6 xl:text-2xl xl:font-semibold xl:capitalize">
            Dish Studio
          </h1>
        </div>
        <div className="flex gap-3 items-center	lg:gap-6 xl:gap-14">
          <p className="hidden lg:flex font-spaceMono text-base leading-6 text-green xl:text-base">
            +1.41%
          </p>
          <p className="hidden font-spaceMono text-sm leading-[110%] xl:text-base xl:flex">
            602
          </p>
          <p className="font-spaceMono text-sm leading-[110%] xl:text-base">
            12.4 ETH
          </p>
        </div>
      </div>
    </section>
  );
}
